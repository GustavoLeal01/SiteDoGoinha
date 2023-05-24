import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import './Footer.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


function Footer() {
  return (
    <footer className='footer'>
      <Grid container py={4} alignItems={'center'}>
        <Grid item xs={4} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
          <Typography variant='h6' align='center'>Site do Goinha - Feito por: Goinha - 2023</Typography>
          <Box display={'flex'}>
            <Typography>Feito com:</Typography>
            <KeyboardArrowLeftIcon />
            <Typography color={'lightgrey'} >React / MUI</Typography>
            <KeyboardArrowRightIcon />
          </Box>
        </Grid>
        <Grid item xs={4} display={'flex'} justifyContent={'center'}>
          <Box display={'flex'} gap={2} alignItems={'center'} className='iconesFooter'>
            <GitHubIcon fontSize='inherit' className='iconeInd' />
            <LinkedInIcon fontSize='inherit' className='iconeInd' />
          </Box>
        </Grid>
        <Grid item xs={4} display={'flex'} justifyContent={'center'}>
          <Typography variant='h5'>Em parceria com: Generation Brasil</Typography>
        </Grid>
      </Grid>
    </footer>
  )
}

export default Footer