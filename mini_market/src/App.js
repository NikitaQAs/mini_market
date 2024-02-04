import GoodsList from './containers/GoodsList';
import CartList from './containers/CartList';
import Header from './containers/Header';
import { useState } from 'react';

import './App.css';
import { Box, Container } from '@mui/material';

function App() {
    const [isCartOpen, setCartOpen] = useState(false)

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Header
                handleCart={(() => setCartOpen(true))}
            ></Header>
            <Container sx={{ mt: '3rem' }}>
                <GoodsList></GoodsList>
            </Container>
            <CartList
                cartOpen={isCartOpen}
                closeCart={() => setCartOpen(false)}
            ></CartList>
        </Box>
    );
}

export default App;