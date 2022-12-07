import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Theme,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ExpandMore, Search } from '@mui/icons-material';

import { useAppDispatch } from '@/common/redux/hooks';
import { getPlaceData } from '@/common/redux/place/place.slice';
import Layout from '@/layouts';
import HotelBooking from '@/components/Booking/HotelBooking';
import VTCardHotelSearch from '@/components/Card/CardHotelSearch';
import { SectionContainer } from '@/components/Section';
import { Extensions } from '@/components/Landing';

const useStyles = makeStyles((theme: Theme) => ({
  Root: {
    paddingTop: '84px',
    minHeight: 'calc(100vh - 90px)',
    background: '#fafafa',
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
    padding: '8px 60px 24px',
    background: '#FFFFFF',
    borderRadius: 14,

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

  Accordion: {
    boxShadow: 'none',
    margin: '0 !important',
    '&::before': {
      backgroundColor: 'inherit',
    },

    '& .MuiButtonBase-root': {
      padding: '0 16px',
    },

    '& .MuiAccordionSummary-content.Mui-expanded': {
      minHeight: '0 !important',
      margin: '12px 0 !important',
    },

    '& .MuiAccordionSummary-root': {
      borderTop: '1px solid rgba(0, 0, 0, 0.12)',
    },

    '& .MuiAccordionSummary-root.Mui-expanded': {
      minHeight: '0 !important',
    },

    '& .MuiCollapse-wrapper': {
      paddingTop: 12,
    },
  },

  Divider: {},
}));

const HotelScheduleSearch = () => {
  const classes = useStyles();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [values, setValues] = useState({});
  const [isLoading, setIsLoading] = useState(false);

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
              <Box sx={{ marginBottom: '12px' }}>
                <Typography sx={{ marginBottom: '10px' }}>
                  Search Location
                </Typography>
                <FormControl fullWidth variant="outlined">
                  <OutlinedInput
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton>
                          <Search color="primary" />
                        </IconButton>
                      </InputAdornment>
                    }
                    placeholder="Tìm kiếm..."
                    sx={{ background: '#FDFDFD', borderRadius: '10px' }}
                  />
                </FormControl>
              </Box>

              <Typography sx={{ marginBottom: '10px' }}>Filter</Typography>

              <Box sx={{ background: '#FFFFFF', borderRadius: '4px' }}>
                <Accordion className={classes.Accordion} defaultExpanded={true}>
                  <AccordionSummary expandIcon={<ExpandMore color="primary" />}>
                    <Typography sx={{ fontSize: '15px' }}>
                      Popular Filters
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ padding: 0 }}>
                    <FormGroup
                      sx={{
                        '& .MuiFormControlLabel-root': {
                          margin: 0,
                          marginBottom: 2,
                        },
                      }}
                    >
                      <FormControlLabel
                        sx={{
                          '& .MuiTypography-root': {
                            fontSize: '14px',
                          },
                        }}
                        control={<Checkbox defaultChecked />}
                        label="Label"
                      />
                      <FormControlLabel
                        sx={{
                          '& .MuiTypography-root': {
                            fontSize: '14px',
                          },
                        }}
                        control={<Checkbox />}
                        label="Disabled"
                      />
                    </FormGroup>
                  </AccordionDetails>
                </Accordion>

                <Accordion className={classes.Accordion} defaultExpanded={true}>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography sx={{ fontSize: '15px' }}>
                      Star Rating
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ padding: 0 }}>
                    <FormGroup
                      sx={{
                        '& .MuiFormControlLabel-root': {
                          margin: 0,
                          marginBottom: 2,
                        },
                      }}
                    >
                      <FormControlLabel
                        sx={{
                          '& .MuiTypography-root': {
                            fontSize: '14px',
                          },
                        }}
                        control={<Checkbox defaultChecked />}
                        label="Label"
                      />
                      <FormControlLabel
                        sx={{
                          '& .MuiTypography-root': {
                            fontSize: '14px',
                          },
                        }}
                        control={<Checkbox />}
                        label="Disabled"
                      />
                    </FormGroup>
                  </AccordionDetails>
                </Accordion>
              </Box>
            </Grid>
            <Grid item xs={9}>
              <VTCardHotelSearch
                sx={{ marginBottom: '12px' }}
                title="Hotel"
                price="25"
                currency={'$'}
                rating={'2.0'}
                image="/images/hotel.jpeg"
              />
              <VTCardHotelSearch
                sx={{ marginBottom: '12px' }}
                title="Hotel"
                price="25"
                currency={'$'}
                rating={'2.0'}
                image="/images/hotel.jpeg"
              />
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                  variant="outlined"
                  disabled={isLoading}
                  onClick={() => {
                    setIsLoading(true);
                    setTimeout(() => {
                      setIsLoading(false);
                    }, 3000);
                  }}
                >
                  {isLoading && (
                    <CircularProgress size={18} sx={{ marginRight: '6px' }} />
                  )}
                  View more
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <SectionContainer backgroundColor="#F2F3F3">
        <Extensions />
      </SectionContainer>
    </Layout>
  );
};

export default HotelScheduleSearch;
