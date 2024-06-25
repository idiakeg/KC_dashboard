import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import "../styles/Register2.css";

let initialValues = {
    fullname: "",
    gender: "",
    phone_number: "",
    birthday: "",
};

const validationSchema = Yup.object().shape({
    fullname: Yup.string().required("Fullname is required."),
    phone_number: Yup.string()
        .required("Phone number is required.")
        .min(10, "Minimum of 10 numbers.")
        .max(10, "Max of 10 numbers."),
    gender: Yup.string().required("Gender is required"),
});

const RegisterStep2 = ({ submitForm }) => {
    const [clicked, setClicked] = useState({
        fullname: false,
        phone_number: false,
        birthday: false,
    });
    return (
        <div className="auth_wrapper register step">
            <div className="auth_form_head">
                <div className="auth_personal_information">
                    Personal information
                    <span>2 of 3</span>
                </div>
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
                                    type="text"
                                    name="fullname"
                                    className={`${
                                        clicked.fullname &&
                                        values.fullname.length > 0
                                            ? "touched"
                                            : ""
                                    }`}
                                    onBlur={handleBlur}
                                    value={values.fullname}
                                    onChange={handleChange}
                                    onClick={() =>
                                        setClicked((prev) => {
                                            return {
                                                ...prev,
                                                fullname: true,
                                            };
                                        })
                                    }
                                />
                                <label>Full name</label>
                            </div>
                            {errors.fullname && touched.fullname && (
                                <span className="auth_error_msg">
                                    {errors.fullname}
                                </span>
                            )}
                        </div>
                        <div className="auth_gender_container">
                            <div className="auth_gender">
                                Gender:
                                <div className="gender_options">
                                    <label htmlFor="male">
                                        <input
                                            onChange={handleChange}
                                            id="male"
                                            type="radio"
                                            name="gender"
                                            value="male"
                                        />
                                        Male
                                    </label>
                                    <label htmlFor="female">
                                        <input
                                            onChange={handleChange}
                                            id="female"
                                            type="radio"
                                            name="gender"
                                            value="female"
                                        />
                                        Female
                                    </label>
                                </div>
                            </div>
                            {errors.gender && touched.gender && (
                                <span className="auth_error_msg">
                                    {errors.gender}
                                </span>
                            )}
                        </div>
                        <div className="disclaimer">
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clip-path="url(#clip0_132_31183)">
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315ZM8 14C9.5913 14 11.1174 13.3679 12.2426 12.2426C13.3679 11.1174 14 9.5913 14 8C14 6.4087 13.3679 4.88258 12.2426 3.75736C11.1174 2.63214 9.5913 2 8 2C6.4087 2 4.88258 2.63214 3.75736 3.75736C2.63214 4.88258 2 6.4087 2 8C2 9.5913 2.63214 11.1174 3.75736 12.2426C4.88258 13.3679 6.4087 14 8 14ZM7 5.333C7 4.78072 7.44772 4.333 8 4.333H8.007C8.55928 4.333 9.007 4.78072 9.007 5.333C9.007 5.88528 8.55928 6.333 8.007 6.333H8C7.44772 6.333 7 5.88528 7 5.333ZM8 7C8.55228 7 9 7.44772 9 8V10.667C9 11.2193 8.55228 11.667 8 11.667C7.44772 11.667 7 11.2193 7 10.667V8C7 7.44772 7.44772 7 8 7Z"
                                        fill="#1A0710"
                                        fill-opacity="0.65"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_132_31183">
                                        <rect
                                            width="16"
                                            height="16"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                            The phone number and birthday are only visible to
                            you
                        </div>
                        <div className="phone_number">
                            {/* <span className="country_code">
                                + 598
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M6 9L12 15L18 9"
                                        stroke="#757575"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </span> */}
                            <span className="country_code">
                                <select name="country_code" id="">
                                    <option value="Nigeria">+ 234</option>
                                    <option value="Rwanda">+ 250</option>
                                    <option value="Ethiopia">+ 251</option>
                                    <option value="Niger">+ 227</option>
                                    <option value="Ghana">+ 233</option>
                                    <option value="South Africa">+ 27</option>
                                    <option value="Mauritius">+ 230</option>
                                </select>
                            </span>
                            <div className="auth_form_group">
                                <div className="auth_input_field">
                                    <input
                                        type="number"
                                        name="phone_number"
                                        className={`${
                                            clicked.phone_number &&
                                            values.phone_number.toString()
                                                .length > 0
                                                ? "touched"
                                                : ""
                                        }`}
                                        onBlur={handleBlur}
                                        value={values.phone_number}
                                        onChange={handleChange}
                                        onClick={() =>
                                            setClicked((prev) => {
                                                return {
                                                    ...prev,
                                                    phone_number: true,
                                                };
                                            })
                                        }
                                    />
                                    <label>Phone number</label>
                                </div>
                                {errors.phone_number &&
                                    touched.phone_number && (
                                        <span className="auth_error_msg">
                                            {errors.phone_number}
                                        </span>
                                    )}
                            </div>
                        </div>
                        <div className="auth_form_group birthday_container">
                            <div className="auth_input_field">
                                <input
                                    id="date_picker"
                                    type="date"
                                    name="birthday"
                                    className={`${
                                        clicked.birthday &&
                                        values.birthday.length > 0
                                            ? "touched"
                                            : ""
                                    }`}
                                    onBlur={handleBlur}
                                    value={values.birthday}
                                    onChange={handleChange}
                                    onClick={() =>
                                        setClicked((prev) => {
                                            return {
                                                ...prev,
                                                birthday: true,
                                            };
                                        })
                                    }
                                />
                                <label
                                    className="date_picker"
                                    htmlFor="date_picker"
                                >
                                    Birthday
                                </label>
                                <span className="optional">Optional</span>
                                <div className="gift_giving">
                                    Let us know about your birthday so as not to
                                    miss a gift
                                </div>
                            </div>
                        </div>

                        <button type="submit">Save information</button>
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default RegisterStep2;
