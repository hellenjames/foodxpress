import {View, Text,Image,TouchableOpacity, ScrollView} from 'react-native';

function Categoryscreen({route,navigation}){
  const{foods}=route.params;
  // console.log(foods)
  return(
    <ScrollView>
    <View className="">
    {foods.map(food=>{
      return(
        <TouchableOpacity onPress={()=>navigation.navigate("singlefood",{food:food})}>
        <View className="flex justify-center items-center bg-gray-100 " >
            
            <Image
            className="w-[200px] h-[200px] relative"
                  source={food.image}
                />
                <View className="bg-white flex justify-center items-center shadow-sm p-5 ">

            <Text className="text-2xl ">
              {food.foodName}
             
            </Text>
            <Text className="text-[#FF7356]">{food.price}</Text>
            </View>
          </View>
            </TouchableOpacity>
      )

    }
    )}
    </View>
    </ScrollView>

  )
  

  

}
export default Categoryscreen;
