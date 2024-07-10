import {createContext, useState} from 'react';

export const StateContext = createContext();

function State({children}) {
  const [currentUserId, setCurrentUserId] = useState(true);
  const [loggedInUser, setLoggedInUser]=useState(null);

  return (
    <StateContext.Provider value={{currentUserId, setCurrentUserId,loggedInUser,setLoggedInUser}}>
      {children}
    </StateContext.Provider>
  );
}
export default State;
