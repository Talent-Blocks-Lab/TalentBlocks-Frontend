import React, { useState, useEffect } from "react";

const Feedbacks = () => {
  const [index, setIndex] = useState(0);
  const [feedbacks, setFeedbacks] = useState([]);

  const getAllFeedbacks = async () => {
    try {
      const res = await fetch("http://localhost:8500/api/v1/feedbacks");
      const data = await res.json();
      setFeedbacks(data);
    } catch (error) {
      console.error("Error fetching feedbacks:", error);
    }
  };

  useEffect(() => {
    getAllFeedbacks();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
    }, 20000); // Auto-slide every 20 seconds

    return () => clearInterval(interval);
  }, [feedbacks]);

  const prevTestimonialHandler = () => {
    setIndex((prev) => (prev - 1 + feedbacks.length) % feedbacks.length);
  };

  const nextTestimonialHandler = () => {
    setIndex((prev) => (prev + 1) % feedbacks.length);
  };

  return (
    <div className="feedback-wrapper">
      {feedbacks.length === 0 ? (
        <h2>No feedbacks to display</h2>
      ) : (
        <div className="feedback-container">
          <button onClick={prevTestimonialHandler} className="control-btn">
            Previous
          </button>
          <div
            key={feedbacks[index]?._id}
            style={{ backgroundColor: feedbacks[index]?.favColor }}
            className="feedback-card">
            <h5 className="title">{feedbacks[index]?.title}</h5>
            <p className="comment">❝ {feedbacks[index]?.comment} ❞</p>
            <div className="profile">
              {feedbacks[index]?.avatar && feedbacks[index]?.fullname && (
                <img
                  src={feedbacks[index]?.avatar}
                  alt={feedbacks[index]?.fullname}
                  className="avatar"
                />
              )}
              <div className="details">
                <h6 className="fullname">{feedbacks[index]?.fullname}</h6>
                <small className="field">{feedbacks[index]?.field}</small>
              </div>
            </div>
          </div>
          <button onClick={nextTestimonialHandler} className="control-btn">
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Feedbacks;
