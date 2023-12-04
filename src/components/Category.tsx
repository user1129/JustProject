import "../styles/app.css";
import { useSelector } from "react-redux";
import { RootState } from "../@types/types";
import { useDispatch } from "react-redux";
import { change_category } from "../redux/slices/FilterSlice";
const Category = () => {
  const categories: string[] = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const selected_category = useSelector(
    (state: RootState) => state.filter.category
  );
  const dispatch = useDispatch();

  return (
    <>
      <div className="categories">
        <ul>
          {categories.map((value, index) => {
            return (
              <li
                className={selected_category === index ? "active" : ""}
                key={index}
                onClick={() => dispatch(change_category(index))}
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
