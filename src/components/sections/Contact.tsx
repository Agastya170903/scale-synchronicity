
import React from "react";
import ContactForm from "../ui/ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-sync-gray relative">
      <div className="max-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div className="space-y-6">
            <div className="space-y-2 animate-fade-in">
              <p className="text-sync-lightBlue font-medium">CONTACT US</p>
              <h2 className="text-3xl md:text-4xl font-bold">
                Let's Start Your AI Automation Journey
              </h2>
            </div>
            
            <p className="text-sync-black/80 leading-relaxed max-w-md animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Ready to transform your business with AI-powered automation? Fill out the form, and our team will get back to you promptly to discuss your specific needs and solutions.
            </p>

            <div className="space-y-4 pt-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-sync-blue/10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-sync-blue"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-sync-black/80">scalsyncAI@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-sync-blue/10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-sync-blue"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">Phone</p>
                  <p className="text-sync-black/80">+353834254685</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-8 rounded-2xl">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sync-lightBlue/5 rounded-full -translate-y-1/2 translate-x-1/2 filter blur-3xl" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-sync-blue/5 rounded-full -translate-x-1/2 filter blur-3xl" />
    </section>
  );
};

export default Contact;
