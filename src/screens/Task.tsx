import { ButtonIcon, View } from '@gluestack-ui/themed';
import React from 'react';
import WaterWave from '../components/WaterWave';
import Diamond from '../components/Diamond';
import { Button } from '@gluestack-ui/themed';
import { ArrowLeftIcon } from '@gluestack-ui/themed';
import { Text } from '@gluestack-ui/themed';

export default function Task() {
  return (
    <View style={{ flex: 1, position: 'relative' }}>
      <WaterWave />
      <View width={'100%'} height={'100%'} backgroundColor="transparent" justifyContent="space-between" alignItems="center" paddingTop={60}>
        <View display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" width="100%" paddingHorizontal={30}>
          <Button size="md" variant="solid" action="primary" isDisabled={false} isFocusVisible={false} rounded="$full" width={10}>
            <ButtonIcon as={ArrowLeftIcon} />
          </Button>
          <Text color="white" fontSize={20} fontWeight="bold">
            WHATW
          </Text>
          <Diamond />
        </View>
        <View backgroundColor="white" width={'100%'} height={600} borderTopLeftRadius="$2xl" borderTopRightRadius="$2xl" alignItems="center">
          <View
            borderWidth={10}
            width={300}
            height={80}
            borderRadius={20}
            borderColor="#12486B"
            marginTop={-40}
            backgroundColor="white"
            justifyContent="center"
            alignItems="center">
            <Text fontWeight="bold" fontSize={20}>
              18:00
            </Text>
          </View>
          <View marginTop={50}>
            <Text fontWeight="bold" fontSize={20}>What the meaning of romusa ?</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
