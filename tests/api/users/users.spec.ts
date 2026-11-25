import { expect, test } from '../../../src/fixtures/baseFixture';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

test.describe('Users API', () => {
  test('lists users', async ({ api }) => {
    const users = await api.get<User[]>('/users');

    expect(users.length).toBeGreaterThan(0);
    expect(users[0]).toMatchObject({
      id: expect.any(Number),
      name: expect.any(String),
      email: expect.any(String),
    });
  });
});
