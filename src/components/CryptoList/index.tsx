import React, {FC} from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import {TCoin} from "../../types/index.types";

interface ICryptoList {
    cryptos: TCoin[];
}

const CryptoList: FC<ICryptoList> = ({ cryptos }): JSX.Element => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="left">Fullname</TableCell>
                        <TableCell align="left">Price</TableCell>
                        <TableCell align="left">Volume 24 hour</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {!cryptos.length ? 'Loading..' : cryptos.map((coin: any, index: number) => (
                        <TableRow
                            key={coin.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                <img style={{width: '40px', height: '40px'}} src={coin.imageUrl} alt="coin icon"/>
                            </TableCell>
                            <TableCell align="left">{coin.name}</TableCell>
                            <TableCell align="left">{coin.fullName}</TableCell>
                            <TableCell align="left">${coin.price}</TableCell>
                            <TableCell align="left">${coin.volume24hour}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default CryptoList;