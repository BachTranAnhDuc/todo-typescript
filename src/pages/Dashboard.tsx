import React, { FC, ReactElement } from 'react';

import { Grid } from '@mui/material';

import { Sidebar, TaskArea } from '../components';

const Dashboard: FC = (): ReactElement => {
  return (
    <Grid container minHeight="100vh" p={0} m={0}>
      <TaskArea></TaskArea>
      <Sidebar></Sidebar>
    </Grid>
  );
};

export default Dashboard;
