interface User {
  username: string;
  avatarUrl: string;
  githubUrl: string;
  name: string;
  reposCount: number;
}

interface UsersState {
  usersList: User[];
  user: User | null;
  isLoading: boolean;
}
