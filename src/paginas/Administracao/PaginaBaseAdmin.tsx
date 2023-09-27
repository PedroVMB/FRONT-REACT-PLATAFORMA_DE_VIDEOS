import { Box, Button, Typography, AppBar, Container, Toolbar, Link, Paper } from "@mui/material"

import { Link as RouterLink, Outlet } from 'react-router-dom'

const PaginaBaseAdmin = () => {
    return (
        <>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar>
                        <Typography variant="h6">
                            Administração
                        </Typography>
                        <Box sx={{ display: 'flex', flexGrow: 1 }}>
                            <Link component={RouterLink} to="/admin/alunos">
                                <Button sx={{ my: 2, color: 'white' }} >
                                    Alunos
                                </Button>
                            </Link>
                            <Link component={RouterLink} to="/admin/alunos/novo">
                                <Button sx={{ my: 2, color: 'Yellow' }}>
                                    Novo Aluno
                                </Button>
                            </Link>

                            <Link component={RouterLink} to="/admin/professores">
                                <Button sx={{ my: 2, color: 'white' }}>
                                    Professores
                                </Button>
                            </Link>
                            <Link component={RouterLink} to="/admin/professores/novo">
                                <Button sx={{ my: 2, color: 'Yellow' }}>
                                    Novo Professor
                                </Button>
                            </Link>
                            <Link component={RouterLink} to="/admin/cursos">
                                <Button sx={{ my: 2, color: 'white' }}>
                                    Curso
                                </Button>
                            </Link>
                            <Link component={RouterLink} to="/admin/cursos/novo">
                                <Button sx={{ my: 2, color: 'Yellow' }}>
                                    Novo Curso
                                </Button>
                            </Link>
                            <Link component={RouterLink} to="/admin/coordenadores">
                                <Button sx={{ my: 2, color: 'white' }}>
                                Coordenadores
                                </Button>
                            </Link>
                            <Link component={RouterLink} to="/admin/coordenadores/novo">
                                <Button sx={{ my: 2, color: 'Yellow' }}>
                                    Novo Coordenador
                                </Button>
                            </Link>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box>
                <Container maxWidth="lg" sx={{ mt: 1 }}>
                    <Paper sx={{ p: 2 }}>
                        <Outlet />
                    </Paper>
                </Container>
            </Box>
        </>
    )
}

export default PaginaBaseAdmin