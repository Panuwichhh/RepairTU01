import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // To redirect after loading

function WelcomePage() {
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        // Simulating the loading process (e.g., API call or authentication)
        setTimeout(() => {
            setIsLoading(false); // After loading, hide the loading screen
            navigate("/home"); // Redirect to home page (or the page you want)
        }, 3000); // You can adjust this timeout as needed
    }, [navigate]);

    return (
        <div className="w-full h-screen flex justify-center items-center bg-gradient-to-t from-[#FFD705] to-[#FF0000]">
            {isLoading ? (
                <div className="text-center">
                    <h1 className="text-4xl text-white font-bold mb-4">Welcome Back!</h1>
                    <p className="text-xl text-white">Loading your account...</p>
                    <div className="mt-4">
                        <div className="w-10 h-10 border-4 border-t-4 border-white rounded-full animate-spin"></div>
                    </div>
                </div>
            ) : (
                <div> {/* This will render once the loading is complete */}</div>
            )}
        </div>
    );
}

export default WelcomePage;
