import { extendTheme } from '@chakra-ui/react';

const overrides = {
  borders: {
    card: '10px solid white',
  },
  colors: {
    emission: '#282928',
    star: {
      fill: '#fbd600',
      background: '#625b6f',
    },
  },
  shadows: {
    card: '0 1px 3px 1px rgba(0, 0, 0, 0.3)',
  },
};

export const theme = extendTheme(overrides);
export type MyTheme = typeof theme;
