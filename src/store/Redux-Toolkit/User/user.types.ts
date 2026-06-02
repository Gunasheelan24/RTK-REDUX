export interface User {
  id: number;
  name: string;
  userName: string;
  email: string;
}

export interface UserTypes {
  error: string;
  loading: boolean;
  users: User[];
}
