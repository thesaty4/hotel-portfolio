import RequestService from "../../../shared/service/RequestService";
import { LoginType, UserType } from "../types/users.type";

export default class Auth extends RequestService {
  signUp(data: UserType): Promise<UserType> {
    return this.post(`/api/v1/sign-up`, data);
  }

  login(data: LoginType): Promise<LoginType> {
    return this.get(`/api/v1/sign-in`);
  }

  clearUsers(): Promise<{ deletedUsers: UserType[] }> {
    return this.delete(`/api/v1/users`);
  }
}
