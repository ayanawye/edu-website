import s from "../Courses/Courses.module.scss";

const CoursesList = ({ courses }) => {
  return (
    <div 
      className={s.cards}>
      {courses.map((course) => (
        <div
          key={course.id}
          className={s.card}
        >
          <div className={s.image}>
            <img src={course.image} className={s.img} />
          </div>
          <button className={s.btn}>{course.buttonName}</button>
          <h4>{course.title}</h4>
          <p>{course.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default CoursesList;
