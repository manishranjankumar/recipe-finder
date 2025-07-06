import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MealInfo = () => {
  const { mealid } = useParams();
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const getInfo = async () => {
      const { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
      );
      setInfo(data.meals[0]);
    };

    getInfo();
  }, [mealid]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100 py-10 px-4">
      {!info ? (
        <p className="text-center text-red-600 text-xl font-semibold">Data Not Found</p>
      ) : (
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 max-w-5xl mx-auto transition-all duration-300">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <img
              src={info.strMealThumb}
              alt={info.strMeal}
              className="w-full md:w-1/2 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 object-cover"
            />
            <div className="flex-1">
              <h1 className="text-4xl font-extrabold text-orange-600 mb-4">{info.strMeal}</h1>
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">Instructions</h2>
              <p className="text-gray-600 text-justify leading-relaxed whitespace-pre-line">
                {info.strInstructions}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MealInfo;
