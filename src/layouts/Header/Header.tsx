import React, { useState } from 'react';
import Image from 'next/image';
import { makeStyles } from '@mui/styles';
import {
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
  ButtonBase,
  Avatar,
  Link,
} from '@mui/material';
import { useRouter } from 'next/router';
import { MenuOutlined, NotificationsNoneOutlined } from '@mui/icons-material';

import Logo from '@/components/Logo';
import { useAppDispatch, useAppSelector } from '@/common/redux/hooks';
import { selectIsLogin } from '@/common/redux/auth/auth.slice';
import HeaderDropdown from '@/components/Header';
import {
  selectCurrencyState,
  setCurrencyState,
} from '@/common/redux/common/common.slice';

const useStyles = makeStyles(() => ({
  Root: {
    position: 'fixed',
    width: '100%',
    zIndex: 1000,
    backdropFilter: 'blur(6px)',
  },

  Header: {
    maxWidth: 1300,
    display: 'flex',
    padding: '12px 20px',
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

const Header = ({ displayToggle, handleLeftDrawerToggle }: any) => {
  const classes = useStyles();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const isLogin = useAppSelector(selectIsLogin);
  const currencyState = useAppSelector(selectCurrencyState);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleChangeCurrency = (values: { currency: string; flag: string }) => {
    dispatch(
      setCurrencyState({ currency: values.currency, flag: values.flag }),
    );
    setAnchorEl(null);
  };

  return (
    <>
      <Box
        className={classes.Root}
        sx={{
          background:
            router.pathname === '/' ? 'rgba(249, 250, 251, 0.72)' : '#FFFFFF',
        }}
        component="header"
      >
        <Box className={classes.Header}>
          <Link href="/">
            <Logo />
          </Link>
          {displayToggle ? (
            <Box component="span">
              <ButtonBase
                sx={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                }}
              >
                <Avatar
                  variant="rounded"
                  onClick={handleLeftDrawerToggle}
                  color="inherit"
                >
                  <MenuOutlined />
                </Avatar>
              </ButtonBase>
            </Box>
          ) : (
            <Box className={classes.RightNav}>
              <Box>
                <Button
                  className={classes.ButtonLocation}
                  disableRipple
                  onClick={handleClick}
                >
                  <Typography fontSize={12} variant="body2" component="span">
                    {currencyState.currency}
                  </Typography>
                  <Image
                    width={24}
                    height={24}
                    src={currencyState.flag}
                    alt=""
                  />
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
                  onClose={() => setAnchorEl(null)}
                  disableScrollLock
                >
                  <MenuItem
                    onClick={() =>
                      handleChangeCurrency({
                        currency: 'VND',
                        flag: '/icons/iconVN.svg',
                      })
                    }
                  >
                    <ListItemIcon>
                      <Image
                        width={24}
                        height={24}
                        src={'/icons/iconVN.svg'}
                        alt=""
                      />
                    </ListItemIcon>
                    <ListItemText>Viet Nam (VND)</ListItemText>
                  </MenuItem>
                  <MenuItem
                    onClick={() =>
                      handleChangeCurrency({
                        currency: 'USD',
                        flag: '/icons/iconUS.svg',
                      })
                    }
                  >
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
                  <MenuItem
                    onClick={() =>
                      handleChangeCurrency({
                        currency: 'EUR',
                        flag: '/icons/iconUK.svg',
                      })
                    }
                  >
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
                  <MenuItem
                    onClick={() =>
                      handleChangeCurrency({
                        currency: 'SGD',
                        flag: '/icons/iconSG.svg',
                      })
                    }
                  >
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
          )}
        </Box>
      </Box>
    </>
  );
};

export default Header;
