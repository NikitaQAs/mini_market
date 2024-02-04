import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectGoods } from '../store/GoodsSlice';
import Goods from '../components/Goods';
import { increment } from '../store/CartSlice';
import { Grid } from '@mui/material';

function GoodsList() {
    const goods = useSelector(selectGoods);
    const dispatch = useDispatch();

    let clickHandler = (event) => {
        event.preventDefault();
        let t = event.target;
        if (!t.classList.contains('add-to-cart')) return true;
        dispatch(increment(t.getAttribute('data-key')));
    }

    return (
        <Grid container onClick={clickHandler}
            justifyContent="center"
            alignItems="center" spacing={{ xs: 2 }} >
            {
                goods.map(item => <Goods title={item.title} cost={item.cost} image={item.image}
                    articul={item.articul} key={item.articul} />)
            }
        </Grid >
    );
}

export default GoodsList;