"use client"
import React, { useEffect, useState } from 'react';

export default function HowItWorksSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('howItWorksSection');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <>
      <section id="howItWorksSection" className='web3works'>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="web3howitsworks">
                <div className={`mobile-container ${isVisible ? 'animate' : ''}`}>
                  <img src="/assets/howitsworks.png" alt="Mobile App Interface" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}