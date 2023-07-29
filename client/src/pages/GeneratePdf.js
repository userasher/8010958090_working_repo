import React, { useEffect, useRef, useState } from "react";
import Layout from "../components/Layout";
import { useReactToPrint } from "react-to-print";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Col, Table, Tag } from "antd";
import moment from "moment";

const GeneratePdf = () => {
  const [users, setUsers] = useState([]);
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "emp-data",
    onAfterPrint: () => alert("print success"),
  });
  const getUser = async () => {
    try {
      const res = await axios.get("/api/v1/admin/getALLpdf", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (res.data.success) {
        setUsers(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const columns = [
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
    },
    {
      title: "sex",
      dataIndex: "sex",
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
    {
      title: "Reason",
      dataIndex: "reason",
    },
    {
      title: "Data",
      dataIndex: "timings",
      render: (record) => {
        return (
          <div>
            <p>
              {moment(record[0]).format("DD-MM-YYYY")} to{" "}
              {moment(record[1]).format("DD-MM-YYYY")}
            </p>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <Layout>
        Printing Press
        <div
          ref={componentRef}
          style={{ width: "100%", height: window.innerHeight }}
        >
          <div className="text-center my-3 border py-2 ">
            <h1>Applicants data</h1>
          </div>
          <Table columns={columns} dataSource={users} />
          <button onClick={handlePrint}>Print this out</button>
        </div>
      </Layout>
    </>
  );
};

export default GeneratePdf;
