const { configureStore } = require("@reduxjs/toolkit");
import turnReducer from "./turn.js"

const store = configureStore({
    reducer: { turn: turnReducer }
})

export default store;