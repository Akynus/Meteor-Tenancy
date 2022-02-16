import React, {useState} from 'react';
import {Meteor} from "meteor/meteor";

export const Hello = () => {
    const [db, setDb] = useState('db');
    React.useEffect(() => {
        const sub = Meteor.subscribe('test', {db: db});
        return () => sub.stop();
    }, [db]);

    const increment = () => {
        setDb("test-one");
    };

    return (
        <div>
            <button onClick={increment}>Click Me</button>
            <p>Current database {db}.</p>
        </div>
    );
};
