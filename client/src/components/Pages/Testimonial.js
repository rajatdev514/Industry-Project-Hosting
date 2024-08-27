import React, { useEffect, useRef } from "react";
// import './Testimonial.css';

const testimonials = [
  {
    img: "profile1.jpg",
    name: "John Doe",
    course: "Software Engineering",
    paragraph: "This is an amazing course that changed my life!",
  },
  {
    img: "profile3.jpg",
    name: "Jane Smith",
    course: "Data Science",
    paragraph: "I learned so much; the best decision I ever made.",
  },
  {
    img: "profile2.jpg",
    name: "Michael Johnson",
    course: "Cybersecurity",
    paragraph: "Highly recommended for anyone looking to boost their career!",
  },
  {
    img: "profile4.jpg",
    name: "Michael Johnson",
    course: "Cybersecurity",
    paragraph: "Highly recommended for anyone looking to boost their career!",
  },
  {
    img: "profile6.avif",
    name: "Michael Johnson",
    course: "Cybersecurity",
    paragraph: "Highly recommended for anyone looking to boost their career!",
  },
  {
    img: "profile5.avif",
    name: "Michael Johnson",
    course: "Cybersecurity",
    paragraph: "Highly recommended for anyone looking to boost their career!",
  },
  // Add more testimonials as needed
];

const Testimonial = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = scrollRef.current;
    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;

      // Adjust speed by changing the division factor
      scroll.scrollLeft = progress / 10;

      if (scroll.scrollLeft >= scroll.scrollWidth / 2) {
        scroll.scrollLeft = 0;
        start = timestamp;
      }

      requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, []);

  return (
    <div className="testimonial-container">
      <div className="testimonials-main-title">Testimonials</div>
      <div className="testimonial-wrapper" ref={scrollRef}>
        {testimonials.map((testimonial, index) => (
          <div
            className={`testimonial-card card-${(index % 4) + 1}`}
            key={index}
          >
            <img src={testimonial.img} alt={`${testimonial.name}`} />
            <h3>{testimonial.name}</h3>
            <h4>{testimonial.course}</h4>
            <p>{testimonial.paragraph}</p>
          </div>
        ))}
        {/* Duplicating content for infinite scroll effect */}
        {testimonials.map((testimonial, index) => (
          <div
            className={`testimonial-card card-${(index % 4) + 1}`}
            key={`duplicate-${index}`}
          >
            <img src={testimonial.img} alt={`${testimonial.name}`} />
            <h3>{testimonial.name}</h3>
            <h4>{testimonial.course}</h4>
            <p>{testimonial.paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
