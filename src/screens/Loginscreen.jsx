import {View, Image, TextInput, Text, TouchableOpacity} from 'react-native';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {app} from '../firebase';
import {useState} from 'react';




function Loginscreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth(app);
  const [error, setError] = useState({});

  function handleClick(e) {
    // const auth = getAuth();
    const errors = {}; 
    if (email === '') {
      errors.email = 'Please enter your Email Address';
    }
    if (password === '') {
      errors.password = 'Please enter your Password';
    }
      setError(errors);
      if (Object.keys(error).length === 0) {
        console.log(error);
    console.log(email)
    console.log(password)
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    console.log(user)
    if(user){

      navigation.navigate("Home");
    }

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}
  }



 

  
      return (
        <View className="mx-5">
          <View className="flex items-center">
            <Image source={require('../../images/logo.png')} />
          </View>
          <Text className="text-[#FF7356] ">{error.email && error.email}</Text>

          <TextInput
            placeholder="Email Address"
            className="border border-[#F0F0F0] outline-none p-3 rounded-full bg-gray-100 mt-4 text-[#78787A] "
            onChangeText={email => {
              setEmail(email);
            }}
  
          />
          <Text className="text-[#FF7356] ">
        {error.password && error.password}
      </Text>

          <TextInput
            placeholder="Password"
            className="border border-[#F0F0F0] outline-none p-3 rounded-full bg-gray-100 mt-4 text-[#78787A]"
            onChangeText={password => {
              setPassword(password)  
            }}
            
          />

          <Text className=" text-right p-3 mt-3">Forgot Password?</Text>
          <TouchableOpacity onPress={handleClick}>
            <Text className="text-2xl flex text-center text-white bg-[#FF7356] rounded-full p-3 mt-3">
              Log In
            </Text>
          </TouchableOpacity>
          <View className="flex-row first-line:items-center my-4 ">
            <View className="bg-gray-300 h-px flex-1 " />
            <Text className="px-3 text-gray-300">OR</Text>
            <View className="bg-gray-300 h-px flex-1" />
          </View>
          <Text className="border border-gray-100 outline-none p-3 font-semibold text-black text-2xl rounded-full">
            Continue With Google
          </Text>
          <Text className="text-[#78787A] text-center ">
            Don’t Have an Account?
            <Text className="text-[#FF7356]">Sign Up </Text>
          </Text>
        </View>
      );
    };
  

export default Loginscreen;
