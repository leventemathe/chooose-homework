import { MyTheme } from 'theme';

import { ChakraProps, Icon } from '@chakra-ui/react';
import { useTheme } from '@emotion/react';

type StarIconProps = ChakraProps & {
  star: number;
};

export function StarIcon({ star, ...props }: StarIconProps) {
  const theme = useTheme() as MyTheme;
  const starColors = theme.colors.star;

  return (
    <Icon viewBox="0 0 24 24" {...props}>
      {star < 1 && (
        <clipPath id={`cut-off-star-${star}`}>
          <rect x="0" y="0" width={star * 24} height="24" />
        </clipPath>
      )}
      {star < 1 && (
        <path
          fill={starColors.background}
          strokeWidth="1.5"
          // eslint-disable-next-line max-len
          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
        />
      )}
      <path
        fill={starColors.fill}
        clipPath={`url(#cut-off-star-${star})`}
        strokeWidth="1.5"
        // eslint-disable-next-line max-len
        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
      />
    </Icon>
  );
}
