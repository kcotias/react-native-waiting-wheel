import React, { useEffect } from "react";
import { View, Animated, Easing, StyleSheet } from "react-native";

const progress = 100;
const animateFromValue = 0;

const ProgressWheel = ({ duration, background, progressColor, size }) => {
  const animatedValue = new Animated.Value(0);

  useEffect(() => {
    animatedValue.setValue(animateFromValue);
    animateTo(progress, duration);
  }, []);

  interpolateAnimVal = (inputRange, outputRange) => {
    return animatedValue.interpolate({
      inputRange,
      outputRange,
      extrapolate: "clamp"
    });
  };

  interpolateRotation = isSecondHalf =>
    interpolateAnimVal(isSecondHalf ? [50, 100] : [0, 50], ["0deg", "180deg"]);

  interpolateRotationTwoOpacity = () => interpolateAnimVal([50, 50.01], [0, 1]);

  interpolateColorOpacity = () => interpolateAnimVal([0, 100], [0, 0]);

  animateTo = (toValue, duration, easing = Easing.easeInOut) => {
    Animated.timing(animatedValue, {
      toValue,
      duration,
      easing
    }).start();
  };

  resetAnimation = () => {
    animatedValue.setValue(progress);
  };

  renderHalfCircle = isSecondHalf => (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: isSecondHalf ? interpolateRotationTwoOpacity() : 1,
          transform: [{ rotate: interpolateRotation(isSecondHalf) }]
        }
      ]}
    >
      <View
        style={[
          styles.halfCircle,
          isSecondHalf && {
            bottom: 0,
            transform: [{ rotate: "180deg" }]
          }
        ]}
      >
        <View style={styles.circleArc} />
      </View>
    </Animated.View>
  );

  renderLoader = () => (
    <>
      <View style={styles.background} />
      {renderHalfCircle(false)}
      <View style={styles.halfCircle}>
        <View style={styles.cutOff} />
      </View>
      <View style={styles.secondHalfContainer}>{renderHalfCircle(true)}</View>
    </>
  );

  const styles = StyleSheet.create({
    container: {
      width: size,
      height: size
    },
    background: {
      width: size,
      height: size,
      borderRadius: size / 2,
      borderWidth: size / 2,
      borderColor: progressColor,
      position: "absolute",
      backgroundColor: progressColor
    },
    cutOff: {
      width: size,
      height: size,
      borderWidth: size / 2,
      borderColor: progressColor,
      borderRadius: size / 2
    },
    secondHalfContainer: {
      position: "absolute"
    },
    halfCircle: {
      width: size,
      height: size / 2,
      overflow: "hidden",
      position: "absolute"
    },
    circleArc: {
      width: size,
      height: size,
      borderColor: background,
      borderRadius: size / 2,
      borderWidth: size / 2
    },
    viewWithOpacity: {
      position: "absolute"
    }
  });

  return (
    <View>
      <View style={styles.container}>
        {renderLoader()}
        <Animated.View
          style={[
            styles.viewWithOpacity,
            { opacity: interpolateColorOpacity() }
          ]}
        >
          {renderLoader()}
        </Animated.View>
      </View>
    </View>
  );
};

ProgressWheel.defaultProps = {
  size: 35,
  duration: 3000,
  background: "#F3F3F3",
  progressColor: "#BBBBBB"
};

export default ProgressWheel;
