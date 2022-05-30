import React, {FC} from "react";
import {Box, FormControl, InputLabel, MenuItem, styled} from "@mui/material";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import Paper from "@mui/material/Paper";

const ConverterContainer = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const CryptoInputBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: '10px 0',
}));

const Converter: FC = (): JSX.Element => {
    return (
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
        </ConverterContainer>
    );
}

export default Converter;