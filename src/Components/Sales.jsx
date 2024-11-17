import React from 'react';
import ac from "../Images/ac sevice.jpg";
import spare from "../Images/spare.jpg";
import lifespan from "../Images/cooling.png";
import installation from "../Images/installation.jpg";

const Sales = () => {
  return (
    <section style={{ padding: '5vh 2vw', marginTop: '5vh', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3vh', color: '#333' }}>
        Sales and Services
      </h2>

      {/* Products We Sell */}
      <div style={{ marginBottom: '5vh' }}>
        <h3 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2vh', color: '#007bff' }}>
          Products We Sell
        </h3>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
          }}
        >
          {[
            {
              img: ac,
              title: 'Air Condition',
              desc: 'High-quality air coolers with advanced cooling technology for your comfort.',
            },
            {
              img: spare,
              title: 'Spare Parts',
              desc: 'Reliable and genuine spare parts for maintaining your air cooling systems.',
            },
            {
              img: lifespan,
              title: 'Cooling Accessories',
              desc: 'Accessories to enhance the performance and lifespan of your air coolers.',
            },
          ].map(({ img, title, desc }, index) => (
            <div
              key={index}
              style={{
                width: '30%',
                minWidth: '250px',
                textAlign: 'center',
                padding: '1rem',
                borderRadius: '10px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#fff',
                transition: 'transform 0.3s, box-shadow 0.3s',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
              }}
            >
              <img
                src={img}
                alt={title}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <h4 style={{ margin: '1rem 0', fontSize: '1.2rem', color: '#007bff' }}>{title}</h4>
              <p style={{ fontSize: '1rem', color: '#555' }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services We Provide */}
      <div>
        <h3 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2vh', color: '#007bff' }}>
          Services We Provide
        </h3>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
          }}
        >
          {[
            {
              img: installation,
              title: 'Installation Service',
              desc: 'Professional installation services to set up your cooling system efficiently.',
            },
            {
              img: 'https://via.placeholder.com/200x150',
              title: 'Maintenance and Repair',
              desc: 'Regular maintenance and repair services to keep your equipment running smoothly.',
            },
            {
              img: 'https://via.placeholder.com/200x150',
              title: 'Consultation',
              desc: 'Expert consultation to help you choose the best cooling solutions for your needs.',
            },
          ].map(({ img, title, desc }, index) => (
            <div
              key={index}
              style={{
                width: '30%',
                minWidth: '250px',
                textAlign: 'center',
                padding: '1rem',
                borderRadius: '10px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#fff',
                transition: 'transform 0.3s, box-shadow 0.3s',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
              }}
            >
              <img
                src={img}
                alt={title}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <h4 style={{ margin: '1rem 0', fontSize: '1.2rem', color: '#007bff' }}>{title}</h4>
              <p style={{ fontSize: '1rem', color: '#555' }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sales;
