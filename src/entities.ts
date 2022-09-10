export interface User {
    id: number;
    name: string;
    email: string;
    phone: number;
    website: string;
}

export interface InitialState {
    users: User[];
    postsLoading: boolean;
    usersLoading: boolean;
    error: string;
}

export interface Posts {
    userId: number;
    id: number;
    title: string;
    body: string;
}
