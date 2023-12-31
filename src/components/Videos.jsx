import { Stack, Box } from "@mui/material"
import { VideoCard, ChannelCard } from "./"

const Videos = ({ videos, direction = "row" }) => {
  return (
    <Stack
      direction={direction}
      flexWrap={"wrap"}
      justifyContent={"start"}
      gap={2}
    >
      {videos.map((item, i) => (
        <Box key={i}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && (
            <ChannelCard channelDetail={item} />
          )}
        </Box>
      ))}
    </Stack>
  )
}
export default Videos
