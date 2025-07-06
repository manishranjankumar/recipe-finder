import React from "react";
import { NavLink } from "react-router-dom";

const MealCards = ({ details }) => {
  return (
    <>
      {!details
        ? null
        : details.map((val) => (
            <div
              key={val.idMeal}
              className="rounded-xl p-4 bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100 shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out flex flex-col items-center"
            >
              <img
                src={val.strMealThumb}
                alt="meal"
                className="rounded-lg w-full h-44 object-cover mb-4 shadow-sm"
              />
              <p className="font-bold text-center text-lg text-orange-800">
                {val.strMeal}
              </p>
              <NavLink to={`/${val.idMeal}`}>
                <button className="mt-3 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition">
                  Recipe
                </button>
              </NavLink>
            </div>
          ))}
    </>
  );
};

export default MealCards;
