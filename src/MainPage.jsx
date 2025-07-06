import axios from "axios";
import React, { useState } from "react";
import MealCards from "./MealCards";
import { FaSearch } from "react-icons/fa";

const MainPage = () => {
  const [data, setData] = useState();
  const [search, setSearch] = useState("");
  const [msg, setMsg] = useState("PLEASE ENTER FOOD NAME");

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const myFun = async () => {
    let { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    );
    setData(data.meals);
    setMsg(data.meals ? "" : "NO RESULTS FOUND");
  };

  return (
    <div className="bg-gradient-to-br from-orange-100 to-yellow-100 min-h-screen py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-orange-700">FOOD RECIPE APP</h1>
      </div>

      <div className="flex justify-center items-center gap-4 px-4 flex-wrap">
        <input
          type="text"
          placeholder="ENTER DISH"
          className="border-2 border-orange-400 rounded-lg px-4 py-2 w-72 focus:outline-none focus:ring-2 focus:ring-orange-500"
          onChange={handleInput}
        />
        <button
          className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition flex items-center gap-2"
          onClick={myFun}
        >
          <FaSearch /> SEARCH
        </button>
      </div>

      <div className="text-center mt-4 text-lg font-medium text-red-600">
        <h4>{msg}</h4>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 px-6">
        <MealCards details={data} />
      </div>
    </div>
  );
};

export default MainPage;