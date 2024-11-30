import { DataSource } from 'typeorm';

import { Car } from '../modules/CarsModule/model/index.js';


export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL, // Supabase connection string
  synchronize: true, // Automatically syncs schema (disable in production)
  logging: true,
  entities: [Car],
});

AppDataSource.initialize()
  .then(() => console.log('Connected to Supabase Postgres'))
  .catch((err) => console.error('Database connection error:', err));
