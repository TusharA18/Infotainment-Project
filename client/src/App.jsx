import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import News from "./components/News";

const App = () => {
   const pageSize = 6;
   const api_key = import.meta.env.VITE_API_KEY;

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
                     country="in"
                     category="general"
                     page={1}
                     pageSize={pageSize}
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
                     country="in"
                     category="business"
                     page={1}
                     pageSize={pageSize}
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
                     country="in"
                     category="entertainment"
                     page={1}
                     pageSize={pageSize}
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
                     country="in"
                     category="technology"
                     page={1}
                     pageSize={pageSize}
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
                     country="in"
                     category="science"
                     page={1}
                     pageSize={pageSize}
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
                     country="in"
                     category="health"
                     page={1}
                     pageSize={pageSize}
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
                     country="in"
                     category="sports"
                     page={1}
                     pageSize={pageSize}
                  />
               }
            />
         </Routes>
      </div>
   );
};

export default App;
