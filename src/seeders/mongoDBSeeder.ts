import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { connectDB } from '../utils/db';
import { seedGreekGods } from './greekGodSeeder';

dotenv.config();

async function runAllSeeders() {
  try {
    await connectDB();
    await seedGreekGods();
    // Add calls to other seeders here as needed
  } catch (err) {
    console.error('Error running seeders:', err);
  } finally {
    await mongoose.disconnect();
  }

}

runAllSeeders().catch((err) => {
  console.error('Error running seeders:', err);
});