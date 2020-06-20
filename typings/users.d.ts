interface User {
  avatarUrl: string;
  githubUrl: string;
  name: string;
  reposCount: number;
  username: string;
}

interface UsersState {
  isLoading: boolean;
  user?: User;
  usersList: User[];
}
