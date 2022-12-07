import { Box, Button, Grid } from '@mui/material';
import React from 'react';
import { Zoom } from 'react-awesome-reveal';

import { VTCard } from '../Card';

const BestPlace = () => {
  return (
    <Box>
      <Grid sx={{ marginBottom: '20px' }} container spacing={3}>
        <Grid item xs={6} sm={4}>
          <Zoom delay={100}>
            <VTCard
              title="Lizard"
              description="Test"
              image="images/hanoi.png"
            />
          </Zoom>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Zoom delay={2 * 100}>
            <VTCard
              title="Lizard"
              description="Test"
              image="images/hanoi.png"
            />
          </Zoom>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Zoom delay={3 * 100}>
            <VTCard
              title="Lizard"
              description="Test"
              image="images/hanoi.png"
            />
          </Zoom>
        </Grid>
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Zoom delay={4 * 100}>
          <Button variant="outlined">+ Load more...</Button>
        </Zoom>
      </Box>
    </Box>
  );
};

export default BestPlace;
