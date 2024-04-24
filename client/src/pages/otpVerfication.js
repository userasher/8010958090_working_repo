import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./EmailVerification.css";
import { useNavigate } from "react-router-dom";

const EmailVerification = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");

  const setOtpValue = (e) => {
    setOtp(e.target.value);
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    console.log(otp);

    if (otp === "") {
      toast.error("OTP is required!", {
        position: "top-center",
      });
    } else if (otp == localStorage.getItem("OTP")) {
      const res = await fetch("/api/v1/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: localStorage.getItem("registereduser"),
      });

      const data = await res.json();
      console.log(data);

      if (data.success == true) {
        setMessage("EMAIL verified successfully!");
        localStorage.removeItem("OTP");
        localStorage.removeItem("registereduser");
        navigate("/login");
      } else {
        toast.error("Invalid OTP", {
          position: "top-center",
        });
      }
    } else {
      setMessage("Invalid OTP");
    }
  };

  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Enter OTP to Verify Email</h1>
          </div>

          {message ? (
            <p style={{ color: "green", fontWeight: "bold" }}>{message}</p>
          ) : (
            ""
          )}
          <form>
            <div className="form_input">
              <label htmlFor="otp">OTP</label>
              <input
                type="text"
                value={otp}
                onChange={setOtpValue}
                name="otp"
                id="otp"
                placeholder="Enter OTP"
              />
            </div>

            <button className="btn" onClick={verifyOtp}>
              Verify
            </button>
          </form>
          <ToastContainer />
        </div>
      </section>
    </>
  );
};

export default EmailVerification;
