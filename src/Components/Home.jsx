  import React, { useState } from 'react';
  import './Home.css'
  import HomeCarousel from './HomeCarousel';
  import { db } from '../../src/firebaseConfig';
  import { collection, addDoc } from "firebase/firestore";
  import ac from "../Images/ac sevice.jpg";
  import spare from "../Images/spare.jpg";
  import lifespan from "../Images/cooling.png";
  import installation from "../Images/installation.jpg";
  import close from "../Images/cancel.png"

  const Home = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      query: '',
      phone: ''
    });
    console.log(db)
    const [isFormVisible, setIsFormVisible] = useState(false); 
    const [phoneError,setPhoneError]=useState(false)

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
            borderRadius: '5px' 
          }}
        >
          Any Query?
        </button>
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
        <section 
  style={{
    padding: '5vh 2vw',
    backgroundColor: '#f9f9f9',
    marginTop: '5vh',
    width: '90vw',
    margin: 'auto',
    boxShadow: '4px 8px 8px rgba(0, 0, 0, 0.5)',
    borderRadius: '15px',
  }}
>
  <h2 
    style={{
      textAlign: 'center',
      fontSize: '40px',
      marginBottom: '3vh',
      color: '#333',
    }}
  >
    Why Choose Us?
  </h2>
  <div 
    style={{
      display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '3vh', marginTop: '2vh'
    }}
  >
    {/* Card 1 */}
    <div className='choose_us'
      style={{
        width: '20%',
        textAlign: 'center',
        padding: '2vh 2vw',
        borderRadius: '10px',
        boxShadow: '2px 4px 6px rgba(0, 0, 0, 0.2)',
        backgroundColor: '#fff',
        transition: 'transform 0.3s, box-shadow 0.3s',
        cursor: 'pointer',
      }}
    >
      <h3 style={{ fontSize: '1.5rem', color: '#007bff' }}>Experienced Technicians</h3>
      <p>Our team is highly skilled with years of experience in air cooling solutions, ensuring top-notch service.</p>
    </div>
    {/* Card 2 */}
    <div className='choose_us'
      style={{
        width: '20%',
        textAlign: 'center',
        padding: '2vh 2vw',
        borderRadius: '10px',
        boxShadow: '2px 4px 6px rgba(0, 0, 0, 0.2)',
        backgroundColor: '#fff',
        transition: 'transform 0.3s, box-shadow 0.3s',
        cursor: 'pointer',
      }}
    >
      <h3 style={{ fontSize: '1.5rem', color: '#007bff' }}>Quality Products</h3>
      <p>We provide a wide range of quality air cooling products from leading brands, ensuring reliability and efficiency.</p>
    </div>
    {/* Card 3 */}
    <div  className='choose_us'
      style={{
        width: '20%',
        textAlign: 'center',
        padding: '2vh 2vw',
        borderRadius: '10px',
        boxShadow: '2px 4px 6px rgba(0, 0, 0, 0.2)',
        backgroundColor: '#fff',
        transition: 'transform 0.3s, box-shadow 0.3s',
        cursor: 'pointer',
      }}
    >
      <h3 style={{ fontSize: '1.5rem', color: '#007bff' }}>Affordable Pricing</h3>
      <p>Our services and products are priced competitively to provide the best value without compromising on quality.</p>
    </div>
    {/* Card 4 */}
    <div className='choose_us'
      style={{
        width: '20%',
        textAlign: 'center',
        padding: '2vh 2vw',
        borderRadius: '10px',
        boxShadow: '2px 4px 6px rgba(0, 0, 0, 0.2)',
        backgroundColor: '#fff',
        transition: 'transform 0.3s, box-shadow 0.3s',
        cursor: 'pointer',
      }}
    >
      <h3 style={{ fontSize: '1.5rem', color: '#007bff' }}>Excellent Customer Service</h3>
      <p>We are committed to providing excellent customer support and are always available to address your needs.</p>
    </div>
  </div>
</section>


        {/* Sales and Services Section */}
        <section style={{ padding: '5vh 2vw', marginTop: '5vh' }}>
          <h2 style={{ textAlign: 'center', fontSize: '40px', marginBottom: '3vh' }}>Sales and Services</h2>
          
          {/* Products We Sell */}
          <div style={{ marginBottom: '5vh' }}>
            <h3 style={{ textAlign: 'center', fontSize: '30px' }}>Products We Sell</h3>
            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '3vh', marginTop: '2vh' }}>
              <div style={{ width: '30%', textAlign: 'center' }}>
                <img className='service-card' src={ac} alt="Product 1" style={{ width: '100%', borderRadius: '8px' }} />
                <h4 style={{margin:'2vh 0'}}>Air Condition</h4>
                <p>High-quality air coolers with advanced cooling technology for your comfort.</p>
              </div>
              <div  style={{ width: '30%', textAlign: 'center' }}>
                <img className='service-card' src={spare} alt="Product 2" style={{ width: '100%', borderRadius: '8px', height: '37vh', objectFit: 'cover' }} />
                <h4 style={{margin:'2vh 0'}}>Spare Parts</h4>
                <p>Reliable and genuine spare parts for maintaining your air cooling systems.</p>
              </div>
              <div style={{ width: '30%', textAlign: 'center' }}>
                <img className='service-card' src={lifespan} alt="Product 3" style={{ width: '100%', borderRadius: '8px',height:'37vh', objectFit: 'cover' }} />
                <h4 style={{margin:'2vh 0'}}>Cooling Accessories</h4>
                <p>Accessories to enhance the performance and lifespan of your air coolers.</p>
              </div>
            </div>
          </div>

          {/* Services We Provide */}
          <div>
            <h3 style={{ textAlign: 'center', fontSize: '30px' }}>Services We Provide</h3>
            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '3vh', marginTop: '2vh' }}>
              <div style={{ width: '30%', textAlign: 'center' }}>
                <img className='service-card' src={installation} alt="Service 1" style={{ width: '100%', borderRadius: '8px', height: '37vh', objectFit: 'cover', objectPosition: 'top' }} />
                <h4 style={{margin:'2vh 0'}}>Installation Service</h4>
                <p>Professional installation services to set up your cooling system efficiently.</p>
              </div>
              <div style={{ width: '30%', textAlign: 'center' }}>
                <img className='service-card' src="https://via.placeholder.com/200x150" alt="Service 2" style={{ width: '100%', borderRadius: '8px' }} />
                <h4 style={{margin:'2vh 0'}}>Maintenance and Repair</h4>
                <p>Regular maintenance and repair services to keep your equipment running smoothly.</p>
              </div>
              <div style={{ width: '30%', textAlign: 'center' }}>
                <img className='service-card' src="https://via.placeholder.com/200x150" alt="Service 3" style={{ width: '100%', borderRadius: '8px' }} />
                <h4 style={{margin:'2vh 0'}}>Consultation</h4>
                <p>Expert consultation to help you choose the best cooling solutions for your needs.</p>
              </div>
            </div>
          </div>
        </section>

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
