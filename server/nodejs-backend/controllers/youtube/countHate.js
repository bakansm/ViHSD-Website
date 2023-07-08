import { Youtube } from '../../models/Youtube.js';

export const countHate = async (req, res) => {
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
