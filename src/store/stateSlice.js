
import { createSlice } from '@reduxjs/toolkit';



const stateSlice = createSlice({
  name: 'nav',
  initialState : {
    isDrawerOpen: false, 
    url : '/'
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
    } , 
    
    setUrl : (state , action)=>{
      state.url = action.payload
    }
  },
});

export const { toggleDrawer , closeDrawer , openDrawer , setUrl} = stateSlice.actions;
export default stateSlice.reducer;