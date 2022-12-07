import { useEffect } from 'react';

import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

import { useAppDispatch, useAppSelector } from '@/common/redux/hooks';
import {
  selectOpenSidebar,
  setOpenSidebar,
} from '@/common/redux/common/common.slice';
import useResponsive from '@/hooks/useResponsive';

export default function Layout({ children }: any) {
  const openSidebar = useAppSelector(selectOpenSidebar);
  const dispatch = useAppDispatch();
  const matchDownSm = useResponsive({ query: 'down', key: 'sm' });

  const handleLeftDrawerToggle = () => {
    dispatch(setOpenSidebar(!openSidebar));
  };

  useEffect(() => {
    dispatch(setOpenSidebar(!matchDownSm));
  }, [dispatch, matchDownSm]);

  return (
    <>
      <Header
        displayToggle={matchDownSm}
        handleLeftDrawerToggle={handleLeftDrawerToggle}
      />
      <Sidebar
        displaySidebar={matchDownSm}
        drawerOpen={openSidebar}
        drawerToggle={handleLeftDrawerToggle}
      />
      <main>{children}</main>
      <Footer />
    </>
  );
}
