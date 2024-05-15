// Home.js
import React from "react";
import ProductCard from "../ProductCard";
import "./Home.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../header/Navbar";

function Fashion() {
  //Added Data
  const [recommendedProducts, setRecommendedProducts] = useState([]);

  useEffect(() => {
    fetchRecommendations();
    // console.log("reaching here");
  }, []); // This empty array ensures the effect runs only once on component mount

  const fetchRecommendations = async () => {
    try {
      const response = await axios.post("http://localhost:9000/recommend", {
        category: "Amazon_Fashion",
        user_id: localStorage.getItem("userId"), // Replace 'your_user_id_here' with the actual user ID
        n_recommendations: 5,
      });
      setRecommendedProducts(response.data.recommended_items);
    } catch (error) {
      console.error("Error fetching recommendations:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="home-container">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {recommendedProducts.map((product) => (
            <ProductCard key={product.item_id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Fashion;
