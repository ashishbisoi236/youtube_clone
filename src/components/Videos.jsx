import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard  } from "./";

const Videos = ({ videos, direction }) => {

  if(!videos?.length) return 'Loading...';

  return (
    <Stack direction={direction || "row"} 
            flexWrap="wrap" 
            justifyContent="start"
            gap={2}>
        {videos.map((item, idx) => (
            <Box key={idx} >
                {/* if item has id with videoID, then it is a video */}
                {item.id.videoId && <VideoCard video={item} />}
                {/* in case of channelId, it is a channel  */}
                {item.id.channelId && <ChannelCard channelDetail={item} />}
            </Box>
        ))}
    </Stack>
  )
}

export default Videos