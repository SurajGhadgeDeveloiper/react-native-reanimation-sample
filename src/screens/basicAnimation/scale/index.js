import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import styles from './style';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
} from 'react-native-reanimated';

const SIZE = 100;

const ScaleAnimation = () => {
  const scale = useSharedValue(1);

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
      borderRadius: scale.value * 10,
    };
  }, []);

  useEffect(() => {
    scale.value = withTiming(2, {duration: 1000});
    //scale.value = withSpring(2);
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

export default ScaleAnimation;
