import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import { v4 as uuid } from "uuid";

const News = ({ name, api_key, country, category }) => {
   const [articles, setArticles] = useState([]);
   const [totalResults, setTotalResults] = useState(0);
   const [page, setPage] = useState(1);
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

   useEffect(() => {
      const fetchData = async () => {
         const data = await fetch(
            `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${api_key}&category=${category}&page=${page}&pageSize=${
               windowWidth > 1600 ? 8 : 6
            }`
         );
         const parsedData = await data.json();
         setArticles(parsedData.articles);
         setTotalResults(parsedData.totalResults);
      };

      fetchData();
      document.title = `${name} - Infotainment`;
   }, [country, category, windowWidth]); // eslint-disable-line

   const handlePrevious = async () => {
      const data = await fetch(
         `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${api_key}&category=${category}&page=${
            page - 1
         }&pageSize=${windowWidth > 1600 ? 8 : 6}`
      );
      const parsedData = await data.json();
      setArticles(parsedData.articles);
      setPage(page - 1);
   };

   const handleNext = async () => {
      const data = await fetch(
         `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${api_key}&category=${category}&page=${
            page + 1
         }&pageSize=${windowWidth > 1600 ? 8 : 6}`
      );
      const parsedData = await data.json();
      setArticles(parsedData.articles);
      setPage(page + 1);
   };

   return (
      <div className="flex flex-col pt-14">
         <h1 className="text-6xl mx-auto py-4 underline underline-offset-8">
            {name}
         </h1>

         <div className="px-24 3xl:px-16 flex flex-wrap justify-start">
            {articles &&
               articles.map((article) => (
                  <div key={uuid()}>
                     {article?.title && <NewsCard article={article} />}
                  </div>
               ))}
         </div>

         <div className="my-5 flex justify-between">
            <button
               onClick={handlePrevious}
               disabled={page <= 1 ? true : false}
               className={`mx-32 ${
                  page > 1 ? "bg-gray-600 hover:bg-gray-800" : "bg-gray-400"
               } text-white font-bold py-2 px-6 rounded-lg`}
            >
               Previous
            </button>
            <button
               onClick={handleNext}
               disabled={page >= Math.ceil(totalResults / 6) ? true : false}
               className={`mx-32 ${
                  page < Math.ceil(totalResults / 6)
                     ? "bg-gray-600 hover:bg-gray-800"
                     : "bg-gray-400"
               } text-white font-bold py-2 px-6 rounded-lg`}
            >
               Next
            </button>
         </div>
      </div>
   );
};

News.propTypes = {
   name: PropTypes.string,
   api_key: PropTypes.string,
   country: PropTypes.string,
   category: PropTypes.string,
   pageSize: PropTypes.number,
};

export default News;
