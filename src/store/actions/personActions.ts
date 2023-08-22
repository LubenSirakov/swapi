import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import {
  PersonAction,
  PersonData,
  PersonError,
  GET_PERSON,
  SET_LOADING,
  SET_ERROR,
} from "../types";

const getRandomNumber = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

export const getPerson = (
  name: string
): ThunkAction<void, RootState, null, PersonAction> => {
  return async (dispatch) => {
    try {
      const res = await fetch(`https://swapi.dev/api/people/?search=${name}`);
      // const res = await fetch(`https://swapi.dev/api/people/`);

      if (!res.ok) {
        const resData: PersonError = await res.json();
        throw new Error(resData.message);
      }

      const resData: PersonData = await res.json();
      dispatch({
        type: GET_PERSON,
        payload: resData,
      });
    } catch (err: any) {
      dispatch({
        type: SET_ERROR,
        payload: err.message,
      });
    }
  };
};

export const getrandomPerson = (
  name: string
): ThunkAction<void, RootState, null, PersonAction> => {
  return async (dispatch) => {
    try {
      let num = getRandomNumber(1, 82);

      const res = await fetch(`https://swapi.dev/api/people/${num}`);

      if (!res.ok) {
        const resData: PersonError = await res.json();
        throw new Error(resData.message);
      }

      const resData: PersonData = await res.json();
      dispatch({
        type: GET_PERSON,
        payload: resData,
      });
    } catch (err: any) {
      dispatch({
        type: SET_ERROR,
        payload: err.message,
      });
    }
  };
};

export const setLoading = (): PersonAction => {
  return {
    type: SET_LOADING,
  };
};

export const setError = (): PersonAction => {
  return {
    type: SET_ERROR,
    payload: "",
  };
};
