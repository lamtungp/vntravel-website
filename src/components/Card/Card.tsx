import React from 'react';
import { Card, CardMedia, CardContent, Typography, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { BedOutlined } from '@mui/icons-material';

const useStyles = makeStyles((theme: Theme) => ({
  Root: {
    border: '1px solid #D6D2D2',
    boxShadow: 'none',
    borderRadius: 14,
    padding: 24,

    '&:hover': {
      cursor: 'pointer',
      boxShadow:
        '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
    },

    '& .MuiCardMedia-root': {
      borderRadius: 14,
    },

    '& .MuiCardContent-root': {
      paddingLeft: 0,
      paddingRight: 0,
      paddingBottom: '0 !important',
    },

    [theme.breakpoints.down('md')]: {
      padding: 16,
    },
  },

  CardTitle: {
    fontWeight: 700,
    fontSize: 20,
    lineHeight: '36px',
    color: '#132150',

    [theme.breakpoints.down('md')]: {
      fontSize: 16,
    },
  },

  CardDescription: {
    fontWeight: 600,
    fontSize: 16,
    color: '#5C5B5B',

    [theme.breakpoints.down('md')]: {
      fontSize: 14,
    },
  },

  RoomAvailable: {
    fontSize: 16,
    color: '#5C5B5B',
    marginTop: 10,

    [theme.breakpoints.down('md')]: {
      fontSize: 14,
    },
  },
}));

type VTCardProps = {
  title?: string;
  description?: string;
  image?: string;
  roomAvailable?: number;
};

const VTCard = ({ title, description, image, roomAvailable }: VTCardProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.Root}>
      {image && (
        <CardMedia component="img" width={384} image={image} alt={title} />
      )}

      <CardContent>
        {title && (
          <Typography
            className={classes.CardTitle}
            gutterBottom
            variant="subtitle1"
            component="div"
          >
            {title}
          </Typography>
        )}

        {description && (
          <Typography
            className={classes.CardDescription}
            variant="body2"
            color="text.secondary"
          >
            {description}
          </Typography>
        )}

        {roomAvailable && (
          <>
            <Typography
              className={classes.RoomAvailable}
              variant="body2"
              color="text.secondary"
              component="div"
            >
              <BedOutlined
                sx={{ verticalAlign: 'bottom', marginRight: '10px' }}
              />
              Room Available: {roomAvailable}
            </Typography>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default VTCard;
