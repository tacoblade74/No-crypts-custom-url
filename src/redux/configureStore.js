import { configureStore } from "@reduxjs/toolkit";
import links from './links'

export default configureStore({
    reducer: {
        selectedLinks: links
    }
});