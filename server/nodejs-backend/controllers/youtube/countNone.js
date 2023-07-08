import { Youtube } from '../../models/Youtube.js';

export const countNone = async (req, res) => {
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
