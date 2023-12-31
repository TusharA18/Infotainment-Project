import PropTypes from "prop-types";

const NewsCard = ({ article }) => {
   const trim = (string, len) => {
      return string.length < len ? string : string.substr(0, len) + "...";
   };

   return (
      <div className="flex items-center my-5 mx-7">
         <div className="w-96 rounded overflow-hidden shadow-lg">
            <img
               className="w-full h-56"
               src={
                  article?.urlToImage
                     ? article.urlToImage
                     : "/images/no-image-logo.jpg"
               }
               alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
               <div className="font-bold text-xl mb-2">
                  {article?.title && trim(article?.title, 55)}
               </div>
               <p className="text-gray-700 text-base mb-3">
                  {article?.description
                     ? trim(article?.description, 120)
                     : "No description available right now, to find out more click on the card!"}
               </p>
               <a
                  href={article?.url}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gray-800 text-white px-2 py-1 rounded-lg
                  cursor-pointer"
               >
                  {" "}
                  Read More...
               </a>
            </div>
            <div className="px-6 pt-4 pb-2">
               <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {article?.author
                     ? "Author - " + trim(article?.author, 35)
                     : "Author - Anonymous"}
               </span>
            </div>
         </div>
      </div>
   );
};

NewsCard.propTypes = {
   article: PropTypes.object,
};

export default NewsCard;
