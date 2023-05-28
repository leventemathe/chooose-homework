import { ChakraProps, HStack, Text } from '@chakra-ui/react';

import { StarIcon } from './StarIcon';

// get a value between 0 and 1 for each star
function getStars(max: number, rating: number) {
  const fullStarCount = Math.floor(rating);
  const partialStarValue = rating % Math.floor(rating);
  const remainingCount = max - fullStarCount - (partialStarValue > 0 ? 1 : 0);

  return Array(fullStarCount)
    .fill(1)
    .concat(partialStarValue > 0 ? partialStarValue : [])
    .concat(Array(remainingCount).fill(0));
}

type StarRatingProps = ChakraProps & {
  max: number;
  rating: number;
};

export function StarRating({ max, rating, ...props }: StarRatingProps) {
  if (rating > max || rating < 0) {
    return null;
  }

  const formattedRating = rating.toFixed(1);
  const stars = getStars(max, Number(formattedRating));

  return (
    <HStack {...props}>
      <HStack>
        {stars.map((star, index) => (
          // index is fine, we're nor changing the amount of stars
          // eslint-disable-next-line react/no-array-index-key
          <StarIcon key={index} star={star} />
        ))}
      </HStack>
      <Text fontWeight={600}>{formattedRating}</Text>
    </HStack>
  );
}
