import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { ShoppingBasketRounded } from '@mui/icons-material';
import { Badge } from '@mui/material';
import { selectCart } from "../store/CartSlice";
import { useSelector } from 'react-redux';

function Header({ handleCart }) {
    const cart = useSelector(selectCart);
    const totalItems = Object.values(cart).reduce((acc, quantity) => acc + quantity, 0);

    return (
        <AppBar>
            <Toolbar>
                <Typography
                    color="white"
                    variant="h6"
                    component="span"
                    sx={{ flexGrow: 1 }}
                >
                    HealthyShop
                </Typography>
                <IconButton
                    onClick={handleCart}
                    color="third"
                >
                    <Badge
                        color="secondary"
                        badgeContent={totalItems}
                    >
                        <ShoppingBasketRounded />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar >
    );
}

export default Header;
