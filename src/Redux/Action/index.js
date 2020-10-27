import { todo_Add, todo_Delete, todo_Toggle } from '../Constant';

export const todoAdd = (todo) => ({
    type : todo_Add,
    payload : todo,
})

export const todoDelete = (id) => ({
    type : todo_Delete,
    payload : id,
})

export const todoToggle= (id) => ({
    type : todo_Toggle,
    payload : id,
})