import {Meteor} from 'meteor/meteor';
import {Person} from "../../../imports/person.entity";
import {MongoConnect} from "../../MongoDB/MongoConnect";
import {Mongo} from 'meteor/mongo';

const collection = 'persons';

Meteor.publish("persons", () => {
    const PersonCollection = MongoConnect.getCollection<Person>(collection);
    return PersonCollection.find({}, {
        fields: {
            _id: 1,
            name: 1,
            fullName: 1
        }
    });
});

Meteor.methods({
    'person-get': (id: string) => {
        const PersonCollection = MongoConnect.getCollection<Person>(collection);
        return PersonCollection.findOne({_id: new Mongo.ObjectID(id)});
    },
    'person-save': (object: Person) => {
        const PersonCollection = MongoConnect.getCollection<Person>(collection);
        PersonCollection.insert(object);
    }
});


