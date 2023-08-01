import React, {
  useState,
  useEffect,
  useRef,
  // createContext,
  // useContext,
} from "react";
import Layout from "./../../components/Layout";
import { useReactToPrint } from "react-to-print";
import axios from "axios";
import { EyeOutlined } from "@ant-design/icons";
import {
  Button,
  Input,
  Form,
  Modal,
  Table,
  message,
  Space,
  InputNumber,
} from "antd";
import { useDispatch } from "react-redux";
import moment from "moment";

// import "../styles/InvoiceStyles.css";a
// import { useNavigate } from "react-router-dom";
// import RailwayForm from "./RailwayForm";
// import UserContext from "./useContext";
import "./InvoiceStyles.css";
import addRegisterationNo from "./addRegisterationNo";

const Doctors = () => {
  const componentRef = useRef();
  const [regno, setRegno] = useState(null);
  const [deleteno, setDeleteno] = useState(null);
  const [doctors, setDoctors] = useState([]);
  const [Users, setUsers] = useState([]);
  const [selectedBill, setSelectedBill] = useState(null);
  const [popupModal, setPopupModal] = useState(false);
  const [searchedText, setSearchedText] = useState("");
  // const [value, setValue] = (useState < string) | number | (null > "99");

  // const showModal = () => {
  //   setIsModalOpen(true);
  // };

  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };

  // const handleCancel = () => {
  //   setIsModalOpen(false);
  // };
  const getDoctors = async () => {
    try {
      const res = await axios.get("/api/v1/admin/getAllDoctors", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleAccountStatus = async (record, status) => {
    try {
      const res = await axios.post(
        "/api/v1/admin/changeAccountStatus",
        {
          doctorId: record._id,
          userId: record.userId,
          status: status,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.data.success) {
        message.success(res.data.message);
        window.location.reload();
      }
    } catch (error) {
      message.error("something went wrong");
    }
  };
  const addRegNo = async (record, no) => {
    console.log(no);
    try {
      const res = await axios.post(
        "/api/v1/admin/addNo",
        {
          doctorId: record._id,
          no: no,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.data.success) {
        message.success(res.data.message);
        window.location.reload();
      }
    } catch (error) {
      message.error("something went wrong");
    }
  };
  const handleAccountStatustoVerify = async (record, verificationstatus) => {
    try {
      const res = await axios.post(
        "/api/v1/admin/changeAccountStatustoVerify",
        {
          doctorId: record._id,
          userId: record.userId,
          verificationstatus: verificationstatus,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.data.success) {
        message.success(res.data.message);
        window.location.reload();
      }
    } catch (error) {
      message.error("Something Went Wrong");
    }
  };
  // const VerifyStatusofUser = async (record) => {
  //   try {
  //     const res = await axios.post(
  //       "/api/v1/admin/getVerificationStatus",
  //       {
  //         doctorId: record._id,
  //         userId: record.userId,
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("token")}`,
  //         },
  //       }
  //     );
  //     if (res.data.success) {
  //       message.success(res.data.message);
  //       window.location.reload();
  //     }
  //   } catch (error) {
  //     message.error("Something Went Wrong");
  //   }
  // };

  const VerifyStatusofUser = async (record) => {
    console.log(record._id, record.userId);

    try {
      const res = await axios.post(
        "/api/v1/admin/getVerificationStatus",
        {
          doctorId: record._id,
          userId: record.userId,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (res.data.success) {
        message.success(res.data.message);
        // window.location.reload();
      } else {
        // In case of an unsuccessful response (success=false), handle the error message accordingly.
        // You can display the error message from the API response or provide a custom error message.
        message.error(res.data.message || "Verification status fetch failed.");
      }
    } catch (error) {
      message.error("Something Went Wrong");
    }
  };

  const deleteSelectedBill = async (record) => {
    console.log(record._id);
    try {
      const res = await axios.post(
        "/api/v1/admin/deleteuser",
        {
          doctorId: record._id,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.data.success) {
        message.success(res.data.message);
        window.location.reload();
      }
    } catch (error) {
      message.error("something went wrong during deletion");
    }
  };
  useEffect(() => {
    getDoctors();
  }, []);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      width: 100,
      fixed: "left",
      filteredValue: [searchedText],
      onFilter: (value, record) => {
        return (
          String(record.firstName)
            .toLowerCase()
            .includes(value.toLowerCase()) ||
          String(record.lastName).toLowerCase().includes(value.toLowerCase()) ||
          String(record.railwayTicketNo)
            .toLowerCase()
            .includes(value.toLowerCase())
        );
      },

      render: (text, record) => (
        <span>
          {record.firstName} {record.lastName}
        </span>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      render(text, record) {
        return {
          props: {
            style: {
              background: text === "pending" ? "red" : "green",
            },
          },
          children: <div>{text}</div>,
        };
      },
    },
    {
      title: "phone",
      dataIndex: "phone",
    },
    {
      title: "Age",
      dataIndex: "age",
      render: (age) => {
        const ageNumber = parseInt(age, 10); // Parse the age value as an integer
        const isAgeGreaterThan25 = ageNumber > 25;

        const style = isAgeGreaterThan25 ? { color: "red" } : {}; // Apply red color style if age > 25

        return <div style={style}>{age}</div>;
      },
    },
    {
      title: "sex",
      dataIndex: "sex",
    },
    {
      title: "Address",
      dataIndex: "address",
      // width: 80,
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
      title: "Season Ticket No",
      dataIndex: "seasonticketNo",
    },
    // {
    //   title: "Date from and to ",
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
    {
      title: "Documents",
      dataIndex: "links",
      render: (text, record) => (
        <div className="d-flex">
          <a href={`${record.link}`}> verify links</a>
        </div>
      ),
    },
    // {
    //   title: "Verify Documents",
    //   dataIndex: "actions",
    //   render: (record) => (
    //     <Form>
    //       <button
    //         className="btn btn-success"
    //         style={{
    //           fontSize: "12px",
    //           padding: "6px 12px",
    //           borderRadius: "4px",
    //           backgroundColor: "green",
    //           color: "white",
    //           border: "none",
    //           cursor: "pointer",
    //         }}
    //         onClick={() => handleAccountStatustoVerify(record, "approved")}
    //       >
    //         Verify
    //       </button>
    //     </Form>
    //   ),
    //   // <Form>
    //   //   <input
    //   //     type="text"
    //   //     value={regno}
    //   //     onChange={(e) => {
    //   //       setRegno(e.target.value);
    //   //     }}
    //   //   ></input>
    //   //   <button onClick={() => addRegNo(record, regno)}>Submit</button>
    //   // </Form>
    // },
    {
      title: "Document Verification Status",
      dataIndex: "actions",
      // render: (record) => {},
    },

    // {
    //   title: "Status",
    //   dataIndex: "status",
    // },
    {
      title: "phone",
      dataIndex: "phone",
    },
    {
      title: "Date Ending",
      dataIndex: "timingsends",
      render: (timingsends) => {
        return <div>{moment(timingsends).format("DD-MM-YYYY")}</div>;
      },
    },

    {
      title: "Date Applied",
      dataIndex: "createdAt",
      render: (record) => {
        return (
          <div>
            <p>
              {moment().format("DD-MM-YYYY")}
              {/* {moment(record[1]).format("DD-MM-YYYY")} */}
            </p>
          </div>
        );
      },
    },
    {
      title: "reg",
      dataIndex: "actions",
      render: (id, record) => (
        <Form>
          <Input
            type="text"
            value={regno}
            onChange={(e) => {
              if (e.target.value.length <= 8) {
                setRegno(e.target.value);
              }
            }}
            style={{
              fontSize: "12px",
              padding: "6px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              width: "150px",
            }}
            maxLength={8}
          />

          <button
            className="btn btn-success"
            style={{
              fontSize: "12px",
              padding: "6px 12px",
              borderRadius: "4px",
              backgroundColor: "green",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => addRegNo(record, regno)}
          >
            Submit
          </button>
        </Form>
        // <>
        //   <Button type="primary" onClick={showModal}>
        //     Open Modal
        //   </Button>
        //   <Modal
        //     title="Basic Modal"
        //     open={isModalOpen}
        //     onOk={handleOk}
        //     onCancel={handleCancel}
        //   >
        //     <Form>
        //       <input
        //         type="text"
        //         value={regno}
        //         onChange={(e) => {
        //           setRegno(e.target.value);
        //         }}
        //       ></input>
        //       <button onClick={() => addRegNo(record, regno)}>Submit</button>
        //     </Form>
        //   </Modal>
        // </>
      ),
      // <Form>
      //   <input
      //     type="text"
      //     value={regno}
      //     onChange={(e) => {
      //       setRegno(e.target.value);
      //     }}
      //   ></input>
      //   <button onClick={() => addRegNo(record, regno)}>Submit</button>
      // </Form>
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) => (
        <div className="d-flex">
          <button
            className="btn btn-success"
            onClick={() => handleAccountStatustoVerify(record, "approved")}
          >
            Verify
          </button>
        </div>
      ),
    },
    {
      title: "Actions verify",
      dataIndex: "_id",
      render: (id, record) => (
        <div className="d-flex">
          <button
            className="btn btn-primary"
            onClick={() => VerifyStatusofUser(record)}
          >
            Verify Status
          </button>
        </div>
      ),
    },
    {
      title: "Voucher No",
      dataIndex: "railwayTicketNo",
    },

    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) => (
        <div className="d-flex">
          {record.status === "pending" ? (
            <button
              className="btn btn-primary"
              onClick={() => handleAccountStatus(record, "approved")}
            >
              Approve
            </button>
          ) : record.status === "approved" ? (
            <button className="btn btn-success">Approved</button>
          ) : (
            <button className="btn btn-secondary" disabled>
              Cannot Approve
            </button>
          )}
        </div>
      ),
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) => (
        <div className="d-flex">
          {record.status === "pending" ? (
            <button
              className="btn btn-danger"
              onClick={() => handleAccountStatus(record, "rejected")}
            >
              Reject
            </button>
          ) : record.status === "rejected" ? (
            <button className="btn btn-success">Rejected</button>
          ) : (
            <button className="btn btn-secondary" disabled>
              Cannot Reject
            </button>
          )}
        </div>
      ),
    },
    // {
    //   title: "Delete ",
    //   dataIndex: "_id",
    //   render: (id, record) => (
    //     <div>
    //       <Button
    //         style={{ color: "red", cursor: "pointer" }}
    //         onClick={() => {
    //           deleteSelectedBill(record);
    //         }}
    //       >
    //         Delete
    //       </Button>
    //     </div>
    //   ),
    // },
    {
      title: "Delete",
      dataIndex: "_id",
      render: (id, record) => {
        const createdAtDate = moment(record.createdAt); // Convert the createdAt date to a moment object
        const currentDate = moment(); // Get the current date as a moment object
        const isOlderThan4Years = createdAtDate.isBefore(
          currentDate.subtract(4, "years")
        );

        return (
          <div>
            {isOlderThan4Years && (
              <Button
                style={{ color: "red", cursor: "pointer" }}
                onClick={() => {
                  deleteSelectedBill(record);
                }}
              >
                Delete
              </Button>
            )}
          </div>
        );
      },
    },

    {
      title: "Print's",
      dataIndex: "_id",
      width: 10,
      fixed: "right",
      render: (id, record) => (
        <div>
          <EyeOutlined
            style={{ cursor: "pointer" }}
            onClick={() => {
              setSelectedBill(record);
              setPopupModal(true);
            }}
          />
        </div>
      ),
    },
  ];
  console.log(selectedBill);
  return (
    <Layout>
      <div className="d-flex justify-content-between"></div>
      <h1 className="text-center m-3">All Applicants</h1>
      <Input.Search
        placeholder="Search Name or Voucher No here..."
        style={{
          marginBottom: 8,
          cursor: "pointer",
          borderRadius: "4px",
          width: "40%",
          // backgroundColor: "black",
        }}
        onSearch={(value) => {
          setSearchedText(value);
        }}
        onChange={(e) => {
          setSearchedText(e.target.value);
        }}
      ></Input.Search>
      <Table columns={columns} dataSource={doctors} bordered />
      {/* size="middle" */}
      {popupModal && (
        <Modal
          width={1100}
          height={400}
          pagination={false}
          visible={popupModal}
          onCancel={() => {
            setPopupModal(false);
          }}
          footer={false}
        >
          {/* ============ invoice modal start ==============  */}
          <div ref={componentRef}>
            <div
              style={{
                "margin-left": "400px",
                "margin-top": "0px",
                // border: "5px solid black",
              }}
            >
              <div style={{ "margin-top": "185px", "margin-left": "133px" }}>
                <p>
                  {selectedBill.firstName} {selectedBill.lastName}
                </p>
              </div>
              <div style={{ "margin-top": "-10px" }}>
                <span style={{ "margin-left": "60px" }}>
                  {selectedBill.age}
                </span>

                <span
                  style={{ "margin-left": "438.5px", "margin-top": "10px" }}
                >
                  {selectedBill.birth}
                </span>
              </div>

              <div style={{ "margin-top": "65px" }}>
                <span style={{ "margin-left": "40px" }}>
                  {selectedBill.class}
                </span>
                <span style={{ "margin-left": "65px" }}>
                  {selectedBill.period}
                </span>
                <span style={{ "margin-left": "76px", "margin-top": "-5px" }}>
                  {selectedBill.from}
                </span>
                <span style={{ "margin-left": "76px" }}>{selectedBill.to}</span>
              </div>

              <div style={{ "margin-top": "40px" }}>
                <span style={{ "margin-left": "301.6px" }}>
                  {selectedBill.previousno}
                </span>
                <span
                  style={{ "margin-left": "269.2px", "margin-top": "15px" }}
                >
                  {selectedBill.previousticket}
                </span>
              </div>

              <div style={{ "margin-top": "1px" }}>
                <span style={{ "margin-left": "55.8px" }}>
                  {selectedBill.previousfrom}
                </span>{" "}
                <span style={{ "margin-left": "94.5px" }}>
                  {selectedBill.previousto}
                </span>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end mt-3">
            <Button type="primary" onClick={handlePrint}>
              Print
            </Button>
          </div>
          {/* ============ invoice modal ends ==============  */}
        </Modal>
      )}
    </Layout>
  );
};

export default Doctors;
