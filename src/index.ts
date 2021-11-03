import { User } from './models/User';

const user = new User({ name: 'trigger user ', age: 0});

user.events.on('change', () =>{
    console.log('change!');
})

user.events.trigger('change');