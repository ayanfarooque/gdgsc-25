import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const Tccomp = () => {
  const [doubt, setDoubt] = useState("");

  const questions = [
    {
      id: 1,
      text: "What is the reason behind tennis ball swinging and spinning at the same time? Explain and justify this using Bernoulli's theorem.",
      answers: 0,
      upvotes: 8,
      downvotes: 3,
      chapter: "",
    },
  ];

  return (
    <div className="bg-[#F8F5E4]  p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-semibold mb-4">WELCOME TO COMMUNITY, HASHIM</h1>
        <div className="flex items-center bg-white p-2 rounded-lg shadow-md mb-6">
          <input
            type="text"
            placeholder="Search........"
            className="flex-1 p-2 outline-none"
          />
          <FiSearch className="text-gray-500 text-xl" />
        </div>

        <h2 className="text-lg font-medium mb-3">RECOMMENDED FOR YOU</h2>

        {questions.map((q) => (
          <div
            key={q.id}
            className="bg-[#F5F2D0] p-4 mb-4 rounded-lg shadow-md"
          >
            <p className="font-medium">Q: {q.text}</p>
            <p className="text-red-600 font-semibold mt-2">NO ANSWER YET</p>
            <div className="flex items-center gap-4 mt-2">
              <div className="flex items-center gap-1">
                <span className="font-semibold">▲</span>
                <span>{q.upvotes}</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="font-semibold">▼</span>
                <span>{q.downvotes}</span>
              </div>
            </div>
            {q.chapter && (
              <p className="text-blue-600 font-medium mt-2">{q.chapter}</p>
            )}
            <button className="bg-pink-400 text-white py-1 px-4 mt-2 rounded-lg">
              ANSWER
            </button>
          </div>
        ))}

        <div className="bg-pink-300 p-4 rounded-lg shadow-md mt-6">
          <h3 className="text-lg font-semibold mb-2">POST YOUR DOUBT</h3>
          <textarea
            className="w-full bg-white p-2 rounded-md"
            placeholder="TYPE YOUR DOUBTS HERE..."
            value={doubt}
            onChange={(e) => setDoubt(e.target.value)}
          ></textarea>
          <button className="bg-pink-500 text-white py-1 px-4 mt-2 rounded-lg">
            POST
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tccomp;
