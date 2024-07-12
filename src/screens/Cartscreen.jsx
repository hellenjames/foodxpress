import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {StateContext} from '../Context/State';
import {useState} from 'react';

import {useContext, useEffect} from 'react';

function Cartscreen() {
  const {cart, setCart} = useContext(StateContext);
  const {subTotal, setSubTotal} = useContext(StateContext);

 
  const increase = id => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? {...item, value: item.value + 1} : item,
      ),
    );
  };

  const decrease = id => {
    setCart(prevCart => 
      prevCart.map(cartItem =>
        cartItem.id === id
          ? {...cartItem, value: cartItem.value > 1 ? cartItem.value - 1 : 1}
          : cartItem,
      )
    );
  };

  setSubTotal(() => {
    return cart.reduce((total, item) => total + item.price * item.value, 0);
  });

  return (
    <ScrollView>
      <View className="mx-5 ">
        {cart.map(foodItem => {
          return (
            <View>
              <View className="flex justify-center items-center ">
                {/* <Text className="text-black font-bold text-2xl">Cart</Text> */}
              </View>
              <View className="flex-row gap-2 border border-gray-200 mt-3 rounded-xl ">
                <Image className="w-[70] h-[70]" source={foodItem.image} />
                <View className="flex ">
                  <Text className="text-black font-bold text-2xl">
                    {foodItem.foodName}
                  </Text>
                  <Text className="text-[#FF7356] font-semibold text-2xl">
                    KSh 1200
                  </Text>
                  <View className="flex flex-row gap-2">
                    <TouchableOpacity onPress={() => decrease(foodItem.id)}>
                      <Text className="text-white text-2xl bg-[#e29c8e] text-center  w-10 h-10 rounded-full">
                        -
                      </Text>
                    </TouchableOpacity>
                    <Text className="text-black text-2xl">
                      {foodItem.value}
                    </Text>
                    <TouchableOpacity onPress={() => increase(foodItem.id)}>
                      <Text className="text-white text-2xl bg-[#FF7356] text-center  w-10 h-10 rounded-full">
                        +
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <Text className="text-black">Total Amount</Text>
                    <Text className="text-black">{subTotal}</Text>
                  </View>
                  <TouchableOpacity>
                    <Text className=" mt-3 text-white bg-[#FF7356] rounded-full p-3">
                      Checkout
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
          // )
        })}
      </View>
    </ScrollView>
  );
}

export default Cartscreen;
