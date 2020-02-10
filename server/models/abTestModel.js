const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const abTestSchema = new Schema({
  name: {type: String, required: true, unique: true},
  //the A Test props
  testA: {},
  //the B test props would be a list of annotations those are changed from test A
  //if a property set here is not present in Test A it should give an error.
  //string is chosen as the type of values for predictability
  //Todo: handle any different values different than testA has in creation.
  //Todo: handle any different values different than testA has on update.
  testB: {
    type: Map,
    of: String
  },
  archived: Boolean,
  active: {type: Boolean, required: true, default: true}
  
  
});


module.exports =  mongoose.model('abTest', abTestSchema);
