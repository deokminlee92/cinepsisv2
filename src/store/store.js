import { configureStore } from "@reduxjs/toolkit";
import { movieApi } from "./modules/fetch";

const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
});

export default store;
// import { configureStore } from "@reduxjs/toolkit";
// import intro from "./modules/fetch";
// // s'il y en a plusieurs, à créer chaque reducer du store.
// const store = configureStore({
//   reducer: { intro },
// });

// export default store;
