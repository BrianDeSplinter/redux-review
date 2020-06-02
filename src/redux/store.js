import {creatStore, createStore} from 'redux'
import movieReducer from './reducers/moviesReducer'
import {devToolsEnhancer} from 'redux-devtools-extension'

export default createStore(moviesReducer, devToolsEnhancer())