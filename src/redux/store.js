import { createStore } from 'redux'
import { legacy_createStore as createStore } from 'redux'
import configureStore from '@reduxjs/toolkit'
import countReducer from './count_reducer';
//store 相当于老板 ，reducer相当于后厨
//createStore过时了，学习新的
const store = createStore(countReducer)

export default store