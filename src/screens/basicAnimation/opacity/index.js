import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import styles from './style';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const SIZE = 100;

const OpacityAnimation = () => {
  const progress = useSharedValue(0);

  const reanimatedStyle = useAnimatedStyle(() => {
    return {opacity: progress.value};
  }, []);

  useEffect(() => {
    progress.value = withTiming(1, {duration: 2000});
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          {
            height: SIZE,
            width: SIZE,
            backgroundColor: 'blue',
          },
          reanimatedStyle,
        ]}
      />
    </View>
  );
};

export default OpacityAnimation;
