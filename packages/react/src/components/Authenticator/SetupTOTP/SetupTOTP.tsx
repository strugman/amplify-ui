import { Auth, Logger } from 'aws-amplify';
import { getActorState, SignInState, translate } from '@aws-amplify/ui';

import QRCode from 'qrcode';
import { useEffect, useState } from 'react';

import { useAuthenticator } from '..';
import { Flex, Heading, Image } from '../../..';
import { isInputOrSelectElement, isInputElement } from '../../../helpers/utils';

import {
  ConfirmationCodeInput,
  ConfirmSignInFooter,
  RemoteErrorMessage,
} from '../shared';

const logger = new Logger('SetupTOTP-logger');

export const SetupTOTP = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [qrCode, setQrCode] = useState<string>();
  const { _state, submitForm, updateForm } = useAuthenticator();

  // `user` hasn't been set on the top-level state yet, so it's only available from the signIn actor
  const actorState = getActorState(_state) as SignInState;
  const { user } = actorState.context;

  const generateQRCode = async (user): Promise<void> => {
    try {
      const secretKey = await Auth.setupTOTP(user);
      const issuer = 'AWSCognito';
      const totpCode = `otpauth://totp/${issuer}:${user.username}?secret=${secretKey}&issuer=${issuer}`;
      const qrCodeImageSource = await QRCode.toDataURL(totpCode);

      setQrCode(qrCodeImageSource);
    } catch (error) {
      logger.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!user) return;

    generateQRCode(user);
  }, [user]);

  const handleChange = (event: React.FormEvent<HTMLFormElement>) => {
    if (isInputOrSelectElement(event.target)) {
      let { name, type, value } = event.target;
      if (
        isInputElement(event.target) &&
        type === 'checkbox' &&
        !event.target.checked
      ) {
        value = undefined;
      }

      updateForm({ name, value });
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitForm();
  };

  return (
    <form
      data-amplify-form=""
      data-amplify-authenticator-setup-totp=""
      method="post"
      onChange={handleChange}
      onSubmit={handleSubmit}
    >
      <Flex direction="column">
        <Heading level={3}>{translate('Setup TOTP')}</Heading>

        <Flex direction="column">
          {/* TODO: Add spinner here instead of loading text... */}
          {isLoading ? (
            <p>{translate('Loading')}&hellip;</p>
          ) : (
            <img
              data-amplify-qrcode
              src={qrCode}
              alt="qr code"
              width="228"
              height="228"
            />
          )}
          <ConfirmationCodeInput />
          <RemoteErrorMessage />
        </Flex>

        <ConfirmSignInFooter />
      </Flex>
    </form>
  );
};
