import { configureStore } from '@reduxjs/toolkit'
import  isLoading  from './slices/isLoading.slice'
import  clienteLitarCliente  from './slices/clienteListarCliente'


export default configureStore({
    reducer: {
        isLoading:isLoading,
        clienteLitarCliente:clienteLitarCliente
    }
})
