const ABTest = require('../models/abTestModel');

const abTestController = {};
abTestController.verifyAB_compatibility = (req, res, next) => {
  //req body parameters of for testB field should all be included in testA fields or else return error.
};
abTestController.createABTest = (req, res, next) => {

};
abTestController.startABTest = (req, res, next) => {}
abTestController.updateABTest = (req, res, next) => {}
abTestController.getABTest = (req, res, next) => {}
abTestController.getAllABTests = (req, res, next) => {}
abTestController.stopABTest = (req, res, next) => {}
abTestController.archiveABTest = (req, res, next) => {}
abTestController.deleteABTest = (req, res, next) => {}
module.exports = abTestController;
