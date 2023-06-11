import { MenuItem, Select } from '@mui/material';
import classes from './TodoSort.module.css';
import { SortProps } from './TodoSortInt';

const TodoSort = ({
  items,
  getSortOpt,
  currentOpt,
  clearCompleted,
}: SortProps): JSX.Element => {
  return (
    <div className={classes.todoSort}>
      <div>Overall items: {items}</div>
      <Select
        sx={{
          width: '100%',
          maxWidth: '20rem',
          maxHeight: '3rem',
          fontSize: '1.5rem',
          color: 'grey',
        }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Age"
        onChange={(e) => {
          getSortOpt(e);
        }}
        value={currentOpt}
      >
        <MenuItem value={'all'}>All</MenuItem>
        <MenuItem value={'active'}>Active</MenuItem>
        <MenuItem value={'completed'}>Completed</MenuItem>
      </Select>
      <div>
        <button onClick={clearCompleted} className={classes.sortBtn}>
          Clear completed
        </button>
      </div>
    </div>
  );
};

export default TodoSort;
