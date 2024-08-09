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
export const postClienteListarCliente = (data) => async(dispatch) => {
    dispatch(setIsLoading(true));
    await axios.post('http://localhost:8080/cliente/listarCliente',data);
    return await axios.get('http://localhost:8080/cliente/listarCliente')
        .then((res) => dispatch(setClienteListarCliente(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
    
}
export const deleteClienteListarCliente = (id) => async(dispatch) => {
    dispatch(setIsLoading(true));
    await axios.delete(`http://localhost:8080/cliente/listarCliente/${id}`)
    return await axios.get('http://localhost:8080/cliente/listarCliente')
        .then((res) => dispatch(setClienteListarCliente(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}
export const putClienteListarCliente = (data) => async (dispatch) => {
    try {
        console.log({ data }); // Asegúrate de que `data` contenga el ID y los campos a actualizar
        await axios.put(`http://localhost:8080/cliente/listarCliente/${data.id}`, data);
        const res = await axios.get('http://localhost:8080/cliente/listarCliente');
        dispatch(setClienteListarCliente(res.data));
    } catch (error) {
        console.error('Error al actualizar cliente:', error);
    } finally {
        dispatch(setIsLoading(false));
    }
};


export const { setClienteListarCliente } = clienteLitarCliente.actions;

export default clienteLitarCliente.reducer;