import { UserProps } from "./User";

export class Attributes<T> {
  constructor(private data: T) {}

  //generic constraint <K extends keyof T> limits types T can be
  //K can be only 1 of the types of T (name, age or id in this case)
  //We are getting the types of T as strings (name, age or id)
  //and returns the corresponding type

  // arrow operator to ensure the attributes is bound to this rather than to the function.

  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  set(update: T): void {
    Object.assign(this.data, update);
  }

  getAll(): T{
    return this.data;
  }
}

const attrs = new Attributes<UserProps>({
  id: 5,
  age: 20,
  name: "asdf",
});

const name = attrs.get("name");
const age = attrs.get("age");
const id = attrs.get("id");

// We can declare a type in order to define a function
// that only runs after a specific type
// type Name = 'Test';
//
// const printName = (name: Name) : void => {}
//
// the above will not call unless it is of type Name;
//
// printName('Test') // will work
// printName('colors') // will not work
