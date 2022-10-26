import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Videos from './Videos'
import { fetchFromApi } from '../utils/fetchFromApi'
import { useParams } from 'react-router-dom'

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const [searchTerm] = useParams();

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=`)
      .then((data) => { setVideos(data.items) })
  }, [])


  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white' }}>
        Search Result for: <span style={{ color: '#f31503' }}>{searchTerm}</span> Videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  )
}

export default SearchFeed
