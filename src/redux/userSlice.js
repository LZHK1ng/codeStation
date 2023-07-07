import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLogin: true,
        userInfo: {},
    },
    reducers: {
        initUserInfo:(state, {payload}) => {
            state.userInfo = payload;
        }
    }
})

export default userSlice.reducer