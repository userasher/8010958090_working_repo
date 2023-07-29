// import React, { useEffect, useState } from "react";
// import Layout from "../components/Layout";
// import axios from "axios";
// import "./ImageUploader.css"; // Import your CSS file for styling

// const ImageUploader = () => {
//   const [images, setImages] = useState([]);
//   const [file, setFile] = useState();

//   const handleUpload = () => {
//     const formData = new FormData();
//     formData.append("file", file);
//     axios
//       .post("/api/v1/upload", formData)
//       .then((res) => {
//         const newImage = res.data.image;
//         setImages((prevImages) => [...prevImages, newImage]);
//       })
//       .catch((err) => console.log(err));
//   };

//   useEffect(() => {
//     axios
//       .get("/api/v1/getImage")
//       .then((res) => {
//         const initialImages = res.data.map((item) => item.image);
//         setImages(initialImages);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <Layout>
//       <div className="image-uploader">
//         <h1>Upload and Manage Images</h1>
//         <input
//           type="file"
//           onChange={(e) => {
//             setFile(e.target.files[0]);
//           }}
//         />
//         <button onClick={handleUpload}>Upload Image</button>
//         <div className="image-container">
//           {images.length > 0 ? (
//             images.map((image, index) => (
//               <div key={index} className="image-card">
//                 <img
//                   src={`http://localhost:8080/images/${image}`}
//                   alt={`Uploaded Document ${index + 1}`}
//                   className="uploaded-image"
//                 />
//               </div>
//             ))
//           ) : (
//             <p>No images uploaded yet.</p>
//           )}
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default ImageUploader;
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";

const ImageUploader = () => {
  const [images, setImages] = useState([]);
  const [file, setFile] = useState();

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("file", file);
    axios
      .post("/api/v1/upload", formData)
      .then((res) => {
        const newImage = res.data.image;
        setImages((prevImages) => [...prevImages, newImage]);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("/api/v1/getImage")
      .then((res) => {
        const initialImages = res.data.map((item) => item.image);
        setImages(initialImages);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Layout>
      <h1>yaha kuch nai honga main register me try karo</h1>
      <input
        type="file"
        onChange={(e) => {
          setFile(e.target.files[0]);
        }}
      />
      <button onClick={handleUpload}>Upload document</button>
      <div className="document-container">
        {images.length > 0 ? (
          images.map((image, index) => (
            <div key={index} className="document-wrapper">
              <img
                src={`http://localhost:8080/images/${image}`}
                alt={`Uploaded Document ${index + 1}`}
                className="uploaded-document"
              />
            </div>
          ))
        ) : (
          <p>No documents uploaded yet.</p>
        )}
      </div>
    </Layout>
  );
};

export default ImageUploader;
