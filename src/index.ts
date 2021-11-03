import { User } from './models/User';

const user = new User({});

user.set({ name: 'New Record', age: 9999});

user.save();