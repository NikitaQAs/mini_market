import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, selectCart } from "../store/CartSlice";
import { minus, delet } from '../store/CartSlice';
import { selectGoods } from "../store/GoodsSlice";
import Cart from "../components/Cart";
import Drawer from '@mui/material/Drawer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Typography } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';


function CartList(props) {
    const goods = useSelector(selectGoods);
    const cart = useSelector(selectCart);
    const dispatch = useDispatch();
    const {
        cartOpen,
        closeCart = Function.prototype
    }
        = props;

    const goodsObj = goods.reduce((accum, item) => {
        accum[item['articul']] = item;
        return accum;
    }, {});
    console.log(goodsObj);

    const cartSum = Object.keys(cart).reduce((accum, articul) => {
        if (goodsObj[articul]) {
            accum += goodsObj[articul].cost * cart[articul];
        }
        return accum;
    }, 0);

    let clickHandler = (event) => {
        event.preventDefault();
        let t = event.target;
        if (t.classList.contains('minus')) {
            dispatch(minus(t.getAttribute('data-key')));
            return;
        }
        else if (t.classList.contains('delete')) {
            dispatch(delet(t.getAttribute('data-key')));
            return;
        }
        else if (t.classList.contains('plus')) {
            dispatch(increment(t.getAttribute('data-key')));
            return;
        }
    }

    return (
        <Drawer
            anchor="right"
            open={cartOpen}
            onClose={closeCart}
        >
            <TableContainer onClick={clickHandler}>
                <Table sx={{ width: 600 }} aria-aria-label="simple-table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Product</TableCell>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Cost</TableCell>
                            <TableCell align="center" >Quantity</TableCell>
                            <TableCell align="center">Sum</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Object.keys(cart).map(item =>
                            <Cart goods={goodsObj[item]} cart={cart[item]} key={item} />)}
                    </TableBody>
                </Table>
            </TableContainer>
            <AppBar position="fixed" color="third" sx={{ top: 'auto', bottom: 0, width: 600 }}>
                <Toolbar>
                    <Typography variant="h5" >Your cart general sum: {cartSum}</Typography>
                </Toolbar>
            </AppBar>
        </Drawer>
    );
}

export default CartList;