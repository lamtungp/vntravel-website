import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
  Theme,
  Chip,
  Grid,
  SxProps,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import {
  EventNoteOutlined,
  LanguageOutlined,
  LocalParkingOutlined,
  PlaceOutlined,
  RssFeedOutlined,
  StarRounded,
  TourOutlined,
} from '@mui/icons-material';

const useStyles = makeStyles((theme: Theme) => ({
  Root: {
    border: '1px solid #D6D2D2',
    boxShadow: 'none',
    borderRadius: 14,
    display: 'flex',

    '&:hover': {
      cursor: 'pointer',
      boxShadow:
        '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
    },

    [theme.breakpoints.down(434)]: {
      display: 'block',
    },
  },

  CardMedia: {
    borderRadius: '14px 0 0 14px',

    [theme.breakpoints.up(434)]: {
      maxWidth: '40%',
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
    fontSize: 24,
    marginBottom: '24px',

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

type VTCardHotelSearchProps = {
  title?: string;
  price?: string;
  currency?: string;
  rating?: number | string;
  image?: string;
  sx?: SxProps;
};

const VTCardHotelSearch = ({
  title,
  price,
  currency,
  rating,
  image,
  sx,
}: VTCardHotelSearchProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.Root} sx={sx}>
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
        <Box sx={{ display: 'flex', marginBottom: '34px' }}>
          <Box display="contents">
            <StarRounded htmlColor="#faaf00" sx={{ marginRight: '4px' }} />
            <Typography component={'span'} marginRight={4}>
              {rating} (120 reviews)
            </Typography>
          </Box>
          <Box display="contents">
            <TourOutlined sx={{ marginRight: '4px' }} />
            <Typography component={'span'}>Da Nang, Viet Nam</Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', marginBottom: '34px' }}>
          <Box display="contents">
            <PlaceOutlined sx={{ marginRight: '4px' }} />
            <Typography component={'span'} marginRight={4}>
              Hotel, Viet Nam
            </Typography>
          </Box>
          <Box display="contents">
            <EventNoteOutlined sx={{ marginRight: '4px' }} />
            <Typography component={'span'}>25.01.2022 - 29.01.2022</Typography>
          </Box>
        </Box>

        <Grid container>
          <Grid item xs={12} sm={8}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box display="flex">
                <RssFeedOutlined sx={{ marginRight: '4px' }} />
                <Typography
                  component={'span'}
                  marginRight={4}
                  marginBottom="14px"
                >
                  Free Wifi
                </Typography>
              </Box>
              <Box display="flex">
                <LocalParkingOutlined sx={{ marginRight: '4px' }} />
                <Typography
                  component={'span'}
                  marginRight={4}
                  marginBottom="14px"
                >
                  Free Parking
                </Typography>
              </Box>
              <Box display="flex">
                <LanguageOutlined sx={{ marginRight: '4px' }} />
                <Typography
                  component={'span'}
                  marginRight={4}
                  marginBottom="14px"
                >
                  Visit hotel website
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box>
              <Chip
                sx={{ height: '40px', fontSize: '16px', fontWeight: 'bold' }}
                label={`${price}${currency}`}
              />
            </Box>

            <Button
              className={classes.ButtonBook}
              onClick={() => {}}
              variant="contained"
            >
              Book Now
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default VTCardHotelSearch;
