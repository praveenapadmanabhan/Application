// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type IconProps = {
  name: React.ComponentProps<typeof Ionicons>['name'];
  size?: number;
  style?: StyleProp<ViewStyle>;
};

export function TabBarIcon({ style, name, size = 28, ...rest }: IconProps) {
  return <Ionicons name={name} size={size} style={[{ marginBottom: -3 }, style]} {...rest} />;
}
