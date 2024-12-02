import React from "react";
import { SecctionHeader, Input, Button } from "../";

const NewsletterSection = () => {
  return (
    <section id="newsletter" className="text-secondary body-font">
      <div className="container px-5 py-32 mb-12 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <SecctionHeader
            heading="Subscribe to Our Newsletter"
            tagline="Stay Updated on the Latest DSA Tutorials and Tips!"
            className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-5xl"
          />
        </div>
        <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-center sm:items-end">
          <div className="relative flex-grow w-full">
            <label htmlFor="full-name" className="leading-7 text-sm">
              Full Name
            </label>
            <Input type="text" id="full-name" name="name" />
          </div>
          <div className="relative flex-grow w-full">
            <label htmlFor="email" className="leading-7 text-sm">
              Email
            </label>
            <Input type="email" id="email" name="email" />
          </div>
          <Button type="button" className="bg-primary px-6 ">
            Join
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
