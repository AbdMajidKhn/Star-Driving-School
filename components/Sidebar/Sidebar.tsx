import * as React from 'react'
import { useState } from 'react'
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
import Hidden from '@mui/material/Hidden';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
const drawerWidth = 240

const Sidebar = () => {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleSiderNavigation = (itemText: string) => {
    console.log('The item text is:', itemText);
    if (itemText == 'Dashboard') {
      router.push('/');
    } else if (itemText === 'Instructor') {
      router.push('/booklist');
    } else if (itemText === 'Students') {
      router.push('/memberlist');
    } else if (itemText === 'Fees') {
      router.push('/issuebook');
    }
  };

  return (
    <>
    
      <Drawer
        variant='permanent'
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          Top: '100px',
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Hidden smDown implementation="css">
  <div className='flex justify-center items-center'>
    <img src='Images/eco.png' style={{ borderRadius: '10%', width: '195px', height: '70px', marginTop: '40px' }} />
  </div>
</Hidden>
        <Box sx={{ overflow: 'auto' , marginTop: '40px'}}>
      <Hidden mdUp>
        {/* Toggle button for mobile */}
        <Button variant="contained" color="primary" startIcon={<MenuIcon />} onClick={handleToggle} sx={{  backgroundColor: '#c82f27','&:hover': { backgroundColor: '#c82f27' } }}>
  
</Button>
      </Hidden>
      <Box component="nav" sx={{ display: { xs: mobileOpen ? 'block' : 'none', md: 'block' } }}>

      <List>
          <ListItem key="Dashboard" disablePadding sx={{ '&:hover': { backgroundColor: '#c82f27', color: 'white' } }}>
            <ListItemButton onClick={() => handleSiderNavigation('Dashboard')}>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
            <ListItem key='Instructor' disablePadding sx={{ '&:hover': { backgroundColor: '#c82f27',color:'white' } }}>
              <ListItemButton onClick={() => handleSiderNavigation('Instructor')}>
                <ListItemIcon>
                  <LibraryBooksIcon />
                </ListItemIcon>
                <ListItemText primary='Instructor' />
              </ListItemButton>
            </ListItem>
            <ListItem key='Students' disablePadding sx={{ '&:hover': { backgroundColor: '#c82f27' ,color:'white' } }}>
              <ListItemButton onClick={() => handleSiderNavigation('Students')}>
                <ListItemIcon>
                  <Groups2Icon />
                </ListItemIcon>
                <ListItemText primary='Students' />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem key='Fees' disablePadding sx={{ '&:hover': { backgroundColor: '#c82f27',color:'white' } }}>
              <ListItemButton onClick={() => handleSiderNavigation('Fees')}>
                <ListItemIcon>
                  <LibraryBooksIcon />
                </ListItemIcon>
                <ListItemText primary='Fees' />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;
