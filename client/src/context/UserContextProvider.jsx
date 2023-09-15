import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
   const [country, setCountry] = useState("in");

   return (
      <UserContext.Provider value={{ country, setCountry }}>
         {children}
      </UserContext.Provider>
   );
};

UserProvider.propTypes = {
   children: PropTypes.node,
};

export default UserProvider;
