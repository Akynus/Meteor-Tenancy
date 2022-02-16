import {Meteor} from "meteor/meteor";
import {Mongo} from "meteor/mongo";
import {MongoInternals} from "meteor/mongo";
import Collection = Mongo.Collection;

export abstract class MongoConnect {
    static getCollection<T>(collection: string): Collection<T> {
        console.log(Meteor.userId());
        // @ts-ignore
        const driver = new MongoInternals.RemoteCollectionDriver(`mongodb://localhost:27017/db`);
        // @ts-ignore
        return new Mongo.Collection(collection, {_driver: driver, _suppressSameNameError: true});
    }
}