import { Box, Typography } from '@mui/material'
import React from 'react'
import BorderColorIcon from '@mui/icons-material/BorderColor';

export const Header = ({title, handleDialog}) => {

  return (
    <Box
        width= "calc(100% - 20px)"
        height='20px'
        borderRadius='7px'
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        padding='10px'
        sx={{
            backgroundColor: '#2F3C7E',
            color: 'white'
        }}
    >
      <Typography>{title}</Typography>
      <BorderColorIcon 
        fontSize='13px'
        sx={{cursor: 'pointer'}}
        onClick={handleDialog} 
      />
    </Box>
  )
}
