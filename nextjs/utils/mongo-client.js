import { MongoClient } from 'mongodb';

export default async function connectDB() {
  const client = await MongoClient.connect('YOUR_DATABASE_HERE');
  const db = client.db();
  const meetupsCollection = db.collection('meetups');

  return { client, meetupsCollection };
}
