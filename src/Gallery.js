import './Gallery.css';

function Gallery() {
  return (
    <div className="Gallery">
      <h2 className="Gallery-title">Gallery</h2>
      <div className="Gallery-grid">
        <img src={`${process.env.PUBLIC_URL}/images/gallery_11.jpeg`} alt="corgi" />
        <img src={`${process.env.PUBLIC_URL}/images/gallery_22.jpeg`} alt="corgi" />
        <img src={`${process.env.PUBLIC_URL}/images/gallery_1.jpeg`} alt="corgi" />
        <img src={`${process.env.PUBLIC_URL}/images/gallery_1.jpeg`} alt="corgi" />
        <img src={`${process.env.PUBLIC_URL}/images/gallery_1.jpeg`} alt="corgi" />
        <img src={`${process.env.PUBLIC_URL}/images/gallery_1.jpeg`} alt="corgi" />
        <img src={`${process.env.PUBLIC_URL}/images/gallery_1.jpeg`} alt="corgi" />
        <img src={`${process.env.PUBLIC_URL}/images/gallery_1.jpeg`} alt="corgi" />
        <img src={`${process.env.PUBLIC_URL}/images/gallery_1.jpeg`} alt="corgi" />
      </div>
    </div>
    
  )
}
export default Gallery;