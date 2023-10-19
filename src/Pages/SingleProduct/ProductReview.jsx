
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRatingForm = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px' }}>
    <h3 style={{ marginBottom: '10px', fontFamily: 'Arial', fontSize: '18px', fontWeight: 'bold' }}>Đánh giá:</h3>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index} style={{ marginRight: '5px', cursor: 'pointer' }}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => handleRatingChange(ratingValue)}
              style={{ display: 'none' }}
            />
            <FaStar
              color={ratingValue <= rating ? '#ffc107' : '#ccc'}
              style={{ marginRight: '2px' }}
            />
          </label>
        );
      })}
    </div>
    <button
      type="submit"
      style={{
        marginTop: '10px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        padding: '8px 16px',
        cursor: 'pointer',
        fontFamily: 'Arial',
        fontSize: '14px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        ':hover': {
          backgroundColor: '#0056b3',
        },
      }}
    >
      Gửi đánh giá
    </button>
    {rating > 0 && (
      <p style={{ marginTop: '10px', fontFamily: 'Arial', fontSize: '14px' }}>
        Bạn đã đánh giá {rating} sao. Cảm ơn bạn đã chia sẻ ý kiến của mình!
      </p>
    )}
  </div>

  );
};

export default StarRatingForm;
