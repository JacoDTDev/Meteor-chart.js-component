import { Meteor } from 'meteor/meteor';
import{CustomerOne} from "../imports/api/customerOne";

Meteor.startup(() => {
  // code to run on server at startup
    console.log(CustomerOne.find().fetch())
});
