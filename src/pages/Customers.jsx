import { useEffect, useState } from "react";
import "../styles/Customers.css";
import customer1 from "../assets/icons/dashboard_icons/active_member_1.svg";
import customer2 from "../assets/icons/dashboard_icons/active_member_2.svg";
import customer3 from "../assets/icons/dashboard_icons/active_member_3.svg";
import customer4 from "../assets/icons/dashboard_icons/active_member_4.svg";
import customer5 from "../assets/icons/dashboard_icons/active_member_5.svg";
import { auth, db } from "../components/Firebase";
import { doc, getDoc } from "firebase/firestore";

const Customers = () => {
    const [userDetails, setUserDetails] = useState();

    const getUserData = async () => {
        auth.onAuthStateChanged(async (user) => {
            console.log(user);
            const docRef = doc(db, "Users", user.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setUserDetails(docSnap.data());
                console.log("customer: ", docSnap.data());
            } else {
                console.log("user not logged in.");
            }
        });
    };

    useEffect(() => {
        getUserData();
    }, []);
    return (
        <div className="customer_dashboard">
            <div className="customer_container">
                <div className="customer_head">
                    <span>Hello {userDetails?.fullname.split(" ")[0]} 👋🏼,</span>
                    <div className="customer_search_container">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                                stroke="#7E7E7E"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M20.9999 21L16.6499 16.65"
                                stroke="#7E7E7E"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        <input
                            className="pointer"
                            type="text"
                            placeholder="Search"
                        />
                    </div>
                </div>
                <div className="customer_summary">
                    <div className="total_customers">
                        <svg
                            width="84"
                            height="84"
                            viewBox="0 0 84 84"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle
                                cx="42"
                                cy="42"
                                r="42"
                                fill="url(#paint0_linear_2702_521)"
                            />
                            <path
                                d="M38.0302 41.0229C37.8552 41.0054 37.6452 41.0054 37.4527 41.0229C33.2877 40.8829 29.9802 37.4704 29.9802 33.2704C29.9802 28.9829 33.4452 25.5004 37.7502 25.5004C42.0377 25.5004 45.5202 28.9829 45.5202 33.2704C45.5027 37.4704 42.1952 40.8829 38.0302 41.0229Z"
                                stroke="#00AC4F"
                                stroke-width="2.625"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M50.7171 28.9996C54.1121 28.9996 56.8421 31.7471 56.8421 35.1246C56.8421 38.4321 54.2171 41.1271 50.9446 41.2496C50.8046 41.2321 50.6471 41.2321 50.4896 41.2496"
                                stroke="#00AC4F"
                                stroke-width="2.625"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M29.2805 47.4796C25.0455 50.3146 25.0455 54.9346 29.2805 57.7521C34.093 60.9721 41.9855 60.9721 46.798 57.7521C51.033 54.9171 51.033 50.2971 46.798 47.4796C42.003 44.2771 34.1105 44.2771 29.2805 47.4796Z"
                                stroke="#00AC4F"
                                stroke-width="2.625"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M54.0947 57.0004C55.3547 56.7379 56.5447 56.2304 57.5247 55.4779C60.2547 53.4304 60.2547 50.0529 57.5247 48.0054C56.5622 47.2704 55.3897 46.7804 54.1472 46.5004"
                                stroke="#00AC4F"
                                stroke-width="2.625"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear_2702_521"
                                    x1="74.55"
                                    y1="2.14197e-06"
                                    x2="42"
                                    y2="84"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stop-color="#D3FFE7" />
                                    <stop offset="1" stop-color="#EFFFF6" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className="section_info">
                            <div>Total Customers</div>
                            <div>5,423</div>
                            <div>
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10 17L10 5"
                                        stroke="#00AC4F"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M4.16663 9.99996L9.99996 4.16663L15.8333 9.99996"
                                        stroke="#00AC4F"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                                <span>16%</span> this month
                            </div>
                        </div>
                    </div>
                    <div className="total_members">
                        <svg
                            width="84"
                            height="84"
                            viewBox="0 0 84 84"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle
                                cx="42"
                                cy="42"
                                r="42"
                                fill="url(#paint0_linear_2702_539)"
                            />
                            <path
                                d="M46.0667 53.75L48.6 56.2833L53.6667 51.2167"
                                stroke="#00AC4F"
                                stroke-width="2.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M42.2669 40.117C42.1003 40.1003 41.9003 40.1003 41.7169 40.117C37.7503 39.9836 34.6003 36.7336 34.6003 32.7336C34.5836 28.6503 37.9003 25.3336 41.9836 25.3336C46.0669 25.3336 49.3836 28.6503 49.3836 32.7336C49.3836 36.7336 46.2169 39.9836 42.2669 40.117Z"
                                stroke="#00AC4F"
                                stroke-width="2.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M41.9832 58.3498C38.9498 58.3498 35.9332 57.5831 33.6332 56.0498C29.5998 53.3498 29.5998 48.9498 33.6332 46.2664C38.2165 43.1998 45.7332 43.1998 50.3165 46.2664"
                                stroke="#00AC4F"
                                stroke-width="2.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear_2702_539"
                                    x1="74.55"
                                    y1="2.14197e-06"
                                    x2="42"
                                    y2="84"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stop-color="#D3FFE7" />
                                    <stop offset="1" stop-color="#EFFFF6" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className="section_info">
                            <div>Members</div>
                            <div>1,893</div>
                            <div>
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10 3L10 15"
                                        stroke="#D0004B"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M15.8334 10L10 15.8334L4.16671 10"
                                        stroke="#D0004B"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                                <span>1%</span> this month
                            </div>
                        </div>
                    </div>
                    <div className="total_active_customers">
                        <svg
                            width="84"
                            height="84"
                            viewBox="0 0 84 84"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle
                                cx="42"
                                cy="42"
                                r="42"
                                fill="url(#paint0_linear_2702_556)"
                            />
                            <path
                                d="M32.27 24.5H51.7125C57.9425 24.5 59.5 26.0575 59.5 32.27V43.3475C59.5 49.5775 57.9425 51.1175 51.73 51.1175H32.27C26.0575 51.135 24.5 49.5775 24.5 43.365V32.27C24.5 26.0575 26.0575 24.5 32.27 24.5Z"
                                stroke="#00AC4F"
                                stroke-width="2.625"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M42 51.1345V59.4995"
                                stroke="#00AC4F"
                                stroke-width="2.625"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M24.5 43.75H59.5"
                                stroke="#00AC4F"
                                stroke-width="2.625"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M34.125 59.5H49.875"
                                stroke="#00AC4F"
                                stroke-width="2.625"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear_2702_556"
                                    x1="74.55"
                                    y1="2.14197e-06"
                                    x2="42"
                                    y2="84"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stop-color="#D3FFE7" />
                                    <stop offset="1" stop-color="#EFFFF6" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className="section_info">
                            <div>Active Now</div>
                            <div>189</div>
                            <div>
                                <div className="active_customer_image one">
                                    <img src={customer1} alt="" />
                                </div>
                                <div className="active_customer_image two">
                                    <img src={customer2} alt="" />
                                </div>
                                <div className="active_customer_image three">
                                    <img src={customer3} alt="" />
                                </div>
                                <div className="active_customer_image four">
                                    <img src={customer4} alt="" />
                                </div>
                                <div className="active_customer_image five">
                                    <img src={customer5} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="all_customers">
                    <div className="all_customers_head">
                        <div className="left">
                            <div>All Customers</div>
                            <div>Active Members</div>
                        </div>
                        <div className="right">
                            <div className="customer_search_container">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                                        stroke="#7E7E7E"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M20.9999 21L16.6499 16.65"
                                        stroke="#7E7E7E"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                                <input
                                    className="pointer"
                                    type="text"
                                    placeholder="Search"
                                />
                            </div>
                            <div className="sortby_container">
                                sort by: <span>Newest</span>
                                <svg
                                    width="18"
                                    height="18"
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
                            </div>
                        </div>
                    </div>
                    <div className="customers_list">
                        <div className="list_head">
                            <span>Customer Name</span>
                            <span>Company</span>
                            <span>Phone Number</span>
                            <span>Email</span>
                            <span>Country</span>
                            <span>Status</span>
                        </div>
                        <ul className="customer_list_container">
                            <li>
                                <span>Jane Cooper</span>
                                <span>Microsoft</span>
                                <span>(225) 555-0118</span>
                                <span>jane@microsoft.com</span>
                                <span>United States</span>
                                <span>Active</span>
                            </li>
                            <li>
                                <span>Jane Cooper</span>
                                <span>Microsoft</span>
                                <span>(225) 555-0118</span>
                                <span>jane@microsoft.com</span>
                                <span>United States</span>
                                <span>Active</span>
                            </li>
                            <li>
                                <span>Jane Cooper</span>
                                <span>Microsoft</span>
                                <span>(225) 555-0118</span>
                                <span>jane@microsoft.com</span>
                                <span>United States</span>
                                <span>Active</span>
                            </li>
                        </ul>
                    </div>
                    <div className="all_customers_pagination">
                        <div className="left">
                            Showing data 1 to 8 of 256K entries
                        </div>
                        <div className="right">
                            <span>
                                <svg
                                    width="5"
                                    height="7"
                                    viewBox="0 0 5 7"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M2.936 6.392L0.176 3.668L2.936 0.944H4.664L1.892 3.668L4.664 6.392H2.936Z"
                                        fill="#404B52"
                                    />
                                </svg>
                            </span>
                            <span className="active">1</span>
                            <span>2</span>
                            <span>3</span>
                            <span>4</span>
                            <span className="dot_dot">...</span>
                            <span>40</span>
                            <span>
                                <svg
                                    width="5"
                                    height="7"
                                    viewBox="0 0 5 7"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0.344 0.944H2.072L4.832 3.668L2.072 6.392H0.344L3.116 3.668L0.344 0.944Z"
                                        fill="#404B52"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customers;
