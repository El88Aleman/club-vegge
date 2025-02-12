import { useEffect, useState, useRef } from "react";

const UseIntersectionObserver = (options) => {
  const [visibleElements, setVisibleElements] = useState({});
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setVisibleElements((prev) => ({
          ...prev,
          [entry.target.dataset.id]: entry.isIntersecting,
        }));
        if (entry.isIntersecting) {
          entry.target.classList.add("loaded");
          observer.unobserve(entry.target);
        }
      });
    }, options);

    elementsRef.current.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      elementsRef.current.forEach((element) => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [options]);

  const setRef = (index) => (element) => {
    if (!elementsRef.current) {
      elementsRef.current = [];
    }
    elementsRef.current[index] = element;
  };

  return [visibleElements, setRef];
};

export default UseIntersectionObserver;
