import { Item } from "../todo/TodoInt";

export interface TodoItemsProp {
  todoItems: Item[];
  setActive: (task: Item) => void;
}