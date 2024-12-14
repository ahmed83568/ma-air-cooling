import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

const Contact = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    // Animate cards into view on mount
    const mq = window.matchMedia("(max-width: 768px)");
    if (mq.matches) {
      gsap.fromTo(
        cardRefs.current,
        { x: -200, opacity: 0,scale:0.2 },
        { x: 0, opacity: 1,duration: 1, scale:1,stagger: 0.2, ease: "power2.out" }
      );
    }
    gsap.fromTo(
      cardRefs.current,
      { opacity: 0, y: -1000,scale:0 },
      { opacity: 1, y: 0, duration: 0.8, scale:1, ease: "power2.out" }
    );
  }, []);

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
    // Hover animation
    gsap.to(cardRefs.current[index], {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (index) => {
    setHoverIndex(null);
    // Reset scale on mouse leave
    gsap.to(cardRefs.current[index], {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const cardStyle = (index) => ({
    background: hoverIndex === index
      ? "linear-gradient(135deg, #5D9CEC, #4A90E2)"
      : "#FFFFFF",
    color: hoverIndex === index ? "#FFFFFF" : "#333333",
    borderRadius: "12px",
    boxShadow: hoverIndex === index
      ? "0px 10px 20px rgba(0, 0, 0, 0.2)"
      : "0px 4px 8px rgba(0, 0, 0, 0.1)",
    transform: "translateY(0)",
    transition: "all 0.3s ease",
    padding: "20px",
    maxWidth: "600px",
    margin: "20px",
    cursor: "pointer",
  });

  const locations = [
    {
      address:
        "Shop No 01, SHANKARA COLONY, Jeejabai Bhosale Marg, opposite Indian Oil Nagar, ACC Nagar, Chedda Nagar, Mumbai, Maharashtra 400043",
      contactPerson: "Mohd Irfan",
      phone: "+91 9172136880",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.0041788801827!2d72.90930567536887!3d19.063553882138446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c617945c4245%3A0xc17bd48e1c13df79!2sM%20A%20Air%20Cooling!5e0!3m2!1sen!2sin!4v1731438153548!5m2!1sen!2sin",
    },
    {
      address:
        "Shop No 17, Plot No 1, Gajanand Colony, Lotus Colony, Shivaji Nagar, Mumbai, Maharashtra 400043",
      contactPerson: "Mohd Imran",
      phone: "+91 9172136880",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.0280572875376!2d72.91527397536885!3d19.062503982139276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7004b6e5207%3A0x6eb219d325e1cb9d!2sM.A.AIR%20COOLING!5e0!3m2!1sen!2sin!4v1732972354455!5m2!1sen!2sin",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#F4F9FF",
        minHeight: "100vh",
        padding: "30px 0",
      }}
    >
      <h2 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "20px" }}>
        Contact Us
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "20px",
        }}
      >
        {locations.map((location, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            style={cardStyle(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <h3 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
              {location.contactPerson}
            </h3>
            <p>
              <strong>Address:</strong> {location.address}
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a
                href={`tel:${location.phone}`}
                style={{
                  color: "inherit",
                  textDecoration: "none",
                  fontWeight: "bolder",
                  padding: "10px 16px",
                  backgroundColor: hoverIndex === index ? "#fff" : "#000",
                  borderRadius: "25px",
                  color: hoverIndex === index ? "black" : "white",
                }}
              >
                {location.phone}
              </a>
            </p>
            <iframe
              src={location.mapSrc}
              width="100%"
              style={{
                border: "none",
                borderRadius: "8px",
                marginTop: "15px",
                filter: hoverIndex === index ? "brightness(1.1)" : "brightness(1)",
                transition: "filter 0.3s ease",
                height: "43vh",
              }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title={`Location ${index + 1}`}
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
