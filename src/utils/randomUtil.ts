import { faker } from '@faker-js/faker';

export const randomUtil = {
  fullName: (): string => faker.person.fullName(),
  email: (): string => faker.internet.email().toLowerCase(),
  password: (length = 16): string => faker.internet.password({ length }),
  productName: (): string => faker.commerce.productName(),
};
