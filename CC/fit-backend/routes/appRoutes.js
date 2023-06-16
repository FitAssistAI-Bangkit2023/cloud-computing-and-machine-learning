const express = require("express");
const { addUserInformation, addExerciseResults, getExerciseResults, getUserProfile } = require("../controllers/appController");
const authToken = require("../middleware/authMiddleware");
const router = express.Router();

router.use(authToken)
router.route('/information').post(addUserInformation);
router.route('/profile').get(getUserProfile);
router.route('/result').post(addExerciseResults);
router.route('/history').get(getExerciseResults);

module.exports = router;