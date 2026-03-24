import dotenv from 'dotenv';

dotenv.config();

export function validateEnv(): void {
  const required = ['DATABASE_URL'];
  const missing = required.filter((key) => !process.env[key]);
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }
}

export const env = {
  port: parseInt(process.env['PORT'] ?? '3001', 10),
  databaseUrl: process.env['DATABASE_URL'] ?? '',
  supabaseUrl: process.env['SUPABASE_URL'] ?? '',
  supabaseServiceRoleKey: process.env['SUPABASE_SERVICE_ROLE_KEY'] ?? '',
  stripeSecretKey: process.env['STRIPE_SECRET_KEY'] ?? '',
  twilioAccountSid: process.env['TWILIO_ACCOUNT_SID'] ?? '',
  twilioAuthToken: process.env['TWILIO_AUTH_TOKEN'] ?? '',
  jwtSecret: process.env['JWT_SECRET'] ?? '',
};
