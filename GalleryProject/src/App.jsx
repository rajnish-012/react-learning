import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Componenets/Card";

const App = () => {
  const [UserData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getdata = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`
    );
    setUserData(response.data);
  };

  useEffect(() => {
    getdata();
  }, [index]);

  // ✅ Skeleton SAME SIZE as Card
  const Skeleton = () => (
    <div className="w-64 bg-white rounded-lg overflow-hidden animate-pulse">
      <div className="h-48 bg-gray-300" />
      <div className="p-3">
        <div className="h-3 bg-gray-300 rounded w-3/4" />
        <img src="" alt="" />
      </div>
    </div>
  );

  let PrintUserData = (
    <div className="flex flex-wrap gap-6 justify-center">
      {Array.from({ length: 15 }).map((_, i) => (
        <Skeleton key={i} />
      ))}
    </div>
  );

  if (UserData.length > 0) {
    PrintUserData = (
      <div className="flex flex-wrap gap-6 justify-center">
        {UserData.map((elem, idx) => (
          <Card key={idx} elem={elem} />
        ))}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Cards */}
      <div className="p-6">
        {PrintUserData}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 pb-6">
        <button
          disabled={index === 1}
          className="px-4 py-2 bg-gray-700 rounded text-sm disabled:opacity-50"
          onClick={() => {
            setIndex(index - 1);
            setUserData([]);
          }}
        >
          Prev
        </button>

        <span className="text-sm text-gray-400 active:scale-90">
          Page {index}
        </span>

        <button
          className="px-4 py-2 bg-gray-700 rounded text-sm active:scale-90"
          onClick={() => {
            setIndex(index + 1);
            setUserData([]);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
