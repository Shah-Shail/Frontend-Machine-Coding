import { useEffect, useState } from "react";
import Carousel from "./Carousel";
import "./carousel.css";

function CarouselDemo() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const imgLimit = 8;

  const fetchImages = async (imageLimit) => {
    setLoading(true);

    try {
      const response = await fetch(
        `https://picsum.photos/v2/list?page=1&limit=${imageLimit}`
      );
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.log("Error fetching images", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages(imgLimit);
  }, []);

  return (
    <div className="carousel-container">
      <Carousel
        images={images}
        isLoading={loading}
        // onImageClick={(image, index) => {}}
        imgPerSlide={3}
        imageLimit={imgLimit}
        customPrevButton={(onClick) => (
          <button
            className="btn prev"
            style={{ background: "red" }}
            onClick={onClick}
          >
            Prev
          </button>
        )}
        customNextButton={(onClick) => (
          <button
            className="btn next"
            style={{ background: "blue" }}
            onClick={onClick}
          >
            Next
          </button>
        )}
      />
    </div>
  );
}

export default CarouselDemo;
