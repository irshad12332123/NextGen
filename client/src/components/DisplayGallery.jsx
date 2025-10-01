import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

function DisplayGallery({ galleryImages }) {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <div className="App">
      <LightGallery
        onInit={onInit}
        speed={300}
        plugins={[lgThumbnail, lgZoom]}
        className="
        grid grid-cols-3
        "
      >
        {galleryImages.map((image, index) => (
          <a key={index} href={image.src}>
            <img
              alt={image.title}
              src={image.src}
              className="max-w-[100%] block py-2 md:rounded-[2rem]"
            />
          </a>
        ))}
      </LightGallery>
    </div>
  );
}
export default DisplayGallery;
