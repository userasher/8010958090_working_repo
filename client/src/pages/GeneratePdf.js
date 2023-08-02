import React, { useEffect, useRef, useState } from "react";
import Layout from "../components/Layout";
import { useReactToPrint } from "react-to-print";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Button, Col, Form, Input, Table, Tag } from "antd";
import moment from "moment";
import "./admin/InvoiceStyles.css";
// import { black } from "colors";
import { CSVLink } from "react-csv";
import FormItem from "antd/es/form/FormItem";

const GeneratePdf = () => {
  const [users, setUsers] = useState([]);
  const componentRef = useRef();
  const [searchFrom, setSearchFrom] = useState("");
  const [searchTo, setSearchTo] = useState("");
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "emp-data",
    onAfterPrint: () => alert("print success"),
  });
  // const getUser = async () => {
  //   try {
  //     const res = await axios.get("/api/v1/admin/getALLpdf", {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem("token")}`,
  //       },
  //     });
  //     // if (res.data.success) {
  //     //   setUsers(res.data.data);
  //     // }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const getUserByNo = async (minValue, maxValue) => {
    try {
      const res = await axios.post(
        "api/v1/admin/getALLpdf",
        {
          minValue: Number(minValue),
          maxValue: Number(maxValue),
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.data.success) {
        setUsers(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
    setSearchFrom();
    setSearchTo();
  };
  // const getUserByVoucherNo = (searchFrom, searchTo) => {
  //   try {
  //   } catch (error) {

  //   }
  // };
  // useEffect(() => {
  //   getUserByNo();
  // }, []);

  const columns = [
    {
      title: "Ticket No",
      dataIndex: "railwayTicketNo",
      style: { border: "1px solid black", padding: "8px" },
    },
    {
      title: "issued Date",
    },

    {
      title: "Name",
      dataIndex: "name",
      render: (text, record) => (
        <span>
          {record.firstName} {record.lastName}
        </span>
      ),
    },
    {
      title: "sex",
      dataIndex: "sex",
    },
    {
      title: "Birth Date",
      dataIndex: "birth",
    },
    {
      title: "Quaterly/Monthly",
      dataIndex: "period",
    },

    {
      title: "from",
      dataIndex: "from",
    },
    {
      title: "To",
      dataIndex: "to",
    },
    {
      title: "Caste",
      dataIndex: "caste",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    // {
    //   title: "Status",
    //   dataIndex: "status",
    //   render(text, record) {
    //     return {
    //       props: {
    //         style: {
    //           background: text === "pending" ? "red" : "green",
    //         },
    //       },
    //       children: <div>{text}</div>,
    //     };
    //   },
    // },

    // {
    //   title: "Data",
    //   dataIndex: "timings",
    //   render: (record) => {
    //     return (
    //       <div>
    //         <p>
    //           {moment(record[0]).format("DD-MM-YYYY")} to{" "}
    //           {moment(record[1]).format("DD-MM-YYYY")}
    //         </p>
    //       </div>
    //     );
    //   },
    // },
  ];

  // return (
  //   <>
  //     <Layout>
  //       <h1 className="text-center">Applicants data</h1>
  //       <div
  //         ref={componentRef}
  //         style={{ width: "100%", height: window.innerHeight }}
  //       >
  //         <div className="text-center my-3 border py-2 "></div>
  //         <Table columns={columns} dataSource={users} />
  //         <button onClick={handlePrint}>Print this out</button>
  //       </div>
  //     </Layout>
  //   </>
  // );
  return (
    <>
      <Layout>
        <button className="btn btn-success">
          <CSVLink
            data={users}
            style={{ color: "white" }}
            onClick={() => {
              console.log("clicked");
            }}
          >
            Excel pdf
          </CSVLink>
        </button>

        <h1 className="text-center">Applicants data</h1>
        <div
          ref={componentRef}
          style={{ width: "100%", height: window.innerHeight }}
        >
          <Form onFinish={() => getUserByNo(searchFrom, searchTo)}>
            <Input
              placeholder="Search from "
              value={searchFrom}
              style={{
                marginBottom: 8,
                marginRight: "10px",
                cursor: "pointer",
                borderRadius: "4px",
                width: "40%",
                // backgroundColor: "black",
              }}
              onChange={(e) => {
                setSearchFrom(e.target.value);
              }}
            ></Input>
            <Input
              placeholder="Search to "
              value={searchTo}
              style={{
                marginBottom: 8,
                cursor: "pointer",
                borderRadius: "4px",
                width: "40%",
                // backgroundColor: "black",
              }}
              onChange={(e) => {
                setSearchTo(e.target.value);
              }}
            ></Input>
            <button
              className="btn btn-primary"
              // onClick={() => getUserByNo(searchFrom, searchTo)}
            >
              Search by no
            </button>
          </Form>
          {console.log(searchFrom)}
          {console.log(searchTo)}

          <div className="text-center my-3 border py-2 "></div>
          <Table
            columns={columns}
            dataSource={users}
            bordered
            // solid
            // className="custom-table"
            // style={{ border: "1px solid black" }} // Add inline border style to the Table
          />
          <button onClick={handlePrint}>Print this out</button>
        </div>
      </Layout>
    </>
  );
};

export default GeneratePdf;
// import React, { useEffect, useRef, useState } from "react";
// import Layout from "../components/Layout";
// import { useReactToPrint } from "react-to-print";
// import "bootstrap/dist/css/bootstrap.min.css";
// import axios from "axios";
// import { Col, Table, Tag } from "antd";
// import moment from "moment";
// import "./admin/InvoiceStyles.css";
// // import { black } from "colors";

// const GeneratePdf = () => {
//   const [users, setUsers] = useState([]);
//   const componentRef = useRef();
//   const handlePrint = useReactToPrint({
//     content: () => componentRef.current,
//     documentTitle: "emp-data",
//     onAfterPrint: () => alert("print success"),
//   });
//   const getUser = async () => {
//     try {
//       const res = await axios.post("/api/v1/admin/getALLpdf", {
//         minValue: 1,
//         maxValue: 999,
//       });
//       console.log(res.data);
//       if (res.data.success) {
//         setUsers(res.data.data);
//         console.log(res.data.data);
//         console.log("hafyu shadah hgvghc");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getUser();
//   }, []);

//   const columns = [
//     {
//       title: "Ticket No",
//       dataIndex: "railwayTicketNo",
//       style: { border: "1px solid black", padding: "8px" },
//     },
//     {
//       title: "issued Date",
//     },

//     {
//       title: "Name",
//       dataIndex: "name",
//       render: (text, record) => (
//         <span>
//           {record.firstName} {record.lastName}
//         </span>
//       ),
//     },
//     {
//       title: "sex",
//       dataIndex: "sex",
//     },
//     {
//       title: "Birth Date",
//       dataIndex: "birth",
//     },
//     {
//       title: "Quaterly/Monthly",
//       dataIndex: "period",
//     },

//     {
//       title: "from",
//       dataIndex: "from",
//     },
//     {
//       title: "To",
//       dataIndex: "to",
//     },
//     {
//       title: "Caste",
//       dataIndex: "caste",
//     },
//     {
//       title: "Address",
//       dataIndex: "address",
//     },
//   ];

//   return (
//     <>
//       <Layout>
//         <h1 className="text-center">Applicants data</h1>
//         <div
//           ref={componentRef}
//           style={{ width: "100%", height: window.innerHeight }}
//         >
//           <div className="text-center my-3 border py-2 "></div>
//           <Table
//             columns={columns}
//             dataSource={users}
//             bordered
//             // solid
//             // className="custom-table"
//             // style={{ border: "1px solid black" }} // Add inline border style to the Table
//           />
//           <button onClick={handlePrint}>Print this out</button>
//         </div>
//       </Layout>
//     </>
//   );
// };

// export default GeneratePdf;
