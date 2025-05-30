export type User = {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    username: string;
    password: string;
}


export type PartnerSignupData = {
    first_name: string;
    last_name: string;
    email: string;
    username: string;
    password: string;
    otp: string;
}