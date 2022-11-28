import { createSlice } from '@reduxjs/toolkit';





export const userSlice = createSlice({
  name: 'user',
  initialState:{
    user:null,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
   login:(state, action) =>{
    state.user = action.payload;
   },
   logout: (state)=>{
    state.user = null
  }
  },

});

export const { login, logout } = userSlice.actions;
//qui andiamo ad aggiornare lo store , renderizzando i divesi componenti a seconda della logica
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
