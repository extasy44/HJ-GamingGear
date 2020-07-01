import React, { useEffect, useState } from "react";

import placeholder from "../../assets/lazy-loader.gif";

const LazyImage = (props) => {
  const { src, alt, children, className } = props;
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [imageRef, setImageRef] = useState();

  useEffect(() => {
    let observer;
    let didCancel = false;

    if (imageRef && imageSrc !== src) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (
                !didCancel &&
                (entry.intersectionRatio > 0 || entry.isIntersecting)
              ) {
                setImageSrc(src);
                observer.unobserve(imageRef);
              }
            });
          },
          { threshold: 0.01, rootMargin: "75%" }
        );
        observer.observe(imageRef);
      } else {
        setImageSrc(src);
      }
    }

    return () => {
      didCancel = true;
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef);
      }
    };
  }, [src, imageSrc, imageRef]);

  return (
    <>
      <div
        className={className}
        ref={setImageRef}
        style={{
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: "contain",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
        alt={alt}
      >
        {children}
      </div>
    </>
  );
};

export default LazyImage;
