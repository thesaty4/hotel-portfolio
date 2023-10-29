import axios, { AxiosResponse } from "axios";
export default class RequestService {
  private baseURL = "http://localhost:5000";

  private async makeRequest<T>(
    method: "get" | "post" | "put" | "patch" | "delete",
    endpoint: string,
    data?: T
  ): Promise<T> {
    try {
      const getInfo = () => {
        const userInfo = localStorage.getItem("userInfo");
        return userInfo ? JSON.parse(userInfo) : {};
      };

      const response: AxiosResponse<T> = await axios({
        method,
        url: `${this.baseURL}${endpoint}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: getInfo()["x-token"],
        },
        data: JSON.stringify(data),
      });
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.data && error.response.data.error) {
        // If there's an error message from the server, return it
        throw new Error(error.response.data.error);
      } else {
        // If no specific error message from the server, throw a generic error
        const errorMessage = `Request failed: ${error.message}`;
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
    }
  }

  async get<T>(endpoint: string): Promise<T> {
    return this.makeRequest("get", endpoint);
  }

  async post<T>(endpoint: string, data?: T): Promise<any> {
    return this.makeRequest("post", endpoint, data);
  }

  async delete<T>(endpoint: string, data?: T): Promise<T> {
    return this.makeRequest("delete", endpoint, data);
  }

  async put<T>(endpoint: string, data?: any): Promise<T> {
    return this.makeRequest("put", endpoint, data);
  }

  async patch<T>(endpoint: string, data?: any): Promise<T> {
    return this.makeRequest("patch", endpoint, data);
  }
}
