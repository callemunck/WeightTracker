export interface User {
    user_id: number;
    username: string;
    email: string;
    password_hash: string;
    created_at: string;
    updated_at: string;
  }
  
  export const defaultUser: User = {
    user_id: -1, // or a suitable default value
    username: 'Guest',
    email: '',
    password_hash: '',
    created_at: '',
    updated_at: '',
  };  