import mongoose from 'mongoose';
import User from './src/models/User'; // Adjust path as necessary
import 'dotenv/config';
import * as bcrypt from 'bcrypt';


const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
];

const seedUsers = async () => {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log('MongoDB connected successfully');

    try {
        for (const user of users) {
            const hashedPassword = await bcrypt.hash(user.password, 10);
            await User.create({ username: user.username, password: hashedPassword });
        }
        console.log('Database seeded successfully');
    } catch (err) {
        console.error('Error seeding the database:', err);
    } finally {
        await mongoose.disconnect();
        console.log('Disconnected from MongoDB');
    }
};

seedUsers();
