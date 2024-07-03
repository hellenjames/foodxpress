import AppIntroSlider from 'react-native-app-intro-slider';
import {slide} from './src/Slides';
import {View, Text, Image} from 'react-native';
// import {} from 'nativewind';
// import {createStackNavigator} from '@react-navigation/stack';
import Homescreen from './src/screens/Homescreen';
import Loginscreen from './src/screens/Loginscreen';

import Signupscreen from './src/screens/Signupscreen';

import Cartscreen from './src/screens/Cartscreen';

import Singlefood from './src/screens/Singlefood';

import Allfood from './src/screens/Allfood';

import Categoryscreen from './src/screens/Categoryscreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

function App() {
  // const Stack = createStackNavigator();
  const Stack = createNativeStackNavigator();

  const buttonLabel = label => {
    return <Text className="text-[#FF7356]">{label}</Text>;
  };
  function StackNavigation() {
    return (
      <Stack.Navigator initialRouteName='signup'>
        <Stack.Screen name="home" component={Homescreen} />
        <Stack.Screen name="login" component={Loginscreen} />
        <Stack.Screen name="signup" component={Signupscreen} />
        <Stack.Screen name="cart" component={Cartscreen} />
        <Stack.Screen name="singlefood" component={Singlefood} />
        <Stack.Screen name="allfood" component={Allfood} />
        <Stack.Screen name="category" component={Categoryscreen} />
      </Stack.Navigator>
    );
  }
  return (
    <NavigationContainer>
     <StackNavigation/>
    </NavigationContainer>
    // <AppIntroSlider
    //   data={slide}
    //   renderItem={({item}) => {
    //     return (
    //       <View className="mx-5">
    //         <Image source={item.image} />
    //         <View className="">
    //           <Text className="text-3xl text-center font-bold text-black   ">
    //             {item.title}
    //           </Text>
    //         </View>
    //         <Text className="text-center p-4">{item.description}</Text>
    //       </View>
    //     );
    //   }}
    //   renderNextButton={() => buttonLabel('Next')}
    //   renderSkipButton={() => buttonLabel('Skip')}
    //   renderDoneButton={() => buttonLabel('Done')}
    //   showSkipButton
    // />
  );
}

export default App;
