import React from 'react';
import { Typography, TextField, Button, Grid, Box } from '@mui/material';

const Dashboard = () => {
  return (
    <>
      <div>
        <Typography
          sx={{ fontFamily: 'Russo One', fontWeight: '400', fontSize: '35px', marginTop: '60px' }}
          align='center'
        >
          Search here
        </Typography>

        <TextField
          name='name'
          fullWidth
          placeholder='Add car model, year, mileage'
          type='text'
          sx={{
            '& .MuiInputBase-root': {
              height: 80,
            },
            px: { sm: '15%', md: '16%', lg: '18%', xl: '20%' },
            marginTop: '40px',
            '& .Mui-error': {
              fontSize: '14px',
            },
            '& .MuiOutlinedInput-root': {
              '& > fieldset': {
                borderColor: '#FF6744',
                borderRadius: '10px',
                borderWidth: '2px',
              },
            },
          }}
          InputProps={{
            endAdornment: (
              <Button>
                <img src='./search.svg' style={{ height: '60px' }} alt='search' />
              </Button>
            ),
          }}
        />
      </div>

      <Grid container sx={{ marginTop: '50px' }}>
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              borderColor: '#FF6744',
              borderRadius: '5px',
              width: '100%',
              marginTop: '25px',
              padding: '2px',
              position: 'relative',
              background: 'linear-gradient(to right , #FF4B2A ,#FF7551)',
            }}
          >
            {/* Your first set of Boxes */}
            {/* Box 1 content */}
          </Box>
          {/* Add more Boxes as needed */}
        </Grid>

        <Grid item xs={12} sm={6} md={6} display='flex' justifyContent='center' alignItems='center' sx={{ marginTop: '10px' }}>
          <img
            className='w-[50%] sm:w-[85%] md:w-[90%] lg:w-[90%] xl:w-[90%]'
            style={{ objectFit: 'cover' }}
            src='Images/lottery_sign.jpeg'
            alt='lottery-img'
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              borderColor: '#FF6744',
              borderRadius: '5px',
              width: '100%',
              marginTop: '25px',
              padding: '2px',
              position: 'relative',
              background: 'linear-gradient(to right , #FF4B2A ,#FF7551)',
            }}
          >
            <Box
              sx={{
                width: { sm: '135px', smm: '165px', md: '245px', lg: '275px' },
                // marginTop: '25px',
                // borderRadius: '5px',
                background: '#222',
              }}
            >
              <Button
                sx={{
                  height: { sm: '120px', smm: '130px', md: '200px' },
                  width: { sm: '130px', smm: '170px', md: '250px', lg: '280px' },
                }}
              >
                <Box sx={{ marginTop: '20px' }}>
                  <img className='w-64 sm:w-20 md:w-28 lg:w-32' src='./gear.svg' alt='gear'></img>

                  <Typography
                    sx={{
                      fontFamily: 'poppins',
                      marginTop: { sm: '1px', smm: '5px', md: '20px' },
                      fontSize: { sm: '12px', smm: '16px', md: '20px' },
                      fontWeight: '400',
                      textTransform: 'capitalize',
                      color: 'white',
                    }}
                  >
                    Gear Illustration
                  </Typography>
                </Box>
              </Button>
            </Box>
          </Box>

          <Box
            sx={{
              borderColor: '#FF6744',
              width: { sm: '139px', smm: '169px', md: '249px', lg: '279px' },
              marginTop: '25px',
              borderRadius: '5px',

              padding: '2px',
              position: 'relative',
              background: 'linear-gradient(to right , #FF4B2A ,#FF7551)',
            }}
          >
            <Box
              sx={{
                width: { sm: '135px', smm: '165px', md: '245px', lg: '275px' },
                // marginTop: '25px',
                // borderRadius: '5px',
                background: '#222',
              }}
            >
              <Button
                sx={{
                  height: { sm: '120px', smm: '130px', md: '200px' },
                  width: { sm: '130px', smm: '170px', md: '250px', lg: '280px' },
                }}
              >
                <Box sx={{ marginTop: '20px' }}>
                  <img
                    className='w-64 sm:w-20 md:w-24 lg:w-32'
                    src='./engine.svg'
                    alt='engine'
                  ></img>

                  <Typography
                    sx={{
                      fontFamily: 'poppins',
                      marginTop: { sm: '-3px', smm: '-5px', md: '20px' },
                      fontSize: { sm: '12px', smm: '16px', md: '20px' },
                      textTransform: 'capitalize',
                      color: 'white',
                    }}
                  >
                    Engine Repair
                  </Typography>
                </Box>
              </Button>
            </Box>
          </Box>

          <Box
            sx={{
              width: { sm: '139px', smm: '169px', md: '249px', lg: '279px' },
              marginTop: '25px',
              borderRadius: '5px',
              padding: '2px',
              position: 'relative',
              background: 'linear-gradient(to right , #FF4B2A ,#FF7551)',
            }}
          >
            <Box
              sx={{
                width: { sm: '135px', smm: '165px', md: '245px', lg: '275px' },
                // marginTop: '25px',
                // borderRadius: '5px',
                background: '#222',
              }}
            >
              <Button
                sx={{
                  height: { sm: '120px', smm: '130px', md: '200px' },
                  width: { sm: '130px', smm: '170px', md: '250px', lg: '280px' },
                }}
              >
                <Box sx={{ marginTop: '20px' }}>
                  <img className='w-20 md:w-28 lg:w-32' src='./tire.svg' alt='tire'></img>

                  <Typography
                    sx={{
                      fontFamily: 'poppins',
                      marginTop: { smm: '-9px', md: '20px' },
                      fontSize: { sm: '12px', smm: '16px', md: '20px' },
                      textTransform: 'capitalize',
                      color: 'white',
                    }}
                  >
                    Tyre Repairing
                  </Typography>
                </Box>
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              width: { sm: '139px', smm: '169px', md: '249px', lg: '279px' },
              marginTop: '25px',
              padding: '2px',
              position: 'relative',
              borderRadius: '5px',
              background: 'linear-gradient(to right , #FF4B2A ,#FF7551)',
            }}
          >
            <Box
              sx={{
                width: { sm: '135px', smm: '165px', md: '245px', lg: '275px' },
                // marginTop: '25px',
                // borderRadius: '5px',
                background: '#222',
              }}
            >
              <Button
                sx={{
                  height: { sm: '120px', smm: '140px', md: '200px' },
                  width: { sm: '130px', smm: '170px', md: '250px', lg: '280px' },
                }}
              >
                <Box sx={{ marginTop: '20px' }}>
                  <img className='w-16 lg:w-20' src='./speedmeter.svg' alt='meter'></img>

                  <Typography
                    sx={{
                      fontFamily: 'poppins',
                      marginTop: { sm: '-10px', smm: '-10px', md: '20px' },
                      fontSize: { sm: '12px', smm: '16px', md: '20px' },
                      textTransform: 'capitalize',
                      color: 'white',
                    }}
                  >
                    Transmission Service{' '}
                  </Typography>
                </Box>
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default Dashboard
