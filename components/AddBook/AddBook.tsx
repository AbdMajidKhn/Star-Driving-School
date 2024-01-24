import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { Grid, TextField, Button, Input, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  category: yup.string().required('Category is required'),
  author: yup.string().required('Author is required'),
  rack: yup.string().required('Rack is required'),
  shelf: yup.string().required('Shelf is required'),
  file: yup.mixed().required('File is required'),
});

const AddBook = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone_number: '',
      category: '',
      author: '',
      rack: '',
      shelf: '',
      file: null,
      pick_drop_charges:'',
    },
    validationSchema: validationSchema,
    onSubmit: async (values: any) => {
      console.log(values);
      router.push('/booklist');
    },
  });

  return (
    <div className='mt-6'>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              id='name'
              name='name'
              label='Name'
              variant='outlined'
              sx={{ maxWidth: '300px', backgroundColor: '#f5f5f5', borderRadius: '5px',marginLeft:"100px" }}
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='email'
              name='email'
              label='Email'
              variant='outlined'
              sx={{ maxWidth: '300px', backgroundColor: '#f5f5f5', borderRadius: '5px',marginLeft:"100px" }}
              type='text'
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='phone_number'
              name='phone_number'
              label='Phone Number'
              variant='outlined'
              type='number'
              sx={{ maxWidth: '300px', backgroundColor: '#f5f5f5', borderRadius: '5px',marginLeft:"100px" }}
              value={formik.values.phone_number}
              onChange={formik.handleChange}
              error={formik.touched.phone_number && Boolean(formik.errors.phone_number)}
              helperText={formik.touched.phone_number && formik.errors.phone_number}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id='category'
              name='category'
              label='Driving License'
              variant='outlined'
              type='number'
              sx={{ maxWidth: '300px', backgroundColor: '#f5f5f5', borderRadius: '5px',marginLeft:"100px" }}
              value={formik.values.category}
              onChange={formik.handleChange}
              error={formik.touched.category && Boolean(formik.errors.category)}
              helperText={formik.touched.category && formik.errors.category}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id='author'
              name='author'
              label='Driving Experience'
              variant='outlined'
              sx={{ maxWidth: '300px', backgroundColor: '#f5f5f5', borderRadius: '5px',marginLeft:"100px" }}
              type='number'
              value={formik.values.author}
              onChange={formik.handleChange}
              error={formik.touched.author && Boolean(formik.errors.author)}
              helperText={formik.touched.author && formik.errors.author}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='rack'
              name='rack'
              label='Instructor Experience'
              variant='outlined'
              sx={{ maxWidth: '300px', backgroundColor: '#f5f5f5', borderRadius: '5px',marginLeft:"100px" }}
              type='number'         
             value={formik.values.rack}
              onChange={formik.handleChange}
              error={formik.touched.rack && Boolean(formik.errors.rack)}
              helperText={formik.touched.rack && formik.errors.rack}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='shelf'
              name='shelf'
              label='Medical History'
              variant='outlined'
              sx={{ maxWidth: '300px', backgroundColor: '#f5f5f5', borderRadius: '5px',marginLeft:"100px" }}
              type='text'
              value={formik.values.shelf}
              onChange={formik.handleChange}
              error={formik.touched.shelf && Boolean(formik.errors.shelf)}
              helperText={formik.touched.shelf && formik.errors.shelf}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='pick_drop_charges'
              name='pick_drop_charges'
              label='Pick and Drop Charges'
              variant='outlined'
              sx={{ maxWidth: '300px', backgroundColor: '#f5f5f5', borderRadius: '5px',marginLeft:"100px" }}
              type='number'
              value={formik.values.pick_drop_charges}
              onChange={formik.handleChange}
              error={formik.touched.pick_drop_charges && Boolean(formik.errors.pick_drop_charges)}
              helperText={formik.touched.pick_drop_charges && formik.errors.pick_drop_charges}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input
              id='file'
              name='file'
              type='file'
              sx={{ maxWidth: '260px', backgroundColor: '#f5f5f5', borderRadius: '5px',marginLeft:"100px" }}
              onChange={(event) => formik.setFieldValue('file', event.currentTarget)}
              error={formik.touched.file && Boolean(formik.errors.file)}
              // helperText={formik.touched.file && formik.errors.file}
            />
          </Grid>

          <Grid item xs={12} container justifyContent='flex-end'>
            <Button
              type='submit'
              variant='contained'
              
              sx={{ marginRight: '850px',backgroundColor:'#c82f27' }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AddBook;
