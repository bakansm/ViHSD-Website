import { Youtube } from '../../models/Youtube.js';

export const countIndividual = async (req, res) => {
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
