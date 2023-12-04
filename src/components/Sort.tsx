import React from "react";
import "../styles/app.css";
import { useDispatch } from "react-redux";
import { change_sort } from "../redux/slices/FilterSlice";
import { useSelector } from "react-redux";
import { RootState } from "../@types/types";

export const Sort = () => {
  const sort_types: string[] = ["популярности", "цене", "алфавиту"];
  const [open_popup, setPopup] = React.useState<boolean>(false);
  const selected_sort = useSelector((state: RootState) => state.filter.sort);
  const dispatch = useDispatch();
  const change_sorting = (index: number): void => {
    dispatch(change_sort(index));
    setPopup(false);
  };

  return (
    <>
      <div className="sort">
        <div className="sort__label">
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
              fill="#2C2C2C"
            />
          </svg>
          <b>Сортировка по:</b>
          <span onClick={() => setPopup(!open_popup)}>
            {sort_types[selected_sort]}
          </span>
        </div>
        {open_popup && (
          <div className="sort__popup">
            <ul>
              {sort_types.map((value, index) => {
                return (
                  <li
                    className={selected_sort === index ? "active" : ""}
                    key={index}
                    onClick={() => change_sorting(index)}
                  >
                    {value}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Sort;
