import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { Grid, TextField, Button } from '@mui/material';
import { useRouter } from 'next/navigation';

const validationSchema = yup.object({
  bookName: yup.string().required('Book Name is required'),
  bookSSN: yup.string().required('Book SSN is required'),
  date: yup.string().required('Date is required'),
  time: yup.string().required('Time is required'),
  finePerDay: yup.string().required('Fine Per Day is required'),
  pictures: yup.string().required('Pictures is required'),
});

const AddIssueBook = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      bookName: '',
      bookSSN: '',
      date: '',
      time: '',
      finePerDay: '',
      pictures: '',
      pictures2: '',
      
      Pick_and_Drop_charges:'',
    },
    validationSchema: validationSchema,
    onSubmit: async (values: any) => {
      console.log(values);
      router.push('/issuebook');
    },
  });

  return (
    <div className='mt-6'>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              id='bookName'
              name='bookName'
              label='No of days'
              variant='outlined'
              fullWidth
              value={formik.values.bookName}
              onChange={formik.handleChange}
              error={formik.touched.bookName && Boolean(formik.errors.bookName)}
              helperText={formik.touched.bookName && formik.errors.bookName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='bookSSN'
              name='bookSSN'
              label='Hours'
              variant='outlined'
              fullWidth
              value={formik.values.bookSSN}
              onChange={formik.handleChange}
              error={formik.touched.bookSSN && Boolean(formik.errors.bookSSN)}
              helperText={formik.touched.bookSSN && formik.errors.bookSSN}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='date'
              name='date'
              label='Student genders'
              variant='outlined'
              fullWidth
              type='text'
              value={formik.values.date}
              onChange={formik.handleChange}
              error={formik.touched.date && Boolean(formik.errors.date)}
              helperText={formik.touched.date && formik.errors.date}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='time'
              name='time'
              label='Vehicle charges'
              variant='outlined'
              fullWidth
              type='number'
              value={formik.values.time}
              onChange={formik.handleChange}
              error={formik.touched.time && Boolean(formik.errors.time)}
              helperText={formik.touched.time && formik.errors.time}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='finePerDay'
              name='finePerDay'
              label='Courses'
              variant='outlined'
              fullWidth
              type='number'
              value={formik.values.finePerDay}
              onChange={formik.handleChange}
              error={formik.touched.finePerDay && Boolean(formik.errors.finePerDay)}
              helperText={formik.touched.finePerDay && formik.errors.finePerDay}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='pictures'
              name='pictures'
              label='Student charges'
              variant='outlined'
              fullWidth
              type='number'
              value={formik.values.pictures}
              onChange={formik.handleChange}
              error={formik.touched.pictures && Boolean(formik.errors.pictures)}
              helperText={formik.touched.pictures && formik.errors.pictures}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='pictures1'
              name='pictures1'
              label='Pick and Drop charges'
              variant='outlined'
              fullWidth
              type='number'
              value={formik.values.Pick_and_Drop_charges}
              onChange={formik.handleChange}
              error={formik.touched.Pick_and_Drop_charges && Boolean(formik.errors.Pick_and_Drop_charges)}
              helperText={formik.touched.Pick_and_Drop_charges && formik.errors.Pick_and_Drop_charges}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='pictures2'
              name='pictures2'
              label='Vehicle provided for driving license test'
              variant='outlined'
              fullWidth
              type='number'
              value={formik.values.pictures2}
              onChange={formik.handleChange}
              error={formik.touched.pictures2 && Boolean(formik.errors.pictures2)}
              helperText={formik.touched.pictures2 && formik.errors.pictures2}
            />
          </Grid>

          <Grid item xs={12} container justifyContent='flex-end'>
            <Button
              type='submit'
              variant='contained'
              color='primary'
              sx={{ marginLeft: 'auto' }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AddIssueBook;
