var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.status(200).json({
    server: "ramltohtml",
    running: true,
  });
});

router.post('/raml', function (req, res, next) {
  try {
    if (!req.files || !req.files.ramlFile) {
      res.status(400).send({
        message: 'No file uploaded'
      });
    } else {
      // console.log("files", req.files);

      const raml2html = require('raml2html');
      const configWithDefaultTheme = raml2html.getConfigForTheme();

      // source can either be a filename, url, or parsed RAML object
      raml2html.render(req.files.ramlFile.data, configWithDefaultTheme).then(function (result) {
        // Save the result to a file or do something else with the result
        res.status(200).send(result);

        // DEBUG
        const fs = require('fs');

        fs.writeFile("./output.html", result, function (err) {
          if (err) {
            return console.log(err);
          }
          console.log("The file was saved!");
        });
      }, function (error) {
        // Output error
        res.status(500).send(error);
      });

      //send response

    }
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
