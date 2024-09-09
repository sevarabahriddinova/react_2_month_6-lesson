
import { createSlice } from '@reduxjs/toolkit';

const studentsSlice = createSlice({
  name: 'students',
  initialState: {
    list: [],
    searchTerm: '',
  },
  reducers: {
    addStudent: (state, action) => {
      state.list.push(action.payload);
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    deleteStudent: (state, action) => {
      state.list = state.list.filter((_, index) => index !== action.payload);
    },
  },
});


export const { addStudent, setSearchTerm, deleteStudent } = studentsSlice.actions;
export default studentsSlice.reducer;
