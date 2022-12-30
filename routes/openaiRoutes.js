const express = require('express');
const {genrateImage} = require('../controllers/openaiController');
const router = express.Router();

router.post('/generateimage', function(req, res,) {
      genrateImage;
}); 

// router.post('/generateimage', (req, res) => {
//       res.status(200).json({
//             success: true,
//       });
// });
module.exports = router;