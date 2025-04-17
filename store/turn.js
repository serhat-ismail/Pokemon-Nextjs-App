const { createSlice } = require("@reduxjs/toolkit");

const PLAYER_1 = "1"
const PLAYER_2 = "2"
const initialTurnState = { turn: PLAYER_1 }

const turnSlice = createSlice({
    name: "turn",
    initialState: initialTurnState,
    reducers: {
        changeTurn(state, action) {
            const newPlayer = action.payload === PLAYER_1 ? PLAYER_2 : PLAYER_1
            
            return {
                turn: newPlayer
            }
        }
    }
});

export const turnActions = turnSlice.actions;

export default turnSlice.reducer;
