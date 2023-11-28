import { Box, Typography } from '@mui/material'
import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';

export const SideMenu = () => {
  return (
    <Box 
        sx={{
          backgroundColor: '#2F3C7E',
          position: 'fixed',
          width: '200px',
          m: '0',
          height: '100%',
          borderRight: '1px solid black',
          overflowX: 'hidden',
          color: 'white',
          pt: '30px'     
        }}
    >
      <Box sx={{display: 'flex', padding: '10px 15px'}}>
        <DashboardIcon />
        <Typography>Dashboard</Typography>
      </Box>
      <Box sx={{display: 'flex', padding: '10px 15px'}}>
        <DashboardIcon />
        <Typography >Dashboard</Typography>
      </Box>
      <Box sx={{display: 'flex', padding: '10px 15px'}}>
        <DashboardIcon />
        <Typography >Dashboard</Typography>
      </Box>
      <Box sx={{display: 'flex', padding: '10px 15px'}}>
        <DashboardIcon />
        <Typography >Dashboard</Typography>
      </Box>
      <Box sx={{display: 'flex', padding: '10px 15px'}}>
        <DashboardIcon />
        <Typography >Dashboard</Typography>
      </Box>
      <Box sx={{display: 'flex', padding: '10px 15px'}}>
        <DashboardIcon />
        <Typography >Dashboard</Typography>
      </Box>
    </Box>
  )
}
