import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PlatformPage = ({ apiKey }) => {
  const { platform } = useParams(); // Fetch the platform from the URL
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.rawg.io/api/platforms?key=${apiKey}`
        );
        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (error) {
        console.error("Error fetching platform data:", error);
      }
    };

    fetchData();
  }, [platform]);

  return (
    <div>
      <h1>{platform} Games</h1>
      {/* Render the data */}
    </div>
  );
};

export default PlatformPage;
