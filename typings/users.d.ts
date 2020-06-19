interface User {
    username: string;
    avatarUrl: string;
}

interface UsersState {
    usersList: User[];
    isLoading: boolean;
}
