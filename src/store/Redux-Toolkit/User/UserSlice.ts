import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User, UserTypes } from "./user.types";


const initialState: UserTypes = {
  error: "",
  loading: false,
  users: [
    {
      id: 0,
      email: "asyncthunk@gmail.com",
      name: "createThunk",
      userName: "asyncThunk",
    },
  ],
};

// Thunk
export const fetchUser = createAsyncThunk("users", async (userId: number) => {
  const getResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`,
    { method: "GET" },
  );
  return await getResponse.json();
});

// slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
      return state;
    },
    removeUser: (
      state,
      action: PayloadAction<{ id: number; userName: string }>,
    ) => {
      state.users.filter((user) => user.userName !== action.payload.userName);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        // payload
        const data = action.payload;

        // state changes
        state.loading = false;
        state.users.push({
          id: data.id,
          name: data.name,
          userName: data.username,
          email: data.email,
        });
        return state;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        console.log(action.error, action.payload);
        state.loading = false;
      });
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
