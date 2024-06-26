import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';

const initialUserState = {
    loading:false,
    users:[],
    error:''
}

//generates pending , fulfilled and rejected action types, 2nd parameter returns promise
export const fetchUsers = createAsyncThunk('user/fetchUsers',()=>{
    return axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.data.map((user)=>user.id))
})

const userSlice = createSlice({
    name:'user',
    initialState:initialUserState,
    extraReducers:builder =>{
        builder.addCase(fetchUsers.pending,(state)=>{
            state.loading = true;
        })

        builder.addCase(fetchUsers.fulfilled,(state,action)=>{
            state.loading = false;
            state.users = action.payload;
            state.error = ''
        })

        builder.addCase(fetchUsers.rejected,(state,action)=>{
            state.loading=false;
            state.users=[];
            state.error = action.error.message;
        })
    }
});

export default userSlice.reducer;
// module.exports.fetchUsers = fetchUsers;