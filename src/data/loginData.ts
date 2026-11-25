import { envConfig } from '../config/envConfig';

export interface LoginData {
  username: string;
  password: string;
}

export interface LoginRow extends LoginData {
  description: string;
  shouldSucceed: boolean;
}

export const loginData: LoginData = {
  username: envConfig.demoblazeUsername,
  password: envConfig.demoblazePassword,
};

export const loginDataRows: LoginRow[] = [
  {
    description: 'configured account',
    username: loginData.username,
    password: loginData.password,
    shouldSucceed: true,
  },
  {
    description: 'invalid account',
    username: 'invalid-test-user',
    password: 'invalid-test-password',
    shouldSucceed: false,
  },
];
