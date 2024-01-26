import { useState } from "react"
import PhotoAlbum from "react-photo-album"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

const photos = [
  { src: "../image0.jpg", width: 1080, height: 1080 },
  { src: "../image1.jpg", width: 1080, height: 1080 },
  { src: "../image2.jpg", width: 1080, height: 1080 },
  { src: "../image3.jpg", width: 1080, height: 1080 },
  { src: "../image4.jpg", width: 1080, height: 1080 },
  { src: "../image5.jpg", width: 1080, height: 1080 },
  { src: "../image6.jpg", width: 1080, height: 1080 },
  { src: "../image7.jpg", width: 1080, height: 1080 },
  { src: "../image8.jpg", width: 1080, height: 1080 },
  { src: "../image9.jpg", width: 1080, height: 1080 },
  { src: "../image10.jpg", width: 1080, height: 1080 },
]

export default function App() {
  const [index, setIndex] = useState(-1)

  return (
    <>
      <PhotoAlbum
        layout="rows"
        photos={photos}
        onClick={({ index: current }) => setIndex(current)}
      />

      <Lightbox
        index={index}
        slides={photos}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </>
  )
}
