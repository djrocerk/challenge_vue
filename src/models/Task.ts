import { BaseModel } from "./BaseModel";

export class Task {
  _id: string;
  title: string;
  description: string;
  completed: boolean;

  constructor(_id: string, title: string, description: string) {
    this._id = _id;
    this.title = title;
    this.completed = false;
    this.description = description;
  }
}

export default Task;
