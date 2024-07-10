import {View, Text,Image} from 'react-native';
function Singlefood({route}) {
  const{food}=route.params
  console.log(food)
  return(
  <View className="mx-5">
    <View className="flex justify-center items-center">
          <Image className="w-[200] h-[200]" source={food.image} />
          <Text className="font-bold text-black text-2xl">{food.foodName}</Text>

          </View> 
          <View className=" my-3 flex flex-row  justify-between" >          
            <Text className="text-[#FF7356] mt-3">{food.price}</Text>
            <View className="flex flex-row gap-2">          
              <Text className="text-white text-2xl bg-[#e29c8e] text-center  w-10 h-10 rounded-full">-</Text>
        <Text className="text-black text-2xl">1</Text>
        <Text className="text-white text-2xl bg-[#FF7356] text-center  w-10 h-10 rounded-full">+</Text>
        </View>

        </View>

          <Text className="text-gray">{food.description}</Text>

    
  </View>
  )
}
export default Singlefood;
