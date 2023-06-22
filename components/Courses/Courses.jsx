import React, { useState } from "react";
import MyButton from "../UI/MyButton/MyButton";
import s from "./Courses.module.scss";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import CoursesList from "../CoutsesList/CoursesList";
import { motion } from "framer-motion";

const Courses = () => {
  const [count, setCounte] = useState(8)
  const { courses } = useSelector((state) => state.courses)
  const {tab} = useSelector(state => state.tab)


  const firstCourse = courses.slice(0, count)
  const desingCourse = courses.filter(
    (el) =>
      el.buttonName === "3D Design" ||
      el.buttonName === "UX Research" ||
      el.buttonName === "UI/UX Design"
  )
  const businessCourse = courses.filter((el) => el.buttonName === "Business")
  const devopsCourse = courses.filter(
    (el) => el.buttonName === "Web Developer" || el.buttonName === "Developer"
  )
  const marketingCourse = courses.filter(
    (el) => el.buttonName === "SMM" || el.buttonName === "Marketing"
  )

  const moreCourse = () => {
    if(courses.length === count){
      setCounte(8)
    } else{
      setCounte(count + 4)
    }
  }

  return (
    <div className={s.courses}>
      <div className={s.container}>
        <div className={s.content}>
          <h2>Trending Courses</h2>
          <motion.div>
            <Tabs variant="unstyled">
              <TabList className={s.content__box}>
                {tab.map((el) => (
                  <Tab
                    key={el.id}
                    className={s.button}
                    _selected={{ color: "white", bg: "#F72585" }}
                  >
                    {el.title}
                  </Tab>
                ))}
              </TabList>
              <TabPanels>
                <TabPanel>
                  <CoursesList courses={firstCourse} />
                </TabPanel>
                <TabPanel>
                  <CoursesList courses={businessCourse} />
                </TabPanel>
                <TabPanel>
                  <CoursesList courses={desingCourse} />
                </TabPanel>
                <TabPanel>
                  <CoursesList courses={devopsCourse} />
                </TabPanel>
                <TabPanel>
                  <CoursesList courses={marketingCourse} />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </motion.div>
          <div className={s.more}>
            <MyButton
              onClick={moreCourse} 
              style={{
                background: "#F72585",
                color: "#fff",
                borderColor: "#F72585",
                padding: "14px 0",
              }}
            >
              {count === courses.length ? "Hide" : "More Courses"}
            </MyButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
