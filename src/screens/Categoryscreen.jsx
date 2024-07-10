import {View, Text,Image,TouchableOpacity, ScrollView} from 'react-native';

function Categoryscreen({route,navigation}){
  const{foods}=route.params;
  console.log(foods)
  return(
    <ScrollView>
    <View>
    {foods.map(food=>{
      return(
        <TouchableOpacity onPress={()=>navigation.navigate("singlefood",{foods:food})}>
        <View className="mx-5" >
            
            <Image
            className="w-[300px]"
                  source={food.image}
                />
            <Text className="bg-white w[50] h-[100] mb-11 border text-2xl ">
              {food.foodName}
             
            </Text>
            <Text className="text-[#FF7356]">{food.price}</Text>
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
