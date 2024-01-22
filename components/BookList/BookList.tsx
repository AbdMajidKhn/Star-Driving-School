import { TextField, Box } from '@mui/material'
import React, { useState } from 'react'
import MUIDataTable from 'mui-datatables'
import { Button } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import { useRouter } from 'next/navigation'
const BookList = () => {
  const router = useRouter()
  const [anchorEl, setAnchorEl] = useState(null)

  const open = Boolean(anchorEl)
  const [activeRow, setActiveRow] = useState(null)
  const handleClick = (event: any, index: any) => {
    setAnchorEl(event.currentTarget)
    setActiveRow(index)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleAddBook = () => {
    router.push('/addbook')
  }
  const data = [
    ['Instructor 1','something@gmail.com','555-2222-222' ,'Yes', 'Two', ' 1', 'Ok','$12'],
    ['Instructor 2','something@gmail.com','555-2222-222' ,'Yes', 'Three', ' 2', 'ok','$12'],
    ['Instructor 3','something@gmail.com','555-2222-222' ,'Yes', 'Four', ' 3', 'TB','$12'],
    ['Instructor 4','something@gmail.com','555-2222-222' ,'Learning', 'Four', ' 4', 'Ok','$18'],
    ['Instructor 5','something@gmail.com','555-2222-222' ,'Learning', 'Four', ' 5', 'Ok','$14'],
    ['Instructor 6','something@gmail.com','555-2222-222' ,'Learning', 'Four', ' 6', 'Ok','$14'],
    ['Instructor 7','something@gmail.com','555-2222-222' ,'Applied', 'Two', '7', 'Ok','$12'],
    ['Instructor 8','something@gmail.com','555-2222-222' ,'Yes', 'Two', ' 8', 'Ok','$12'],
    ['Instructor 9','something@gmail.com','555-2222-222' ,'Applied', 'Two', '9', 'Ok','$12'],
    ['Instructor 10',  'something@gmail.com','555-2222-222' ,'Yes','One', '10', 'Ok','$12'],
    ['Instructor 11', 'something@gmail.com','555-2222-222' ,'Applied','Five', '11', 'Ok','$11'],
    ['Instructor 12' ,'something@gmail.com','555-2222-222' ,'Applied','Six', '12', 'Ok','$12'],
    ['Instructor 13', 'Yes','something@gmail.com','5555-222-777' ,'Yes','Two', '13', 'Ok','$12'],
    ['Instructor 14', 'Yes','something@gmail.com','5555-222-777' ,'Yes','Four', '14', 'Ok','$12'],
    ['Instructor 15', 'Yes','something@gmail.com','5555-222-777' ,'Yes','One', '15', 'Ok','$12'],
    ['Instructor 16', 'Yes','something@gmail.com','5555-222-777' ,'Yes','Seven', '16', 'Ok','$12'],
    ['Instructor 17', 'Yes','something@gmail.com','5555-222-777' ,'Yes','Four', '17', 'Ok','$12'],
    ['Instructor 18', 'Yes','something@gmail.com','5555-222-777' ,'Yes','Three', '18', 'Ok','$12'],
    ['Instructor 19', 'Yes','something@gmail.com','5555-222-777' ,'Yes','Six', '19', 'Ok','$12'],
    ['Instructor 20', 'Yes','something@gmail.com','5555-222-777' ,'Yes','Four', '20', 'Ok','$12'],
  ]

  const columns = [
    {
      name: 'Name',
      label: 'Name',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'Email',
      label: 'Email',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'Phone Number',
      label: 'Phone Number',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'Driving Licence',
      label: 'Driving Licence',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'Driving Experience',
      label: 'Driving Experience',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'Instructor experience',
      label: 'Instructor experience',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'Medical History ',
      label: 'Medical History ',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'Pick And Drop Charges ',
      label: 'Pick And Drop Charges ',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'Action',
      options: {
        sort: false,
        filter: false,
        customBodyRender: (value: any, tableMeta: any, updateValue: any) => {
          return (
            <>
              <Button
                style={{ paddingTop: '0px', paddingBottom: '0px' }}
                type='button'
                onClick={(e) => handleClick(e, tableMeta.rowIndex)}
              >
                <MoreVertIcon />
              </Button>
              {activeRow === tableMeta.rowIndex ? (
                <Menu
                  id='basic-menu'
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem onClick={handleAddBook}>
                    <ModeEditOutlineOutlinedIcon /> Edit
                  </MenuItem>
                  <MenuItem
                  // onClick={() => handleDelete(tableMeta.rowData[0])}
                  >
                    <DeleteOutlineOutlinedIcon /> Delete
                  </MenuItem>
                </Menu>
              ) : (
                ''
              )}
            </>
          )
        },
      },
    },
  ]
  const HeaderElements = () => {
    return (
      <Button type='button' onClick={handleAddBook}>
        + Add Instructor
      </Button>
    )
  }

  const options = {
    filterType: 'checkbox' as const,
    customToolbar: HeaderElements,
  }

  return (
    <>
      {' '}
      <Box sx={{ padding: '24px' }}>
        <div className='mt-10 text-[20x] sm:text-[28px] md:text-[32px] lg:text-[40px] text-center font-russoone font-normal'>
         Instructor List
        </div>
        <MUIDataTable title={'Instructor Information'} data={data} columns={columns} options={options} />
      </Box>
    </>
  )
}

export default BookList
