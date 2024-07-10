import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Data} from '../Data';
import Icon from 'react-native-vector-icons/FontAwesome';
import {StateContext} from '../Context/State';
import {useContext, useEffect} from 'react';
import {doc, getDoc} from 'firebase/firestore';
import {db} from '../firebase';

// import {TouchableOpacity} from 'react-native-gesture-handler';

function Homescreen({navigation}) {
  const {currentUserId, setCurrentUserId, loggedInUser, setLoggedInUser} =
    useContext(StateContext);
  console.log(currentUserId);

  console.log(Data);

  useEffect(() => {
    console.log(currentUserId);

    async function getUserDoc() {
      const docRef = doc(db, 'users', currentUserId);
      console.log(db);

      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log('Document data:', docSnap.data());
        setLoggedInUser(docSnap.data());
      } else {
        // docSnap.data() will be undefined in this case
        console.log('No such document!');
      }
    }
    getUserDoc();
  }, []);

  return (
    <View className="mx-5">
      {/* {console.log(loggedInUser.firstname)} */}
      <Text className="font-bold text-black">
        Hi,{loggedInUser && loggedInUser.firstname}
      </Text>
      <Icon name="home" color="black" size={30} />
      <Text className="text-[#78787A]">Let's grab your food! </Text>
      <TextInput
        placeholder="Search for food"
        className="border border-[#F0F0F0] outline-none p-3 rounded-full bg-gray-100 mt-4 text-[#78787A] "
      />

      <Text className="font-bold text-black">Food Categories</Text>

      {Data.map((data, index) => {
        return (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('category', {
                foods: data.foods,
                name: data.categoryName,
              })
            }
            key={index}>
            <View>
              <Image
                style={styles.categoryImages}
                source={data.categoryImage}
              />
              <Text>{data.categoryName}</Text>
            </View>
          </TouchableOpacity>
        );
      })}

      <Text className="font-bold text-black my-3">Food For You</Text>
      <View className="flex-row justify-between">
        <View>
          <Image
            style={styles.foodsImages}
            source={require('../../images/githeri.jpg')}
          />
          <Text className="text-black font-semibold">Githeri Curry</Text>
          <View className="flex-row gap-3">
            <Image
              style={styles.smallImages}
              source={require('../../images/clock.png')}
            />

            <Text>20 mins</Text>
            <Image
              className=""
              style={styles.smallImages}
              source={require('../../images/star.png')}
            />
            <Text>5.7</Text>
          </View>
          <Text className="text-black font-semibold">Ksh 300</Text>
        </View>
        <View>
          <Image
            style={styles.foodsImages}
            source={require('../../images/african-pilau.jpg')}
          />
          <Text className="text-black font-semibold">Beef Pilau</Text>
          <View className="flex-row gap-3 ">
            <Image
              style={styles.smallImages}
              source={require('../../images/clock.png')}
            />

            <Text>20 mins</Text>
            <Image
              className=""
              style={styles.smallImages}
              source={require('../../images/star.png')}
            />
          </View>

          <Text className="text-black font-semibold">Ksh 300</Text>
        </View>
      </View>
      <View className="flex-row gap-7 justify-center mt-3">
        <Text className="text-black">Home</Text>
        <Text className="text-black">Browse</Text>
        <Text className="text-black">Cart</Text>
        <Text className="text-black">Profile</Text>
      </View>
    </View>
  );
}
export default Homescreen;

const styles = StyleSheet.create({
  categoryImages: {
    width: 50,
    height: 50,
  },
  foodsImages: {
    width: 140,
    height: 80,
  },
  smallImages: {
    width: 20,
    height: 20,
  },
});
