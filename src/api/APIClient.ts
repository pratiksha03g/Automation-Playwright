import type { APIRequestContext } from '@playwright/test';

export class APIClient {
  constructor(private readonly request: APIRequestContext) {}

  async get<T>(path: string): Promise<T> {
    const response = await this.request.get(path);
    await this.assertSuccessful(response.status(), response.url());
    return (await response.json()) as T;
  }

  async post<T>(path: string, data: unknown): Promise<T> {
    const response = await this.request.post(path, { data });
    await this.assertSuccessful(response.status(), response.url());
    return (await response.json()) as T;
  }

  async put<T>(path: string, data: unknown): Promise<T> {
    const response = await this.request.put(path, { data });
    await this.assertSuccessful(response.status(), response.url());
    return (await response.json()) as T;
  }

  async delete(path: string): Promise<void> {
    const response = await this.request.delete(path);
    await this.assertSuccessful(response.status(), response.url());
  }

  private async assertSuccessful(status: number, url: string): Promise<void> {
    if (status < 200 || status >= 300) {
      throw new Error(`API request failed with status ${status}: ${url}`);
    }
  }
}
