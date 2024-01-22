import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import AppBar from '@mui/material/AppBar'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
import DashboardIcon from '@mui/icons-material/Dashboard'
import Groups2Icon from '@mui/icons-material/Groups2'
import { useRouter } from 'next/navigation'
const drawerWidth = 240

const Sidebar = () => {
  const router = useRouter()
  const handleSiderNavigation = (itemText: string) => {
    console.log('The item text is:', itemText)
    if (itemText == 'Dashboard') {
      router.push('/')
    } else if (itemText === 'Instructor') {
      router.push('/booklist')
    } else if (itemText === 'Students') {
      router.push('/memberlist')
    } else if (itemText === 'Fees') {
      router.push('/issuebook')
    }
  }
  return (
    <>
      <Drawer
        variant='permanent'
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          Top: '100px',
          //   zIndex: 2,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        {/* <Toolbar /> */}
        <div className='flex justify-center items-center'>
  <img src='Images/eco.png' style={{borderRadius: '10%', width: '195px', height: '100px', marginTop: '20px'}} />
</div>
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {/* {['Dashboard', 'Books', 'Members'].map((text, index) => ( */}
            {/* <ListItem key='logo' disablePadding>
              <ListItemButton onClick={() => handleSiderNavigation('Dashboard')}>
                <ListItemIcon>
                  <DashboardIcon />{' '}
                </ListItemIcon>

              </ListItemButton>
            </ListItem> */}
            <ListItem key='Dashboard' disablePadding>
              <ListItemButton onClick={() => handleSiderNavigation('Dashboard')}>
                <ListItemIcon>
                  <DashboardIcon />{' '}
                </ListItemIcon>
                <ListItemText primary='Dashboard' />
              </ListItemButton>
            </ListItem>
            <ListItem key='Instructor' disablePadding>
              <ListItemButton onClick={() => handleSiderNavigation('Instructor')}>
                <ListItemIcon>
                  <LibraryBooksIcon />{' '}
                </ListItemIcon>
                <ListItemText primary='Instructor' />
              </ListItemButton>
            </ListItem>
            <ListItem key='Students' disablePadding>
              <ListItemButton onClick={() => handleSiderNavigation('Students')}>
                <ListItemIcon>
                  <Groups2Icon />{' '}
                </ListItemIcon>
                <ListItemText primary='Students' />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem key='Issue Book' disablePadding>
              <ListItemButton onClick={() => handleSiderNavigation('Fees')}>
                <ListItemIcon>
                  <LibraryBooksIcon />{' '}
                </ListItemIcon>
                <ListItemText primary='Fees' />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  )
}

export default Sidebar
