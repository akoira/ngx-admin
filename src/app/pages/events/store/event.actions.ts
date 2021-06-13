import {createAction, props} from '@ngrx/store';

export const add = createAction('[Year Event] Add', props<{ event: any[] }>());

