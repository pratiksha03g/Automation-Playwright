import { expect, test } from '../../../src/fixtures/baseFixture';

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

test.describe('Posts API', () => {
  test('creates a post', async ({ api }) => {
    const post = await api.post<Post>('/posts', {
      userId: 1,
      title: 'Framework API check',
      body: 'Created by the Playwright API client.',
    });

    expect(post).toMatchObject({
      id: expect.any(Number),
      userId: 1,
      title: 'Framework API check',
    });
  });
});
