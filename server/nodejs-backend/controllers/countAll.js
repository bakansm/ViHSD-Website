const countAll = async (req, res) => {
	await Youtube.countDocuments()
		.then((data) => {
			res.json(data);
		})
		.catch((error) => console.log(error));
	return data;
};

export default countAll;
