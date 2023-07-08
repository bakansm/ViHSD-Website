import { Double } from 'mongodb';
import { Schema, model } from 'mongoose';

const youtubeSchema = new Schema({
	timestamp: { type: Number, required: true },
	datetime: { type: String, required: true },
	userid: { type: String, required: true },
	username: { type: String, required: true },
	message: { type: String, required: true },
	predict: { type: Array, required: true },
	predictTime: { type: Number, required: true },
});

export const Youtube = model('Youtube', youtubeSchema);

export function setCollectionName(collectionName) {
	Youtube.collection.name = collectionName;
}
