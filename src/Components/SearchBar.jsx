import { Paper, IconButton } from '@mui/material'
import React from 'react'

import { Search } from '@mui/icons-material'


const SearchBar = () => {
    return (
        // <Paper
        // component={"form"}
        // onSubmit={()=>{}}
        // sx={{
        //     borderRadius:20,
        //     border:'1px solid #e3e3e3',
        //     boxShadow:'none',
        //     pl:2,
        //     mr:{sm:5}
        // }}
        // >
        //     <input
        //     className='search-bar'
        //     placeholder='Search...'
        //     value=""
        //     onChange={()=>{}}
        //     />
        //     <IconButton type="submit" sx={{padding:'10px',color:'red'}}>
        //         <Search/>
        //     </IconButton>
        // </Paper>
        <Paper
            component='form'
            // onSubmit={onhandleSubmit}
            sx={{
                borderRadius: 20,
                border: '1px solid #e3e3e3',
                pl: 2,
                boxShadow: 'none',
                // border:'none',
                mr: { sm: 5 },
            }}
        >
            <input
            style={{border:'none',outline:'none'}}
                className='search-bar'
                placeholder='Search...'
                // value={searchTerm}
                // onChange={(e) => setSearchTerm(e.target.value)}
            />
            <IconButton type='submit' sx={{ p: '10px', color: 'red' }} aria-label='search'>
                <Search />
            </IconButton>
        </Paper>
    )
}

export default SearchBar
