interface User {
    username: string;
    avatarUrl: string;
    githubUrl: string;
}

interface UsersState {
    usersList: User[];
    selectedUser: User | null;
    isLoading: boolean;
}
