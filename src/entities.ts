export interface User {
    name: string;
    email: string;
    number: number;
    site: string;
}

export interface InitialState {
    users: User[];
    usersLoading: boolean;
    error: string;
}
