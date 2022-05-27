import React from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import {Box, FormControl, InputLabel, MenuItem, styled, Typography} from "@mui/material";

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

function App() {
  return (
      <Wrapper maxWidth="lg">
        <Grid container spacing={3}>
            <Grid item xs={8}>
                <ConverterContainer>sho</ConverterContainer>
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
