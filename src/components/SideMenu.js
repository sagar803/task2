import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';

export const SideMenu = () => {
  return (
    <Box 
        sx={{
          backgroundColor: '#2F3C7E',
          boxSizing: 'border-box',
          position: 'fixed',
          width: '200px',
          height: '100%',
          pt: '55px',
          pl: '20px'
        }}
    >
      <Button sx={{color:"white"}} startIcon={<DashboardIcon />}>Dashboard</Button>
      <Button sx={{color:"white"}} startIcon={<DashboardIcon />}>Dashboard</Button>
      <Button sx={{color:"white"}} startIcon={<DashboardIcon />}>Dashboard</Button>
      <Button sx={{color:"white"}} startIcon={<DashboardIcon />}>Dashboard</Button>
      <Button sx={{color:"white"}} startIcon={<DashboardIcon />}>Dashboard</Button>
      <Button sx={{color:"white"}} startIcon={<DashboardIcon />}>Dashboard</Button>
    </Box>
  )
}
