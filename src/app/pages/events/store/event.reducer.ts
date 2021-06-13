import {createReducer, on} from '@ngrx/store';
import {add} from './event.actions';

export const initialState = {
  event: new Map(),
};

export interface IState {
  event: Map<number, any>;
}

const _eventReducer = createReducer(
  initialState,
  on(add, (state, {event}) => {
    const newState = Object.assign({}, state);
    const newEvent = new Map(state.event);
    newState.event = state.event;
    newEvent.set(event[0]['year'], event);
    newState.event = newEvent;
    return newState;
  }),
);

export function eventReducer(state, action) {
  return _eventReducer(state, action);
}
