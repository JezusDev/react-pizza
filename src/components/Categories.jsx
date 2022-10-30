import React, { useState } from "react";
import useChangeListItem from "../hooks/useChangeListItem";

function Categories({ activeIndex, setActiveIndex }) {
  const [categories] = useState([
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ]);
  // const [activeIndex, setActiveIndex] = useState(0);

  const categoryList = useChangeListItem(
    categories,
    activeIndex,
    setActiveIndex
  );

  return <div className="categories">{categoryList}</div>;
}

export default Categories;
