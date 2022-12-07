import React from 'react';
import { Button, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  SubmitButton: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    fontSize: '1rem',
    fontWeight: 500,
    backgroundColor: '#438BF7',
    color: '#fdfdfd',
    borderColor: theme.palette.grey[100],
    borderRadius: 6,
    textTransform: 'none',
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.875rem',
    },
  },
}));

type VTSubmitButtonProps = {
  title: string;
  variant?: 'text' | 'outlined' | 'contained';
  isSubmitting?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const VTSubmitButton = ({
  title,
  variant,
  isSubmitting,
  onClick,
}: VTSubmitButtonProps) => {
  const classes = useStyles();

  return (
    <Button
      fullWidth
      className={classes.SubmitButton}
      disabled={isSubmitting}
      onClick={onClick}
      variant={variant}
    >
      {title}
    </Button>
  );
};

export default VTSubmitButton;
