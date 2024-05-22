import { createSlice } from "@reduxjs/toolkit";

// Define the initial state for the user slice
const initialState = [];

// Create the user slice
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload);
        },
        removeUser: (state, action) => {
            // Logic to remove a user (example: state = state.filter(user => user.id !== action.payload.id))
        },
        removeAllUser: (state, action) => {
            // Logic to remove all users (example: return [])
            return [];
        }
    }
});

export const { addUser, removeUser, removeAllUser } = userSlice.actions;
export default userSlice.reducer;
