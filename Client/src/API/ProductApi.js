import axios from "axios";
import { useEffect, useState } from "react";

const ProductApi = () => {
    const [products, setProducts] = useState([]); // Correct useState syntax and initial state

    const getProduct = async () => {
        try {
            const res = await axios.get("/api/products");
            setProducts(res.data); // Update state with fetched data
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {
        getProduct();
    }, []);

    return {
        products:[products,setProducts] 
    };
};

export default ProductApi;
