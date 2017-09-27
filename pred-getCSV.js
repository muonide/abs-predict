
var request = require('request');
var fs = require('fs');
var args = process.argv.splice(process.execArgv.length + 2);
var options = { method: 'POST',
  		url: 'http://predict.habhub.org/ajax.php',
  		qs: 
      { action: 'getCSV',
        uuid: args.toString()},
  		headers: 
   		{ action: 'getCSV',
        uuid: args.toString()} };

//console.log(options);
var uuid = args.toString();

request(options, function (error, response, body){
		if (error) throw new Error(error);

		  var reqBody = body.toString();
		  reqBody = JSON.parse(reqBody);
      var fileString = __dirname + '/logs/' + uuid + '.csv';
      //console.log(fileString);
      for(var i=0; i < reqBody.length; i++){
  		  var data = reqBody[i].split(',');

        fs.appendFile(fileString, data + '\n', function(err){
          if(err){
            return console.log(err);
          }
        });
      }
	})