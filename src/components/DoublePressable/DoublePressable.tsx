import {Pressable} from 'react-native';
import React, {ReactNode} from 'react';

interface IDoublePressableProps {
  onDoublePress?: () => void;
  children: ReactNode;
}

const DoublePressable = ({
  onDoublePress = () => {},
  children,
}: IDoublePressableProps) => {
  let lastTap = 0;
  const handleDoublePress = () => {
    const currentTap = Date.now();
    if (currentTap - lastTap < 300) {
      onDoublePress();
    }
    lastTap = currentTap;
  };
  return <Pressable onPress={handleDoublePress}>{children}</Pressable>;
};

export default DoublePressable;
