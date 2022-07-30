import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import styles from './style';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  useAnimatedGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-reanimated';
import {PanGestureHandler} from 'react-native-gesture-handler';

const SIZE = 100;

// type ContextType = {
//   startX: number,
//   startY: number,
// };

const PanGestureAnimation = () => {
  const xTranslation = useSharedValue(0);
  const yTranslation = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: xTranslation.value,
        },
        {
          translateY: yTranslation.value,
        },
      ],
    };
  });

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      ctx.startX = xTranslation.value;
      ctx.startY = yTranslation.value;
    },
    onActive: (event, ctx) => {
      xTranslation.value = ctx.startX + event.translationX;
      yTranslation.value = ctx.startY + event.translationY;
    },
    onEnd: event => {
      let distance = Math.sqrt(
        xTranslation.value ** 2 + yTranslation.value ** 2,
      );

      if (distance < SIZE) {
        xTranslation.value = withSpring(0);
        yTranslation.value = withSpring(0);
      }
    },
  });

  return (
    <View style={styles.container}>
      <View
        style={{
          height: SIZE * 2,
          width: SIZE * 2,
          borderRadius: SIZE * 2,
          borderWidth: 2,
          borderColor: 'blue',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View
            style={[
              {
                height: SIZE / 2,
                width: SIZE / 2,
                backgroundColor: 'blue',
                borderRadius: 10,
              },
              animatedStyle,
            ]}
          />
        </PanGestureHandler>
      </View>
    </View>
  );
};

export default PanGestureAnimation;
