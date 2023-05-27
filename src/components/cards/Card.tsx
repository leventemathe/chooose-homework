import { Box } from '@chakra-ui/react';

type CardProps = {
  card: string;
};

export function Card({ card }: CardProps) {
  return <Box>{card}</Box>;
}
