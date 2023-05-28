import { extendTheme } from '@chakra-ui/react';

const overrides = {
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  styles: {
    global: {
      'html, body': {
        bg: '#f6f7f9',
      },
    },
  },
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
    card: '0 2px 8px 0 rgba(0, 0, 0, 0.3)',
  },
};

export const theme = extendTheme(overrides);
export type MyTheme = typeof theme;
