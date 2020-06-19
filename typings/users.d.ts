interface User {
    username: string;
}

interface UsersState {
    usersList: User[];
    isLoading: boolean;
}
