import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <>
<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="balck"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link className='links' to={'/'}>Home</Link>
          <Link className='links' to={'Product'}>Product</Link>
          <Link className='links' to={'Cart'}>Cart</Link>
          <Link className='links' to={'Adminpanel'}>Adminpanel</Link>
          </Typography>
          
          <Button color="inherit"> <Link  className='links' to={'/Login'}>Login</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
        
       
       
       
    
    </>
  )
}

export default Navbar