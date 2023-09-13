import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import UserProvider from "../src/context/UserContextProvider";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
   <UserProvider>
      <Router>
         <App />
      </Router>
   </UserProvider>
);
