import React from 'react';
import Image from 'next/image';
import { Typography, Box, Grid } from '@mui/material';

const Home = () => {
  return (
    <Box sx={{ padding: '24px' }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <Typography variant="h4" component="div" sx={{ textAlign: 'center', mb: 2, fontFamily: 'Russo One', fontSize: '2.5rem', fontWeight: 'bold', color: '#333' }}>
            Analytics of Star Driving
          </Typography>
        </Grid>
        <Grid item xs={12} sm={10} md={8} lg={6}>
          <Image
            src="/Images/dashboard.png" // Assuming the image is in the public/images directory
            alt="Dashboard Image"
            width={1200} // Set a default width (adjust as needed)
            height={800} // Set a default height (adjust as needed)
            layout="responsive"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
