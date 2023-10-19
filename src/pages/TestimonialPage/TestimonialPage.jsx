import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import Testimonials from "../../components/Testimonials/Testimonials";

const TestimonialPage = () => {
  return (
    <div>
      <PageHeader page="testimonials" />
      <div className="container mx-auto px-4 lg:px-8">
        <Testimonials />
      </div>
    </div>
  );
};

export default TestimonialPage;
