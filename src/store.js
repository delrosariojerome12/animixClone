import {configureStore} from "@reduxjs/toolkit";
import globalReducer from "./features/global/globalReducer";
import fetchReducer from "./features/fetch/fetchReducer";
import homeReducer from "./features/home/homeReducer";
import seasonReducer from "./features/seasonNow View/seasonReducer";
import sidebarReducer from "./features/sidebar/sidebarReducer";
import categoryReducer from "./features/categoryBtn/categoryReducer";
import yearReducer from "./features/sidebar/fetchYear";
export const store = configureStore({
  reducer: {
    global: globalReducer,
    fetchedData: fetchReducer,
    home: homeReducer,
    seasonNowNews: seasonReducer,
    sidebar: sidebarReducer,
    categoryReducer: categoryReducer,
    year: yearReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: {
        // Ignore state paths, e.g. state for 'items':
        ignoredPaths: ["items.data"],
      },
      serializableCheck: {ignoredPaths: ["some.nested.path"]},
    }),
});
