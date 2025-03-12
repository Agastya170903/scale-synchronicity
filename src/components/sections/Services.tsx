
import React from "react";
import ServiceCard from "../ui/ServiceCard";

const Services = () => {
  return (
    <section id="services" className="section-padding bg-sync-white relative">
      <div className="max-container">
        <div className="text-center mb-16">
          <p className="text-sync-lightBlue font-medium mb-3 animate-fade-in">OUR SERVICES</p>
          <h2 className="text-3xl md:text-4xl font-bold animate-fade-in" style={{ animationDelay: "0.1s" }}>
            AI-Powered Solutions for Business Growth
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            title="AI Voicebots"
            description="Implement advanced conversational AI to handle customer interactions, answer questions, and process requests 24/7, improving response times and customer satisfaction."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-sync-blue"
              >
                <path d="M19 9.5v-5a1.5 1.5 0 0 0-1.5-1.5h-11A1.5 1.5 0 0 0 5 4.5v5" />
                <rect width="18" height="8" x="3" y="9.5" rx="1.5" />
                <path d="M10 14.5a1 1 0 0 1-2 0" />
                <path d="M16 14.5a1 1 0 0 1-2 0" />
                <path d="M12 9v10" />
                <path d="M10 21h4" />
              </svg>
            }
            delay="0.1s"
          />

          <ServiceCard
            title="Digital Marketing"
            description="Leverage AI algorithms to optimize your local business marketing strategies, enhancing online visibility, targeted advertising, and conversion rates for sustainable growth."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-sync-blue"
              >
                <path d="M2 12a10 10 0 1 0 20 0 10 10 0 1 0-20 0" />
                <path d="M17.92 14c-.2 2.5-2 4.3-4.5 4.3-2.8 0-4.9-2.4-4.9-5.3 0-2.6 1.7-4.8 4.2-5.3" />
                <path d="M14 10V8l3 2.5L14 13v-2h-1a3 3 0 0 0-3 3" />
              </svg>
            }
            delay="0.2s"
          />

          <ServiceCard
            title="Franchise Expansion"
            description="Utilize data-driven AI analysis to identify optimal expansion opportunities, streamline operations across locations, and maintain brand consistency throughout your franchise network."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-sync-blue"
              >
                <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
                <path d="M12 18v-12" />
                <path d="M8 18v-12" />
                <path d="M16 18v-12" />
              </svg>
            }
            delay="0.3s"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
