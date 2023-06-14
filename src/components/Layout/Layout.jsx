import React, { useEffect } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { useDispatch } from "react-redux";
import { getCourses } from "@/store/reducer/courses";
import { getCategories } from "@/store/reducer/categories";
import { getArticles } from "@/store/reducer/articles";

const Layout = ({ children }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCourses())
    dispatch(getCategories())
    dispatch(getArticles())
  }, [])

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
