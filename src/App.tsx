import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import {styled} from "@mui/material";

import {TCoin} from "./types/index.types";

import {Converter, CryptoList} from "./components";


const Wrapper = styled(Container)(({ theme }) => ({
    padding: theme.spacing(10),
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
    const [coins, setCoins] = useState<TCoin[]>([]);

    useEffect(() => {
        const callback = async () => {
            const { data: { Data: quotes } } =
                await axios.get("https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD");
            const parsedCoins: TCoin[] = quotes.map((coin: any) => {
                const obj: TCoin = {
                    name: coin.CoinInfo.Name,
                    fullName: coin.CoinInfo.FullName,
                    imageUrl: `https://www.cryptocompare.com/${coin.CoinInfo.ImageUrl}`,
                    price: coin.RAW.USD.PRICE.toFixed(3),
                    volume24hour: parseInt(coin.RAW.USD.VOLUME24HOUR),
                };

                return obj;
            });
            setCoins(parsedCoins);
        };
        callback();
    }, []);

  return (
      <Wrapper maxWidth="lg">
        <Grid container spacing={3}>
            <Grid item xs={8}>
                <CryptoList cryptos={coins} />
            </Grid>

            <Grid item xs={4}>
                <Converter />
            </Grid>
        </Grid>
      </Wrapper>
  );
}

export default App;
