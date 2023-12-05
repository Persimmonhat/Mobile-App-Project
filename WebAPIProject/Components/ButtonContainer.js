// State management

const [fontSizeModifier, setFontSizeModifier] = React.useState(Settings.fontSizeModifier);

// changeFontSize(-0.1)
function changeFontSize(sizeModifier) {
  // TODO: validate the font size (e.g. not negative)

  // Update the global settings value
  Settings.fontSizeModifier += sizeModifier;

  // Update the state variable to re-render the screen (update the UI)
  setFontSizeModifier(Settings.fontSizeModifier);
}
import React from 'react';
import { View } from 'react-native';
import Styles from '../Styles/MainStyle';

export function ButtonContainer({ children, direction }) {
  const containerStyle = direction === 'column' ? Styles.buttonContainerVertical : direction === 'row-reverse' ? Styles.buttonContainerRowReverse : Styles.buttonContainerHorizontal;

  return <View style={containerStyle}>{children}</View>;
}

export function DataContainer({ children, direction }) {
  const containerStyle = direction === 'column' ? Styles.dataContainerVertical : direction === 'row-reverse' ? Styles.dataContainerRowReverse : Styles.dataContainerHorizontal;

  return <View style={containerStyle}>{children}</View>;


}
