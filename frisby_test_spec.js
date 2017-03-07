var frisby = require('frisby');

var URL = 'public/fazenda.json';

frisby.create('A Fazenda API - GET - /')
	.get(URL)
	.expectStatus(200)
	.expectHeaderContains('contant-type', 'application/json')
	.expectJSONTypes({
		status: String,
		message: String,
		data: Object
	})
	.expectJSON({
		status: "sucess",
		message: "Victor, bem vindo ao API da Fazenda",
		"data": {
		      "__id": String,
		      "timestamp": Number,
		      "name": String,
		      "description": String,
		      "picture": String,
		      "positive": String,
		      "negative": String
		    }
	})
	.toss();