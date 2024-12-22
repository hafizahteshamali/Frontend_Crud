import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
};

const UserReducer = createSlice({
  name: "Users",
  initialState,
  reducers: {
    GetAllUser: (state, { payload }) => {
      state.user = payload;
    },

    AddAllUser: (state, { payload }) => {
      state.user.push(payload);
    },

    DeleteAllUser: (state, { payload }) => {
      state.user = state.user.filter((item) => item._id !== payload._id);
    },

    UpdateAllUser: (state, { payload }) => {
      const index = state.user.findIndex((item) => item._id === payload._id);
      state.user[index] = payload.data;
    },
  },
});

export const { GetAllUser, AddAllUser, DeleteAllUser, UpdateAllUser } =
  UserReducer.actions;
export default UserReducer.reducer;
