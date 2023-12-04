import React from "react";
import "../../styles/app.css";
const Category = () => {
  const categories: string[] = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const [selectedCategory, setSelectedCategory] = React.useState<number>(0);

  return (
    <>
      <div className="categories">
        <ul>
          {categories.map((value, index) => {
            return (
              <li
                className={selectedCategory === index ? "active" : ""}
                key={index}
                onClick={() => setSelectedCategory(index)}
              >
                {value}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Category;
