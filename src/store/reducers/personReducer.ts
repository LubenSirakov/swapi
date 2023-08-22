import { PersonState, PersonAction, GET_PERSON, SET_LOADING, SET_ERROR } from '../types';

const initialState: PersonState = {
    data: null,
    loading: false,
    error: ''
}

export default (state = initialState, action: PersonAction): PersonState => {
    switch(action.type) {
        case GET_PERSON:
            return {
                data: action.payload,
                loading: false,
                error: ''
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case SET_ERROR:
            return {
                ...state,
                error:  action.payload,
                loading: false
            }
        default:
            return state;
    }
}