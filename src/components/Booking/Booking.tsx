/* eslint-disable react/no-children-prop */
import { useState } from 'react';
import {
  Box,
  Button,
  Divider,
  Grid,
  Tab,
  Tabs,
  Theme,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Hotel, FlightTakeoff, DirectionsCar } from '@mui/icons-material';
import { useRouter } from 'next/router';
import moment from 'moment';

import TabBooking from './TabBooking';
import FlightBooking from './FlightBooking';
import HotelBooking from './HotelBooking';
import CarBooking from './CarBooking';

const useStyles = makeStyles((theme: Theme) => ({
  Root: {
    margin: '0 auto',
    padding: 0,
    paddingBottom: 50,
    marginTop: -95,
    maxWidth: 1240,
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1))',

    [theme.breakpoints.down(1300)]: {
      marginLeft: 20,
      marginRight: 20,
    },
  },

  BookingContainer: {
    padding: '24px 70px',
    background: '#FFFFFF',
    borderRadius: 14,

    [theme.breakpoints.down('md')]: {
      padding: '12px 20px',
    },
  },

  TabItem: {
    '& .MuiTypography-root': {
      display: 'flex',
      gap: 10,
      textTransform: 'none',
      fontWeight: 600,
      fontSize: 14,

      '& span': {
        justifyContent: 'center',
        alignItems: 'center',
      },

      '& .MuiSvgIcon-root': {
        fontSize: 30,
      },
    },
  },

  ButtonSubmit: {
    background: '#438BF7',
    borderRadius: 10,

    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      bottom: 0,
      right: 0,
    },

    [theme.breakpoints.down('md')]: {
      marginTop: 10,
    },
  },

  ButtonText: {
    fontWeight: 400,
    fontSize: 14,
    alignItems: 'center',
    textAlign: 'center',
    color: '#FFFFFF',
  },
}));

const Booking = () => {
  const classes = useStyles();
  const router = useRouter();

  const [value, setValue] = useState(0);
  const [resultSearch, setResultSearch] = useState<any>({});

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const onSubmit = (values: any) => {
    if (values.type === 'hotel') {
      const checkin = moment(values.checkin).format('YYYY-DD-MM');
      const checkout = moment(values.checkout).format('YYYY-DD-MM');

      router.push(
        `/hotel/schedule/search?lo=${
          values.location || ''
        }&dt=${checkin}.${checkout}`,
      );
    }
  };

  return (
    <Box className={classes.Root}>
      <Box className={classes.BookingContainer}>
        <Grid container>
          <Grid item xs={12} md={10}>
            <Tabs variant="scrollable" value={value} onChange={handleChange}>
              <Tab
                className={classes.TabItem}
                label={
                  <Typography color="#706868">
                    <Hotel />
                    <Typography fontSize={14} component="span">
                      Hotel
                    </Typography>
                  </Typography>
                }
              />
              <Tab
                className={classes.TabItem}
                label={
                  <Typography color="#706868">
                    <FlightTakeoff />
                    <Typography component="span">Flight</Typography>
                  </Typography>
                }
              />
              <Tab
                className={classes.TabItem}
                label={
                  <Typography color="#706868">
                    <DirectionsCar />
                    <Typography component="span">Car Rental</Typography>
                  </Typography>
                }
              />
            </Tabs>
            <Divider />
            <TabBooking
              children={
                <HotelBooking
                  values={resultSearch}
                  setValues={setResultSearch}
                />
              }
              value={value}
              index={0}
            />
            <TabBooking
              children={
                <FlightBooking
                  values={resultSearch}
                  setValues={setResultSearch}
                />
              }
              value={value}
              index={1}
            />
            <TabBooking
              children={
                <CarBooking values={resultSearch} setValues={setResultSearch} />
              }
              value={value}
              index={2}
            />
          </Grid>
          <Grid item xs={12} md={2} position="relative" textAlign="center">
            <Button
              className={classes.ButtonSubmit}
              variant="contained"
              onClick={() => onSubmit(resultSearch)}
            >
              <Typography className={classes.ButtonText}>Search</Typography>
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Booking;
