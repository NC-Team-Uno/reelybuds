import { createContext, useState } from "react";

export const userContext = createContext();



export const userProvider = ({children}) => {
    const [user, setUser] = useState({})
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {    
            getUserByUserName(auth.currentUser.displayName).then(({data})=>{
                setUser(data)
    })
          } else {
            setUser('');
          }
        });
        return () => unsubscribe();
      }, []); 
    return (
        <userContext.Provider value={{ user, setUser }}>
          {children}
        </userContext.Provider>
      ); 
}

