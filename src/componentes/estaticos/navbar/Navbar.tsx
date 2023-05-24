import { AppBar, Toolbar, Box, Typography, Grid } from '@mui/material';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';

function Navbar() {
  const [token, setToken] = useLocalStorage('token');
  const navigate = useNavigate();

  function logout() {
    alert('Usuário deslogado com sucesso');
    setToken('');
    navigate('/login');
  }

  return (
    <>
      <AppBar position="static" className="navbar">
        <Toolbar variant="dense">
          <Grid container justifyContent={'space-between'}>
            <Box style={{ cursor: 'pointer' }}>
              <Typography variant="h5" color="inherit">
                Site do Goinha
              </Typography>
            </Box>

            <Box display="flex" justifyContent="start">
              <Link to="/home">
                <Box mx={1} style={{ cursor: 'pointer' }}>
                  <Typography variant="h6" color="inherit">
                    home
                  </Typography>
                </Box>
              </Link>
              <Link to="/postagens">
                <Box mx={1} style={{ cursor: 'pointer' }}>
                  <Typography variant="h6" color="inherit">
                    postagens
                  </Typography>
                </Box>
              </Link>
              <Link to="/temas">
                <Box mx={1} style={{ cursor: 'pointer' }}>
                  <Typography variant="h6" color="inherit">
                    temas
                  </Typography>
                </Box>
              </Link>
              <Link to="/cadastrarTema">
                <Box mx={1} style={{ cursor: 'pointer' }}>
                  <Typography variant="h6" color="inherit">
                    cadastrar tema
                  </Typography>
                </Box>
              </Link>
              <Box mx={1} style={{ cursor: 'pointer' }} onClick={logout}>
                <Typography variant="h6" color="inherit">
                  logout
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
