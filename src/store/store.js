import {configureStore} from "@reduxjs/toolkit";
import courses from "./reducer/courses";
import categories from "./reducer/categories";
import articles from "./reducer/articles";

const store = configureStore({
    reducer: {
        courses,
        categories,
        articles,
    }
})

export default store