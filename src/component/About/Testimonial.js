import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../style/about.css";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      text: "It is long established fact that reader will distract by the readable content a page when looking atten layout. The point of using  and that it has a normal distribution of letters",
      author: "John Doe",
      position: "Senior Volunteer",
      image: require("../../asset/Testimonial1.png"),
    },
    {
      id: 2,
      text: "It is long established fact that reader will distract by the readable content a page when looking atten layout. The point of using  and that it has a normal distribution of letters",
      author: "Jane Smith",
      position: "Senior Volunteer",
      image: require("../../asset/Testimonial1.png"),
    },
    {
      id: 3,
      text: "It is long established fact that reader will distract by the readable content a page when looking atten layout. The point of using  and that it has a normal distribution of letters",
      author: "Jane Smith",
      position: "Senior Volunteer",
      image: require("../../asset/Testimonial1.png"),
    },
    {
      id: 4,
      text: "It is long established fact that reader will distract by the readable content a page when looking atten layout. The point of using  and that it has a normal distribution of letters",
      author: "Jane Smith",
      position: "Senior Volunteer",
      image: require("../../asset/Testimonial1.png"),
    },
    {
      id: 5,
      text: "It is long established fact that reader will distract by the readable content a page when looking atten layout. The point of using  and that it has a normal distribution of letters",
      author: "Jane Smith",
      position: "Senior Volunteer",
      image: require("../../asset/Testimonial1.png"),
    },
    {
      id: 6,
      text: "It is long established fact that reader will distract by the readable content a page when looking atten layout. The point of using  and that it has a normal distribution of letters",
      author: "Jane Smith",
      position: "Senior Volunteer",
      image: require("../../asset/Testimonial1.png"),
    },
    {
      id: 7,
      text: "It is long established fact that reader will distract by the readable content a page when looking atten layout. The point of using  and that it has a normal distribution of letters",
      author: "Jane Smith",
      position: "Senior Volunteer",
      image: require("../../asset/Testimonial1.png"),
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
    <section className="testimonial py-5">
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
