import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export const TabItem = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Режим просмотра" />
          <Tab label="Режим редактирования" />
          <Tab label="Режим полного просмотра" />
        </Tabs>
      </Box>
    </>
  );
}