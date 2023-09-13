import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import { v4 as uuid } from "uuid";

const News = ({ name, api_key, country, category, page, pageSize }) => {
   const [articles, setArticles] = useState([]);
   const [totalResults, setTotalResults] = useState(0);

   useEffect(() => {
      const fetchData = async () => {
         const data = await fetch(
            `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${api_key}&category=${category}&page=${page}&pageSize=${pageSize}`
         );
         const parsedData = await data.json();

         setArticles(parsedData.articles);
         setTotalResults(parsedData.totalResults);
      };
      fetchData();
      console.log(articles);
      document.title = `${name} - Infotainment`;
   }, [country, category]); // eslint-disable-line

   return (
      <div className="flex flex-col pt-14">
         <h1 className="text-6xl mx-auto py-4">{name}</h1>

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
               disabled={page - 1 === 0 ? true : false}
               className={`mx-32 bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-6 rounded-lg`}
            >
               Previous
            </button>
            <button
               disabled={page + 1 === totalResults ? true : false}
               className={`mx-32 bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-6 rounded-lg`}
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
   page: PropTypes.number,
   pageSize: PropTypes.number,
};

export default News;
