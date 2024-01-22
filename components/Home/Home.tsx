import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Typography, TextField, IconButton, InputAdornment, Button, Grid, Box } from '@mui/material';

const Home = () => {
  return (
    <>
      <Box sx={{ padding: '24px' }}>
        <div className='mt-10 text-[20px] sm:text-[28px] md:text-[32px] lg:text-[40px] text-center font-russoone font-normal'>
          Analytics of Star Driving
        </div>
        <div className="">
          <img
            src="/Images/dashboard.png" // Assuming the image is in the public/images directory
            alt="Dashboard Image"
            width="100%" // Adjust the width as needed
            height="100%" // Adjust the height as needed
          />
        </div>
      </Box>
    </>
  );
};

export default Home;
