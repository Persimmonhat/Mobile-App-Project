import { MyButton } from '../Components/MyButton';i
import { Image, Pressable } from 'react-native';
import { imageIndex } from '../Constants/Images.js';
import * as React from 'react';
import { Image, Text, View, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import {imageIndex} from '../Constants/Images';

const [isLogoColor, setIsLogoColor] = React.useState(true);

function toggleLogo() {
  setIsLogoColor(!isLogoColor);
}

function showViewPeople() {
  props.navigation.replace('Root', { screen: 'People' });
}

function showHelp() {
  props.navigation.replace('Root', { screen: 'Help' });
}

// Import helper code
import Settings from '../constants/Settings';

// Import styling and components
import Styles from "../Styles/MainStyle";
import { MyButton } from '../Components/MyButton';
import { TextH1, TextParagraph } from "../components/StyledText";

<View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
  <Text style={{ color: 'lightgray', fontSize: 14 }}>Developed by</Text>
  <Text style={{ fontSize: 18 }}>Josh Forrest</Text>
</View>

export default function HomeScreen(props) {

  const [isLogoColor, setIsLogoColor] = React.useState(true);
  function toggleLogo() {
    setIsLogoColor(!isLogoColor);
  }

  function showHelp() {
    props.navigation.replace('Root', {screen: 'Help'});
  }

  function showViewPeople() {
    props.navigation.replace('Root', {screen: 'People'});
  }

  // function test() {
  //   if(isLogoColor)
  //   {return 'logo'}
  // else
  //   {return 'mono'}

  //   return isLogoColor ? 'logo' : 'mono';
  // }

  return (
    <SafeAreaView style={Styles.safeAreaView}>
      <ScrollView style={Styles.container} contentContainerStyle={Styles.contentContainer}>
        
      <View style={Styles.homeLogoContainer}>
        <Pressable onPress={toggleLogo}>
          <Image source={imageIndex[isLogoColor ?'logo':'mono']} style={Styles.homeLogo}/>
        </Pressable>
      </View>
       
        
        <View Style={Styles.homeHeadingContainer}>
        <Text style={Styles.homeHeading}>ROI HR Management System</Text>
        </View>
        <View style={Styles.homeButtonContainer}>
          <MyButton
            text="Show People"
            type="major"      // default*|major|minor
            size="large"      // small|medium*|large
            buttonStyle={Styles.homeButton}
            onPress={showViewPeople}
          />
          <MyButton
            text="Show Help"
            type="default"      // default*|major|minor
            size="large"      // small|medium*|large
            buttonStyle={Styles.homeButton}
            onPress={showHelp}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

<SafeAreaView style={Styles.safeAreaView}>
  <ScrollView style={Styles.container} contentContainerStyle={Styles.contentContainer}>
    <View style={Styles.homeLogoContainer}>
      <Pressable onPress={toggleLogo}>
        <Image source={imageIndex[isLogoColor ? 'logo' : 'mono']} style={Styles.homeLogo} />
      </Pressable>
    </View>

    {/* <MyImage index="logo" /> */}

    <View style={Styles.homeHeadingContainer}>
      <Text style={Styles.homeHeading}>ROI HR Management System</Text>
    </View>

    <View style={Styles.homeButtonContainer}>
      <MyButton
        text="View people"
        type="major" // default*|major|minor
        size="large" // small|medium*|large
        onPress={showViewPeople}
        buttonStyle={Styles.homeButton}
      />
      <MyButton
        text="Show help screen"
        type="default" // default*|major|minor
        size="large" // small|medium*|large
        onPress={showHelp}
        buttonStyle={Styles.homeButton}
      />
    </View>
  </ScrollView>
</SafeAreaView>

