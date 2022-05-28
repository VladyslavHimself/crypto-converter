import React from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import {Box, FormControl, InputLabel, MenuItem, styled, Typography} from "@mui/material";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const ConverterContainer = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const Wrapper = styled(Container)(({ theme }) => ({
    padding: theme.spacing(10),
}));
const CryptoInputBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: '10px 0',
}));

function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function App() {
  return (
      <Wrapper maxWidth="lg">
        <Grid container spacing={3}>
            <Grid item xs={8}>

                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell align="left">Fullname</TableCell>
                                    <TableCell align="left">Name</TableCell>
                                    <TableCell align="left">Price</TableCell>
                                    <TableCell align="left">Volume 24 hour</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row, index) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            { index + 1}
                                        </TableCell>
                                        <TableCell align="left">{row.calories}</TableCell>
                                        <TableCell align="left">{row.fat}</TableCell>
                                        <TableCell align="left">{row.carbs}</TableCell>
                                        <TableCell align="left">{row.protein}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

            </Grid>

            <Grid item xs={4}>
                <ConverterContainer>
                    <CryptoInputBox>
                        <FormControl>
                            <TextField label="Amount" variant="standard" />
                        </FormControl>
                        <FormControl>
                            <InputLabel>Type</InputLabel>
                            <Select
                                label="Age"
                                value={10}
                                variant={"outlined"}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </CryptoInputBox>

                    <CryptoInputBox>
                        <FormControl>
                            <TextField label="Amount" variant="standard" />
                        </FormControl>
                        <FormControl>
                            <InputLabel>Type</InputLabel>
                            <Select
                                label="Age"
                                value={10}
                                variant={"outlined"}

                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </CryptoInputBox>
                    <Typography marginTop={'30px'} variant="h5" component="h2">
                        29,41 Українська гривня
                    </Typography>
                </ConverterContainer>
            </Grid>
        </Grid>
      </Wrapper>
  );
}

export default App;
