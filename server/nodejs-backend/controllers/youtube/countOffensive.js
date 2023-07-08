import { Youtube } from '../../models/Youtube.js';

export const countOffensive = async (req, res) => {
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
