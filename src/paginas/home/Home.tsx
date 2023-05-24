import React from 'react';
import './Home.css';
import { Box, Button, Grid, Typography } from '@mui/material';
import ListaPostagens from '../../componentes/postagens/listaPostagens/ListaPostagem';
import TabPostagens from '../../componentes/postagens/tabPostagens/TabPostagens';
function Home() {
  return (
    <>
      <Grid container gap={4} alignItems={'center'} justifyContent={'center'} style={{backgroundColor: '#5a0aa5'}}>
      <Grid item xs={4}>
        <Box p={8} color={'white'} display={'flex'} flexDirection={'column'} alignItems={'center'} gap={2}>
          <Typography align='center' fontWeight={900} variant='h3'>Welcome to Site do Goinha</Typography>
          <Typography align='center' variant='body1'>Deixe seu salve...</Typography>
          <Button variant='outlined' className='outlinedButton'>Ver Postagens</Button>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <img src="https://ik.imagekit.io/1vxpqo8ju/f5784df8611e6be967ed54fd609761c651797052c82bfd66bc6d40f642c32fb7_1__2_-removebg-preview.png?updatedAt=1684942228835" alt="" width={'100%'} />
      </Grid>
    </Grid>
    <TabPostagens />
    </>
  );
}

export default Home;
