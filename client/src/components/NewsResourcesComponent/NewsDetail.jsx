import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const NewsDetail = () => {
  const { newsId } = useParams();
  const [news, setNews] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/news/news/${newsId}`)
      .then((response) => response.json())
      .then((data) => setNews(data))
      .catch((error) => console.error("Error fetching news details:", error));
  }, [newsId]);

  if (!news) return <p className="text-gray-500 text-center mt-10">Loading...</p>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 p-6">
      <div className="text-2xl rounded-lg p-6 max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-gray-800 hover:text-blue-600 transition duration-300 text-center">
          {news.newsHeading}
        </h1>
        <p className="text-sm text-gray-500 text-center mt-2">
          Published on: {new Date(news.newsDate).toLocaleDateString()}
        </p>
        
        {news.newsImage && (
          <div className="mt-4 flex justify-center">
            
          </div>
        )}

        <p className="text-gray-700 leading-relaxed mt-4 text-justify">
          {news.detailedContent}
        </p>

        <div className="flex justify-center mt-6">
          <a 
            href="/resources" 
            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-300"
          >
            Back to News
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
