import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import styles from './style';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  withRepeat,
} from 'react-native-reanimated';

const SIZE = 100;

const TransformAnimation = () => {
  const progress = useSharedValue(0);
  const scale = useSharedValue(1);

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      transform: [
        {scale: scale.value},
        {
          rotate: '${progress.value * 2 * Math.PI}rad',
        },
      ],
      borderRadius: progress.value * 2,
    };
  }, []);

  useEffect(() => {
    progress.value = withTiming(2, {duration: 1000});
    scale.value = withRepeat(withTiming(2, {duration: 1000}), 0, true);
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

export default TransformAnimation;
