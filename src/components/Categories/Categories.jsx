import { useSelector } from "react-redux";
import s from "./Categories.module.scss";

const Categories = () => {
  const { categories } = useSelector((state) => state.categories);
  return (
    <div className={s.categories}>
      <div className={s.container}>
        <h1>Top Categories</h1>
        <div className={s.cards}>
          {categories.map((el) => (
            <div key={el.id} className={s.card}>
              <div className={s.image}>
                <h4>{el.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
