
import { createSlice } from '@reduxjs/toolkit';



const stateSlice = createSlice({
  name: 'nav',
  initialState : {
    isDrawerOpen: false, 
  } ,
  reducers: {
    toggleDrawer: (state) => {
      state.isDrawerOpen = !state.isDrawerOpen;
    }, 
    closeDrawer: (state) => {
      state.isDrawerOpen = false;
    } , 
    openDrawer: (state) => {
      state.isDrawerOpen = true;
    }

  },
});

export const { toggleDrawer , closeDrawer , openDrawer} = stateSlice.actions;
export default stateSlice.reducer;