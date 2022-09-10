export interface User {
    name: string;
    email: string;
    number: number;
    site: string;
}

export interface InitialState {
    users: User[];
    postsLoading: boolean;
    usersLoading: boolean;
    error: string;
}

export interface Posts {
    userId: 1;
    id: 1;
    title: string;
    body: string;
}
