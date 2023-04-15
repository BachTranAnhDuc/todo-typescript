import React, { FC, ReactElement } from 'react';
import { Typography, Box, TextField } from '@mui/material';
import { ITextField } from './interfaces/ITextField';

const TaskTitleField: FC<ITextField> = (
  props,
): ReactElement => {
  const {
    onChange = (e) => console.log(e.target.value),
    disabled = false,
  } = props;

  return (
    <TextField
      id="title"
      label="Task Title"
      placeholder="Task Title"
      variant="outlined"
      size="small"
      name="title"
      disabled={disabled}
      fullWidth
      onChange={onChange}
    ></TextField>
  );
};

export default TaskTitleField;
