const { test, expect } = require('@playwright/test');

const apiUrl = 'https://jsonplaceholder.typicode.com';

test('Get users', async ({ request }) => {
    const response = await request.get(`${apiUrl}/users`);
    console.log(await response.json());
    expect(response.status()).toBe(200);
});

test('Create user', async ({ request }) => {
    const response = await request.post(`${apiUrl}/users`, {
        data: { name: 'kumar', username: 'trainer' },
        headers: { Accept: 'application/json' }
    });
    console.log(await response.json());
    expect(response.status()).toBe(201);
});

test('Update user', async ({ request }) => {
    const response = await request.put(`${apiUrl}/users/1`, {
        data: { name: 'kumar', username: 'engineer' },
        headers: { Accept: 'application/json' }
    });
    console.log(await response.json());
    expect(response.status()).toBe(200);
});

test('Delete user', async ({ request }) => {
    const response = await request.delete(`${apiUrl}/users/1`);
    expect(response.status()).toBe(200);
});