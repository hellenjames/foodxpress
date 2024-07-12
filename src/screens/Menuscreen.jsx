import {View, Text,TouchableOpacity,Image, ScrollView} from 'react-native';
import { Data } from '../Data';
function Menuscreen({navigation}) {
  const allFoods=Data.reduce((acc,curr)=>{
    return acc.concat(curr.foods)
  },[]);
  // console.log(allFoods)
  return(
    // <Text>Allfood</Text>
<ScrollView>
    <View>
    {allFoods.map(food=>{
      return(
        <TouchableOpacity onPress={()=>navigation.navigate("singlefood",{food:food})}>
        <View className="mx-5" >
            
            <Image
            className="w-[100px] h-[100px]"
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
export default Menuscreen;
