import { createSlice } from '@reduxjs/toolkit';
import { setIsLoading } from './isLoading.slice';
import axios from 'axios';

export const clienteLitarCliente = createSlice({
    name: 'clienteListarCliente',
    initialState: [],
    reducers: {
        setClienteListarCliente: (state, action) => {
            const setClienteLitarCliente = action.payload
            return setClienteLitarCliente
        }
    }
})
export const getClienteListarCliente = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get('http://localhost:8080/cliente/listarCliente')
        .then((res) => dispatch(setClienteListarCliente(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const { setClienteListarCliente } = clienteLitarCliente.actions;

export default clienteLitarCliente.reducer;