import Link from "next/link";
import s from "./LatestBlog.module.scss";
import { useSelector } from "react-redux";

const LatestBlog = () => {
  const { articles } = useSelector((state) => state.articles);
  return (
    <div className={s.late}>
      <div className={s.container}>
        <h1>The Latest Blog</h1>
        <div className={s.cards}>
          {articles.map((el) => (
            <div key={el.id} className={s.card}>
              <div className={s.image}></div>
              <div>
                <div className={s.date}>
                <p>{el.date}</p>
                <p>{el.time}</p>
              </div>
              <h4 style={{paddingInline: "5px"}}>{el.title}</h4>
              <p className={s.desc}>{el.desc}</p>
              <Link href="#" className={s.read}>{el.read}</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;
