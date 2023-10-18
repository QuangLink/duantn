// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { FaStar } from 'react-icons/fa';

// const FormContainer = styled.form`
//   display: flex;
//   flex-direction: column;
// `;

// const Label = styled.label`
//   margin-bottom: 10px;
// `;

// const Select = styled.select`
//   padding: 5px;
//   border-radius: 5px;
// `;

// const TextArea = styled.textarea`
//   padding: 10px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   font-size: 14px;
//   resize: vertical;
// `;

// const SubmitButton = styled.button`
//   padding: 10px 20px;
//   background-color: blue;
//   color: white;
//   border: none;
//   border-radius: 5px;
// `;

// const ProductReviewForm = () => {
//   const [rating, setRating] = useState(0);
//   const [comment, setComment] = useState('');

//   const handleRatingChange = (e) => {
//     setRating(parseInt(e.target.value));
//   };

//   const handleCommentChange = (e) => {
//     setComment(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Rating:', rating);
//     console.log('Comment:', comment);
//     setRating(0);
//     setComment('');
//   };
  

//   return (
//     <FormContainer onSubmit={handleSubmit}>
//       <Label htmlFor="rating">Đánh giá:</Label>
//       <Select id="rating" value={rating} onChange={handleRatingChange}>
//         <option value={0}>Chọn đánh giá</option>
//         <option value={1}>1 sao</option>
//         <option value={2}>2 sao</option>
//         <option value={3}>3 sao</option>
//         <option value={4}>4 sao</option>
//         <option value={5}>5 sao</option>
//       </Select>
//       <Label htmlFor="comment">Bình luận:</Label>
//       <TextArea id="comment" value={comment} onChange={handleCommentChange}></TextArea>
//       <SubmitButton type="submit">Gửi đánh giá</SubmitButton>
//     </FormContainer>
//   );
// };

// export default ProductReviewForm;
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRatingForm = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  return (
    <div>
      <h3>Đánh giá:</h3>
      <div>
        {[...Array(5)].map((_, index) => {
          const ratingValue = index + 1;
          return (
            <label key={index}>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => handleRatingChange(ratingValue)}
              />
              <FaStar
                className="star"
                color={ratingValue <= rating ? 'yellow' : 'gray'}
              />
            </label>
          );
        })}
      </div>
      <button type="submit">Gửi đánh giá</button>
    </div>
  );
};

export default StarRatingForm;
