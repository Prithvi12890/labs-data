import React from 'react';
import LabCards from './LabCards';
import ExpCards from './ExpCards';
import ErrorPage from './ErrorPage';
import { Routes, Route } from 'react-router-dom';
import mcExpData from '../data/mcExpData.json';
import mweExpData from '../data/mweExpData.json'
import dspExpData from '../data/dspExpData.json';

const NavigateTo = () => {
  return (
    <Routes>
      <Route path="/labs-data" element={<LabCards />} />
      <Route path="/labs-data/home" element={<LabCards />} />
      <Route path="/labs-data/home/dsp" element={<ExpCards expData={dspExpData} />} />
      <Route path="/labs-data/home/mc" element={<ExpCards expData={mcExpData} />} />
      <Route path="/labs-data/home/mwe" element={<ExpCards expData={mweExpData} />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

export default NavigateTo;