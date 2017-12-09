export interface Doctor {
    $key?: string;
    username?: string;
    password?:string; 
    confirmPassword?:string; 
    email?: string;
    firstName?: string;
    lastName?: string;
}