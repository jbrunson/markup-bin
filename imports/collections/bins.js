import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'bins.insert': function() {
    return Bins.insert({
      createdAt: new Date(),
      content: '',
      sharedWith: [],
      ownerId: this.userId  // If they are authenticated....you can use 'this.userId'
    });
  }
});

// Collection is an array of objects
export const Bins = new Mongo.Collection('bins');