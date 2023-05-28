import { StarRating } from 'components/widgets/StarRating';

import { ChakraProps, HStack, Text } from '@chakra-ui/react';

type TripRatingProps = ChakraProps & {
  rating: number;
};

export function TripRating({ rating, ...props }: TripRatingProps) {
  return (
    <HStack bg="white" {...props} px="4" py="3" borderTopRadius="xl">
      <Text fontSize={12} fontWeight={600} color="gray.900" flexShrink={0}>
        Trip rating:
      </Text>
      <StarRating rating={rating} color="gray.900" />
    </HStack>
  );
}
