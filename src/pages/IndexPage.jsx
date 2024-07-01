import { useState } from "react";
import { Navbar, Footer } from "../components";

const IndexPage = () => {
  const [imagePreview, setImagePreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    // Check if file is selected
    if (file) {
      const reader = new FileReader();

      // Read the file and set image preview
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      <Navbar />
      <div>
        {imagePreview ? (
          <img
            src={imagePreview}
            alt="Uploaded Preview"
            style={{ maxWidth: "100%", maxHeight: "200px" }}
          />
        ) : (
          <input
            type="file"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        )}
        {!imagePreview && (
          <label
            htmlFor="fileInput"
            style={{
              cursor: "pointer",
              border: "1px solid #ccc",
              padding: "6px 12px",
              display: "inline-block",
            }}
          >
            Upload Image
          </label>
        )}
      </div>
      <Footer />
    </>
  );
};

export default IndexPage;
