import React from "react";
import "../styles/RegisterSuccess.css";
import { useNavigate } from "react-router-dom";

const RegisterSuccess = () => {
    const navigate = useNavigate();
    return (
        <div className="auth_success_wrapper">
            <div className="success_bg">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.70699 5.29304C6.51839 5.11088 6.26579 5.01009 6.00359 5.01237C5.74139 5.01465 5.49058 5.11981 5.30517 5.30522C5.11976 5.49063 5.01459 5.74144 5.01232 6.00364C5.01004 6.26584 5.11083 6.51844 5.29299 6.70704L10.586 12L5.29299 17.293C5.19748 17.3853 5.1213 17.4956 5.06889 17.6176C5.01648 17.7396 4.98889 17.8709 4.98774 18.0036C4.98659 18.1364 5.01189 18.2681 5.06217 18.391C5.11245 18.5139 5.1867 18.6255 5.28059 18.7194C5.37449 18.8133 5.48614 18.8876 5.60904 18.9379C5.73193 18.9881 5.86361 19.0134 5.99639 19.0123C6.12917 19.0111 6.26039 18.9836 6.38239 18.9311C6.5044 18.8787 6.61474 18.8026 6.70699 18.707L12 13.414L17.293 18.707C17.4816 18.8892 17.7342 18.99 17.9964 18.9877C18.2586 18.9854 18.5094 18.8803 18.6948 18.6949C18.8802 18.5095 18.9854 18.2586 18.9877 17.9964C18.9899 17.7342 18.8891 17.4816 18.707 17.293L13.414 12L18.707 6.70704C18.8891 6.51844 18.9899 6.26584 18.9877 6.00364C18.9854 5.74144 18.8802 5.49063 18.6948 5.30522C18.5094 5.11981 18.2586 5.01465 17.9964 5.01237C17.7342 5.01009 17.4816 5.11088 17.293 5.29304L12 10.586L6.70699 5.29304Z"
                        fill="#1A0710"
                        fill-opacity="0.85"
                    />
                </svg>
            </div>
            <div className="success_helper_div">
                <div className="msg">You are successfully registered!</div>
                <button onClick={() => navigate("/login")}>Go to Login</button>
            </div>
        </div>
    );
};

export default RegisterSuccess;
