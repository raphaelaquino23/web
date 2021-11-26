// import { UserForm } from "./views/UserForm";
// import { User } from "./models/User";
//
// const user = User.buildUser({ name: "Users NAME", age: 20 });
//
// const root = document.getElementById("root")
//
// if(root){
//   const userForm = new UserForm(root, user);
//   userForm.render();
// }else {
//   throw new Error("Root element not found");
// }
// // Display Edit Form (Adding User / Saving User


// Display Collection of Users
import {UserList} from "./views/UserList";
import {Collection} from "./models/Collection";
import {UserProps, User} from "./models/User";

const users = new Collection('http://localhost:3000/users',
    (json: UserProps) => {
      return User.buildUser(json);
    }
);

users.on('change', () => {
  const root = document.getElementById('root');

  if(root){
    new UserList(root, users).render();
  }
});

users.fetch();
