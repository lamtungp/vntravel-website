import { Box, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Fade } from 'react-awesome-reveal';

const useStyles = makeStyles((theme: Theme) => ({
  Root: {
    paddingTop: 88,
    height: 880,
    backgroundImage: 'url(/images/background.png)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',

    [theme.breakpoints.down('md')]: {
      paddingTop: 48,
      height: 600,
    },

    [theme.breakpoints.down('sm')]: {
      height: 400,
    },
  },

  BannerTextBox: {
    paddingTop: 200,
    maxWidth: 1300,
    margin: '0 auto',
    padding: '0 20px',
    color: '#FFFFFF',

    [theme.breakpoints.down('md')]: {
      paddingTop: 150,
    },

    [theme.breakpoints.down('sm')]: {
      paddingTop: 80,
    },
  },

  BannerTitle: {
    fontWeight: 600,
    fontSize: 72,
    lineHeight: 1.1,
    letterSpacing: '0.02em',

    [theme.breakpoints.down('md')]: {
      fontSize: 58,
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: 26,
    },
  },

  BannerDescription: {
    marginTop: 42,
    fontWeight: 500,
    fontSize: 36,
    letterSpacing: '0.02em',

    [theme.breakpoints.down('md')]: {
      marginTop: 22,
      fontSize: 30,
    },

    [theme.breakpoints.down('sm')]: {
      marginTop: 22,
      fontSize: 18,
    },
  },
}));

const Banner = () => {
  const classes = useStyles();
  return (
    <Box className={classes.Root}>
      <Box className={classes.BannerTextBox}>
        <Fade direction="left">
          <Typography className={classes.BannerTitle}>
            Amazing Flight To <br /> Viet Nam
          </Typography>
          <Typography className={classes.BannerDescription}>
            Find and book hotel for great trip
          </Typography>
        </Fade>
      </Box>
    </Box>
  );
};

export default Banner;
