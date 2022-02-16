import { Mongo } from 'meteor/mongo';

export interface Person {
    _id?: string;
    name: string;
    fullName: string;
}

export const PersonCollection = new Mongo.Collection<Person>('persons');
