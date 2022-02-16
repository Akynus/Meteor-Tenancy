import {Mongo} from "meteor/mongo";

export class Person {
    constructor(object?: Partial<Person>) {
        if (object) Object.assign(this, object);
    }

    _id?: Mongo.ObjectID;
    name: string;
    fullName: string;
    country: string;
    document: string;
    email?: string;
    loyalty?: string;
    emitReceiptAs: string;
    suframa: string;
    simpleNational: boolean;
    note?: string;
    lastOrder?: Date;
    discount: number;
    addresses: [];
    enabled: boolean;
}