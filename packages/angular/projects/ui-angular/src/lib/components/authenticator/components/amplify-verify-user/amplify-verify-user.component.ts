import {
  Component,
  HostBinding,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { getActorState, SignInState, translate } from '@aws-amplify/ui';
import { AuthenticatorService } from '../../../../services/authenticator.service';
import { getAttributeMap } from '../../../../common';
import { nanoid } from 'nanoid';
@Component({
  selector: 'amplify-verify-user',
  templateUrl: './amplify-verify-user.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AmplifyVerifyUserComponent implements OnInit {
  @HostBinding('attr.data-amplify-authenticator-verifyuser') dataAttr = '';
  @Input() public headerText = translate(
    'Account recovery requires verified contact information'
  );

  public unverifiedAttributes = {};
  public labelId = nanoid(12);

  // translated texts
  public skipText = translate('Skip');
  public verifyText = translate('Verify');

  constructor(public authenticator: AuthenticatorService) {}

  ngOnInit(): void {
    const actorState: SignInState = getActorState(this.authenticator.authState);
    this.unverifiedAttributes = actorState.context.unverifiedAttributes;
  }

  public get context() {
    const { updateForm, skipVerification, submitForm, error } =
      this.authenticator;
    return { updateForm, skipVerification, submitForm, error };
  }

  getLabelForAttr(authAttr: string): string {
    const attributeMap = getAttributeMap();
    const label = attributeMap[authAttr]?.label;
    return translate<string>(label);
  }

  onInput(event: Event) {
    event.preventDefault();
    const { name, value } = <HTMLInputElement>event.target;
    this.authenticator.updateForm({ name, value });
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    this.authenticator.submitForm();
  }
}