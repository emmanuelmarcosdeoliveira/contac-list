import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/contatos'

type FilterSate = {
  termo?: string
  criterio: 'Trabalho' | 'Pessoal' | 'Familia' | 'Todas'
  valor?: enums.Grupos
}

const initialState: FilterSate = {
  termo: '',
  criterio: 'Todas'
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    alteraTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    alterarFiltro: (state, action: PayloadAction<FilterSate>) => {
      state.criterio = action.payload.criterio
      state.valor = action.payload.valor
    }
  }
})

export const { alteraTermo, alterarFiltro } = filterSlice.actions
export default filterSlice.reducer

