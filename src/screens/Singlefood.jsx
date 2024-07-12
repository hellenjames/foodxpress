import {useContext, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {StateContext} from '../Context/State';
import {Update} from 'firebase/firestore';

function Singlefood({route}) {
  const {food} = route.params;
  const {cart, setCart} = useContext(StateContext);
  const [value, setValue] = useState(1);
  const increase = () => setValue(value + 1);
  const decrease = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };

  const addToCart = fooditem => {
    const foodItemValue = {...fooditem, value};
    setCart(prevCart => {
      const existingItemIndex = prevCart.findIndex(item => item.id === fooditem.id);
      if (existingItemIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].value += value;
        return updatedCart;
      }
      return [...prevCart, foodItemValue];
    });
  };
  // console.log(food)
  return (
    <View className="mx-5">
      <View className="flex justify-center items-center">
        <Image className="w-[200] h-[200]" source={food.image} />
        <Text className="font-bold text-black text-2xl">{food.foodName}</Text>
      </View>
      <View className=" my-3 flex flex-row  justify-between">
        <Text className="text-[#FF7356] mt-3">{food.price}</Text>
        <View className="flex flex-row gap-2">
          <TouchableOpacity onPress={decrease}>
            <Text className="text-white text-2xl bg-[#e29c8e] text-center  w-10 h-10 rounded-full">
              -
            </Text>
          </TouchableOpacity>
          <Text className="text-black text-2xl">{value}</Text>
          <TouchableOpacity onPress={increase}>
            <Text className="text-white text-2xl bg-[#FF7356] text-center  w-10 h-10 rounded-full">
              +
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text className="text-gray">{food.description}</Text>
      <TouchableOpacity onPress={() => addToCart(food)}>
        <Text className="text-gray rounded-full bg-[#FF7356] flex justify-center text-center text-white text-2xl p-3">
          Add to Cart
        </Text>
      </TouchableOpacity>
    </View>
  );
}
export default Singlefood;
