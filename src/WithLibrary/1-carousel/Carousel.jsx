import { useEffect, useRef, useState } from "react";
import "./carousel.css";

function Carousel({
  images = [],
  isLoading = false,
  imgPerSlide = 1,
  imageLimit = images.length,
  customPrevButton,
  customNextButton,
  onImageClick = () => {},
}) {
  const imgRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imgWidth, setImgWidth] = useState(0);

  useEffect(() => {
    if (images.length > 0) {
      setCurrentIndex(0);
    }
  }, [images]);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageLimit - imgPerSlide : prevIndex - 1
    );
  };
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imageLimit - imgPerSlide ? 0 : prevIndex + 1
    );
  };
  // console.log("currentIndex", currentIndex);
  // console.log("imgWidth", imgWidth);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div
      className="carousel"
      style={{ width: imgWidth > 0 && imgPerSlide * imgWidth }}
    >
      <div
        className="image-container"
        style={{ transform: `translateX(-${currentIndex * imgWidth}px)` }}
      >
        {images
          .slice(0, imageLimit > images.length ? images.length : imageLimit)
          .map((image, index) => {
            return (
              <img
                onLoad={() => {
                  // console.log("imgRef?.current?.offsetWidth", imgRef);
                  setImgWidth(imgRef?.current?.offsetWidth);
                }}
                ref={imgRef}
                key={image.id}
                src={image.download_url}
                alt={image.author}
                className="image"
                onClick={() => onImageClick(image, index)}
              />
            );
          })}
      </div>
      {customPrevButton instanceof Function ? (
        customPrevButton(goToPrev)
      ) : (
        <button className="btn prev" onClick={goToPrev}>
          Prev
        </button>
      )}
      {customNextButton instanceof Function ? (
        customNextButton(goToNext)
      ) : (
        <button className="btn next" onClick={goToNext}>
          Next
        </button>
      )}
    </div>
  );
}

export default Carousel;
