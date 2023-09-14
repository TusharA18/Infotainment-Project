import { useContext } from "react";
import { UserContext } from "../context/UserContextProvider";
import { Link } from "react-router-dom";

const Navbar = () => {
   const { user, setUser, setCountry } = useContext(UserContext);

   return (
      <div className="container fixed w-full bg-gray-600 text-white flex items-center justify-between">
         <div className="img-logo flex items-center space-x-2 p-4">
            <Link to="/">
               <div className="flex mr-4">
                  <img className="w-7 h-7" src="/images/info-logo.png" alt="" />
                  <h1 className="text-xl ml-2">Infotainment</h1>
               </div>
            </Link>
            <div className="flex space-x-3 mt-1">
               {user && (
                  <>
                     <Link to="/">
                        <h2 className="text-[16px] transition cursor-pointer hover:underline hover:-translate-y-1 hover:underline-offset-4">
                           General
                        </h2>
                     </Link>
                     <Link to="/business">
                        <h2 className="text-[16px] transition cursor-pointer hover:underline hover:-translate-y-1 hover:underline-offset-4">
                           Business
                        </h2>
                     </Link>
                     <Link to="/entertainment">
                        <h2 className="text-[16px] transition cursor-pointer hover:underline hover:-translate-y-1 hover:underline-offset-4">
                           Entertainment
                        </h2>
                     </Link>
                     <Link to="/technology">
                        <h2 className="text-[16px] transition cursor-pointer hover:underline hover:-translate-y-1 hover:underline-offset-4">
                           Technology
                        </h2>
                     </Link>
                     <Link to="/science">
                        <h2 className="text-[16px] transition cursor-pointer hover:underline hover:-translate-y-1 hover:underline-offset-4">
                           Science
                        </h2>
                     </Link>
                     <Link to="/health">
                        <h2 className="text-[16px] transition cursor-pointer hover:underline hover:-translate-y-1 hover:underline-offset-4">
                           Health
                        </h2>
                     </Link>
                     <Link to="/sports">
                        <h2 className="text-[16px] transition cursor-pointer hover:underline hover:-translate-y-1 hover:underline-offset-4">
                           Sports
                        </h2>
                     </Link>
                  </>
               )}
            </div>
         </div>
         <div className="signup mr-9 flex items-center">
            {user ? (
               <div className="flex space-x-5">
                  <select
                     onChange={(e) => setCountry(e.target.value)}
                     id="countries"
                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                     <option value="in">India</option>
                     <option value="us">United States</option>
                     <option value="ca">Canada</option>
                     <option value="fr">France</option>
                     <option value="de">Germany</option>
                     <option value="ru">Russia</option>
                     <option value="ch">China</option>
                  </select>
                  <div className="group relative ">
                     <img
                        className="w-10 h-10 rounded-3xl cursor-pointer"
                        src="/images/avatar.jpg"
                        alt=""
                     />
                     <button
                        onClick={() => setUser(false)}
                        className="hidden group-hover:block absolute bg-white text-black border border-black text-[1rem] w-24 top-10 right-[-30px] rounded-lg px-2 py-1"
                     >
                        Sign out
                     </button>
                  </div>
               </div>
            ) : (
               <>
                  <button
                     onClick={() => setUser(true)}
                     className="border hover:bg-gray-800 rounded-lg mx-1 px-3 py-2 text-md"
                  >
                     Login
                  </button>
                  <button
                     onClick={() => setUser(true)}
                     className="border border-blue-500 bg-blue-500 hover:border-blue-700 hover:bg-blue-700 rounded-lg mx-1 px-3 py-2 text-md"
                  >
                     SignUp
                  </button>
               </>
            )}
         </div>
      </div>
   );
};

export default Navbar;
