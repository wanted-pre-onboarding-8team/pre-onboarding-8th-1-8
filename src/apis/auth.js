import { client } from './index';

export const signUp = formData => client.post('/auth/signup', { email: formData.email, password: formData.password });

export const signIn = formData => client.post('/auth/signin', { email: formData.email, password: formData.password });
