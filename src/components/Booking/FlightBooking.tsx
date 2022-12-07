import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import Image from 'next/image';
import { LocationOnOutlined } from '@mui/icons-material';

import 'react-datepicker/dist/react-datepicker.css';

import { VTAutocomplete, VTDatePicker } from '@/components/Form';
import { useBookingStyles } from '@/styles/components/booking';

type ContentSearch = {
  location?: string;
  destination?: string;
  checkin?: string;
  checkout?: string;
};

type FlightBookingProps = {
  values: ContentSearch;
  setValues: React.Dispatch<React.SetStateAction<any>>;
};

const FlightBooking = ({ values, setValues }: FlightBookingProps) => {
  const classes = useBookingStyles();

  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());

  useEffect(() => {
    setValues({ type: 'flight', checkin: startDate, checkout: endDate });
  }, [endDate, setValues, startDate]);

  return (
    <Grid className={classes.Root} container>
      <Grid item xs={12} md={5.5}>
        <Grid className={classes.GridContainer} container>
          <Grid item xs={12} sm={5.5}>
            <VTAutocomplete
              IconComponent={<LocationOnOutlined />}
              title="Leaving From"
              placeholder="Where are you from?"
              data={top100Films}
              type="search"
              onChange={(_event: any, value: any) => {
                setValues({ ...values, from: value._id });
              }}
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
            <VTAutocomplete
              IconComponent={<LocationOnOutlined />}
              title="Going To"
              placeholder="Going To?"
              data={top100Films}
              type="search"
              onChange={(_event: any, value: any) => {
                setValues({ ...values, to: value._id });
              }}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={0.5} />

      <Grid item xs={12} md={6}>
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
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const top100Films = [
  { title: 'Da Nang', _id: 1994 },
  { title: 'Ha Noi', _id: 1972 },
  { title: 'Sai Gon', _id: 1974 },
  { title: 'Khanh Hoa', _id: 2008 },
  { title: 'Quang Ninh', _id: 1957 },
];

export default FlightBooking;
