import {SafeAreaView, StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function ScreenA({navigation}) {
  const onPressHandler = () => {
    navigation.navigate('Screen_B');
  };
  return (
    <View>
      <View style={styles.body}>
        <Text style={styles.text}>Screen A</Text>
      </View>
      <Pressable
        onPress={onPressHandler}
        style={({pressed}) => ({backgroundColor: pressed ? 'white' : 'green'})}>
        <Text style={styles.text}>Go to Screen B</Text>
      </Pressable>
    </View>
  );
}
function ScreenB({navigation}) {
  const onPressHandler = () => {
    navigation.goBack();
  };
  return (
    <View>
      <View style={styles.body}>
        <Text style={styles.text}>Screen B</Text>
      </View>
      <Pressable
        onPress={onPressHandler}
        style={({pressed}) => ({backgroundColor: pressed ? 'white' : 'green'})}>
        <Text style={styles.text}>Go to Screen A</Text>
      </Pressable>
    </View>
  );
}
const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Screen_A" component={ScreenA} />
        <Stack.Screen name="Screen_B" component={ScreenB} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigator;
const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
  },
});
