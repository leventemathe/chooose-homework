import { addTrip } from 'dataSources/trips/addTrip';
import { removeTrip } from 'dataSources/trips/removeTrip';
import { ReactElement } from 'react';

import { AddIcon, DeleteIcon } from '@chakra-ui/icons';
import { ChakraProps, HStack, IconButton } from '@chakra-ui/react';

type ControlButtonProps = {
  icon: ReactElement;
  ariaLabel: string;
  onClick: () => Promise<void>;
};

function ControlButton({ icon, ariaLabel, onClick }: ControlButtonProps) {
  return (
    <IconButton
      aria-label={ariaLabel}
      icon={icon}
      bg="white"
      color="black"
      borderRadius="50%"
      boxShadow="0 2px 4px 0 rgba(0, 0, 0, 0.3)"
      onClick={onClick}
    />
  );
}

type TripControlsProps = ChakraProps & {
  lastTripId?: string;
};

export function TripControls({ lastTripId, ...props }: TripControlsProps) {
  return (
    <HStack {...props}>
      <ControlButton ariaLabel="Add" icon={<AddIcon />} onClick={addTrip} />
      <ControlButton
        ariaLabel="Remove"
        icon={<DeleteIcon />}
        onClick={() => removeTrip(lastTripId)}
      />
    </HStack>
  );
}
