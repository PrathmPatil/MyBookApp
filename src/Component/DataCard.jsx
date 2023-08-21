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
import { useTheme } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery';


export default function DataCard({ items }) {
    const [FevriteIcons, setFevriteIcons] = React.useState(true)
    const [ShareIcons, setShareIcons] = React.useState(true)
    const [FevriteData, setFevriteData] = React.useState({})
    const [ShareData, setShareData] = React.useState({})
    console.log(FevriteData)
    console.log(ShareData)
    const theme = useTheme();
    const isXsScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isSmScreen = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Container sx={{ bgcolor: '#fff9c4', height: '40vh', width:isXsScreen ? '70vw' : '50vw', padding: 2, marginBottom: 2, borderRadius: 3, boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', transition: 'background-color 0.3s ease', '&:hover': { bgcolor: '#ffe082', }, }}>
            <Typography sx={{border:'2px solid black'}}>
                {items.link}
                {/* <h6>{items.uvach}</h6>
                <h3>{items.slock}</h3>
                <p>{items.arth}</p> */}

                {/* <h3>{items.price}</h3>
                <h3>{items.title}</h3>
                <h5>{items.description}</h5>
                <h6>{items.thumbnail}</h6> */}
            </Typography>
            <div className='w-[40vw] h-[20px] flex flex-col border-2 border-slate-900'>
                {
                    FevriteIcons ? <FavoriteEmptyIcon onClick={() => { setFevriteIcons(!FevriteIcons), setFevriteData(items) }} /> : <FavoriteFilledIcon onClick={() => setIcons(!FevriteIcons)} />
                }
                
                    <ShareIcon onClick={() => {setShareData(items) }} />
            </div>
        </Container>
    );
}