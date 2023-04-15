import React, { FC, ReactElement } from 'react';
import { Typography, Box, TextField } from '@mui/material';
import { ITextField } from './interfaces/ITextField';

const TaskDescriptionField: FC<ITextField> = (
  props,
): ReactElement => {
  const {
    onChange = (e) => console.log(e.target.value),
    disabled = false,
  } = props;

  return (
    <TextField
      id="description"
      name="description"
      label="Description"
      placeholder="Description"
      variant="outlined"
      size="small"
      fullWidth
      multiline
      rows={4}
      disabled={disabled}
      onChange={onChange}
    ></TextField>
  );
};

export default TaskDescriptionField;
