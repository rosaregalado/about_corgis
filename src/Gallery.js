import './Gallery.css';

function Gallery() {
  return (
    <div className="Gallery">
      <h2 className="Gallery-title">Gallery</h2>
      <div className="Gallery-grid">
        <img src={`${process.env.PUBLIC_URL}/images/gallery_11.jpeg`} alt="corgi" />
        <img src={`${process.env.PUBLIC_URL}/images/gallery_22.jpeg`} alt="corgi" />
        <img src={`${process.env.PUBLIC_URL}/images/gallery_3.jpeg`} alt="corgi" />
        <img src={`${process.env.PUBLIC_URL}/images/gallery_4.jpeg`} alt="corgi" />
        <img src={`${process.env.PUBLIC_URL}/images/gallery_5.jpeg`} alt="corgi" />
        <img src={`${process.env.PUBLIC_URL}/images/gallery_6.jpeg`} alt="corgi" />
        <img src={`${process.env.PUBLIC_URL}/images/gallery_7.jpeg`} alt="corgi" />
        <img src={`${process.env.PUBLIC_URL}/images/gallery_8.jpeg`} alt="corgi" />
        <img src={`${process.env.PUBLIC_URL}/images/gallery_9.jpeg`} alt="corgi" />
      </div>
    </div>
    
  )
}
export default Gallery;