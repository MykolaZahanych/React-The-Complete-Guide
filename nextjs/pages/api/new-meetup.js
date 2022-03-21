import connectDB from '../../utils/mongo-client';

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    const { client, meetupsCollection } = await connectDB();
    await meetupsCollection.insertOne(data);

    client.close();
    res.status(201).json({ message: 'Meetup inserted!' });
  }
}

export default handler;
