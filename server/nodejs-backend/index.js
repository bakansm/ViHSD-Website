import express from 'express';
import { default as mongoose } from 'mongoose';
import {
	countAll,
	countClean,
	countOffensive,
	countHate,
	countIndividual,
	countGroups,
	countReligion,
	countPolitics,
	countRace,
	countNone,
	getAllCount,
	getCommentData,
} from './controllers/youtube/index.js';
import { setCollectionName } from './models/Youtube.js';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*'); // Update this with your desired allowed origins
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
	next();
});

mongoose.connect('mongodb+srv://bakansm:Khanhcool2001@kafkasink.6c3trd5.mongodb.net/ViHSD', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

app.route('/api/youtube/comment').get(getCommentData);
app.route('/api/youtube/count').get(getAllCount);
app.route('/api/youtube/clean').get(countClean);
app.route('/api/youtube/hate').get(countHate);
app.route('/api/youtube/offensive').get(countOffensive);
app.route('/api/youtube/individual').get(countIndividual);
app.route('/api/youtube/groups').get(countGroups);
app.route('/api/youtube/race').get(countRace);
app.route('/api/youtube/religion').get(countReligion);
app.route('/api/youtube/politics').get(countPolitics);
app.route('/api/youtube/all').get(countAll);
app.route('/api/youtube/none').get(countNone);

app.post('/api/youtube/collection', (req, res) => {
	const collectionName = req.body.message;
	setCollectionName(collectionName);
	res.send('Collection created successfully!');
});

app.listen(5001, (err) => {
	console.log(err);
});
