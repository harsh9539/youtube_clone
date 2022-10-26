import { Box, Stack } from '@mui/material'
import React from 'react'
import ChannelCard from './ChaneelCard'
import VideoCard from './VideoCard'

const Videos = ({ videos }) => {
    console.log(videos)
    return (
        <Stack direction={"row"} flexWrap="wrap" justifyContent={"center"} gap={2}>
            {
                videos.map((item,idx)=>(
                    <Box key={idx}>
                        {item.id.videoId && <VideoCard video={item}/>}
                        {item.id.channelId && <ChannelCard channelDetail={item}/>}
                    </Box>
                ))
            }
        </Stack>    
    )
}

export default Videos
