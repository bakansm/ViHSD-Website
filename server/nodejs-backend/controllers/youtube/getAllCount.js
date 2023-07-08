import { countAll } from './countAll.js';
import { countClean } from './countClean.js';
import { countOffensive } from './countOffensive.js';
import { countHate } from './countHate.js';
import { countIndividual } from './countIndividual.js';
import { countGroups } from './countGroups.js';
import { countReligion } from './countReligion.js';
import { countPolitics } from './countPolitics.js';
import { countRace } from './countRace.js';
import { countNone } from './countNone.js';

export const getAllCount = async (req, res) => {
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
