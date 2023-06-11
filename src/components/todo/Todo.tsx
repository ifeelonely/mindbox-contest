import TodoItems from '../todoItems/TodoItems';
import { SelectChangeEvent, TextField } from '@mui/material';
import { BiMessageAltAdd } from 'react-icons/bi';
import classes from './Todo.module.css';
import { useState } from 'react';
import { Item } from './TodoInt';
import TodoSort from '../todoSort/TodoSort';

const Todo = (): JSX.Element => {
  const [textField, setTextField] = useState<string>('');
  const [todoItems, setTodoItems] = useState<Item[]>([
    { text: 'run', id: 0, active: true },
  ]);
  const [sortOpt, setSortOpt] = useState<string>('all');

  const addTask = () => {
    setTodoItems([
      ...todoItems,
      { text: textField, id: todoItems.length, active: true },
    ]);
  };

  const setActive = (task: Item) => {
    setTodoItems(
      todoItems.map((item) => {
        if (task.id === item.id) return { ...task, active: !item.active };
        return item;
      })
    );
  };

  const getSortOpt = (e: SelectChangeEvent) => {
    setSortOpt(e.target.value);
  };

  const defineSortedArr = (): Item[] => {
    if (sortOpt === 'all') return todoItems;
    if (sortOpt === 'active') return todoItems.filter((el) => el.active);
    if (sortOpt === 'completed') return todoItems.filter((el) => !el.active);
    return todoItems;
  };

  const clearCompleted = () => {
    setTodoItems(todoItems.filter((el) => el.active));
  };

  return (
    <div className={classes.todo}>
      <h1 style={{ textAlign: 'center', color: 'grey' }}>todos</h1>
      <div className={classes.addTask}>
        <TextField
          value={textField}
          onChange={(e) => setTextField(e.target.value)}
          sx={{
            width: '100%',
            label: { fontSize: '1.5rem' },
            '.MuiInputBase-input': { fontSize: '1.5rem' },
          }}
          id="outlined-basic"
          label="What needs to be done?"
          variant="outlined"
        />
        <BiMessageAltAdd className={classes.addIcon} onClick={addTask} />
      </div>
      {todoItems.length ? (
        <TodoItems setActive={setActive} todoItems={defineSortedArr()} />
      ) : (
        <h1 style={{ textAlign: 'center', color: 'grey' }}>No tasks yet!</h1>
      )}
      <TodoSort
        items={todoItems.length}
        getSortOpt={getSortOpt}
        currentOpt={sortOpt}
        clearCompleted={clearCompleted}
      />
    </div>
  );
};

export default Todo;
