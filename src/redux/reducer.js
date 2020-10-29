import{ADD_TODO ,DELETE_TODO,UPDATE_TODO,CHANGE_TODONE,Filter_DONE,Filter_TODO } from './action';
import {Todos} from './state'

export const reducer = (state = Todos, action) => {
    let newtodos 
switch(action.type)
{
    case ADD_TODO :
        newtodos = [...state];
        newtodos.push(action.payload)
        return newtodos

    case DELETE_TODO :
 newtodos = [...state];
return  newtodos.filter( todo => todo.id != action.payload );
  case UPDATE_TODO :

      newtodos=[...state]
let index = -1 ;
for (let i = 0; i < newtodos.length; i++) {
    index++ ;   
 if (newtodos[i].id === action.payload.id) 
  {break}
} 
 if ( index !== -1)
{
    newtodos[index]=action.payload;
    return newtodos
}

case CHANGE_TODONE :
    newtodos=[...state]
    return  newtodos.map( todo =>  (todo.id == action.payload) ? {...todo,complete : !todo.complete} : todo )
     ;
case Filter_TODO:
    newtodos=[...state]
   return newtodos.filter(todo =>  todo.complete === false);

case Filter_DONE :
    newtodos=[...state]
    return newtodos.filter(todo =>  todo.complete === true);
     
}
return state ;
}