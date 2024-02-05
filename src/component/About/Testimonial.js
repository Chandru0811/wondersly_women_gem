import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../style/custom.css";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      text: `"Strength and growth only come through continuous effort and struggle.""Don't give up, don't take anything personally, and don't take no for an answer. You never know what you're going to learn along the way." 
      "Wondrously woman GEM has empowered women in self love, self care, and self motivation."`,
      author: "Rose",
      position: "",
      image: require("../../asset/Testimonial_1.jpg"),
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <section className="testimonial py-2">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-md-5 col-12 d-flex align-items-center justify-content-center testimonialContainer py-5 my-5 ">
            <div>
              <p className="testimonialWhat">What People Say About Us</p>
            </div>
          </div>
          <div className="col-lg-8 col-md-7 col-12 px-5 my-5">
            <Carousel
              swipeable={true}
              draggable={true}
              showDots={false}
              responsive={responsive}
              infinite={true}
              keyBoardControl={true}
              autoPlay={true} // Set autoPlay to true
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-item">
                  <img
                    src={testimonial.image}
                    alt={`Client ${testimonial.author}`}
                    className="img-fluid testimonialImage mb-3"
                  />
                  <p className="testimonialPara pb-4">{testimonial.text}</p>

                  <div className="row">
                    <div
                      className="col-lg-6 col-12"
                      style={{ backgroundColor: "#EEEAFC" }}
                    >
                      <p className="testimonialAuthor">{testimonial.author}</p>
                      <p className="testimonialPosition">
                        {testimonial.position}
                      </p>
                    </div>
                    <div className="col-lg-6 testimonialArrow"></div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
