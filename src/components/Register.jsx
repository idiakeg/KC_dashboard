import { Formik } from "formik";
import * as Yup from "yup";
import "../styles/Auth.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

let initialValues = {
    password: "",
    email: "",
};

const validationSchema = Yup.object().shape({
    password: Yup.string()
        .required("Password is required.")
        .min(8, "8+ characters"),
    email: Yup.string()
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format.")
        .required("Email is required."),
});

const submitForm = () => {
    console.log("form submitted.");
};

const Register = () => {
    const navigate = useNavigate();
    const [clicked, setClicked] = useState({
        email: false,
        password: false,
    });
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="auth">
            <div className="auth_wrapper register">
                <div className="auth_form_head">
                    <span className="auth_action auth_active">Register</span>
                    <span
                        onClick={() => navigate("/login")}
                        className="auth_action"
                    >
                        Login
                    </span>
                    <span className="auth_close_icon">
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
                    </span>
                </div>
                <div className="auth_form_links">
                    <span>
                        <svg
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                                fill="#F6F6F6"
                            />
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M28.6113 10C28.8313 11.4942 28.2231 12.958 27.4208 13.9937C26.5624 15.1045 25.0829 15.9637 23.6495 15.9189C23.3878 14.4883 24.0578 13.0144 24.873 12.0236C25.7673 10.9301 27.3 10.0911 28.6113 10ZM32.9175 31.0314C33.6565 29.8988 33.9326 29.3274 34.5062 28.0488C30.3338 26.462 29.6652 20.5301 33.7945 18.2534C32.535 16.6739 30.7651 15.7583 29.0944 15.7583C27.8906 15.7583 27.0658 16.0724 26.3159 16.358C25.691 16.596 25.1182 16.8142 24.4216 16.8142C23.6687 16.8142 23.002 16.5752 22.3039 16.3249C21.5368 16.0498 20.7318 15.7612 19.7329 15.7612C17.858 15.7612 15.8624 16.9068 14.5971 18.8653C12.8186 21.6236 13.122 26.8092 16.0062 31.2266C17.0371 32.8076 18.4145 34.5838 20.216 34.5998C20.9635 34.6072 21.461 34.3841 21.9993 34.1426C22.6154 33.8663 23.2851 33.5659 24.4446 33.5598C25.6109 33.5528 26.27 33.8568 26.8779 34.1372C27.4024 34.3791 27.8888 34.6035 28.63 34.5954C30.433 34.581 31.8866 32.6123 32.9175 31.0314Z"
                                fill="#0B0B0A"
                            />
                        </svg>
                    </span>
                    <span>
                        <svg
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                                fill="#F6F6F6"
                            />
                            <path
                                d="M26.5016 38.1115V25.0542H30.1059L30.5836 20.5546H26.5016L26.5077 18.3025C26.5077 17.1289 26.6192 16.5001 28.3048 16.5001H30.5581V12H26.9532C22.6231 12 21.0991 14.1828 21.0991 17.8536V20.5551H18.4V25.0547H21.0991V38.1115H26.5016Z"
                                fill="#3B5998"
                            />
                        </svg>
                    </span>
                    <span>
                        <svg
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                                fill="#F6F6F6"
                            />
                            <path
                                d="M24 17.6213C25.9529 17.6213 27.2702 18.4649 28.0213 19.1698L30.9564 16.304C29.1538 14.6284 26.808 13.6 24 13.6C19.9324 13.6 16.4196 15.9342 14.7093 19.3315L18.072 21.9431C18.9156 19.4355 21.2498 17.6213 24 17.6213Z"
                                fill="#EA4335"
                            />
                            <path
                                d="M33.984 24.2311C33.984 23.376 33.9147 22.752 33.7644 22.1049H24V25.9644H29.7316C29.616 26.9235 28.992 28.368 27.6053 29.3386L30.8871 31.8809C32.8516 30.0666 33.984 27.3973 33.984 24.2311Z"
                                fill="#4285F4"
                            />
                            <path
                                d="M18.0836 26.0569C17.864 25.4098 17.7369 24.7164 17.7369 24C17.7369 23.2835 17.864 22.5902 18.072 21.9431L14.7093 19.3315C14.0044 20.7413 13.6 22.3244 13.6 24C13.6 25.6755 14.0044 27.2587 14.7093 28.6684L18.0836 26.0569Z"
                                fill="#FBBC05"
                            />
                            <path
                                d="M24 34.4C26.808 34.4 29.1653 33.4756 30.8871 31.8809L27.6053 29.3387C26.7271 29.9511 25.5484 30.3787 24 30.3787C21.2498 30.3787 18.9156 28.5644 18.0836 26.0569L14.7209 28.6684C16.4311 32.0658 19.9324 34.4 24 34.4Z"
                                fill="#34A853"
                            />
                        </svg>
                    </span>
                </div>
                <div className="alternative_auth_prompt">
                    or login with email
                </div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={submitForm}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleSubmit,
                        handleBlur,
                    }) => (
                        <form onSubmit={handleSubmit} className="auth_form">
                            <div className="auth_form_group">
                                <div className="auth_input_field">
                                    <input
                                        type="email"
                                        name="email"
                                        className={`${
                                            clicked.email &&
                                            values.email.length > 0
                                                ? "touched"
                                                : ""
                                        }`}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        onChange={handleChange}
                                        onClick={() =>
                                            setClicked((prev) => {
                                                return { ...prev, email: true };
                                            })
                                        }
                                    />
                                    <label>Email Address</label>
                                    {touched.email && !errors.email && (
                                        <span className="auth_check_mark">
                                            <svg
                                                width="16"
                                                height="11"
                                                viewBox="0 0 16 11"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M15.7304 0.31701C16.1076 0.720412 16.0864 1.35322 15.683 1.73043L6.058 10.7304C5.67363 11.0898 5.07649 11.0899 4.69209 10.7305L0.317091 6.6405C-0.0863533 6.26334 -0.107659 5.63054 0.269504 5.22709C0.646666 4.82365 1.27947 4.80234 1.68292 5.1795L5.37493 8.63101L14.317 0.269579C14.7204 -0.107628 15.3532 -0.0863925 15.7304 0.31701Z"
                                                    fill="#6BC62D"
                                                />
                                            </svg>
                                        </span>
                                    )}
                                </div>
                                {errors.email && touched.email && (
                                    <span className="auth_error_msg">
                                        {errors.email}
                                    </span>
                                )}
                            </div>
                            <div className="auth_form_group">
                                <div className="auth_input_field">
                                    <input
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        name="password"
                                        onBlur={handleBlur}
                                        value={values.password}
                                        onChange={handleChange}
                                        className={`${
                                            clicked.password &&
                                            values.password.length > 0
                                                ? "touched"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            setClicked((prev) => {
                                                return {
                                                    ...prev,
                                                    password: true,
                                                };
                                            })
                                        }
                                    />
                                    <label>Password</label>
                                    <span
                                        className="eye_icon"
                                        onClick={() =>
                                            setShowPassword((prev) => !prev)
                                        }
                                    >
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
                                                d="M2.57442 12.7075C2.39493 12.4296 2.25004 12.1889 2.14075 12C2.25004 11.8111 2.39493 11.5704 2.57442 11.2925C3.03544 10.5787 3.71817 9.6294 4.60454 8.68394C6.39553 6.77356 8.89952 5 12 5C15.1005 5 17.6045 6.77356 19.3955 8.68394C20.2818 9.6294 20.9646 10.5787 21.4256 11.2925C21.6051 11.5704 21.75 11.8111 21.8593 12C21.75 12.1889 21.6051 12.4296 21.4256 12.7075C20.9646 13.4213 20.2818 14.3706 19.3955 15.3161C17.6045 17.2264 15.1005 19 12 19C8.89952 19 6.39553 17.2264 4.60454 15.3161C3.71817 14.3706 3.03544 13.4213 2.57442 12.7075ZM23.8941 11.5521C23.8941 11.5521 24.0463 12.1426 23.8941 12.4479L23.8925 12.4511L23.889 12.458L23.8777 12.4802C23.8681 12.4987 23.8547 12.5247 23.8373 12.5576C23.8025 12.6233 23.752 12.7168 23.686 12.834C23.5542 13.0684 23.3602 13.3985 23.1057 13.7925C22.5979 14.5787 21.8432 15.6294 20.8545 16.6839C18.8955 18.7736 15.8995 21 12 21C8.1005 21 5.10449 18.7736 3.14547 16.6839C2.15684 15.6294 1.40207 14.5787 0.894343 13.7925C0.639857 13.3985 0.445799 13.0684 0.313979 12.834C0.248031 12.7168 0.197547 12.6233 0.162761 12.5576C0.145364 12.5247 0.131882 12.4987 0.122345 12.4802L0.110997 12.458L0.107546 12.4511L0.106377 12.4488L0.105932 11.5521L0.107546 11.5489L0.110997 11.542L0.122345 11.5198C0.131882 11.5013 0.145364 11.4753 0.162761 11.4424C0.197547 11.3767 0.248031 11.2832 0.313979 11.166C0.445799 10.9316 0.639857 10.6015 0.894343 10.2075C1.40207 9.42131 2.15684 8.3706 3.14547 7.31606C5.10449 5.22644 8.1005 3 12 3C15.8995 3 18.8955 5.22644 20.8545 7.31606C21.8432 8.3706 22.5979 9.42131 23.1057 10.2075C23.3602 10.6015 23.5542 10.9316 23.686 11.166C23.752 11.2832 23.8025 11.3767 23.8373 11.4424C23.8547 11.4753 23.8681 11.5013 23.8777 11.5198L23.889 11.542L23.8925 11.5489L23.8941 11.5521ZM23.8941 12.4479C24.0348 12.1664 24.0348 11.8336 23.8941 11.5521C23.8941 11.5521 24.0463 12.1426 23.8941 12.4479ZM0.10558 12.4472L0.105756 11.9996L0.105932 11.5521C-0.0348316 11.8336 -0.0351837 12.1657 0.10558 12.4472ZM12 8C10.9391 8 9.92173 8.42143 9.17158 9.17157C8.42143 9.92172 8.00001 10.9391 8.00001 12C8.00001 13.0609 8.42143 14.0783 9.17158 14.8284C9.92173 15.5786 10.9391 16 12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8ZM13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14C11.4696 14 10.9609 13.7893 10.5858 13.4142C10.2107 13.0391 10 12.5304 10 12C10 11.4696 10.2107 10.9609 10.5858 10.5858C10.9609 10.2107 11.4696 10 12 10C12.5304 10 13.0391 10.2107 13.4142 10.5858C13.7893 10.9609 14 11.4696 14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142Z"
                                                fill="#1A0710"
                                                fill-opacity="0.85"
                                            />
                                        </svg>
                                    </span>
                                    {touched.password && !errors.password && (
                                        <span className="auth_check_mark password_check">
                                            <svg
                                                width="16"
                                                height="11"
                                                viewBox="0 0 16 11"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M15.7304 0.31701C16.1076 0.720412 16.0864 1.35322 15.683 1.73043L6.058 10.7304C5.67363 11.0898 5.07649 11.0899 4.69209 10.7305L0.317091 6.6405C-0.0863533 6.26334 -0.107659 5.63054 0.269504 5.22709C0.646666 4.82365 1.27947 4.80234 1.68292 5.1795L5.37493 8.63101L14.317 0.269579C14.7204 -0.107628 15.3532 -0.0863925 15.7304 0.31701Z"
                                                    fill="#6BC62D"
                                                />
                                            </svg>
                                        </span>
                                    )}
                                </div>
                                {errors.password && touched.password && (
                                    <span className="auth_error_msg">
                                        {errors.password}
                                    </span>
                                )}
                            </div>
                            <button type="submit">Login to Dashboard</button>
                        </form>
                    )}
                </Formik>
                <span className="auth_remember">
                    <input
                        className="pointer"
                        id="remember_me"
                        type="checkbox"
                    />
                    <label className="pointer" htmlFor="remember_me">
                        Send me news and promotions
                    </label>
                </span>
                <p className="terms_n_condition">
                    By continuing I agree with the{" "}
                    <Link> Terms & Conditions, Privacy Policy</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
