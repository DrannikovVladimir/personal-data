import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    name: '',
    age: '',
  },
  children: [],
};

export const userSlice = createSlice({
  name: 'User data',
  initialState,
  reducers: {
    saveData: (state, { payload }) => {
      const { user, children } = payload;
      state.user.name = user.name;
      state.user.age = user.age;
      state.children = children;
    },
    handleChangeName: (state, { payload }) => {
      const { name, id } = payload;
      state.children = state.children.map((child) => (child.id === id)
        ? { ...child, name }
        : child);
    },
    handleChangeAge: (state, { payload }) => {
      const { age, id } = payload;
      state.children = state.children.map((child) => (child.id === id)
        ? { ...child, age}
        : child);
    },
    addChild: (state, { payload }) => {
      const { child } = payload;
      state.children.push(child);
    },
    removeChild: (state, { payload }) => {
      state.children = state.children.filter((child) => child.id !== payload.id);
    }
  }
});

export const { saveData, handleChangeName, handleChangeAge, addChild, removeChild } = userSlice.actions;

export default userSlice.reducer;
