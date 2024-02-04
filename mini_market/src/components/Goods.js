import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { selectCart } from "../store/CartSlice";


function Goods(props) {
    // const cart = useSelector(selectCart);


    return (
        <Grid item xs={12} md={4} >
            <Card sx={{
                maxWidth: 370,
                height: '100%'
            }}>
                <CardMedia
                    component="img"
                    alt=""
                    height="140"
                    image={props.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" >{props.title}</Typography>
                    <Typography variant="h6" color="text.secondary" >{props.cost}</Typography>
                </CardContent>
                <CardActions>
                    <Button className="add-to-cart" data-key={props.articul}>Add to cart</Button>
                    {/* <Typography gutterBottom variant="h6" component="div">{Object.keys(cart).length}</Typography> */}
                </CardActions>

            </Card>
        </Grid>
    );
}

export default Goods;