import { configureStore } from "@reduxjs/toolkit";
import userReducer from './Userslice';
import movieReducer from "./Movieslice";

const Appstore = configureStore(
    {
        reducer :{
            user : userReducer,
            movies : movieReducer,
        }
       
    }
);

export default Appstore;

// import { configureStore } from "@reduxjs/toolkit";
// import userReducer from './Userslice';

// const Appstore = configureStore({
//     reducer: {
//         user: userReducer, // The "user" key here will become the slice of state managed by `userReducer`
//     }
// });

// export default Appstore;
