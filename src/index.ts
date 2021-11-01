import { User } from './models/User';

const user = new User({});

user.set({ name: 'New Name', age: 9999});

user.save();