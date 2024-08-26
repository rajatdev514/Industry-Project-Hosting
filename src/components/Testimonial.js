// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css'; // Import the slick-carousel CSS
// import 'slick-carousel/slick/slick-theme.css'; // Import the slick-carousel theme CSS

// const testimonials = [
//   {
//     profileImg: "https://tse1.mm.bing.net/th?id=OIP.DHVLtvgV0hRBXlnOF-BTGAHaFD&pid=Api&P=0&h=180",
//     name: "Alice Johnson",
//     course: "Web Development",
//     paragraph: "Alice's Web Development course was insightful and transformative. Highly recommended!"
//   },
//   {
//     profileImg: "https://tse3.mm.bing.net/th?id=OIP.GlIuUj-GYrRL_G8WvZ3YagHaHw&pid=Api&P=0&h=180",
//     name: "Bob Smith",
//     course: "Data Science",
//     paragraph: "Bob's Data Science course provided in-depth knowledge and hands-on experience. A great learning journey!"
//   },
//   {
//     profileImg: "https://tse3.mm.bing.net/th?id=OIP.MeBH85uP70v32S6rcdCDZgAAAA&pid=Api&P=0&h=180",
//     name: "Charlie Brown",
//     course: "Graphic Design",
//     paragraph: "Charlie’s Graphic Design course helped me unleash my creativity and master design skills. Highly effective!"
//   }
// ];

// const Testimonial = () => {
//     const settings = {
//         dots: false, // Hide dots
//         infinite: true, // Loop the slides indefinitely
//         speed: 10, // Transition speed
//         autoplay: true, // Enable autoplay
//         autoplaySpeed: 6000, // Time interval between slides (6000 ms = 6 seconds)
//         fade: true, // Use fade transition effect
//         arrows: false // Hide navigation arrows
//       };
      

//   return (
//     <div className="carousel-container">
//       <Slider {...settings}>
//         {testimonials.map((testimonial, index) => (
//           <div key={index} className="testimonial-card">
//             <img src={testimonial.profileImg} alt={testimonial.name} className="testimonial-image" />
//             <h2 className="testimonial-name">{testimonial.name}</h2>
//             <h4 className="testimonial-course">{testimonial.course}</h4>
//             <p className="testimonial-paragraph">"{testimonial.paragraph}"</p>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Testimonial;



import React, { useEffect, useRef } from 'react';

const testimonials = [
  {
    img: 'https://tse1.mm.bing.net/th?id=OIP.DHVLtvgV0hRBXlnOF-BTGAHaFD&pid=Api&P=0&h=180',
    name: 'John Doe',
    course: 'Software Engineering',
    paragraph: 'This is an amazing course that changed my life!',
  },
  {
    img: 'https://tse3.mm.bing.net/th?id=OIP.GlIuUj-GYrRL_G8WvZ3YagHaHw&pid=Api&P=0&h=180',
    name: 'Jane Smith',
    course: 'Data Science',
    paragraph: 'I learned so much, the best decision I ever made.',
  },
  {
    img: 'https://tse3.mm.bing.net/th?id=OIP.MeBH85uP70v32S6rcdCDZgAAAA&pid=Api&P=0&h=180',
    name: 'Michael Johnson',
    course: 'Cybersecurity',
    paragraph: 'Highly recommended for anyone looking to boost their career!',
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
        start = timestamp;
        scroll.scrollLeft = 0;
      }

      requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, []);

  return (
    <div className="testimonial-container">
      <div className="testimonial-wrapper" ref={scrollRef}>
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img src={testimonial.img} alt={`${testimonial.name}`} />
            <h3>{testimonial.name}</h3>
            <h4>{testimonial.course}</h4>
            <p>{testimonial.paragraph}</p>
          </div>
        ))}
        {/* Duplicating content for infinite scroll effect */}
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={`duplicate-${index}`}>
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
