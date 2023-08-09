import { useState, useEffect } from "react";

const useBackgroundImage = (images: string[], interval: number) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((currentImage) => (currentImage + 1) % images.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [images, interval]);

  return images[currentImage];
};

export default useBackgroundImage;
