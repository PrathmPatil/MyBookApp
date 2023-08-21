import React from 'react'
import { Container } from '@mui/material'
import { Typography, Button } from '@mui/material'
import Image from 'next/image'
import { useTheme } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery';

function Advertise() {
    const theme = useTheme();
    const isXsScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isSmScreen = useMediaQuery(theme.breakpoints.up('sm'));
    return (
        <div>
            <Container sx={{display:isXsScreen?'none':'block', bgcolor: '#fff9c4', height: 'auto', width: '24vw', marginLeft: 2, padding: 2, marginBottom: 2, top: '40px', borderRadius: 3, boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', transition: 'background-color 0.3s ease', }}>
                <Image src='/gitaImage1.jpeg' height={300} width={280} onClick={()=>window.location.href='https://chat.openai.com/'}></Image>
                <Typography sx={{ border: '2px solid black', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                </Typography>
            </Container>
        </div>
    )
}

export default Advertise
