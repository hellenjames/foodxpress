import AppIntroSlider from 'react-native-app-intro-slider';
import {slide} from './src/Slides';
import {View, Text, Image} from 'react-native';
// import {} from 'nativewind';
import {useState} from 'react';
// import {createStackNavigator} from '@react-navigation/stack';
import Homescreen from './src/screens/Homescreen';
import Loginscreen from './src/screens/Loginscreen';

import Signupscreen from './src/screens/Signupscreen';

import Cartscreen from './src/screens/Cartscreen';

import Singlefood from './src/screens/Singlefood';
import State from './src/Context/State';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Categoryscreen from './src/screens/Categoryscreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Menuscreen from './src/screens/Menuscreen';
import Profilescreen from './src/screens/Profilescreen';
import Icon from 'react-native-vector-icons/FontAwesome';

function App() {
  // const Stack = createStackNavigator();
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const buttonLabel = label => {
    return <Text className="text-[#FF7356]">{label}</Text>;
  };
  const [showStack, setShowStack] = useState(false);
  function StackNavigation() {
    return (
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={Homescreen} />
        <Stack.Screen name="login" component={Loginscreen} />
        <Stack.Screen name="signup" component={Signupscreen} />
        <Stack.Screen name="cart" component={Cartscreen} />
        <Stack.Screen name="singlefood" component={Singlefood} />
        <Stack.Screen name="menu" component={Menuscreen} />
        <Stack.Screen name="category" component={Categoryscreen} />
        <Stack.Screen name="profile" component={Profilescreen} />
      </Stack.Navigator>
    );
  }

  function Tabnavigation() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="hometab"
          component={StackNavigation}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: () => <Icon name="home" color="#FF7356" size={30}
            />,
            headerShown:false
          }}
        />
        <Tab.Screen
          name="menutab"
          component={Menuscreen}
          options={{
            tabBarLabel: 'Menu',
            tabBarIcon: () => <Icon name="bars" color="" size={30} />,
          }}
        />
        <Tab.Screen
          name="carttab"
          component={Cartscreen}
          options={{
            tabBarLabel: 'Cart',
            tabBarIcon: () => <Icon name="shopping-cart" color="" size={30} />,
          }}
        />
        <Tab.Screen
          name="profiletab"
          component={Profilescreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: () => <Icon name="user-o" color="" size={30} />,
          }}
        />
      </Tab.Navigator>
    );
  }
  if (!showStack) {
    return (
      <AppIntroSlider
        data={slide}
        renderItem={({item}) => {
          return (
            <View className="mx-5">
              <Image source={item.image} />
              <View className="">
                <Text className="text-3xl text-center font-bold text-black   ">
                  {item.title}
                </Text>
              </View>
              <Text className="text-center p-4">{item.description}</Text>
            </View>
          );
        }}
        showSkipButton
        renderNextButton={() => buttonLabel('Next')}
        renderSkipButton={() => buttonLabel('Skip')}
        renderDoneButton={() => buttonLabel('Done')}
        onSkip={() => setShowStack(true)}
        onDone={() => setShowStack(true)}
      />
    );
  }

  return (
    <State>
    <NavigationContainer>
      <Tabnavigation />
    </NavigationContainer>
    </State>
  );
}

export default App;
