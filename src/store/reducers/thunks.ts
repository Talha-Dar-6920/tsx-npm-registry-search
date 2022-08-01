import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RequestDataInterface } from '../interfaces';

export const fetchPackages = createAsyncThunk('fetchPackages', async (name: string) => {
  const response = await axios.get(`https://registry.npmjs.com/-/v1/search?`, {
    params: {
      text: name,
    },
  });
  const { objects } = response.data;
  const data = objects.map((item: RequestDataInterface) => {
    return {
      name: item.package.name,
      version: item.package.version,
      description: item.package.description,
      date: item.package.date,
    };
  });

  return data;
});
