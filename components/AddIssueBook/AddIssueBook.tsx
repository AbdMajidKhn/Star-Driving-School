import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { Grid, TextField, Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material';

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
      No_of_days: '',
      Hours: '',
      Student_genders: '',
      Vehicle_charges: '',
      Courses: '',
      student_charges: '',
      Vehicle_provided_for_driving_license_test: '',
      
      Pick_and_Drop_charges:'',
    },
    validationSchema: validationSchema,
    onSubmit: async (values: any) => {
      console.log(values);
      router.push('/issuebook');
    },
  });

  return (
    <div className='mt-6' >
      <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={3} >
        <Grid item xs={12} sm={6}>
        <TextField
  id='No_of_days'
  name='No_of_days'
  label='No of days'
  variant='outlined'
  type='number'
  value={formik.values.No_of_days}
  onChange={formik.handleChange}
  error={formik.touched.No_of_days && Boolean(formik.errors.No_of_days)}
  helperText={formik.touched.No_of_days && formik.errors.No_of_days}
  sx={{ maxWidth: '300px', backgroundColor: '#f5f5f5', borderRadius: '5px' ,marginLeft:"100px" }}
/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='Hours'
              name='Hours'
              label='Hours'
              variant='outlined'
              type='number'
              value={formik.values.Hours}
              onChange={formik.handleChange}
              error={formik.touched.Hours && Boolean(formik.errors.Hours)}
              helperText={formik.touched.Hours && formik.errors.Hours}
              sx={{ maxWidth: '300px', backgroundColor: '#f5f5f5', borderRadius: '5px',marginLeft:"100px" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
  <FormControl variant="outlined" sx={{ width: '255px', backgroundColor: '#f5f5f5', borderRadius: '5px',marginLeft:"100px" }}>
    <InputLabel id="Student_genders">Student genders</InputLabel>
    <Select
      labelId="Student_genders"
      id="Student_genders"
      name="Student_genders"
      value={formik.values.Student_genders}
      onChange={formik.handleChange}
      label="Student genders"
      error={formik.touched.Student_genders && Boolean(formik.errors.Student_genders)}
    >
      <MenuItem value={"Male"}>Male</MenuItem>
      <MenuItem value={"Female"}>Female</MenuItem>
      <MenuItem value={"Other"}>Other</MenuItem>
    </Select>
    {formik.touched.Student_genders && formik.errors.Student_genders ? (
      <FormHelperText error>{formik.errors.Student_genders}</FormHelperText>
    ) : null}
  </FormControl>
</Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='Vehicle_charges'
              name='Vehicle_charges'
              label='Vehicle charges'
              variant='outlined'
              sx={{ maxWidth: '300px', backgroundColor: '#f5f5f5', borderRadius: '5px',marginLeft:"100px" }}             
               type='number'
              value={formik.values.Vehicle_charges}
              onChange={formik.handleChange}
              error={formik.touched.Vehicle_charges && Boolean(formik.errors.Vehicle_charges)}
              helperText={formik.touched.Vehicle_charges && formik.errors.Vehicle_charges}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='Courses'
              name='Courses'
              label='Courses'
              variant='outlined'
              type='number'
              sx={{ maxWidth: '300px', backgroundColor: '#f5f5f5', borderRadius: '5px',marginLeft:"100px" }}             
               value={formik.values.Courses}
              onChange={formik.handleChange}
              error={formik.touched.Courses && Boolean(formik.errors.Courses)}
              helperText={formik.touched.Courses && formik.errors.Courses}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='student_charges'
              name='student_charges'
              label='Student charges'
              variant='outlined'
              sx={{ maxWidth: '300px', backgroundColor: '#f5f5f5', borderRadius: '5px',marginLeft:"100px" }}             
               type='number'
              value={formik.values.student_charges}
              onChange={formik.handleChange}
              error={formik.touched.student_charges && Boolean(formik.errors.student_charges)}
              helperText={formik.touched.student_charges && formik.errors.student_charges}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='Pick_and_Drop_charges'
              name='Pick_and_Drop_charges' 
              label='Pick and Drop charges'
              variant='outlined'
              sx={{ maxWidth: '300px', backgroundColor: '#f5f5f5', borderRadius: '5px',marginLeft:"100px" }}
              type='number'
              value={formik.values.Pick_and_Drop_charges}
              onChange={formik.handleChange}
              error={formik.touched.Pick_and_Drop_charges && Boolean(formik.errors.Pick_and_Drop_charges)}
              helperText={formik.touched.Pick_and_Drop_charges && formik.errors.Pick_and_Drop_charges}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
  <FormControl variant="outlined" sx={{ width: '255px', backgroundColor: '#f5f5f5', borderRadius: '5px',marginLeft:"100px" }}>
    <InputLabel id="Vehicle_provided_for_driving_license_test">Vehicle provided</InputLabel>
    <Select
      labelId="Vehicle_provided_for_driving_license_test"
      id="Vehicle_provided_for_driving_license_test"
      name="Vehicle_provided_for_driving_license_test"
      value={formik.values.Vehicle_provided_for_driving_license_test}
      onChange={formik.handleChange}
      label="Vehicle provided"
      error={formik.touched.Vehicle_provided_for_driving_license_test && Boolean(formik.errors.Vehicle_provided_for_driving_license_test)}
    >
      <MenuItem value={"Car"}>Honda</MenuItem>
      <MenuItem value={"Bike"}>Sazuki</MenuItem>
      <MenuItem value={"Truck"}>Audi</MenuItem>
      <MenuItem value={"Truck"}>Toyota</MenuItem>
      <MenuItem value={"Truck"}>Nissan</MenuItem>
      <MenuItem value={"Truck"}>MG</MenuItem>
      
    </Select>
    {formik.touched.Vehicle_provided_for_driving_license_test && formik.errors.Vehicle_provided_for_driving_license_test ? (
      <FormHelperText error>{formik.errors.Vehicle_provided_for_driving_license_test}</FormHelperText>
    ) : null}
  </FormControl>
</Grid>

          <Grid item xs={12} container justifyContent='flex-end'>
            <Button
              type='submit'
              variant='contained'
              // color='primary'
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

export default AddIssueBook;
