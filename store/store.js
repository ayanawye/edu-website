import {configureStore} from "@reduxjs/toolkit";
import courses from "./reducer/courses";
import categories from "./reducer/categories";
import articles from "./reducer/articles";
import swiper from "./reducer/swiper";
import footerInfo from "./reducer/footerInfo";
import tab from "./reducer/tab";

const store = configureStore({
    reducer: {
        courses,
        categories,
        articles,
        swiper,
        footerInfo,
        tab,
    }
})

export default store