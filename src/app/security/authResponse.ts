import { User } from "../shared/models/User";

export interface AuthResponse {
    user: User,
    token: string
}