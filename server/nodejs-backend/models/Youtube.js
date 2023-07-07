import { Double } from 'mongodb';
import { Schema, model } from 'mongoose';

// const youtubeSchema = new Schema(
// 	{
// 		timestamp: { type: Number, required: true },
// 		content: { type: String, required: true },
// 		predict: { type: String, required: true },
// 	},
// 	{ collection: 'SLrowPcL5ZY' }
// );

// const Youtube = model('SLrowPcL5ZY', youtubeSchema);

const youtubeSchema = new Schema(
	{
		timestamp: { type: Number, required: true },
		datetime: { type: String, required: true },
		userid: { type: String, required: true },
		username: { type: String, required: true },
		message: { type: String, required: true },
		predict: { type: Array, required: true },
		predictTime: { type: Number, required: true },
	},
	{ collection: 'F1pz_1aBQNs' }
);

const Youtube = model('F1pz_1aBQNs', youtubeSchema);

export default Youtube;
