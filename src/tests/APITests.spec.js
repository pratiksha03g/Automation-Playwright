const { test, expect } = require('@playwright/test');

const apiUrl = process.env.API_BASE_URL || 'https://jsonplaceholder.typicode.com';

test('Get users', async ({ request }) => {
    const response = await request.get(`${apiUrl}/users`);
    expect(response.status()).toBe(200);
    expect(await response.json()).toEqual(expect.any(Array));
});

test('Create user', async ({ request }) => {
    const response = await request.post(`${apiUrl}/users`, {
        data: { name: 'kumar', username: 'trainer' },
        headers: { Accept: 'application/json' }
    });
    expect(response.status()).toBe(201);
    expect(await response.json()).toMatchObject({ name: 'kumar', username: 'trainer' });
});

test('Update user', async ({ request }) => {
    const response = await request.put(`${apiUrl}/users/1`, {
        data: { name: 'kumar', username: 'engineer' },
        headers: { Accept: 'application/json' }
    });
    expect(response.status()).toBe(200);
    expect(await response.json()).toMatchObject({ name: 'kumar', username: 'engineer' });
});

test('Delete user', async ({ request }) => {
    const response = await request.delete(`${apiUrl}/users/1`);
    expect(response.status()).toBe(200);
});