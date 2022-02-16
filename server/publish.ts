import {Meteor} from 'meteor/meteor';
import {Mongo, MongoInternals} from "meteor/mongo";
import {Link} from "/imports/api/links";

Meteor.publish("test", (params: { db: string }) => {
    console.log(MongoInternals.defaultRemoteCollectionDriver().mongo.client.db());
    console.log("Connection: mongodb://localhost:27017/" + params.db);
    // @ts-ignore
    const driver = new MongoInternals.RemoteCollectionDriver("mongodb://localhost:27017/" + params.db);
    // @ts-ignore
    return new Mongo.Collection<Link>('links', {_driver: driver, _suppressSameNameError: true}).find();
});