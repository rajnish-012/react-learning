import axios from "axios";
import React, { useState } from "react";

const Axios = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    //Api call using Axios async await

    const {data} = await axios.get("https://picsum.photos/v2/list"); // {data} it is called destructuring
    setData(data);

    //OR

    // const Response = await axios.get("https://picsum.photos/v2/list");
    // setData(Response.data);
  };
  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function(elem,idx) {
          return <h3>Hello, {elem.author} {idx}</h3>
        })}
      </div>
    </div>
  );
};

export default Axios;
