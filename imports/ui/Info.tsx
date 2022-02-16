import React from 'react';
import {useTracker} from 'meteor/react-meteor-data';
import {PersonCollection} from "/imports/api/persons";
import {Person} from "/imports/person.entity";

export const Info = () => {
    const persons = useTracker(() => {
        return PersonCollection.find().fetch();
    });

    const makePerson = (person: Person, index:number) => {
        console.log(person);
        return (
            <li key={index}>
                <a href={person.name} target="_blank">{String(person._id)}: {person.name} - {person.fullName}</a>
            </li>
        );
    }

    return (
        <div>
            <h2>Learn Meteor!</h2>
            <ul>{persons.map(makePerson)}</ul>
        </div>
    );
};
