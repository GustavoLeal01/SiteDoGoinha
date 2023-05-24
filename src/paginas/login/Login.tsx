import React, { ChangeEvent, useEffect, useState } from 'react';
import './Login.css';
import { Grid, Box, Typography, TextField, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { UsuarioLogin } from '../../model/UsuarioLogin';
import { login } from '../../service/service';
import useLocalStorage from 'react-use-localstorage';

function Login() {
  // cria a variavel para navegação interna pela rota
  const navigate = useNavigate();

  // cria um estado para armazenamento no localStorage do navegador
  const [token, setToken] = useLocalStorage('token');

  // cria um estado de controle para o usuário preencher os dados de login
  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
    token: '',
  });

  // atualiza os dados do estado acima, e ajuda a formar o JSON para a requisição
  function updateModel(event: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [event.target.name]: event.target.value,
    });
  }

  // função que envia o formulário para o backend
  async function enviar(event: ChangeEvent<HTMLFormElement>) {
    // previne que o formulario atualize a pagina
    event.preventDefault();
    try {
      await login('/usuarios/logar', usuarioLogin, setToken);
      alert('Usuario logado com sucesso');
    } catch (error) {
      alert('Usuário e/ou senha inválidos');
    }
  }

  // Efeito que fica de olho no token, e quando chega algo diferente de vazio, navega o usuario pra home
  useEffect(() => {
    if (token !== '') {
      navigate('/home');
    }
  }, [token]);

  return (
    <>
      <Grid container alignItems={'center'}>
        <Grid item xs={6}>
          <Box display={'flex'} justifyContent={'center'}>
            <Grid item xs={6} gap={2} display={'flex'} flexDirection={'column'}>
              <form onSubmit={enviar}>
                <Box display={'flex'} flexDirection={'column'} gap={2}>
                  <Typography align="center" variant="h3">
                    Login
                  </Typography>

                  <TextField
                    name="usuario"
                    label="Nome de usuário"
                    value={usuarioLogin.usuario}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                      updateModel(event)
                    }
                  />

                  <TextField
                    name="senha"
                    label="Senha"
                    type="password"
                    value={usuarioLogin.senha}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                      updateModel(event)
                    }
                  />
                  <Button fullWidth variant="contained" type="submit">
                    Logar
                  </Button>
                </Box>
              </form>
              <hr />
              <Typography variant="body1" align="center">
                Ainda não colocou seu nominho no site? <Link to="/cadastro" style={{textDecoration: 'underline'}}>Cadastre-se</Link>
              </Typography>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={6} className="imagemLogin"></Grid>
      </Grid>
    </>
  );
}

export default Login;
