import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
  Theme,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { StarRounded } from '@mui/icons-material';

const useStyles = makeStyles((theme: Theme) => ({
  Root: {
    padding: 24,
    border: '1px solid #D6D2D2',
    boxShadow: 'none',
    borderRadius: 14,
    display: 'flex',

    '&:hover': {
      cursor: 'pointer',
      boxShadow:
        '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
    },

    [theme.breakpoints.down(1004)]: {
      padding: 18,
    },

    [theme.breakpoints.down('sm')]: {
      padding: 14,
    },

    [theme.breakpoints.down(434)]: {
      display: 'block',
    },
  },

  CardMedia: {
    borderRadius: 14,

    [theme.breakpoints.up(434)]: {
      maxWidth: 183,
      maxHeight: 194,
    },
  },

  CardContent: {
    position: 'relative',
    paddingLeft: theme.spacing(3),
    flex: '1 0 auto',

    [theme.breakpoints.down('sm')]: {
      padding: 0,
      paddingLeft: theme.spacing(2),
    },

    [theme.breakpoints.down(434)]: {
      paddingLeft: 0,
      paddingTop: theme.spacing(2),
    },
  },

  CardTitle: {
    [theme.breakpoints.down(1004)]: {
      fontSize: 18,
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
  },

  ButtonBook: {
    width: 140,
    background: '#438BF7',
    borderRadius: 10,
    color: '#FFFFFF',
    textTransform: 'none',
    fontWeight: 500,
    fontSize: 16,
    marginTop: theme.spacing(2),

    [theme.breakpoints.down('sm')]: {
      fontSize: 14,
    },
  },

  TextPrice: {
    color: '#132150',
    marginRight: theme.spacing(1),
  },
}));

type VTCardProps = {
  title?: string;
  price?: string;
  currency?: string;
  rating?: number;
  image?: string;
};

const VTCardTrending = ({
  title,
  price,
  currency,
  rating,
  image,
}: VTCardProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.Root}>
      <CardMedia
        className={classes.CardMedia}
        component="img"
        image={image}
        alt={title}
      />
      <CardContent className={classes.CardContent}>
        <Typography
          className={classes.CardTitle}
          component="div"
          variant="h3"
          color="#132150"
        >
          {title}
        </Typography>
        <Box sx={{ display: 'flex', margin: '10px 0' }}>
          <StarRounded htmlColor="#faaf00" sx={{ marginRight: '4px' }} />
          {rating} (120 reviews)
        </Box>

        <Typography
          marginTop={'10px'}
          variant="body1"
          color="text.secondary"
          component="div"
        >
          <Typography
            className={classes.TextPrice}
            variant="body1"
            color="secondary"
            component="span"
          >
            {price}
          </Typography>
          {currency}/night
        </Typography>

        <Button
          className={classes.ButtonBook}
          onClick={() => {}}
          variant="contained"
        >
          Book Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default VTCardTrending;
