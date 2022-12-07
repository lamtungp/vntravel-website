import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputAdornment,
  OutlinedInput,
  Theme,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

import { useAppDispatch } from '@/common/redux/hooks';
import { getPlaceData } from '@/common/redux/place/place.slice';
import Layout from '@/layouts';
import HotelBooking from '@/components/Booking/HotelBooking';

const useStyles = makeStyles((theme: Theme) => ({
  Root: {
    paddingTop: '84px',
    minHeight: 'calc(100vh - 90px)',
    background: '#F2F3F3',
    position: 'relative',
  },

  BoxContainer: {
    margin: '0 auto',
    marginTop: '44px',
    maxWidth: 1240,
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1))',

    [theme.breakpoints.down(1300)]: {
      marginLeft: 20,
      marginRight: 20,
    },
    padding: '8px 70px 24px',
    background: '#FFFFFF',
    borderRadius: 24,

    [theme.breakpoints.down('md')]: {
      padding: '12px 20px',
    },
  },

  ContentContainer: {
    margin: '0 auto',
    maxWidth: 1640,

    [theme.breakpoints.down(1300)]: {
      marginLeft: 20,
      marginRight: 20,
    },
    padding: '40px 70px 24px',

    [theme.breakpoints.down('md')]: {
      padding: '12px 20px',
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

  Divider: {
    margin: theme.spacing(3, 0),
  },
}));

const HotelScheduleSearch = () => {
  const classes = useStyles();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [values, setValues] = useState({});

  const getDataSearch = (lo?: string | string[], dt?: string | string[]) => {
    dispatch(getPlaceData({ lo, dt }));
  };

  useEffect(() => {
    const { lo, dt } = router.query;
    getDataSearch(lo, dt);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query]);

  return (
    <Layout>
      <Head>
        <title>VnTravel | Hotel Search</title>
      </Head>
      <Box className={classes.Root}>
        <Box sx={{ padding: '0 70px 24px' }}>
          <Box className={classes.BoxContainer}>
            <Grid container>
              <Grid item xs={12} md={10}>
                <HotelBooking values={values} setValues={setValues} />
              </Grid>
              <Grid item xs={12} md={2} position="relative" textAlign="center">
                <Button
                  className={classes.ButtonSubmit}
                  variant="contained"
                  onClick={() => {}}
                >
                  <Typography className={classes.ButtonText}>Search</Typography>
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Box
          className={classes.ContentContainer}
          sx={{ marginTop: '44px', borderRadius: '4px' }}
        >
          <Grid container spacing={5}>
            <Grid item xs={3}>
              <Box>
                <Typography>Search location</Typography>
                <FormControl fullWidth variant="outlined">
                  <OutlinedInput
                    id="outlined-adornment-weight"
                    endAdornment={
                      <InputAdornment position="end">kg</InputAdornment>
                    }
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                      'aria-label': 'weight',
                    }}
                    placeholder="Search location"
                    sx={{ background: '#fdfdfd' }}
                  />
                </FormControl>
              </Box>
              <Box sx={{ marginTop: '24px' }}>
                <Typography>Popular Filter</Typography>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Label"
                  />
                  <FormControlLabel control={<Checkbox />} label="Disabled" />
                </FormGroup>
              </Box>
              <Divider className={classes.Divider} />
              <Box>
                <Typography>Your budgets</Typography>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Label"
                  />
                  <FormControlLabel control={<Checkbox />} label="Disabled" />
                </FormGroup>
              </Box>
              <Divider className={classes.Divider} />
              <Box>
                <Typography>Property Type</Typography>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Label"
                  />
                  <FormControlLabel control={<Checkbox />} label="Disabled" />
                </FormGroup>
              </Box>
              <Divider className={classes.Divider} />
              <Box>
                <Typography>Property Type</Typography>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Label"
                  />
                  <FormControlLabel control={<Checkbox />} label="Disabled" />
                </FormGroup>
              </Box>
            </Grid>
            <Grid item xs={9}>
              dssd
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Layout>
  );
};

export default HotelScheduleSearch;
