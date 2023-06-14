import MyButton from "../UI/MyButton/MyButton";
import s from "./Mentor.module.scss";

const Mentor = () => {
  return (
    <div className={s.mentor}>
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.image}></div>
          <div className={s.right}>
            <h1>Become an Mentor</h1>
            <p className={s.desc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
              eu in orci, nunc amet libero. Nam scelerisque vestibulum bibendum
              a turpis. Ante feugiat lectus massa, odio amet. Auctor sit mattis
              non id proin elit placerat. Lectus morbi amet et aliquam magna
              mauris.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
              eu in orci, nunc amet libero. Nam scelerisque vestibulum bibendum
              a turpis. Ante feugiat lectus massa, odio amet. Auctor sit mattis
              non id proin elit placerat. Lectus morbi amet et aliquam magna
              mauris.
            </p>
            <div className={s.btn}>
              <MyButton
                style={{
                  background: "#F72585",
                  color: "#fff",
                  borderColor: "#F72585",
                  padding: "14px 0",
                }}
              >
                Start Teaching
              </MyButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentor;
