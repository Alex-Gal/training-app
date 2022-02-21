import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {TabItem} from './tab-item/TabItem';
import {Calendar} from './calendar/Calendar';
import TextField from '@mui/material/TextField';

export const Trainings = () =>  {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="Тренировки" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <TabItem/>
          <Calendar/>
          <TextField id="filled-basic" label="Filled" variant="filled" />
        </List>
      </Collapse>
    </List>
  );
}