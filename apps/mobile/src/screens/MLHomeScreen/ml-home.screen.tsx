import React from 'react';

import { ScreenContainer, Text } from '../../components';
import { PublicScreenProps, Screens } from '../../routes';
import { tw } from '../../tailwind';

export function MLHomeScreen(props: PublicScreenProps<Screens.ML_HOME>) {
  return (
    <ScreenContainer style={tw`bg-[#fff]`}>
      <Text>ML Home. Do your stuff here</Text>
    </ScreenContainer>
  );
}
