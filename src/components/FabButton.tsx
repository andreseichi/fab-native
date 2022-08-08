import React, { useRef, useState } from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

interface FabButtonProps {
  style: {
    bottom: number;
    right: number;
  };
}

export function FabButton({ style }: FabButtonProps) {
  const [isFabOpen, setIsFabOpen] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

  function toggleMenu() {
    console.log('toggle');
    const toValue = isFabOpen ? 0 : 1;

    Animated.spring(animation, {
      toValue,
      friction: 6,
      useNativeDriver: true,
    }).start();

    setIsFabOpen((prev) => !prev);
  }

  function handlePress() {
    console.log('clicked');
  }

  const rotation = {
    transform: [
      {
        rotate: animation.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '45deg'],
        }),
      },
    ],
  };

  const animationOne = {
    transform: [
      {
        scale: animation,
      },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -25],
        }),
      },
    ],
  };

  const animationTwo = {
    transform: [
      {
        scale: animation,
      },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -50],
        }),
      },
    ],
  };

  return (
    <View style={[styles.container, style]}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.absolute}>
          <Animated.View style={[styles.sideText, animationTwo]}>
            <Text style={styles.buttonText}>Editar</Text>
          </Animated.View>

          <Animated.View style={[styles.button, styles.submenu, animationTwo]}>
            <Text style={styles.buttonText}>Camera</Text>
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.absolute}>
          <Animated.View style={[styles.sideText, animationOne]}>
            <Text style={styles.buttonText}>Editar</Text>
          </Animated.View>

          <Animated.View style={[styles.button, styles.submenu, animationOne]}>
            <Text style={styles.buttonText}>Camera</Text>
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={toggleMenu}>
        <Animated.View style={[styles.button, styles.menu, rotation]}>
          <Text style={styles.buttonText}>+</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    position: 'absolute',
  },
  absolute: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    shadowRadius: 10,
    shadowColor: '#00213b',
    shadowOpacity: 0.3,
    shadowOffset: {
      height: 10,
      width: 10,
    },
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  sideText: {
    width: 80,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  menu: {
    backgroundColor: '#00213b',
  },
  submenu: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: '#00213b',
  },
});
