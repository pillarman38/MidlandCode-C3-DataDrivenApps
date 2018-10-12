import { Address } from "./address";
import { Company } from "./company";

export interface User {
    id? : number,
    name?: string,
    username?: string,
    email?: string,
    address?: Address,
    company?: Company,
    error?: string
}