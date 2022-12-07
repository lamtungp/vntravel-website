import React from 'react';
import Image from 'next/image';
import { Button, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  SocialButton: {
    fontSize: '1rem',
    fontWeight: 500,
    backgroundColor: theme.palette.grey[50],
    border: '1px solid',
    borderColor: theme.palette.grey[100],
    borderRadius: 10,
    color: theme.palette.grey[700],
    textTransform: 'none',

    '&:hover': {
      backgroundColor: 'rgb(227, 242, 253)',
    },

    [theme.breakpoints.down('sm')]: {
      '& .MuiTypography-root': {
        fontSize: '0.82rem',
      },
    },
  },
}));

type VTSocialButtonProps = {
  size?: 'small' | 'medium' | 'large';
  srcImage: string;
  title: string;
  variant?: 'text' | 'outlined' | 'contained';
  isSubmitting?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const VTSocialButton = ({
  title,
  variant,
  isSubmitting,
  onClick,
  srcImage,
  size,
}: VTSocialButtonProps) => {
  const classes = useStyles();

  return (
    <Button
      disableElevation
      fullWidth
      disabled={isSubmitting}
      className={classes.SocialButton}
      onClick={onClick}
      size={size}
      variant={variant}
    >
      <Image src={srcImage} alt={title} width={20} height={20} />
      <Typography component="span" marginLeft={'16px'}>
        {title}
      </Typography>
    </Button>
  );
};

export default VTSocialButton;
