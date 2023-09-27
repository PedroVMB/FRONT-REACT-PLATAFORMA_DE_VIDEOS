import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const bannerStyle = {
  backgroundColor: '#007bff', // Cor de fundo azul
  color: '#fff',              // Cor do texto branca
  padding: '20px',            // Espaçamento interno
  textAlign: 'center' as 'center', // Alinhamento centralizado
};

const h1Style = {
  fontSize: '36px',           // Tamanho da fonte do título
};

const pStyle = {
  fontSize: '18px',           // Tamanho da fonte do parágrafo
};

const Banner = () => {
  return (
    <Container style={bannerStyle}>
      <Box>
        <Typography variant="h1" style={h1Style}>EducaTech</Typography>
        <Typography variant="subtitle1" style={pStyle}>A nova escola de tecnologia do momento</Typography>
      </Box>
    </Container>
  )
}

export default Banner;

