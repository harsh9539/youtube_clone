import React, { useEffect, useState } from 'react'


import Videos from './Videos'
import ChannelCard from './ChaneelCard'
import { useParams } from 'react-router-dom'
import { fetchFromApi } from '../utils/fetchFromApi'
import { Box } from '@mui/material'

const ChannelDetail = () => {
    const [channelDetail,setChannelDetail] = useState(null);
    const [videos,setVideos] = useState([]);
    console.log(channelDetail);
    console.log(videos)
    const {id} = useParams();
    useEffect(()=>{
        fetchFromApi(`channels?part=snippet&id=${id}`)
        .then((data)=>setChannelDetail(data?.items[0]))
        fetchFromApi(`search?channelId=${id}&part=snippet&id&order=date`)
            .then((data)=>setVideos(data?.items))
    },[id])
    return (
        <Box minHeight="95vh">
            <Box>
                <div style={{
                    // background:'linear-gradient(90deg,rgba(0,238,247,1)) 0%,rgba(206,3,184,1) 100%,rgba(0,212,255,1) 100%',
                    background:'linear-gradient(red,blue)',
                    zIndex:10,
                    height:300}}>
                </div>
                <ChannelCard channelDetail={channelDetail} marginTop="-110px"/>
            </Box>
            <Box display={"flex"} p="2">
            {/* <Box p="2"> */}
                <Box sx={{mr:{sm:'100px'}}}/>
                <Videos videos={videos}/>
            </Box>
        </Box>
    )
}

export default ChannelDetail
