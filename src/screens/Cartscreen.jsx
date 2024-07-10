import {View, Text,Image} from 'react-native';

function Cartscreen() {
  return(
  <View className="mx-5 ">
    
    <View className="flex justify-center items-center "> 
        <Text className="text-black font-bold text-2xl">Cart</Text>
        </View>
        <View className="flex-row gap-2 border border-gray-200 mt-3 rounded-xl "> 
    <Image
    className="w-[70] h-[70]"
          source={require('../../images/chicken-wings.png')}
        />
        <View className="flex ">
          
        <Text className="text-black font-bold text-2xl">Chicken Wings</Text>
        <Text className="text-[#FF7356] font-semibold text-2xl">KSh 1200</Text>
        <View className="flex flex-row gap-2">
        <Text className="text-white text-2xl bg-[#e29c8e] text-center  w-10 h-10 rounded-full">-</Text>
        <Text className="text-black text-2xl">1</Text>
        <Text className="text-white text-2xl bg-[#FF7356] text-center  w-10 h-10 rounded-full">+</Text>
        </View>
        </View>
        </View>
  </View>
  )
}
export default Cartscreen;
