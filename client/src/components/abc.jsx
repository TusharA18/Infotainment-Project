import { useState, useEffect } from "react";

export default function App() {
   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

   useEffect(() => {
      const handleWindowResize = () => {
         setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleWindowResize);

      return () => {
         window.removeEventListener("resize", handleWindowResize);
      };
   });

   return (
      <div style={{ padding: "100px" }}>
         <h2>Width: {windowWidth}</h2>
      </div>
   );
}
