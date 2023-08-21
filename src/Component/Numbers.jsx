"use client"
import React from 'react'
import { Container } from '@mui/material'
import { Typography, Button } from '@mui/material'
import { useTheme } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery';



function Numbers({ product }) {
    console.log("advertise")
    console.log(product)

    const theme = useTheme();
    const isXsScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isSmScreen = useMediaQuery(theme.breakpoints.up('sm'));
    return (
        <div>
            <Container sx={{ bgcolor: '#fff9c4', height: 'auto',  width:isXsScreen?'18vw':'24vw', marginLeft: 2, padding: 2, marginBottom: 2, top: '40px', borderRadius: 3, boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', transition: 'background-color 0.3s ease',}}>
                <Typography sx={{ border: '2px solid black', display: 'flex', flexWrap: 'wrap',justifyContent:'center' }}>
                    {Array.isArray(product) && product.map((items) => (
                        <Button size='small' sx={{borderRadius: 60,marginLeft:isXsScreen?0:1, marginBottom:isXsScreen?0:1,"&:hover":{bgcolor:'#ffe082'}}}  className=''>
                            {items.id}
                        </Button>
                    ))}

                </Typography>
            </Container>
        </div>
    )
}

export default Numbers
