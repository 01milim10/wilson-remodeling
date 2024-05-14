import React, { useState, useEffect } from "react";

const ImageCycler = (images) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change the interval as needed (in milliseconds)

    return () => clearInterval(interval);
  }, []);

  return images[currentIndex];
};

export default ImageCycler;
