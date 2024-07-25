import {configureStore} from "@reduxjs/toolkit"
import contactsReducer from "./reducers/contacts"
import filterReducer from "./reducers/filter"

const store = configureStore({
  reducer: {
    contatos: contactsReducer, 
    filtro: filterReducer
  }
})

export type RootReducer  = ReturnType<typeof store.getState>
export default store