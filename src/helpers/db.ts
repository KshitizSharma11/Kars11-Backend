import { DataSource } from 'typeorm';

import { Car } from '../modules/CarsModule/model/index.js';


export const AppDataSource = new DataSource({
  type: 'postgres',
  url: "postgresql://postgres.bsptnelztyhpdseikdem:Kshitiz@1604@aws-0-ap-south-1.pooler.supabase.com:6543/postgres", // Supabase connection string
  synchronize: true, // Automatically syncs schema (disable in production)
  logging: true,
  entities: [Car],
});

AppDataSource.initialize()
  .then(() => console.log('Connected to Supabase Postgres'))
  .catch((err) => console.error('Database connection error:', err));
