import {configureStore} from "@reduxjs/toolkit";
import courses from "./reducer/courses";
import categories from "./reducer/categories";
import articles from "./reducer/articles";
import swiper from "./reducer/swiper";
import footerInfo from "./reducer/footerInfo";

const store = configureStore({
    reducer: {
        courses,
        categories,
        articles,
        swiper,
        footerInfo,
    }
})

export default store