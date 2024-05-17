import React from 'react';
import { useEffect, useState } from "react";
import "../styles/login.css";
import { supabase } from '../supabase-config';


const SubscribeModal = ({ setUserEmail, setOpenedSubscribe, setOpenLogin, userEmail, setAnyError }) => {

  
  const [time, setTime] = useState("8");
  const [successMessage, setSuccessMessage] = useState("");
  const [subscribeError, setSubscribeError] = useState("");

  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryToggle = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
    // Set fadeIn to true after the component mounts
    setFadeIn(true);
  }, []);

  async function handleSubscribe(e) {
    e.preventDefault();

    if (selectedCategories.length == 0) {
      setSubscribeError("Please select atlest one category");
      setTimeout(() => {

        setSubscribeError("");

      }, 3000);
      return;
    }

    setSuccessMessage("");
    setSubscribeError("");

    if (!userEmail) {
      setOpenedSubscribe(false);
      setOpenLogin(true);
      setAnyError("Please Login First !!");
      setTimeout(() => {
        setAnyError("");
      }, 5000);
      return;
    }

    try {

      console.log(userEmail, time, selectedCategories);

      const { error } = await supabase
        .from('subs')
        .insert({ email: userEmail, time: time, category: selectedCategories })

      if (error) {

        console.log(error);
        if (error.code == 23505) {
          setSubscribeError("Already Subscribed !!");
        } else
          setSubscribeError("Error Subscribing !!");
        setTimeout(() => {
          setSubscribeError("");
        }, 5000);
        return;
      }

      setSuccessMessage("Subscribed");
      console.log("success");
      setTimeout(() => {
        setSuccessMessage("");
        setOpenedSubscribe(false);
      }, 2000)

    } catch (e) {
      console.log(e);
    }


  }


  return (
    <div className={`modal-view  ${ fadeIn ? 'fade-in' : ''}`}>
      {/* <Subscribe userEmail={userEmail} setUserEmail={setUserEmail} setOpenedSubscribe={setOpenedSubscribe} setOpenLogin={setOpenLogin} /> */}
      <form className="subscribe-card" onSubmit={(e) => { handleSubscribe(e) }}>

        <button className='btn-close close-btn' onClick={() => { setOpenedSubscribe(false) ; setFadeIn(false) }}></button>
        <h1>Subscribe For Email Service</h1>

        <div style={{ height: "20px" }} className='d-flex justify-content-center align-items-center'>
          
          <p style={{ color: "tomato" }}>{subscribeError}</p>
          <p style={{ color: "lime" }}>{successMessage}</p>
        </div>

        <label>Select the time you want to recieve emails</label><br />

        <select id="time" name="time" onChange={(e) => { console.log("time", e.target.value); setTime(e.target.value) }} value={time}
          className="form-select"
        >
          <option value="8">08:00 AM</option>
          <option value="13">01:00 PM</option>
          <option value="21">09:00 PM</option>
        </select><br />

        <label>Select Categories:</label>
        <div className='category-select'>
          <label>
            <input
              type="checkbox"
              checked={selectedCategories.includes('')}
              onChange={() => handleCategoryToggle('')}
            />
            Top
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedCategories.includes('National')}
              onChange={() => handleCategoryToggle('National')}
            />
            National
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedCategories.includes('Sports')}
              onChange={() => handleCategoryToggle('Sports')}
            />
            Sports
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedCategories.includes('Science')}
              onChange={() => handleCategoryToggle('Science')}
            />
            Science
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedCategories.includes('World')}
              onChange={() => handleCategoryToggle('World')}
            />
            World
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedCategories.includes('Technology')}
              onChange={() => handleCategoryToggle('Technology')}
            />
            Technology
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedCategories.includes('Entertainment')}
              onChange={() => handleCategoryToggle('Entertainment')}
            />
            Entertainment
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedCategories.includes('Business')}
              onChange={() => handleCategoryToggle('Business')}
            />
            Business
          </label>

        </div>



        <button type="submit" className="btn btn-dark">Subscribe</button>
      </form>
    </div>
  );
};

export default SubscribeModal;

