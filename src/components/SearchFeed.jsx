import { useState, useEffect } from "react"
import { Box, Stack, Typography } from "@mui/material"
import { Videos } from "./"
import { fetchRapid } from "../utils/fetchApi"
import { useParams } from "react-router-dom"

const SearchFeed = () => {
  const [videos, setVideos] = useState([])
  const { searchTerm } = useParams()

  useEffect(() => {
    fetchRapid(`search?part=snippet&q=${searchTerm}`).then(
      data => {
        setVideos(data.items)
      }
    )

    console.log(videos)
  }, [searchTerm])

  return (
    <Box
      p={2}
      sx={{ overflowY: "auto", height: "90vh", flex: 2 }}
    >
      <Typography
        variant="h4"
        fontWeight={"bold"}
        mb={2}
        sx={{ color: "white" }}
      >
        Search result for:{" "}
        <span style={{ color: "#f30153" }}>
          {searchTerm}
        </span>{" "}
        videos
      </Typography>

      <div
        style={{
          width: "fit-content",
          marginInline: "auto",
        }}
      >
        <Videos videos={videos} />
      </div>
    </Box>
  )
}
export default SearchFeed
