import { User } from './models/User';

const user = new User({ name: 'new user 2', age: 0});

class Person {
    constructor ( public firstName: string, public lastName: string){}

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(user.get('name'));

user.on('change', () => {
    console.log('User was changed')
})

user.save();