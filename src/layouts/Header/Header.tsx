import React, { useState } from 'react';
import Image from 'next/image';
import { makeStyles } from '@mui/styles';
import {
  Theme,
  Box,
  Button,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
  Divider,
  IconButton,
  Badge,
} from '@mui/material';
import { useRouter } from 'next/router';
import { NotificationsNoneOutlined } from '@mui/icons-material';
import Link from 'next/link';

import Logo from '@/components/Logo';
import { useAppSelector } from '@/common/redux/hooks';
import { selectIsLogin } from '@/common/redux/auth/auth.slice';
import HeaderDropdown from '@/components/Header';

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((_theme: Theme) => ({
  Root: {
    position: 'fixed',
    width: '100%',
    background: '#ffffff',
    zIndex: 1000,
  },

  Header: {
    maxWidth: 1300,
    display: 'flex',
    padding: '22px 20px',
    margin: '0 auto',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  RightNav: {
    display: 'flex',
    alignItems: 'center',
  },

  ButtonLocation: {
    color: '#132150',

    '& span': {
      marginRight: 8,
      verticalAlign: 'bottom',
    },
  },

  MenuLocation: {
    '& .MuiPaper-root': {
      borderRadius: 10,
      minWidth: 180,
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: 0,
      },
      '& .MuiMenuItem-root': {
        padding: 12,
        '& .MuiListItemText-root': {
          marginLeft: 8,
          '& .MuiTypography-root': {
            fontSize: 12,
          },
        },
      },
    },
  },

  ButtonSignIn: {
    marginLeft: 12,
    color: '#132150',
    textTransform: 'none',
    fontWeight: 500,
    fontSize: 16,

    '&:hover': {
      textDecoration: 'underline',
    },
  },

  ButtonSignUp: {
    marginLeft: 6,
    width: 140,
    background: '#438BF7',
    borderRadius: 10,
    color: '#FFFFFF',
    textTransform: 'none',
    fontWeight: 500,
    fontSize: 16,
  },
}));

const Header = () => {
  const classes = useStyles();
  const router = useRouter();
  const isLogin = useAppSelector(selectIsLogin);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className={classes.Root}>
      <Box className={classes.Header}>
        <Link href="/">
          <Logo />
        </Link>
        <Box className={classes.RightNav}>
          <Box>
            <Button
              className={classes.ButtonLocation}
              disableRipple
              onClick={handleClick}
            >
              <Typography fontSize={12} variant="body2" component="span">
                VND
              </Typography>
              <Image width={24} height={24} src={'/icons/iconVN.svg'} alt="" />
            </Button>
            <Menu
              className={classes.MenuLocation}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
              disableScrollLock
            >
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Image
                    width={24}
                    height={24}
                    src={'/icons/iconUS.svg'}
                    alt=""
                  />
                </ListItemIcon>
                <ListItemText>United State (USD)</ListItemText>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Image
                    width={24}
                    height={24}
                    src={'/icons/iconUK.svg'}
                    alt=""
                  />
                </ListItemIcon>
                <ListItemText>United Kingdom (EUR)</ListItemText>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Image
                    width={24}
                    height={24}
                    src={'/icons/iconSG.svg'}
                    alt=""
                  />
                </ListItemIcon>
                <ListItemText>Singapore (SGD)</ListItemText>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Image
                    width={24}
                    height={24}
                    src={'/icons/iconAU.svg'}
                    alt=""
                  />
                </ListItemIcon>
                <ListItemText>Australia (AUD)</ListItemText>
              </MenuItem>
            </Menu>
          </Box>

          <Box sx={{ display: 'contents' }}>
            {isLogin ? (
              <>
                <IconButton>
                  <Badge badgeContent={2} color="primary">
                    <NotificationsNoneOutlined />
                  </Badge>
                </IconButton>
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ margin: '10px 6px' }}
                />
                <HeaderDropdown />
              </>
            ) : (
              <>
                <Button
                  className={classes.ButtonSignIn}
                  onClick={() => router.push('/signin')}
                  disableRipple
                >
                  Sign in
                </Button>
                <Button
                  onClick={() => router.push('/signup')}
                  variant="contained"
                  className={classes.ButtonSignUp}
                >
                  Sign up
                </Button>
              </>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;