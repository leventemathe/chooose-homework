import { StarIcon } from '@chakra-ui/icons';
import { ChakraProps, HStack, Text } from '@chakra-ui/react';

type StarRatingProps = ChakraProps & {
  max?: number;
  rating: number;
};

export function StarRating({ max = 5, rating, ...props }: StarRatingProps) {
  const fullStarCount = Math.floor(rating);
  const partialStarValue = max % rating;

  const stars = Array(fullStarCount).fill(1).concat(partialStarValue);

  return (
    <HStack {...props}>
      <HStack>
        {stars.map((_, index) => (
          // index is fine, we're nor changing the amount of stars
          // eslint-disable-next-line react/no-array-index-key
          <StarIcon key={index} color="star" />
        ))}
      </HStack>
      <Text fontWeight={600}>{rating}</Text>
    </HStack>
  );
}
