import {View, Image, TextInput, Text, TouchableOpacity,ScrollView} from 'react-native';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import Icon from 'react-native-vector-icons/FontAwesome';
import {doc, setDoc, getFirestore} from 'firebase/firestore';

import {app} from '../firebase';
import {useState} from 'react';


// import {doc, setDoc} from 'firebase/firestore';

function Signupscreen({navigation}) {
  // const navigate = useNavigate();
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({});

  function handleClick(e) {
    const db = getFirestore(app);
    const auth = getAuth(app);

    const errors = {};
    if (firstname === '') {
      errors.firstname = 'Please enter your First Name';
    }
    if (lastname === '') {
      errors.lastname = 'Please enter your Last Name';
    }
    if (email === '') {
      errors.email = 'Please enter your Email Address';
    }
    if (password === '') {
      errors.password = 'Please enter your Password';
    }
    setError(errors);

    if (Object.keys(error).length === 0) {
      console.log(error);
      createUserWithEmailAndPassword(auth, email, password)
        .then(async userCredential => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          if (user) {
            await setDoc(doc(db, 'users', user.uid), {
              firstname: firstname,
              lastname: lastname,
              email: email,
              password: password,
            });
            navigation.navigate('login');
          }
          // ...
        })
        // console.log(user.uid)
        .catch(error => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          // ..
        });

      const errorCode = error.code;
      const errorMessage = error.message;
    }
  }

  return (
  <ScrollView>
    <View className="mx-5">
      <Image source={require('../../images/logo.png')} />
      <Text className="text-[#FF7356]">
        {error.firstname && error.firstname}
      </Text>
      <TextInput
        placeholder="First Name"
        className="border border-gray-100 outline-none p-3 rounded-full bg-gray-100 mt-4 text-gray-300"
        onChangeText={firstName => {
          setFirstName(firstName);
        }}
      />
      <Text className="text-[#FF7356] ">
        {error.lastname && error.lastname}
      </Text>

      <TextInput
        placeholder="Last Name"
        className="border border-gray-100 outline-none p-3 rounded-full bg-gray-100  text-gray-300"
        onChangeText={lastName => {
          setLastName(lastName);
        }}
      />
      <Text className="text-[#FF7356] ">{error.email && error.email}</Text>

      <TextInput
        placeholder="Email Address"
        className="border border-gray-100 outline-none p-3 rounded-full bg-gray-100  text-gray-300"
        onChangeText={email => {
          setEmail(email);
        }}
      />
      <Text className="text-[#FF7356] ">
        {error.password && error.password}
      </Text>

      <TextInput
        placeholder="Password"
        className="border border-gray-100 outline-none p-3 rounded-full bg-gray-100  text-gray-300"
        onChangeText={password => {
          setPassword(password);
        }}
      />

      <TouchableOpacity onPress={handleClick}>
        <Text className="text-2xl text-[#F0F0F0] flex text-center bg-[#FF7356] rounded-full p-3 ">
          Create Account
        </Text>
      </TouchableOpacity>
      <View className="flex-row first-line:items-center ">
        <View className="bg-gray-300 h-px flex-1 " />
        <Text className="px-3 text-gray-300">OR</Text>
        <View className="bg-gray-300 h-px flex-1" />
      </View>
      <View className="my-1">
        <TouchableOpacity className="flex-row  p-1   bg-[#F0F0F0] border-[#78787A]   rounded-full gap-2 ">
          <Image source={require('../../images/google.png')} />

          <Text className="font-semibold text-black text-2xl ">
            Sign UP With Google
          </Text>
        </TouchableOpacity>
      </View>
      <Text className="text-[#78787A] text-center   mt-5">
        Already Have an Account?
        <TouchableOpacity onPress={()=>navigation.navigate('login')}>
        <Text className="text-[#FF7356]">Log in </Text>
        </TouchableOpacity>
      </Text>
    </View>
    </ScrollView>
  );
}

export default Signupscreen;
