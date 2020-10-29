export const ADD_TODO = "ADD_TODO";
 export const DELETE_TODO = "DELETE-TODO";
 export const UPDATE_TODO = "UPDATE_TODO";
 export const CHANGE_TODONE = 'CHANGE_TODONE';
  export const Filter_TODO = 'Filter_TODO';
  export const Filter_DONE = 'Filter_DONE';



export function addToDo (todo)
{
    return{
        type : ADD_TODO,
        payload : todo ,
    }
}
export function DeleteToDo (todoId)
{
    return{
        type : DELETE_TODO,
        payload : todoId ,
    }
}
export function UpdateToDo (todo)
{
    return{
        type : UPDATE_TODO,
        payload : todo ,
    }
}   
 export function changetodone(todoId){
        return{
            type : CHANGE_TODONE,
            payload : todoId ,
        }
    }
    export function FilterToDo(todo){
        return{
            type : Filter_TODO,
            payload : todo
         
        }}
 export function FilterDone(todo){
     return{
         type : Filter_DONE,
         payload : todo
     }
 }
   