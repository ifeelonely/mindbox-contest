import FormControlLabel from '@mui/material/FormControlLabel/FormControlLabel';
import { TodoItemsProp } from './TodoItemsInt';
import { Checkbox } from '@mui/material';
import classes from './TodoItems.module.css';

const TodoItems = ({ setActive, todoItems }: TodoItemsProp): JSX.Element => {
  return (
    <div className={classes.todoItems}>
      {todoItems.map((el) => {
        return (
          <FormControlLabel
            style={{
              width: '100%',
              backgroundColor: 'white',
              color: 'var(--active-black)',
              margin: 0,
              border: '2px solid var(--second-grey)',
            }}
            control={
              <Checkbox
                checked={!el.active}
                onClick={() => {
                  setActive(el);
                }}
              />
            }
            label={el.text}
            key={el.id}
            sx={{
              '& .css-ahj2mt-MuiTypography-root': {
                fontSize: '2rem',
                textDecoration: el.active ? 'none' : 'line-through',
              },
            }}
          />
        );
      })}
    </div>
  );
};

export default TodoItems;
