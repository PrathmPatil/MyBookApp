"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDownOutlined';
import ArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUpOutlined';
import { Grid } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import GitaAppBar from './AppBar';
import DataCard from './DataCard';

const drawerWidth = 240;

export default function SideBar() {

    const [product, setProduct] = React.useState('')
    React.useEffect(async () => {
        let data = await fetch(" http://localhost:3000/products")
        data = await data.json()
        console.log(data)
        setProduct(data)
    }, [])

    //for menuIcon
    const [menuIcon, setmenuIcon] = React.useState(true);
    const sideBarOpen = () => { setmenuIcon(!menuIcon) }
    // breakpoints 
    const theme = useTheme();
    const isXsScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isSmScreen = useMediaQuery(theme.breakpoints.up('sm'));
    //selectedData
    const [selectedData, setSelectedData] = React.useState({})
    // const sendData=(items)=>{
    //     setSelectedData(items)
    // }
    console.log("selectedData");
    console.log(selectedData);
    return (
        <Box sx={{ display: 'flex', }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <GitaAppBar sideBarOpen={sideBarOpen} />
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: isSmScreen ? drawerWidth : (isXsScreen && menuIcon ? '100vw' : '0')
                        , boxSizing: 'border-box'
                    },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto', border: '2px solid red', '::-webkit-scrollbar': { display: 'none' } }}>
                    <List sx={{ overflow: 'hidden', }}>
                        {Array.isArray(product) && product.map((items) => (
                            <ListItem disablePadding sx={{ bgcolor: '#fff9c4', marginBottom: 1, borderRadius: 2, transition: 'background-color 0.3s ease', '&:hover': { bgcolor: '#ffe082' } }}>
                                <ListItemButton component="button" onClick={() => { console.log(items); sideBarOpen(); setSelectedData(items) }}>
                                    <ListItemText primary={items.title} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>

            </Drawer >
            <Box component="main" sx={{ flexGrow: 1, p: 3, }}>
                <Grid >
                    <Toolbar />
                    {Array.isArray(selectedData.images) && selectedData.images.map((items) => (
                            <Grid className='space-y-5'>
                                <DataCard items={items} />
                            </Grid>

                        ))}


                    <Typography paragraph>
                        "id":2,"title":"iPhone X","description":"SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...","price":899,"discountPercentage":17.94,"rating":4.44,"stock":34,"brand":"Apple","category":"smartphones","thumbnail":"https://i.dummyjson.com/data/products/2/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/2/1.jpg","https://i.dummyjson.com/data/products/2/2.jpg","https://i.dummyjson.com/data/products/2/3.jpg","https://i.dummyjson.com/data/products/2/thumbnail.jpg"]
                    </Typography>
                </Grid>
            </Box>
        </Box >
    );
}
