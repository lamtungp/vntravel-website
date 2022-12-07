import {
  Box,
  Divider,
  IconButton,
  Link,
  Stack,
  Theme,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import Image from 'next/image';

const useStyles = makeStyles((theme: Theme) => ({
  Root: {
    margin: '0 auto',
    padding: '20px 0',
    maxWidth: 1240,
    alignItems: 'center',
    textAlign: 'center',

    '& .MuiIconButton-root': {
      padding: 0,
      margin: 7,
    },

    [theme.breakpoints.down(1300)]: {
      marginLeft: 20,
      marginRight: 20,
    },

    [theme.breakpoints.down('md')]: {
      display: 'block',
    },
  },

  MenuLink: {
    padding: '0 10px',
    fontWeight: 500,
    color: '#132150',

    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },

  LinkRoot: {
    paddingRight: 10,
    color: '#132150',

    [theme.breakpoints.up('sm')]: {
      fontSize: 14,
    },

    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },

  SocialContainer: {
    [theme.breakpoints.down('md')]: {
      marginTop: 10,
      display: 'flex',
      justifyContent: 'space-around',
    },

    [theme.breakpoints.down('sm')]: {
      marginTop: 0,
    },
  },
}));

const socials = [
  { link: '/', src: '/icons/iconFacebook2.svg' },
  { link: '/', src: '/icons/iconTwitter2.svg' },
  { link: '/', src: '/icons/iconGithub.svg' },
  { link: '/', src: '/icons/iconLinkedin.svg' },
];

const menuLink = [
  { link: '/', name: 'Terms of Service' },
  { link: '/', name: 'Privacy Policy' },
  { link: '/', name: 'Cookie Settings' },
];

const Footer = () => {
  const classes = useStyles();

  return (
    <Stack
      className={classes.Root}
      component="footer"
      direction="row"
      justifyContent="space-between"
    >
      <Stack justifyContent="center" direction="row">
        <Typography
          className={classes.LinkRoot}
          variant="subtitle2"
          component={Link}
          href="/"
          target="_blank"
          underline="hover"
        >
          &copy; 2022 VnTravel
        </Typography>

        <Divider orientation="vertical" flexItem />

        {menuLink.map((item, index) => (
          <Typography
            key={index}
            className={classes.MenuLink}
            variant="subtitle2"
            component={Link}
            href={item.link}
            target="_blank"
            underline="hover"
          >
            {item.name}
          </Typography>
        ))}
      </Stack>

      <Box className={classes.SocialContainer} component={'div'}>
        {socials.map((item, index) => (
          <Typography
            key={index}
            variant="subtitle2"
            component={Link}
            href={item.link}
            target="_blank"
            underline="hover"
          >
            <IconButton>
              <Image src={item.src} width={36} height={36} alt="" />
            </IconButton>
          </Typography>
        ))}
      </Box>
    </Stack>
  );
};

export default Footer;
