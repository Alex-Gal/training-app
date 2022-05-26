import React from "react";
import { Trainings } from "./items/trainings/Trainings";
import { PersonalInfo } from './items/personal-info/PersonalInfo';
import { Measurements } from './items/measurements/Measurements';
import { WomansCalendar } from './items/womans-calendar/WomansCalendar';

export const ListItem = () => {
  return (
    <>
      <PersonalInfo />
      <Trainings />
      <WomansCalendar />
      <Measurements />
    </>
  );
}