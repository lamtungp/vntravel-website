import {
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  Theme,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  FormInput: {
    marginTop: 8,
    marginBottom: 8,

    '& .MuiOutlinedInput-root': {
      borderRadius: 10,
      paddingRight: 0,
    },

    '& > label': {
      top: '16px',
      left: 0,
      '&[data-shrink="false"]': {
        top: '5px',
      },
    },

    '& > div > input': {
      padding: '30px 14px 11px !important',
    },

    '& legend': {
      display: 'none',
    },

    '& fieldset': {
      top: 0,
    },

    [theme.breakpoints.down('sm')]: {
      '& .MuiInputLabel-root': {
        fontSize: 14,
      },
    },
  },
}));

type VTFormInputProps = {
  id: string;
  isError?: boolean;
  type: string;
  errorMessage?: string;
  value: any;
  name?: string;
  label?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  endAdornment?: React.ReactNode;
};

const VTFormInput = ({
  id,
  isError,
  errorMessage,
  type,
  name,
  value,
  onChange,
  label,
  endAdornment,
}: VTFormInputProps) => {
  const classes = useStyles();

  return (
    <FormControl fullWidth error={isError} className={classes.FormInput}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <OutlinedInput
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        endAdornment={endAdornment}
        label={label}
        autoComplete="true"
        autoFocus={true}
      />
      {isError && <FormHelperText component="p">{errorMessage}</FormHelperText>}
    </FormControl>
  );
};

export default VTFormInput;
