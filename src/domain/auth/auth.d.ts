export type AuthUserResponse = {
  success: 'true' | 'false';
  userId: string;
  userName: string;
  refreshToken: string;
  sessionToken: string;
  message?: string;
};

export interface IAuthService {
  logout(): Promise<boolean>;

  login(username: string, password: string): Promise<AuthUserResponse>;

  public getAuthUser(token: string): Promise<AuthUserResponse>;
}
