import { PropsWithChildren } from 'react';
import { MyTheme } from 'theme';

import { Center, ChakraProps, useTheme } from '@chakra-ui/react';

const useCardStyles = (image: string) => {
  const theme = useTheme() as MyTheme;
  const bgColor = theme.colors.blackAlpha[700];

  return {
    w: 400,
    h: 300,
    border: 'card',
    borderRadius: '3xl',
    bg: `linear-gradient(
      ${bgColor},
      ${bgColor}),
      url(${image})`,
    bgSize: 'cover',
    boxShadow: 'card',
  };
};

type CardProps = ChakraProps &
  PropsWithChildren<{
    image: string;
  }>;

export function Card({ children, image, ...props }: CardProps) {
  const cardStyles = useCardStyles(image);

  return (
    <Center sx={cardStyles} {...props}>
      {children}
    </Center>
  );
}
