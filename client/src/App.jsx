import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import News from "./components/News";
import { useContext } from "react";
import { UserContext } from "./context/UserContextProvider";

const App = () => {
   const api_key = import.meta.env.VITE_API_KEY;

   const { country } = useContext(UserContext);

   return (
      <div className="font-roboto">
         <Navbar />
         <Routes>
            <Route
               exact
               path="/"
               element={
                  <News
                     name="Top Headlines"
                     api_key={api_key}
                     country={country}
                     category="general"
                  />
               }
            />
            <Route
               exact
               path="/business"
               element={
                  <News
                     name="Business"
                     api_key={api_key}
                     country={country}
                     category="business"
                  />
               }
            />
            <Route
               exact
               path="entertainment"
               element={
                  <News
                     name="Entertainment"
                     api_key={api_key}
                     country={country}
                     category="entertainment"
                  />
               }
            />
            <Route
               exact
               path="/technology"
               element={
                  <News
                     name="Technology"
                     api_key={api_key}
                     country={country}
                     category="technology"
                  />
               }
            />
            <Route
               exact
               path="/science"
               element={
                  <News
                     name="Science"
                     api_key={api_key}
                     country={country}
                     category="science"
                  />
               }
            />
            <Route
               exact
               path="/health"
               element={
                  <News
                     name="Health"
                     api_key={api_key}
                     country={country}
                     category="health"
                  />
               }
            />
            <Route
               exact
               path="/sports"
               element={
                  <News
                     name="Sports"
                     api_key={api_key}
                     country={country}
                     category="sports"
                  />
               }
            />
         </Routes>
      </div>
   );
};

export default App;
