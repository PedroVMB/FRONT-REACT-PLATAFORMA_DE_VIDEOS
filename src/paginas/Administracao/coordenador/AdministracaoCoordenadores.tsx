 
import { ChangeEvent, useState, useEffect } from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import Card from '@mui/material/Card';
import { TableCell, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { IUser } from "../../../interfaces/IUser";
import http from "../../../http";
import QuickSearchToolbar from "../../../componentes/table-mui/QuickSearchToolBar";

export const AdministracaoCoordenadores = () => {
    const [searchText, setSearchText] = useState<string>("");
    const [filteredData, setFilteredData] = useState<IUser[]>([]);
    const [paginationModel, setPaginationModel] = useState({
      page: 0,
      pageSize: 7,
    });
    const [coordenadores, setCoordenadores] = useState<IUser[]>([]);
  
    useEffect(() => {
      http
        .get<IUser[]>("coordenador")
        .then((response) => setCoordenadores(response.data))
        .catch((error) => {
          console.error("Error fetching coordenadores:", error);
        });
    }, []);
  
    const excluir = (coordenadorAhSerExcluido: IUser) => {
      http.delete(`coordenador/${coordenadorAhSerExcluido.id}`)
          .then(() => {
              const listaCoordenadores = coordenadores.filter(coordenador => coordenador.id !== coordenadorAhSerExcluido.id)
              setCoordenadores([...listaCoordenadores])
          });
    }
  
    const handleSearch = (searchValue: string) => {
      setSearchText(searchValue);
  
      const filteredRows = coordenadores.filter((row: IUser) => {
        return (
          row.nome.toLowerCase().includes(searchValue.toLowerCase()) ||
          row.email.toLowerCase().includes(searchValue.toLowerCase()) ||
          row.endereco.bairro.toLowerCase().includes(searchValue.toLowerCase()) ||
          row.endereco.cep.toLowerCase().includes(searchValue.toLowerCase()) ||
          row.endereco.cidade.toString().includes(searchValue) ||
          row.endereco.complemento.toLowerCase().includes(searchValue.toLowerCase()) ||
          row.endereco.logradouro.toString().includes(searchValue) ||
          row.endereco.numero
            .toLowerCase()
            .includes(searchValue.toLowerCase()) ||
          row.endereco.uf
            .toLowerCase()
            .includes(searchValue.toLowerCase())
        );
      });
      setFilteredData(searchValue.length ? filteredRows : []);
    };

    function getBairro(params: GridValueGetterParams){
        return `${params.row.endereco.bairro}`;
    }
    function getCep(params: GridValueGetterParams){
        return `${params.row.endereco.bairro}`;
    }
    function getCidade(params: GridValueGetterParams){
        return `${params.row.endereco.bairro}`;
    }
    function getComplemento(params: GridValueGetterParams){
        return `${params.row.endereco.bairro}`;
    }
    function getLogradouro(params: GridValueGetterParams){
        return `${params.row.endereco.bairro}`;
    }
    function getNumero(params: GridValueGetterParams){
        return `${params.row.endereco.bairro}`;
    }
    function getUf(params: GridValueGetterParams){
        return `${params.row.endereco.bairro}`;
    }
  
    const columns: GridColDef[] = [
      {
        flex: 0.2,
        minWidth: 110,
        field: "nome",
        headerName: "Nome",
        renderCell: ({ row }) => (
          <Typography variant="body2" sx={{ color: "text.primary" }}>
            {row.nome}
          </Typography>
        ),
      },
      {
        flex: 0.2,
        minWidth: 110,
        field: "email",
        headerName: "E-MAIL",
        renderCell: ({ row }) => (
          <Typography variant="body2" sx={{ color: "text.primary" }}>
            {row.email}
          </Typography>
        ),
      },
      {
        flex: 0.2,
        minWidth: 110,
        field: "endereco.bairro",
        valueGetter: getBairro,
        headerName: "BAIRRO",
        renderCell: ({ row }) => (
          <Typography variant="body2" sx={{ color: "text.primary" }}>
            {row.endereco.bairro}
          </Typography>
        ),
      },
      {
        flex: 0.2,
        minWidth: 110,
        field: "endereco.cep",
        valueGetter: getCep,
        headerName: "CEP",
        renderCell: ({ row }) => (
          <Typography variant="body2" sx={{ color: "text.primary" }}>
            {row.endereco.cep}
          </Typography>
        ),
      },
      {
        flex: 0.2,
        minWidth: 110,
        field: "endereco.cidade",
        valueGetter: getCidade,
        headerName: "CIDADE",
        renderCell: ({ row }) => (
          <Typography variant="body2" sx={{ color: "text.primary" }}>
            {row.endereco.cidade}
          </Typography>
        ),
      },
      {
        flex: 0.2,
        minWidth: 110,
        field: "endereco.complemento",
        valueGetter: getComplemento,
        headerName: "COMPLEMENTO",
        renderCell: ({ row }) => (
          <Typography variant="body2" sx={{ color: "text.primary" }}>
            {row.endereco.complemento}
          </Typography>
        ),
      },
      {
        flex: 0.2,
        minWidth: 110,
        field: "endereco.logradouro",
        valueGetter: getLogradouro,
        headerName: "LOGRADOURO",
        renderCell: ({ row }) => (
          <Typography variant="body2" sx={{ color: "text.primary" }}>
            {row.endereco.logradouro}
          </Typography>
        ),
      },
      {
        flex: 0.2,
        minWidth: 110,
        field: "endereco.numero",
        valueGetter: getNumero,
        headerName: "NUMERO",
        renderCell: ({ row }) => (
          <Typography variant="body2" sx={{ color: "text.primary" }}>
            {row.endereco.numero}
          </Typography>
        ),
      },
      {
        flex: 0.2,
        minWidth: 110,
        field: "endereco.uf",
        valueGetter: getUf,
        headerName: "ESTADO",
        renderCell: ({ row }) => (
          <Typography variant="body2" sx={{ color: "text.primary" }}>
            {row.endereco.uf}
          </Typography>
        ),
      },
      {
        flex: 0.2,
        minWidth: 110,
        field: "action",
        headerName: "Excluir",
        renderCell: ({ row }) => (
          <TableCell>
            <Button variant="outlined" color="error" onClick={() => excluir(row)}>
              Excluir
            </Button>
          </TableCell>
        ),
      },
      {
        flex: 0.2,
        minWidth: 110,
        field: "editar",
        headerName: "Editar",
        renderCell: ({ row }) => (
          <TableCell>
            <RouterLink to={`novo/${row.id}`}>Editar</RouterLink>
          </TableCell>
        ),
      },
    ];
  
    return <>
       <Card>
        <CardHeader title='Lista de Coordenadores Ativos' />
        <DataGrid
          autoHeight
          columns={columns}
          pageSizeOptions={[7, 10, 25, 50]}
          paginationModel={paginationModel}
          slots={{ toolbar: QuickSearchToolbar }}
          onPaginationModelChange={setPaginationModel}
          rows={filteredData.length ? filteredData : coordenadores}
          sx={{
            '& .MuiSvgIcon-root': {
              fontSize: '1.125rem',
            },
          }}
          slotProps={{
            baseButton: {
              size: 'medium',
              variant: 'outlined',
            },
            toolbar: {
              value: searchText,
              clearSearch: () => handleSearch(''),
              onChange: (event: ChangeEvent<HTMLInputElement>) => handleSearch(event.target.value),
            },
          }}
        />
      </Card>
    </>;
  };