import {createContext, useState} from 'react';

export const StateContext = createContext();

function State({children}) {
  const [currentUserId, setCurrentUserId] = useState("true");
  const [loggedInUser, setLoggedInUser]=useState(null);
  const [cart, setCart] =useState([])
  const [subTotal,setSubTotal]=useState([])

  return (
    <StateContext.Provider value={{currentUserId, setCurrentUserId,loggedInUser,setLoggedInUser, cart, setCart,subTotal,setSubTotal}}>
      {children}
    </StateContext.Provider>
  );
}
export default State;
