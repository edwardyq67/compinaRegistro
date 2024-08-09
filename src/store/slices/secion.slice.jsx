import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';

export const secionSlice = createSlice({
    name: 'secion',
    initialState: [],
    reducers: {
        setsecion: (state, action) => {
            const setSecion = action.payload
            return setSecion
        }
    }
})
export const postThungSecion = (data) => async(dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post(`http://localhost:8080/user/login`, data)
        .then((res) => {dispatch(setsecion(res.data))
            localStorage.setItem("token", res.data.token);
        })
        .finally(() => dispatch(setIsLoading(false)));
}
export const { setsecion } = secionSlice.actions;

export default secionSlice.reducer;
