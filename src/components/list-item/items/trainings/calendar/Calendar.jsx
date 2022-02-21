import * as React from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import CalendarPicker from '@mui/lab/CalendarPicker';
import Grid from '@mui/material/Grid';

export const Calendar = () => {
  const [date, setDate] = React.useState(new Date());

  const changeDate = (newDate) => {
    setDate(newDate);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Grid item xs={12} md={6}>
          <CalendarPicker date={date} onChange={changeDate} />
        </Grid>
    </LocalizationProvider>
  );
}