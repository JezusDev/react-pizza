import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Categories from "../components/Categories";
import PizzaItem from "../components/PizzaItem";
import PizzaLoader from "../components/PizzaLoader";
import Sort from "../components/Sort";
import Pagination from "../components/Pagination/Pagination";
import { AppContext } from "../context";

function Home() {
  const [pizzas, setPizzas] = useState([]);
  const [categoryId, setCategoryId] = useState(0);
  const [activeSort, setActiveSort] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPage, setselectedPage] = useState(1);

  const { searchValue } = useContext(AppContext);
  
  const sortCategories = [
    { name: "популярности ᨆ", sortProperty: "rating", order: "desc" },
    { name: "популярности ᨈ", sortProperty: "rating", order: "asc" },
    { name: "цене ᨆ", sortProperty: "price", order: "desc" },
    { name: "цене ᨈ", sortProperty: "price", order: "asc" },
    { name: "алфавиту", sortProperty: "title", order: "asc" },
  ];
  const skeleton = new Array(4)
    .fill(null, 0)
    .map((_, index) => <PizzaLoader key={index} />);

  const items = pizzas
    .filter((item) => {
      if (searchValue) {
        return item.title.toLowerCase().includes(searchValue);
      }

      return true;
    })
    .map((item) => <PizzaItem key={item.id} {...item} />);

  useEffect(() => {
    const active = sortCategories[activeSort];
    const search = searchValue ? `&search=${searchValue}` : "";
    setIsLoading(true);
    (function () {
      axios
        .get(
          `https://633eaf8483f50e9ba3b5ee0b.mockapi.io/pizzas?page=${
            selectedPage + 1
          }&limit=4&${categoryId > 0 ? `category=${categoryId}` : ""}&sortBy=${
            active.sortProperty
          }&order=${active.order}${search}`
        )
        .then((data) => {
          setPizzas(data.data);
          setIsLoading(false);
        });
    })();

    window.scrollTo(0, 0);
  }, [categoryId, activeSort, searchValue, selectedPage]);

  return (
    <div>
      <div className="content__top">
        <Categories activeIndex={categoryId} setActiveIndex={setCategoryId} />
        <Sort
          activeSort={activeSort}
          setActiveSort={setActiveSort}
          sortCategories={sortCategories}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeleton : items}</div>

      <Pagination onChangePage={setselectedPage} />
    </div>
  );
}

export default Home;
