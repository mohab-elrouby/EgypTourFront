export interface LoginResponse {
    Token: string;
    Status: string;
    userDTO: {
        id: number,
        fname: string,
        lname: string,
        email: string,
        usernameName: string,
        password: string,
        profilePictureUrl: string,
        city: null,
        phone: string
    }
}
