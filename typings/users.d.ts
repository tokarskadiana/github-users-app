interface User {
    username: string;
    avatarUrl: string;
}

interface UsersState {
    usersList: User[];
    selectedUser: User | null;
    isLoading: boolean;
}
