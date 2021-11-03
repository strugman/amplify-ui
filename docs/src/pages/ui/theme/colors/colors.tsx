import { defaultTheme, Heading, Text, Flex, View } from '@aws-amplify/ui-react';

const { tokens } = defaultTheme;
const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'teal',
  'blue',
  'purple',
  'pink',
  'neutral',
];

export const Colors = () => {
  return (
    <>
      {colors.map((colorName) => {
        const shades = Object.keys(tokens.colors[colorName]);
        return (
          <section>
            <Heading level={4}>{colorName}</Heading>
            {shades.map((shade) => {
              const token = tokens.colors[colorName][shade];
              return (
                <div
                  style={{
                    display: 'inline-block',
                    width: '100px',
                    height: '100px',
                    backgroundColor: token,
                  }}
                />
              );
            })}
          </section>
        );
      })}

      <Heading level={3}>Font colors</Heading>
      {Object.keys(tokens.colors.font).map((fontColor) => {
        const token = tokens.colors.font[fontColor];
        console.log(token);
        return (
          <Flex direction="row" padding={`${tokens.space.medium} 0`}>
            <Text
              color={`${token}`}
              fontWeight="bold"
              fontSize={`${tokens.fontSizes.xxl}`}
            >
              Aa
            </Text>
            <Text>{fontColor}</Text>
            <Text>{token.name}</Text>
            <Text>{token.value}</Text>
          </Flex>
        );
      })}

      <Heading level={3}>Background colors</Heading>
      {Object.keys(tokens.colors.background).map((backgroundColor) => {
        const token = tokens.colors.background[backgroundColor];
        console.log(token);
        return (
          <Flex direction="row" padding={`${tokens.space.medium} 0`}>
            <View
              backgroundColor={`${token}`}
              width="2rem"
              height="2rem"
            ></View>
            <Text>{backgroundColor}</Text>
            <Text>{token.name}</Text>
            <Text>{token.value}</Text>
          </Flex>
        );
      })}

      <Heading level={3}>Background colors</Heading>
      {Object.keys(tokens.colors.background).map((backgroundColor) => {
        const bgToken = tokens.colors.background[backgroundColor];
        const fontToken = tokens.colors.font[backgroundColor];
        const borderToken = tokens.colors.border[backgroundColor];

        return (
          <Flex direction="row" padding={`${tokens.space.medium} 0`}>
            <View
              backgroundColor={`${bgToken}`}
              fontWeight="bold"
              color={`${fontToken}`}
              fontSize={`${tokens.fontSizes.xxl}`}
              padding={`${tokens.space.medium}`}
              border={`${tokens.borderWidths.small} solid ${borderToken}`}
            >
              Aa
            </View>
            <Text>{backgroundColor}</Text>
          </Flex>
        );
      })}
    </>
  );
};
