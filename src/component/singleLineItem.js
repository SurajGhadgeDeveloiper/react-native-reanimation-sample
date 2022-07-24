import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
} from 'react-native-reanimated';

const SingleLineItem = ({data, onPress, styles}) => {
  const progress = useSharedValue(0);

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      transform: [{scale: progress.value / 2}],
    };
  }, []);

  useEffect(() => {
    progress.value = withTiming(2, {duration: 1000});
  });

  return (
    <TouchableOpacity onPress={() => onPress()}>
      <Animated.View style={[styles.item, reanimatedStyle]}>
        <Text style={styles.title}>{data.item.label}</Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default SingleLineItem;
