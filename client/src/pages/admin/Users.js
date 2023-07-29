// import React, { useEffect, useState } from "react";
// import Layout from "../../components/Layout";
// import axios from "axios";
// import { Col, Table, Tag } from "antd";
// import moment from "moment";

// const Users = () => {
//   const [users, setUsers] = useState([]);
//   const getUser = async () => {
//     try {
//       const res = await axios.get("/api/v1/admin/getAllDoctors", {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });
//       if (res.data.success) {
//         setUsers(res.data.data);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getUser();
//   }, []);

//   const columns = [
//     // {
//     //   title: "Name",
//     //   dataIndex: "name",
//     //   render: (text, record) => (
//     //     <span>
//     //       {record.firstName} {record.lastName}
//     //     </span>
//     //   ),
//     // },
//     // {
//     //   title: "Status",
//     //   dataIndex: "status",
//     //   render(text, record) {
//     //     return {
//     //       props: {
//     //         style: {
//     //           background: text === "pending" ? "red" : "green",
//     //         },
//     //       },
//     //       children: <div>{text}</div>,
//     //     };
//     //   },
//     // },
//     // {
//     //   title: "phone",
//     //   dataIndex: "phone",
//     // },
//     // {
//     //   title: "Age",
//     //   dataIndex: "age",
//     // },
//     // {
//     //   title: "sex",
//     //   dataIndex: "sex",
//     // },
//     // {
//     //   title: "from",
//     //   dataIndex: "from",
//     // },
//     // {
//     //   title: "To",
//     //   dataIndex: "to",
//     // },
//     // {
//     //   title: "Season Ticket No",
//     //   dataIndex: "seasonticketNo",
//     // },
//     // {
//     //   title: "Reason",
//     //   dataIndex: "reason",
//     // },
//     // {
//     //   title: "Data",
//     //   dataIndex: "timings",
//     //   render: (record) => {
//     //     return (
//     //       <div>
//     //         <p>
//     //           {moment(record[0]).format("DD-MM-YYYY")} to{" "}
//     //           {moment(record[1]).format("DD-MM-YYYY")}
//     //         </p>
//     //       </div>
//     //     );
//     //   },
//     // },
//   ];

//   return (
//     <div>
//       <Layout>
//         <h1>get all user details and printing option's here</h1>
//         <Table columns={columns} dataSource={users} />
//       </Layout>
//     </div>
//   );
// };

// export default Users;
