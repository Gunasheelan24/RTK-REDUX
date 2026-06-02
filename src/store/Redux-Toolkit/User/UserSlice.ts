import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface UserTypes {
  id: number;
  name: string;
  userName: string;
  email: string;
}

const initialState: UserTypes[] = [
  {
    id: 0,
    name: "gunasheelan",
    userName: "gunasheelan24",
    email: "gunasheelan1624@gmil.com",
  },
];

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UserTypes>) => {
      state.push(action.payload);
      return state;
    },
    removeUser: (state, action: PayloadAction<{ id: number, userName: string }>) => {
        state.filter((user) => user.userName !== action.payload.userName)
    }
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;