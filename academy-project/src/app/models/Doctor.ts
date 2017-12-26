export interface Doctor {
    $key?: string;
    password?:string; 
    confirmPassword?:string; 
    email?: string;
    phoneNumber?: string;
    firstName?: string;
    lastName?: string;
    birthday?: string;
}