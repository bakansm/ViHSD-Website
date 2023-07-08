import { Youtube } from '../../models/Youtube.js';

export const getCommentData = async (req, res) => {
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
