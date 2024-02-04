import React from "react";
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Button } from "@mui/material";

function Cart(props) {

    return (
        <TableRow>
            <TableCell align="center"><img className="mini-image" src={props.goods.icon} alt="" /></TableCell>
            <TableCell align="center">{props.goods.title}</TableCell>
            <TableCell align="center">{props.goods.cost}</TableCell>
            <TableCell align="center">
                <Button className="minus" data-key={props.goods.articul}>-</Button>
                {props.cart}
                <Button className="plus" data-key={props.goods.articul}>+</Button>
            </TableCell>
            <TableCell align="center">{props.goods.cost * props.cart}</TableCell>
            <TableCell align="center"><button className="delete" data-key={props.goods.articul}></button></TableCell>
        </TableRow>
    );
}


export default Cart;