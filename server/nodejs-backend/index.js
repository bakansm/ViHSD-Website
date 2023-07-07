import express from 'express';
import { default as mongoose } from 'mongoose';
import Youtube from './models/Youtube.js';

const app = express();
app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*'); // Update this with your desired allowed origins
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
	next();
});

mongoose.connect('mongodb+srv://bakansm:Khanhcool2001@kafkasink.6c3trd5.mongodb.net/ViHSD');

const countAll = async (req, res) => {
	let count = 0;
	await Youtube.countDocuments()
		.then((data) => {
			if (req) {
				res.json(data);
			}
			count = data;
		})
		.catch((error) => console.log(error));
	return count;
};

const countClean = async (req, res) => {
	const individual = 'individual: clean';
	const groups = 'groups: clean';
	const religion = 'religion: clean';
	const race = 'race: clean';
	const politics = 'politics: clean';

	let count = 0;

	await Youtube.countDocuments({ predict: { $regex: individual, $options: 'i' } })
		.then((data) => {
			count += data;
		})
		.catch((error) => console.log(error));
	await Youtube.countDocuments({ predict: { $regex: groups, $options: 'i' } })
		.then((data) => {
			count += data;
		})
		.catch((error) => console.log(error));
	await Youtube.countDocuments({ predict: { $regex: religion, $options: 'i' } })
		.then((data) => {
			count += data;
		})
		.catch((error) => console.log(error));
	await Youtube.countDocuments({ predict: { $regex: race, $options: 'i' } })
		.then((data) => {
			count += data;
		})
		.catch((error) => console.log(error));
	await Youtube.countDocuments({ predict: { $regex: politics, $options: 'i' } })
		.then((data) => {
			count += data;
		})
		.catch((error) => console.log(error));
	if (req) {
		return res.json(count);
	}
	return count;
};

const countHate = async (req, res) => {
	const individual = 'individual: hate';
	const groups = 'groups: hate';
	const religion = 'religion: hate';
	const race = 'race: hate';
	const politics = 'politics: hate';

	let count = 0;

	await Youtube.countDocuments({ predict: { $regex: individual, $options: 'i' } })
		.then((data) => {
			count += data;
		})
		.catch((error) => console.log(error));
	await Youtube.countDocuments({ predict: { $regex: groups, $options: 'i' } })
		.then((data) => {
			count += data;
		})
		.catch((error) => console.log(error));
	await Youtube.countDocuments({ predict: { $regex: religion, $options: 'i' } })
		.then((data) => {
			count += data;
		})
		.catch((error) => console.log(error));
	await Youtube.countDocuments({ predict: { $regex: race, $options: 'i' } })
		.then((data) => {
			count += data;
		})
		.catch((error) => console.log(error));
	await Youtube.countDocuments({ predict: { $regex: politics, $options: 'i' } })
		.then((data) => {
			count += data;
		})
		.catch((error) => console.log(error));
	if (req) {
		res.json(count);
	}
	if (req) {
		return count;
	}
	return count;
};

const countOffensive = async (req, res) => {
	const individual = 'individual: offensive';
	const groups = 'groups: offensive';
	const religion = 'religion: offensive';
	const race = 'race: offensive';
	const politics = 'politics: offensive';

	let count = 0;

	await Youtube.countDocuments({ predict: { $regex: individual, $options: 'i' } })
		.then((data) => {
			count += data;
		})
		.catch((error) => console.log(error));
	await Youtube.countDocuments({ predict: { $regex: groups, $options: 'i' } })
		.then((data) => {
			count += data;
		})
		.catch((error) => console.log(error));
	await Youtube.countDocuments({ predict: { $regex: religion, $options: 'i' } })
		.then((data) => {
			count += data;
		})
		.catch((error) => console.log(error));
	await Youtube.countDocuments({ predict: { $regex: race, $options: 'i' } })
		.then((data) => {
			count += data;
		})
		.catch((error) => console.log(error));
	await Youtube.countDocuments({ predict: { $regex: politics, $options: 'i' } })
		.then((data) => {
			count += data;
		})
		.catch((error) => console.log(error));
	if (req) {
		return res.json(count);
	}
	return count;
};

const countIndividual = async (req, res) => {
	const clean = 'individual: clean';
	const offensive = 'individual: offensive';
	const hate = 'individual: hate';

	let count = 0;

	await Youtube.countDocuments({ predict: { $regex: clean, $options: 'i' } })
		.then((data) => {
			count += data;
		})
		.catch((error) => console.log(error));
	await Youtube.countDocuments({ predict: { $regex: offensive, $options: 'i' } })
		.then((data) => {
			count += data;
		})
		.catch((error) => console.log(error));
	await Youtube.countDocuments({ predict: { $regex: hate, $options: 'i' } })
		.then((data) => {
			count += data;
		})
		.catch((error) => console.log(error));
	if (req) {
		return res.json(count);
	}
	return count;
};

const countGroups = async (req, res) => {
	const clean = 'groups: clean';
	const offensive = 'groups: offensive';
	const hate = 'groups: hate';

	let count = 0;

	await Youtube.countDocuments({ predict: { $regex: clean, $options: 'i' } })
		.then((data) => {
			count += data;
		})
		.catch((error) => console.log(error));
	await Youtube.countDocuments({ predict: { $regex: offensive, $options: 'i' } })
		.then((data) => {
			count += data;
		})
		.catch((error) => console.log(error));
	await Youtube.countDocuments({ predict: { $regex: hate, $options: 'i' } })
		.then((data) => {
			count += data;
		})
		.catch((error) => console.log(error));
	if (req) {
		return res.json(count);
	}
	return count;
};

const countReligion = async (req, res) => {
	const clean = 'religion: clean';
	const offensive = 'religion: offensive';
	const hate = 'religion: hate';

	let count = 0;

	await Youtube.countDocuments({ predict: { $regex: clean, $options: 'i' } })
		.then((data) => {
			count += data;
		})
		.catch((error) => console.log(error));
	await Youtube.countDocuments({ predict: { $regex: offensive, $options: 'i' } })
		.then((data) => {
			count += data;
		})
		.catch((error) => console.log(error));
	await Youtube.countDocuments({ predict: { $regex: hate, $options: 'i' } })
		.then((data) => {
			count += data;
		})
		.catch((error) => console.log(error));
	if (req) {
		return res.json(count);
	}
	return count;
};

const countRace = async (req, res) => {
	const clean = 'race: clean';
	const offensive = 'race: offensive';
	const hate = 'race: hate';

	let count = 0;

	await Youtube.countDocuments({ predict: { $regex: clean, $options: 'i' } })
		.then((data) => {
			count += data;
		})
		.catch((error) => console.log(error));
	await Youtube.countDocuments({ predict: { $regex: offensive, $options: 'i' } })
		.then((data) => {
			count += data;
		})
		.catch((error) => console.log(error));
	await Youtube.countDocuments({ predict: { $regex: hate, $options: 'i' } })
		.then((data) => {
			count += data;
		})
		.catch((error) => console.log(error));
	if (req) {
		return res.json(count);
	}
	return count;
};

const countPolitics = async (req, res) => {
	const clean = 'politics: clean';
	const offensive = 'politics: offensive';
	const hate = 'politics: hate';

	let count = 0;

	await Youtube.countDocuments({ predict: { $regex: clean, $options: 'i' } })
		.then((data) => {
			count += data;
		})
		.catch((error) => console.log(error));
	await Youtube.countDocuments({ predict: { $regex: offensive, $options: 'i' } })
		.then((data) => {
			count += data;
		})
		.catch((error) => console.log(error));
	await Youtube.countDocuments({ predict: { $regex: hate, $options: 'i' } })
		.then((data) => {
			count += data;
		})
		.catch((error) => console.log(error));
	if (req) {
		return res.json(count);
	}
	return count;
};

const countNone = async (req, res) => {
	let count = 0;

	await Youtube.countDocuments({ predict: { $size: 0 } })
		.then((data) => {
			count += data;
		})
		.catch((error) => console.log(error));
	if (req) {
		return res.json(count);
	}
	return count;
};

const getAllCount = async (req, res) => {
	let clean, offensive, hate, individual, groups, religion, race, politics, none, all;

	await countAll()
		.then((data) => (all = data))
		.catch((error) => console.log(error));

	await countPolitics()
		.then((data) => (politics = data))
		.catch((error) => console.log(error));

	await countRace()
		.then((data) => (race = data))
		.catch((error) => console.log(error));

	await countReligion()
		.then((data) => (religion = data))
		.catch((error) => console.log(error));

	await countGroups()
		.then((data) => (groups = data))
		.catch((error) => console.log(error));

	await countIndividual()
		.then((data) => (individual = data))
		.catch((error) => console.log(error));

	await countClean()
		.then((data) => (clean = data))
		.catch((error) => console.log(error));

	await countOffensive()
		.then((data) => (offensive = data))
		.catch((error) => console.log(error));

	await countHate()
		.then((data) => (hate = data))
		.catch((error) => console.log(error));

	await countNone()
		.then((data) => (none = data))
		.catch((error) => console.log(error));

	if (req) {
		res.json({
			clean,
			offensive,
			hate,
			individual,
			groups,
			religion,
			race,
			politics,
			none,
			all,
		});
	}

	return {
		clean,
		offensive,
		hate,
		individual,
		groups,
		religion,
		race,
		politics,
		none,
		all,
	};
};

const getCommentData = async (req, res) => {
	const start = Number(req.query.start) || 0;
	const limit = 10;
	let data;

	await Youtube.find()
		.skip(start)
		.limit(limit)
		.then((value) => (data = value));

	if (req) {
		res.json(data);
	}
};

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

app.listen(5001, (err) => {
	console.log(err);
});
