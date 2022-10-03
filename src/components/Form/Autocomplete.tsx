import React from 'react';
import {
  Autocomplete,
  Box,
  InputAdornment,
  TextField,
  Theme,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  Autocomplete: {
    '& .MuiOutlinedInput-root': {
      borderRadius: 10,
      border: 0,
      display: 'block',
      padding: '12px 17px',

      '& .MuiOutlinedInput-input': {
        width: '100%',
        padding: 0,
        fontWeight: 600,
        fontSize: 14,
      },
    },

    [theme.breakpoints.down('md')]: {
      '& .MuiOutlinedInput-root': {
        padding: 12,
      },
    },
  },

  BoxOptions: {
    borderRadius: 16,
  },

  TextInput: {
    background: '#F7F7F7',

    '& .MuiInputAdornment-root': {
      height: 'auto',
    },

    '& .MuiTypography-root': {
      fontWeight: 700,
      fontSize: 16,
      color: '#5C5B5B',
    },

    [theme.breakpoints.down('md')]: {
      '& .MuiTypography-root': {
        fontSize: 14,
      },
    },

    [theme.breakpoints.down('sm')]: {
      '& .MuiTypography-root': {
        fontSize: 12,
      },
      '& .MuiOutlinedInput-input': {
        fontSize: '12px !important',
      },
    },
  },
}));

type VTAutocompleteProps = {
  title: string;
  placeholder?: string;
  type: string;
  data: any[];
  IconComponent?: React.ReactNode;
  value?: any;
  onChange?: any;
};

const VTAutocomplete = ({
  IconComponent,
  title,
  placeholder,
  type,
  data,
  onChange,
}: VTAutocompleteProps) => {
  const classes = useStyles();

  return (
    <Autocomplete
      className={classes.Autocomplete}
      freeSolo
      disableClearable
      options={data}
      onChange={onChange}
      renderOption={(params: object, option: any) => (
        <Box key={option._id} className={classes.BoxOptions} {...params}>
          <Box sx={{ marginRight: 2 }}>{IconComponent}</Box>
          {option.title || ''}
        </Box>
      )}
      getOptionLabel={(option) => option.title || ''}
      renderInput={(params) => (
        <TextField
          {...params}
          className={classes.TextInput}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">{title}</InputAdornment>
            ),
            placeholder,
            type,
          }}
        />
      )}
    />
  );
};

export default VTAutocomplete;
