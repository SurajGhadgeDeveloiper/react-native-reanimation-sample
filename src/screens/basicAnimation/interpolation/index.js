import {View, Text, Switch} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import Animated, {
  useAnimatedStyle,
  withTiming,
  useSharedValue,
  useDerivedValue,
  interpolateColor,
} from 'react-native-reanimated';

const COLORS = {
  dark: {
    backgroundColor: '#1E1E1E',
    circle: '#252525',
    text: '#F8F8F8',
  },
  light: {
    backgroundColor: '#F8F8F8',
    circle: '#FFF',
    text: '#1E1E1E',
  },
};

const SWITCH_TRACK_COLOR = {
  true: 'rgba(256,0,256,0.2)',
  false: 'rgba(0,0,0,0.1)',
};

type Theme = 'dark' | 'light';

const Interpolation = () => {
  const [theme, setTheme] = useState('light');

  const progress = useDerivedValue(() => {
    return theme === 'dark'
      ? withTiming(1, {duration: 2000})
      : withTiming(0, {duration: 2000});
  });

  const rStyleContainer = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [COLORS.light.backgroundColor, COLORS.dark.backgroundColor],
    );

    return {
      backgroundColor,
    };
  });

  const rStyleCircle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [COLORS.light.backgroundColor, COLORS.dark.backgroundColor],
    );

    return {
      backgroundColor,
    };
  });

  return (
    <Animated.View style={[styles.container, rStyleContainer]}>
      <Animated.View style={[styles.circle, rStyleCircle]}>
        <Switch
          trackColor={SWITCH_TRACK_COLOR}
          // thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          // ios_backgroundColor="#3e3e3e"
          onValueChange={toggle => {
            setTheme(toggle ? 'dark' : 'light');
          }}
          value={theme === 'dark'}
        />
      </Animated.View>
    </Animated.View>
  );
};

export default Interpolation;
