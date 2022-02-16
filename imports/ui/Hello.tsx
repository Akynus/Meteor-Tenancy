import React, {useState} from 'react';
import {Meteor} from "meteor/meteor";
import {Person} from "/imports/person.entity";

export const Hello = () => {
    const [db] = useState('db');
    React.useEffect(() => {
        const sub = Meteor.subscribe('persons', {db: db});
        return () => sub.stop();
    }, [db]);

    const increment = () => {
        Meteor.call("person-save",new Person({name:"Matheus", fullName:"Matheus Leite"}))
    };

    return (
        <div>
            <button onClick={increment}>Click Me</button>
            <p>Current database {db}.</p>
        </div>
    );
};
