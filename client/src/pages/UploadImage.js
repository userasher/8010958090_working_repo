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

  const handleDelete = (imageId) => {
    axios
      .delete(`/api/v1/deleteImage/${imageId}`)
      .then((res) => {
        setImages((prevImages) =>
          prevImages.filter((img) => img._id !== imageId)
        );
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("/api/v1/getImage")
      .then((res) => {
        const initialImages = res.data;
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
          images.map((image) => (
            <div key={image._id} className="document-wrapper">
              <img
                src={`http://localhost:8080/images/${image.filename}`}
                alt={`Uploaded Document ${image._id}`}
                className="uploaded-document"
              />
              <button onClick={() => handleDelete(image._id)}>Delete</button>
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
