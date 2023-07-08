import { Youtube } from '../../models/Youtube.js';

export const countAll = async (req, res) => {
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
