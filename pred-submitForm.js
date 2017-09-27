

var request = require('request');

var options = { method: 'POST',
  url: 'http://predict.habhub.org/ajax.php',
  qs: { action: 'submitForm' },
  headers: 
   { action: 'submitForm',
     'content-type': 'multipart/form-data' },
  formData: 
   { launchsite: 'Other',
     lat: '35.398',
     lon: '269.0044',
     initial_alt: '80',
     hour: '17',
     min: '25',
     second: '0',
     day: '27',
     month: '9',
     year: '2017',
     ascent: '6',
     burst: '30000',
     drag: '13',
     submit: 'Run Prediction' } };

console.log(options);

var prediction

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  //console.log(body);

  	var reqBody = body.toString();
	reqBody = JSON.parse(reqBody);
	//console.log(reqBody.uuid);
	prediction = reqBody.uuid;
	console.log(prediction);

	

	
});



// app.get('/', function(req, res){
// 	console.log
// })

// app.post('/predict', function(req, res){
// 	res.setHeader('Content-Type', 'application/json');


// 	res.send(JSON.stringify({
// 		launchsite:	Other,
// 		lat: req.body.lat,
// 		lon: req.body.lon,
// 		initial_alt: req.body.initial_alt,
// 		hour: req.body.hour,
// 		min: req.body.min,
// 		second: req.body.second,
// 		day: req.body.day,
// 		month: req.body.month,
// 		year: req.body.year,
// 		ascent: req.body.ascent,
// 		burst: req.body.burst,
// 		drag: req.body.drag,
// 		submit: Run Prediction,

// 	}))


// })