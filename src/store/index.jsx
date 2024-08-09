import { configureStore } from '@reduxjs/toolkit'
import  isLoading  from './slices/isLoading.slice'
import  clienteLitarCliente  from './slices/clienteListarCliente'
import secionSlice from './slices/secion.slice'


export default configureStore({
    reducer: {
        isLoading:isLoading,
        clienteLitarCliente:clienteLitarCliente,
        secionSlice:secionSlice
    }
})
