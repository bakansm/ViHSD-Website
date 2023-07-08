import { Youtube } from '../../models/Youtube.js';

export const countRace = async (req, res) => {
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