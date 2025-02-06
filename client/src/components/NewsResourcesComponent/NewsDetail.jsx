import React from "react";
import { useParams } from "react-router-dom";
import { newsdata } from "../../assets/dumy";

const NewsDetail = () => {
    const { newsId } = useParams();
    const news = newsdata.find((item) => item.newsId === newsId);

    if (!news) {
        return <h1 className="text-red-500">News not found!</h1>;
    }

    return (
        <div className="p-6">
        <h1 className="text-2xl font-bold">{news.newsHeading}</h1>
        <img src={news.newsImage} alt={news.newsHeading} className="w-full h-60 object-cover my-4" />
        <p className="text-gray-700">{news.newsContent}</p>
        </div>
    )
}

export default NewsDetail