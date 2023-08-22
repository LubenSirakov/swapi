import React, { FC } from "react";
import { PersonData } from "../store/types";

type PersonProps = {
    data: PersonData
}

const Person: FC<PersonProps> = ({ data }) => {
    console.log(data.results[0].name)

    return (
        <section id="infoSection">
            <h2>Name: {data.results[0].name}</h2>
            <p className="info">Height: {data.results[0].height}cm</p>
            <p className="info">Birth year: {data.results[0].birth_year}</p>
            <p className="info">Gender: {data.results[0].gender}</p>
            <p className="info">Hair color: {data.results[0].hair_color}</p>
            <p className="info">Skin color: {data.results[0].skin_color}</p>
            <p className="info">Eye color: {data.results[0].eye_color}</p>
            <p className="info">Eye color: {data.results[0].films}</p>
        </section>
    );
}

export default Person;