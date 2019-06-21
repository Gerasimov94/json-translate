const express = require('express');
const fs = require('fs');
const {Translate} = require('@google-cloud/translate');

const app = express();

const port = process.env.PORT || 3000;
const projectId = process.env.PROJECT_ID || '';
const targetLng = process.env.TARGET_LNG || 'en';

app.get('/', (_, res) => {
	res.send('\n\nHello, world!\n\n');
});

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});

let rawdata = fs.readFileSync('source.json');

const data = JSON.parse(rawdata);

const translate = new Translate({projectId});

const getPhrase = async (text) => {
	const [translation] = await translate.translate(text, targetLng);
	
	return translation;
};

const translateObject = async (obj) => {
	let result = {};

	for (key in obj) {
		if (typeof obj[key] === 'string') {
			result[key] = await getPhrase(obj[key]);
		} else if (typeof obj[key] === 'object') {
			result[key] = await translateObject(obj[key]);
		} else {
			result[key] = obj[key];
		}
	}

	return result;
};

translateObject(data).then(res => 
	fs.writeFile("output.json", JSON.stringify(res), 'utf8', function (err) {
		if (err) {
			console.log("An error occured while writing JSON Object to File.");

			return console.log(err);
		}
	 
		console.log("JSON file has been saved.");
	})	
);
