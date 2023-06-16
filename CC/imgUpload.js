
const { Storage } = require('@google-cloud/storage');

// Replace 'YOUR_PROJECT_ID' and 'YOUR_SERVICE_ACCOUNT_KEYFILE' with your own values
const storage = new Storage({
  projectId: 'fit-assist-ai',
  keyFilename: 'service_account.json',
});

// Replace 'YOUR_BUCKET_NAME' with your own bucket name
const bucket = storage.bucket('fit-bucket-yes');

function uploadImage(req, res, next) {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  // Generate a unique filename
  const filename = `${Date.now()}-${req.file.originalname}`;

  // Create a file object and upload the file to the bucket
  const file = bucket.file(filename);
  const stream = file.createWriteStream({
    metadata: {
      contentType: req.file.mimetype,
    },
    resumable: false,
  });

  stream.on('error', (err) => {
    next(err);
  });

  stream.on('finish', () => {
    // File upload completed
    res.status(200).send('File uploaded successfully.');
  });

  // Write the file buffer to the bucket
  stream.end(req.file.buffer);
}

module.exports = { uploadImage };