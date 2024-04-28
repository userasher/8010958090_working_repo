<<<<<<< HEAD
// import Layout from "./../components/Layout";
// const HomePage = () => {
//   return (
//     <Layout>
//       <h2 className="div top mt-3 mb-6">Welcome to Vjti Railway Concession</h2>
//       <hr></hr>
//       <div className="div container">
//         <div className="mt-3 ml-5">
//           <h2 className="text-center align-middle underline">
//             Some Instruction's
//           </h2>
//           <li>
//             Student's with Following Cateogary can only Apply for VJTI Railway
//             Concession
//             <li>Open</li>
//             <li>Sc</li>
//             <li>St</li>
//           </li>
//           <li>
//             Documents required: ( Create a Google Drive and add the following
//             documents to that drive. Make sure the drive is public until you
//             receive your Railway Pass Concession ) College ID / Allotment Letter
//             Old Railway Concession Pass / Aadhar Card Current Address Proof:
//             Aadhar Card (If you are staying at the same address mentioned in
//             Aadhar Card) OR Light Bill If students are staying in PG /
//             Relative's Home: Declaration Letter by Owner / Relative (That
//             concerned student is staying for educational purpose) Aadhar Card
//             (Owner / Relative) Light Bill For SC/ST candidates: Diploma Students
//             - CASTE CERTIFICATE B.Tech / M.Tech - CASTE VALIDITY CERTIFICATE You
//             Can Apply now forRailway Concession here. Once you get the ACCEPTED
//             notification you can collect your Railway Pass from VJTI Railway
//             Department If you get a REJECTED notification please enquire at VJTI
//             Railway Concession Department . While Collecting Pass from VJTI
//             Railway Pass Department Keep college ID card and Old railway Pass
//             with you .
//           </li>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default HomePage;

=======
import { Link } from "react-router-dom";
>>>>>>> e7d5399 (layout added)
import Layout from "./../components/Layout";

const HomePage = () => {
  return (
<<<<<<< HEAD
    <Layout>
      <h2 className="div top mt-3 mb-6">Welcome to Vjti Railway Concession</h2>
      <hr />
      <div className="div container">
        <div className="mt-3 ml-5">
          <h2 className="text-center align-middle underline">
            Some Instructions
          </h2>
          <ul>
            <li>
              Students with the following categories can only apply for VJTI
              Railway Concession:
              <ul>
                <li>Open</li>
                <li>Sc</li>
                <li>St</li>
              </ul>
            </li>
            <li>
              Documents required:
              <ul>
                <li>
                  Create a Google Drive and add the following documents to that
                  drive. Make sure the drive is public until you receive your
                  Railway Pass Concession:
                </li>
                <li>College ID / Allotment Letter</li>
                <li>Old Railway Concession Pass / Aadhar Card</li>
                <li>
                  Current Address Proof:
                  <ul>
                    <li>
                      Aadhar Card (If you are staying at the same address
                      mentioned in Aadhar Card) OR Light Bill
                    </li>
                  </ul>
                </li>
                <li>
                  If students are staying in PG / Relative's Home: Declaration
                  Letter by Owner / Relative (That concerned student is staying
                  for educational purpose), Aadhar Card (Owner / Relative),
                  Light Bill
                </li>
                <li>
                  For SC/ST candidates:
                  <ul>
                    <li>Diploma Students - CASTE CERTIFICATE</li>
                    <li>B.Tech / M.Tech - CASTE VALIDITY CERTIFICATE</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              You can apply now for Railway Concession{" "}
              <a href="link-to-application-page">here</a>. Once you get the
              ACCEPTED notification, you can collect your Railway Pass from VJTI
              Railway Department. If you get a REJECTED notification, please
              enquire at VJTI Railway Concession Department. While collecting
              Pass from VJTI Railway Pass Department, keep college ID card and
              Old railway Pass with you.
            </li>
          </ul>
=======
    // <Layout>
    <div>
      <h2 className="div top align-middle text-center cursor-pointer mt-3 mb-2 ">
        Welcome to Vjti Railway Concession
      </h2>
      <hr></hr>
      <div className="div container ">
        <div className="mt-3 ml-4 ">
          <h2 className="text-center align-middle underline">
            Some Important Instruction's{" "}
          </h2>
          <h4 class="text-center w-[70%] mx-auto text-white mt-3 bg-red-500 hover:bg-red-600 cursor-pointer border-1 border-red-600 rounded-lg py-2 px-4 text-sm font-bold">
            If your age is greater than or equal to 25, then you are not
            eligible for a Railway Pass Concession.
          </h4>

          <ul class="list-disc pl-6 text-black">
            <li class="mb-2">
              <h3 class="text-xl font-bold">Documents required:</h3>
              <h3 class="text-sm text-gray-800 mt-2">
                ( Create a Google Drive and add the following documents to that
                drive. Make sure the drive is public until you receive your
                Railway Pass Concession )
              </h3>
            </li>

            <li class="ml-4 mb-1">College ID / Allotment Letter</li>
            <li class="ml-4 mb-1">Old Railway Concession Pass / Aadhar Card</li>
            <li class="ml-4 mb-1">
              Current Address Proof:
              <ul class="list-disc ml-4">
                <li class="mb-1">
                  Aadhar Card (If you are staying at the same address mentioned
                  in Aadhar Card)
                </li>
                <div>OR</div>
                <li class="mb-1"> Light Bill</li>
              </ul>
            </li>
            <li class="ml-4 mb-1">
              If students are staying in PG / Relative's Home:
            </li>
            <ul class="list-disc ml-4">
              <li class="mb-1">
                Declaration Letter by Owner / Relative (That concerned student
                is staying for educational purpose)
              </li>
              <li class="mb-1"> Aadhar Card (Owner / Relative)</li>
              <li class="mb-1"> Light Bill</li>
            </ul>
            <li class="ml-4 mb-1"> For SC/ST candidates:</li>
            <ul class="list-disc ml-4">
              <li class="mb-1">Diploma Students - CASTE CERTIFICATE</li>
              <li class="mb-1">B.Tech / M.Tech - CASTE VALIDITY CERTIFICATE</li>
            </ul>
            {/* <li class="ml-4 mb-1 flex flex-row ">
              You Can Apply now for{" "}
              <Link
                to="/apply-form"
                className="ml-1 text-blue-700 underline cursor-pointer"
              >
                Railway Concession here
              </Link>
            </li> */}
            <li class="ml-4 mb-1 list-disc">
              You Can Apply now for
              <Link
                to="/apply-form"
                className="ml-1 mr-1 text-blue-700 underline cursor-pointer"
              >
                Railway Concession here
              </Link>
              .
            </li>
          </ul>
          <li class="ml-4 mb-1 text-gray-600">
            Once you get the ACCEPTED notification you can collect your Railway
            Pass from VJTI Railway Department
          </li>
          <li class="ml-4 mb-1 text-gray-600">
            If you get a REJECTED notification please enquire at VJTI Railway
            Concession Department .
          </li>
          <li class="ml-4 pb-3 underline font-semibold hover:font-bold cursor-pointer ">
            While Collecting Pass from VJTI Railway Pass Department Keep college
            ID card and Old railway Pass with you .
          </li>
>>>>>>> e7d5399 (layout added)
        </div>
      </div>
    </div>
  );
};

export default HomePage;
