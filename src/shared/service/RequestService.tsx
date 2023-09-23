import axios, { AxiosResponse } from "axios";
export default class RequestService {
  private baseURL = "http://localhost:5000";

  private async makeRequest<T>(
    method: "get" | "post" | "put" | "patch",
    endpoint: string,
    data?: any
  ): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios({
        method,
        url: `${this.baseURL}${endpoint}`,
        data,
      });
      return response.data;
    } catch (error: any) {
      throw new Error(`Request failed: ${error.message}`);
    }
  }

  async get<T>(endpoint: string): Promise<T> {
    return this.makeRequest("get", endpoint);
  }

  async post<T>(endpoint: string, data?: any): Promise<T> {
    return this.makeRequest("post", endpoint, data);
  }

  async put<T>(endpoint: string, data?: any): Promise<T> {
    return this.makeRequest("put", endpoint, data);
  }

  async patch<T>(endpoint: string, data?: any): Promise<T> {
    return this.makeRequest("patch", endpoint, data);
  }
}
