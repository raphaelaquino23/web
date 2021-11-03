import axios, { AxiosResponse } from "axios";

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  fetch(): void {
    const id = this.get('id');
    axios
      .get(`http://localhost:3000/users/${id}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      });
  }

  save(): void {
    const id = this.get('id');
    //put 
    if(id){
      axios.put(`http://localhost:3000/users/${id}`);
    } else {
      axios.post('http://localhost:3000/users', this.data);
    }
  }
}
