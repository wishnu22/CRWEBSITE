import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    image: "https://via.placeholder.com/100",
    review:
      "Cranvalor's whey protein has been a game-changer for my fitness journey. The taste is amazing, and it's easy to digest. Highly recommended!",
  },
  {
    id: 2,
    name: "Arjun Menon",
    image: "https://via.placeholder.com/100",
    review:
      "As a fitness trainer, I trust Cranvalor for its purity and effectiveness. My clients love it!",
  },
  {
    id: 3,
    name: "Samantha Roy",
    image: "https://via.placeholder.com/100",
    review:
      "I’ve tried many brands, but Cranvalor stands out for its quality and affordability. Perfect for women looking to stay fit!",
  },
  {
    id: 4,
    name: "Ritika Gupta",
    image: "https://via.placeholder.com/100",
    review:
      "The flavors are fantastic, and I feel energized after every use. Cranvalor truly delivers on its promise!",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials py-5" id="testimonials">
      <div className="container text-center">
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="testimonial-carousel">
          {testimonials.map((testimonial) => (
            <div className="testimonial-item" key={testimonial.id}>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-image"
              />
              <h4 className="testimonial-name">{testimonial.name}</h4>
              <p className="testimonial-review">{testimonial.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
