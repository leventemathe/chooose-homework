import { ChakraProps, Flex, Text } from '@chakra-ui/react';

type EmissionProps = ChakraProps & {
  emission: number;
};

export function Emission({ emission, ...props }: EmissionProps) {
  const emissionNumber = emission;
  const emissionUnit = 'kg';
  const emissionText = `${emissionNumber} ${emissionUnit} `;

  return (
    <Flex
      justifyContent="space-between"
      bgColor="emission"
      p={3}
      borderRadius="xl"
      boxShadow="card"
      {...props}
    >
      <Text>Emission offset:</Text>
      <Text>
        <span>{emissionText}</span>
        <span>
          CO<sub>2</sub>e
        </span>
      </Text>
    </Flex>
  );
}
