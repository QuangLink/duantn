import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";

const BlogContent = () => {
  const { id } = useParams(); // Extract id from URL
  console.log(id);

  const [data, setData] = useState([]);
  const [redirectToNotFound, setRedirectToNotFound] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://duantn-backend.onrender.com/blog/${id}`,
        );
        const result = await response.json();
        setData(result);
        console.log(result);

        // If data is empty, set redirectToNotFound to true
        if (result.length === 0) {
          setRedirectToNotFound(true);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  // Render the Redirect component if redirectToNotFound is true
  if (redirectToNotFound) {
    return <Navigate to="/404" />;
  }

  return (
    <div className="blog-content">
      <div className="blog-content__container">
        {data.length > 0 && (
          <div className="blog-content__container__item">
            <div dangerouslySetInnerHTML={{ __html: data[0].content }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogContent;
