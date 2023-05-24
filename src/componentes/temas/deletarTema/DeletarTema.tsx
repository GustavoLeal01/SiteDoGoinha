import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react'

function DeletarTema() {
  return (
    <>
      <Grid container justifyContent={'center'}>
        <Grid item xs={4}>
          <Typography variant='h5'> Tu vai apagar isso mesmo?: </Typography>

          <Box display={'flex'} gap={4}>
            <Button variant='contained' color='primary' fullWidth>Cancelar</Button>
            <Button variant='contained' color='secondary' fullWidth>Apagar</Button>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default DeletarTema