"use client"
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Icon from '@mui/material';
import FavoriteEmptyIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteFilledIcon from '@mui/icons-material/FavoriteOutlined';
import ShareIcon from '@mui/icons-material/ShareOutlined';

export default function DataCard({ items }) {
    const[icons,setIcons]=React.useState(false)
    console.log(icons)
    console.log("items")
    console.log(items)
    return (
        <Container sx={{ bgcolor: '#fff9c4', height: '40vh', width: '60vw', marginLeft: 4, padding:2 , marginBottom: 2, borderRadius: 3, boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',transition: 'background-color 0.3s ease','&:hover': { bgcolor: '#ffe082',},}}>
            <Typography>
                {items}
                {/* <h6>{items.uvach}</h6>
                <h3>{items.slock}</h3>
                <p>{items.arth}</p> */}
                
                {/* <h3>{items.price}</h3>
                <h3>{items.title}</h3>
                <h5>{items.description}</h5>
                <h6>{items.thumbnail}</h6> */}
            </Typography>
            <div>
                {
                icons?<FavoriteEmptyIcon onClick={()=>setIcons(!icons)}/>:<FavoriteFilledIcon  onClick={()=>setIcons(!icons)}/>}
                <ShareIcon/>
            </div>
        </Container>
    );
}