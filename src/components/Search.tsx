import React, { FC, useState, FormEvent } from "react";
import { useDispatch } from 'react-redux';

import { setAlert } from '../store/actions/alertActions';
import { getPerson, setLoading, getrandomPerson } from '../store/actions/personActions';

type SearchProps = {
    title: string,
    number?: number
}

const Search: FC<SearchProps> = ({ title, number }) => {
    const dispatch = useDispatch();
    const [person, setPerson] = useState('');

    const changeHandler = (e: FormEvent<HTMLInputElement>) => {
        setPerson(e.currentTarget.value);
    }

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (person.trim() === '') {
            return dispatch(setAlert('A name is required!'))
        }

        dispatch(setLoading());
        dispatch(getPerson(person));
        setPerson('');
    }

    // const generateRandom = (e: FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();

    //     dispatch(setLoading());
    //     dispatch(getrandomPerson(number));
    // }

    return (
        <section id="searchWrapper">
            <div id="searchContainer">
                <h1 id="mainTitle">Star Wars APi</h1>
                <h2 id="searchTitle">{title}</h2>

                <form action="" onSubmit={submitHandler}>
                    <input
                        type="text"
                        id="searchBar"
                        placeholder="Enter a Star Wars character name"
                        onChange={changeHandler}
                    />
                    <button id="searchButton">Search</button>
                </form>
                <button
                    // onClick={generateRandom}
                >Get random</button>
            </div>
        </section>
    );
}

export default Search;