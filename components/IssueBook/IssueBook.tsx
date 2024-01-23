import { TextField, Box,Grid ,Typography} from '@mui/material'
import React, { useState } from 'react'
import MUIDataTable from 'mui-datatables'
import { Button } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import { useRouter } from 'next/navigation'
const IssueBook = () => {
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
  const handleAddIssueBook = () => {
    router.push('/addissuebook')
  }
  const data = [
    [' 1', '3', 'male', '$15', '$0.50', '$16','15$','Three'],
    [' 2', '6', 'male', '$15', '$0.75', '$16','15$','Three'],
    [' 3', '9', 'male', '$15', '$1.00', '$16','15$','Three'],
    [' 4', '2', 'male', '$15', '$1.25', '$16','15$','Three'],
    [' 5', '5', 'male', '$15', '$1.50', '$16','15$','Three'],
    [' 6', '8', 'male', '$15', '$1.75', '$16','15$','Three'],
    [' 7', '1', 'male', '$15', '$2.00', '$16','15$','Three'],
    [' 8', '4', 'male', '$15', '$2.25', '$16','15$','Three'],
    [' 9', '7', 'male', '$15', '$2.50', '$16','15$','Three'],
    [' 10', '90', 'Female', '$12', '$2.75', '$16','12$','Two'],
    [' 11', '11', 'Female', '$12', '$3.00', '$16','12$','Two'],
    [' 12', '22', 'Female', '$12', '$3.25', '$16','17$','Two'],
    [' 13', '33', 'Female', '$12', '$3.50', '$16','17$','Two'],
    [' 14', '44', 'Female', '$12', '$3.75', '$16','17$','Two'],
    [' 15', '55', 'Female', '$12', '$4.00', '$16','17$','Two'],
    [' 16', '66', 'Female', '$12', '$4.25', '$16','17$','Two'],
    [' 17', '77', 'Female', '$12', '$4.50', '$16','17$','Two'],
    [' 18', '88', 'Female', '$12', '$4.75', '$16','17$','Two'],
    [' 19', '99', 'Female', '$12', '$5.00', '$16','17$','Two'],
    [' 20', '00', 'Female', '$12', '$5.25', '$16','17$','Two'],
  ]

  const columns = [
    {
      name: 'BookName',
      label: 'No of days ',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'BookSSN',
      label: 'Hours ',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'Date',
      label: 'Student genders',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'Time',
      label: 'Vehicle charges ',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'FinePerDay',
      label: 'Fine Per Day',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'Pictures',
      label: 'Student charges ',
      options: {
        filter: false, // Assuming pictures are not meant to be filtered
        sort: false, // Assuming pictures are not meant to be sorted
      },
    },
    {
      name: 'Pictures',
      label: 'Pick and Drop charges',
      options: {
        filter: false, // Assuming pictures are not meant to be filtered
        sort: false, // Assuming pictures are not meant to be sorted
      },
    },
    {
      name: 'Pictures',
      label: 'Vehicle provided for driving ',
      options: {
        filter: false, // Assuming pictures are not meant to be filtered
        sort: false, // Assuming pictures are not meant to be sorted
      },
    },
    {
      name: 'Actions',
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
                  <MenuItem onClick={handleAddIssueBook}>
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
      <Button type="button" onClick={handleAddIssueBook}>
        + Issue Fee
      </Button>
    );
  };

  const options = {
    filterType: 'checkbox' as const,
    customToolbar: HeaderElements,
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box sx={{ padding: '24px' }}>
        <Typography variant="h4" component="div" sx={{ textAlign: 'center', mb: 2, fontFamily: 'Russo One', fontSize: '2.5rem', fontWeight: 'bold', color: '#333', marginTop: { xs: '70px', sm: '50px' } }}>
 Fee Based
</Typography>
          <Box sx={{ overflowX: 'auto' }}>
            <MUIDataTable
              title={'Fee Information'}
              data={data}
              columns={columns}
              options={options}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default IssueBook;