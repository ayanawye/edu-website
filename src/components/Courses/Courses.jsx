import React from "react";
import MyButton from "../UI/MyButton/MyButton";
import s from "./Courses.module.scss";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import CoursesList from "../CoutsesList/CoursesList";

const Courses = () => {
  const {courses}= useSelector(state => state.courses)

  return (
    <div className={s.courses}>
      <div className={s.container}>
        <div className={s.content}>
          <h1>Trending Courses</h1>
          <div>
            <Tabs variant="unstyled">
              <TabList className={s.content__box}>
                <Tab className={s.button} _selected={{ color: "white", bg: "#F72585" }}>All</Tab>
                <Tab className={s.button} _selected={{ color: "white", bg: "#F72585" }}>Business</Tab>
                <Tab className={s.button} _selected={{ color: "white", bg: "#F72585" }}>Art & Design</Tab>
                <Tab className={s.button} _selected={{ color: "white", bg: "#F72585" }}>Development</Tab>
                <Tab className={s.button} _selected={{ color: "white", bg: "#F72585" }}>Marketing</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <CoursesList courses={courses} />
                </TabPanel>
                <TabPanel>
                  <p>two!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
          <div className={s.more}>
            <MyButton style={{
                      background: "#F72585",
                      color: "#fff",
                      borderColor: "#F72585",
                      padding: "14px 0"
                    }}>More Courses</MyButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
