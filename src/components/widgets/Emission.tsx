import { formatEmission } from 'textFormatters/formatEmission';

import { ChakraProps, Flex, Text } from '@chakra-ui/react';

type EmissionProps = ChakraProps & {
  emission: number;
};

export function Emission({ emission, ...props }: EmissionProps) {
  const emissionText = formatEmission(emission);

  return (
    <Flex
      justifyContent="space-between"
      bgColor="emission"
      p={3}
      borderRadius="xl"
      boxShadow="card"
      {...props}
    >
      <Text fontWeight={600} fontSize={14}>
        Emission offset:
      </Text>
      <Text fontWeight={600} fontSize={14}>
        <span>{`${emissionText} `}</span>
        <span>
          CO<sub>2</sub>e
        </span>
      </Text>
    </Flex>
  );
}
