const asyncHandler = require("express-async-handler")
const Information = require("../models/informationModel")
const Result = require("../models/resultModel")

const addUserInformation = asyncHandler(async (req, res) => {
    console.log("The request body is : ", req.body);
    const { age, height, weight, gender } = req.body;

    const userInfo = await Information.create({
        age, 
        height, 
        weight, 
        gender, 
        user_id: req.user.id,
        username: req.user.username
    })
    res.status(201).json(userInfo)
});

const getUserProfile = asyncHandler(async (req, res) => {
    const userInfo = await Information.find({user_id: req.user.id})
    res.status(200).json(userInfo)
});

const addExerciseResults = asyncHandler(async (req, res) => {
    console.log("The request body is : ", req.body);
    const { type, times, reps, menit} = req.body;
    const exerciseResults = await Result.create({
        type,
        times,
        reps,
        menit,
        user_id: req.user.id,
        username: req.user.username
    })
    res.status(201).json(exerciseResults)
});

const getExerciseResults = asyncHandler(async (req, res) => {
    const resultInfo = await Result.find({user_id: req.user.id})
    res.status(200).json(resultInfo)
});

module.exports = { addUserInformation, getUserProfile, addExerciseResults, getExerciseResults }