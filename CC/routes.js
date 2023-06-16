
const express = require('express');
const multer = require('multer');
const imgUploadController = require('./imgUpload');

const router = express.Router();

// Create a Multer instance with desired configuration
const multerStorage = multer({
  storage: multer.memoryStorage(), // Store the file in memory as a buffer
  limits: {
    fileSize: 5 * 1024 * 1024, // Limit file size to 5MB (adjust as needed)
  },
});

// Define the image upload route
router.post('/upload', multerStorage.single('image'), imgUploadController.uploadImage);

module.exports = router;

