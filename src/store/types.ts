export const GET_PERSON = 'GET_PERSON';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const SET_ALERT = 'SET_ALERT';

export type Result = {
    birth_year: string,
    eye_color: string,
    films: [],
    gender: string,
    hair_color: string,
    height: string,
    homeworld: string,
    mass: string,
    name: string,
    skin_color: string,
    created: string,
    edited: string,
    species: [],
    starships: [],
    url: string,
    vehicles: []
}

export type PersonData = {
    count: number,
    next: null,
    previous: null,
    results: Result[]   
}

export type PersonError = {
    message: string
}

export type PersonState = {
    data: PersonData | null,
    loading: boolean,
    error: string,
}

type GetPersonAction = {
    type: typeof GET_PERSON,
    payload: PersonData,
}

type SetLoadingAction = {
    type: typeof SET_LOADING,
}

type SetErrorAction = {
    type: typeof SET_ERROR,
    payload: string
}

export type PersonAction = GetPersonAction | SetLoadingAction | SetErrorAction;

export type AlertAction = {
    type: typeof SET_ALERT,
    payload: string,
}

export type AlertState = {
    message: string
}