// import "./RailwayForm.css";
// import React, { useEffect, useRef, useState } from "react";
// import { useReactToPrint } from "react-to-print";
// import "bootstrap/dist/css/bootstrap.min.css";
// import axios from "axios";
// import { Col, Table, Tag } from "antd";
// import Layout from "../../components/Layout";
// import { useDispatch, useSelector } from "react-redux";
// import { useLocation, useNavigate, useParams } from "react-router-dom";
// import { hideLoading, showLoading } from "../../redux/features/alertSlice";
// import { useContext } from "react";
// import UserContext from "./useContext";

// const RailwayForm = (props) => {
//   const data = useContext(UserContext);
//   console.log(data);
//   useEffect(() => {
//     console.log(data);
//   }, [data]);
//   // data = null;

//   const [users, setUsers] = useState([]);
//   const { user } = useSelector((state) => state.user);
//   const navigate = useNavigate();
//   const [userprofile, setUsersProfile] = useState(null);
//   const dispatch = useDispatch();
//   const params = useParams();
//   // console.log(props.zz);
//   const componentRef = useRef();
//   const handlePrint = useReactToPrint({
//     content: () => componentRef.current,
//     documentTitle: "emp-data",
//     onAfterPrint: () => alert("print success"),
//   });

//   // const getUser = async () => {
//   //   try {
//   //     const res = await axios.get("/api/v1/admin/getAllDoctors", {
//   //       headers: {
//   //         Authorization: `Bearer ${localStorage.getItem("token")}`,
//   //       },
//   //     });
//   //     if (res.data.success) {
//   //       setUsers(res.data.data);
//   //     }
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };
//   const getUserInfo = async () => {
//     try {
//       const res = await axios.post(
//         "/api/v1/profile/getProfileInfo",
//         {
//           userId: data,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );
//       dispatch(hideLoading());
//       if (res.data.message) {
//         setUsersProfile(res.data.data);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     // getUser();
//     getUserInfo();
//   }, []);

//   return (
//     <>
//       <Layout>
//         <div
//           ref={componentRef}
//           style={{ width: "100%", height: window.innerHeight }}
//         >
//           <div className="text-center my-3 border py-2 ">
//             <h1>Applicants data</h1>
//           </div>
//           <button onClick={handlePrint}>Print this out</button>
//         </div>
//       </Layout>
//     </>
//   );
// };

// export default RailwayForm;

// // 64b8da27e73213f08f8ad33e
// // 64b930d1e79db93a9fbf6107
