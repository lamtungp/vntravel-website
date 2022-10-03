import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import Image from 'next/image';
import { LocationOnOutlined } from '@mui/icons-material';

import 'react-datepicker/dist/react-datepicker.css';

import { VTAutocomplete, VTDatePicker } from '@/components/Form';
import { useBookingStyles } from '@/styles/components/booking';
import { useAppDispatch, useAppSelector } from '@/common/redux/hooks';
import {
  getAddressData,
  selectAddress,
} from '@/common/redux/address/address.slice';

type ContentSearch = {
  location: string;
  checkin: string;
  checkout: string;
};

type HotelBookingProps = {
  values: ContentSearch;
  setValues: React.Dispatch<React.SetStateAction<any>>;
};

const HotelBooking = ({ values, setValues }: HotelBookingProps) => {
  const classes = useBookingStyles();
  const dispatch = useAppDispatch();
  const listAddress = useAppSelector(selectAddress).map((item) => {
    return {
      _id: item._id,
      title: item.province,
    };
  });

  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());

  useEffect(() => {
    dispatch(getAddressData());
  }, [dispatch]);

  useEffect(() => {
    setValues({ type: 'hotel', checkin: startDate, checkout: endDate });
  }, [endDate, setValues, startDate]);

  return (
    <Grid className={classes.Root} container>
      <Grid className={classes.GridContainer} item xs={12} md={4}>
        <VTAutocomplete
          IconComponent={<LocationOnOutlined />}
          title="Location"
          placeholder="Where are you from?"
          data={listAddress}
          type="search"
          onChange={(_event: any, value: any) => {
            setValues({ ...values, location: value._id });
          }}
        />
      </Grid>

      <Grid item xs={12} md={1} />

      <Grid item xs={12} md={7}>
        <Grid container sx={{ justifyContent: 'center' }}>
          <Grid item xs={12} sm={5.5}>
            <VTDatePicker
              title="Check in"
              selected={startDate}
              onChange={(date: Date) => {
                setStartDate(date);
                setValues({ ...values, checkin: date });
              }}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              value={values.checkin}
            />
          </Grid>
          <Grid className={classes.IconTransfer} item xs={1}>
            <Image
              width={20}
              height={20}
              src="/icons/iconTransfer.svg"
              alt="iconTransfer"
            />
          </Grid>
          <Grid item xs={12} sm={5.5}>
            <VTDatePicker
              title="Check out"
              selected={endDate}
              onChange={(date: Date) => {
                setEndDate(date);
                setValues({ ...values, checkout: date });
              }}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              value={values.checkout}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HotelBooking;
