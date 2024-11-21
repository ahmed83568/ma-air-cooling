  import React, { useEffect, useState } from 'react';
  import './Home.css'
  import HomeCarousel from './HomeCarousel';
  import { db } from '../../src/firebaseConfig';
  import { collection, addDoc } from "firebase/firestore";
 
  import close from "../Images/cancel.png"
import HomeChoose from './HomeChoose';
import Sales from './Sales';
import whatsapp from "../Images/whatsapp.webp"

  const Home = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      query: '',
      phone: ''
    });
    


    const [isFormVisible, setIsFormVisible] = useState(false); 
    const [phoneError,setPhoneError]=useState(false)
    const [isWhatsAppVisible, setIsWhatsAppVisible] = useState(false);
  const phoneNumber = process.env.REACT_APP_PHONE_NUMBER;


  useEffect(() => {
    const handleResize = () => {
      setIsWhatsAppVisible(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
    const handleQueryClick = () => {
      setIsFormVisible(true); // Show the form when button is clicked
    };
    const handleCancelClick = () => {
      setIsFormVisible(false); // Show the form when button is clicked
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
      const { name, email, phone } = formData;
      if (!name || !email || !/^\d{10}$/.test(phone)) {
        setPhoneError(!phone? true:false)
        alert("Please fill out the form correctly.");
        return;
      }
      try {
        await addDoc(collection(db, "queries"), formData);
        alert("Data submitted successfully!");
        setFormData({ name: '', email: '', query: '', phone: '' }); // Reset form
        setIsFormVisible(false); // Hide form after submission
      } catch (error) {
        console.error("Error adding document: ", error.message);
        alert(`Submission failed: ${error.message}`);
      }
      
    };

    return (
      <div>
        <button 
          onClick={handleQueryClick} 
          style={{ 
            padding: '1vw 1.5vw', 
            backgroundColor: 'black', 
            color: 'white', 
            position: 'fixed', 
            bottom: '5%', 
            right: '5%', 
            outline: 'none', 
            border: 'none', 
            borderRadius: '5px',
            zIndex:'100' 
          }}
        >
          Any Query?
        </button>
        {isWhatsAppVisible && ( 
        <a
          style={{ textDecoration: "none" }}
          href={`https://wa.me/${phoneNumber}?text=Hi%2C%20I%20have%20a%20query%20regarding%20your%20services`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="whatsapp-button1" 
            style={{ 
              position: 'fixed', 
              top: '15%', 
              left: '2%', 
              outline: 'none', 
              border: 'none', 
              borderRadius: '5px',
              zIndex: '100',
              width:'60px',
              backgroundColor:'#428968',
              display:'flex',
              alignItems:'center',
            }}
          >
            <img
              style={{ width: "100%", marginRight: "0.5rem",mixBlendMode:"hard-light",backfaceVisibility:'unset'}}
              src={whatsapp}
              alt="WhatsApp Icon"
            />
          </button>
        </a>
      )}
        {isFormVisible && (
        <div 
          style={{
            position: 'fixed', 
            top: '20%', 
            left: '50%', 
            transform: 'translateX(-50%)', 
            padding: '2vw', 
            backgroundColor: '#fff', 
            border: '1px solid #ccc', 
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', 
            zIndex: 1000,
            width: '400px',
            borderRadius: '10px',
            textAlign: 'center',
          }}
        >
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <h3 style={{ fontSize: '1.5rem', color: '#007bff', marginBottom: '1vw' }}>Submit Your Query</h3>
          <button onClick={handleCancelClick}>
            <img src={close} alt="" style={{width:'2vw',background:'none',}} />
          </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1.5vw' }}>
              <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5vw', fontWeight: 'bold' }}>Name:</label>
              <input 
                type="text" 
                name="name"
                value={formData.name} 
                onChange={handleChange} 
                required 
                style={{
                  width: '100%', 
                  padding: '0.8vw', 
                  borderRadius: '8px', 
                  border: '1px solid #ccc', 
                  fontSize: '1rem', 
                  outline: 'none',
                  transition: 'border-color 0.3s ease',
                  
                }}
                onFocus={(e) => e.target.style.borderColor = '#007bff'}
                onBlur={(e) => e.target.style.borderColor = '#ccc'}
              />
            </div>

            <div style={{ marginBottom: '1.5vw' }}>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5vw', fontWeight: 'bold' }}>Email:</label>
              <input 
                type="email" 
                name="email"
                value={formData.email} 
                onChange={handleChange} 
                required 
                style={{
                  width: '100%', 
                  padding: '0.8vw', 
                  borderRadius: '8px', 
                  border: '1px solid #ccc', 
                  fontSize: '1rem', 
                  outline: 'none',
                  transition: 'border-color 0.3s ease',
                }}
                onFocus={(e) => e.target.style.borderColor = '#007bff'}
                onBlur={(e) => e.target.style.borderColor = '#ccc'}
              />
            </div>

            <div style={{ marginBottom: '1.5vw' }}>
              <label htmlFor="query" style={{ display: 'block', marginBottom: '0.5vw', fontWeight: 'bold' }}>Query:</label>
              <textarea 
                name="query"
                value={formData.query} 
                onChange={handleChange} 
                required 
                style={{
                  width: '100%', 
                  padding: '0.8vw', 
                  borderRadius: '8px', 
                  border: '1px solid #ccc', 
                  fontSize: '1rem', 
                  outline: 'none',
                  height: '100px',
                  transition: 'border-color 0.3s ease',
                }}
                onFocus={(e) => e.target.style.borderColor = '#007bff'}
                onBlur={(e) => e.target.style.borderColor = '#ccc'}
              />
            </div>

            <div style={{ marginBottom: '1.5vw' }}>
              <label htmlFor="phone" style={{ display: 'block', marginBottom: '0.5vw', fontWeight: 'bold' }}>Phone Number:</label>
              <input 
                type="tel" 
                name="phone"
                value={formData.phone} 
                onChange={handleChange} 
                required 
                style={{
                  width: '100%', 
                  padding: '0.8vw', 
                  borderRadius: '8px', 
                  border: '1px solid #ccc', 
                  fontSize: '1rem', 
                  outline: 'none',
                  transition: 'border-color 0.3s ease',
                }}
                onFocus={(e) => e.target.style.borderColor = '#007bff'}
                onBlur={(e) => e.target.style.borderColor = '#ccc'}
              />
            </div>

            <div>
              <button 
                type="submit" 
                style={{
                  width: '100%', 
                  backgroundColor: '#007bff', 
                  color: '#fff', 
                  padding: '1vw', 
                  border: 'none', 
                  borderRadius: '8px', 
                  fontSize: '1rem', 
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease',
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}


        <HomeCarousel />
        
        <div style={{ marginTop: '3vh' }}>
          <h1 style={{ textAlign: 'center', fontSize: '60px' }}>Welcome to MA Air Cooling Sales & Services</h1>
          <p style={{ textAlign: 'center' }}>Your trusted solution for air cooling sales, services, and spare parts.</p>
        </div>

        {/* Why Choose Us Section */}
      <HomeChoose/>


        {/* Sales and Services Section */}
      <Sales/>

        {/* Footer */}
        <div style={{
          backgroundColor: '#333',
          color: '#fff',
          padding: '2vh 0',
          textAlign: 'center',
          marginTop: '5vh',
        }}>
          <div style={{ marginBottom: '2vh' }}>
            <h3>MA Air Cooling Sales & Services</h3>
            <p>Providing top-quality cooling solutions and exceptional service.</p>
          </div>
          
          <div>
            <a href="/about" style={{ color: '#fff', margin: '0 1vw' }}>About Us</a>
            <a href="/services" style={{ color: '#fff', margin: '0 1vw' }}>Services</a>
            <a href="/products" style={{ color: '#fff', margin: '0 1vw' }}>Products</a>
            <a href="/contact" style={{ color: '#fff', margin: '0 1vw' }}>Contact</a>
          </div>

          <div style={{ marginTop: '2vh' }}>
            <p>Phone: +91 8356876737</p>
            <p>Email: info@maaircooling.com</p>
          </div>

          <div style={{ marginTop: '1vh' }}>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 1vw' }}>
              <img src="path/to/facebook-icon.png" alt="Facebook" style={{ width: '20px' }} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 1vw' }}>
              <img src="path/to/instagram-icon.png" alt="Instagram" style={{ width: '20px' }} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 1vw' }}>
              <img src="path/to/twitter-icon.png" alt="Twitter" style={{ width: '20px' }} />
            </a>
          </div>
        </div>
      </div>
    );
  };

  export default Home;
