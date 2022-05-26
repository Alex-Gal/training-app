import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { TabItem } from './tab-item/TabItem';
import { Calendar } from './calendar/Calendar';

export const Trainings = () => {
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
          <TabItem />
          <Calendar />
          <div className='inputs'>
            <input className='inputs__input' type="text" placeholder='Оплата' />
            <input className='inputs__input' type="text" placeholder='Вес' />
            <p className='inputs__set-number'>Сет #1</p>
            <input className='inputs__input' type="text" />
          </div>
          <div className='buttons'>
            <div>
              <button className='buttons__button buttons__button_add-exercise'>Добавить упражнение</button>
              <button className='buttons__button buttons__button_del-set'>Удалить сет</button><br/>
            </div>
            <div className='buttons__second-line'>
              <button className='buttons__button buttons__button_add-set'>Добавить сет</button>
              <button className='buttons__button buttons__button_save'>Cохранить</button>
            </div>
          </div>
        </List>
      </Collapse>
    </List>
  );
}