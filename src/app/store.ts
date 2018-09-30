import { ITodo } from './todo'
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, REMOVE_ALL_TODOS } from './actions';

export interface IAppState {
  todos: ITodo[];
  lastUpdate: Date;
}

export const INITIAL_STATE: IAppState =  {
  todos: [],
  lastUpdate: null
}

export function rootReducer(state: IAppState, action): IAppState {
  switch(action.type) {
    case ADD_TODO:
      let newId = state.todos.length ? state.todos[state.todos.length - 1].id : 0;
      action.todo.id = newId + 1;
      return Object.assign({}, state, {
        todos: state.todos.concat(Object.assign({}, action.todo)),
        lastUpdate: new Date()
      });
    case TOGGLE_TODO:
      let todoToToggle = state.todos.find(todo => todo.id === action.id);
      let todoToToggleIndex = state.todos.indexOf(todoToToggle);
      return Object.assign({}, state, {
        todos: [
          ...state.todos.slice(0, todoToToggleIndex),
          Object.assign({}, todoToToggle, {
            isCompleted: !todoToToggle.isCompleted
          }),
          ...state.todos.slice(todoToToggleIndex + 1)
        ],
        lastUpdate: new Date()
      });
    case REMOVE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.filter(todo => todo.id !== action.id),
        lastUpdate: new Date()
      });
    case REMOVE_ALL_TODOS:
      return Object.assign({}, {
        todos: [],
        lastUpdate: new Date()
      });
  }
  return state;
}
