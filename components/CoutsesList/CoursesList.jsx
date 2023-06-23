import s from "../Courses/Courses.module.scss";

const CoursesList = ({ courses }) => {
  return (
    <div className={s.cards}>
      {courses.map((course) => (
        <div key={course.id} className={s.card}>
          <div className={s.card_image}>
            <img src={course.image} alt="image" />
          </div>
          <div className={s.card_btn}>
            <button>{course.buttonName}</button>
          </div>
          <div className={s.card_content}>
            <h4>{course.title}</h4>
            <p>{course.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoursesList;
