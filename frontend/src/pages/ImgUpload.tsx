import React, { ChangeEvent, useState } from "react";
import axios from "axios";

const ImgUpload = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState("idle");
  const [formData, setFormData] = useState({
    width: "",
    height: "",
    minKb: "",
    maxKb: ""
  });
  const [imageUrl, setImageUrl] = useState("");
  const [imageInfo, setImageInfo] = useState({
    compressedSize: "",
    currentResolution: ""
  });

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const imageFile = event.target.files?.[0];
    if (!imageFile) return;

    // Basic file size validation (adjust limit as needed)
    if (imageFile.size > 10 * 1024 * 1024) {
      // 10 MB
      setUploadStatus("error");
      alert("Image size cannot exceed 10 MB.");
      return;
    }

    setSelectedImage(imageFile);
  };

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };
  const bytesToKB = (bytes: number) => {
    return (bytes / 1024).toFixed(2); // Limit to 2 decimal places
  };

  const handleUpload = async () => {
    if (!selectedImage) return;

    setUploadStatus("uploading");

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("image", selectedImage);
      formDataToSend.append("width", formData.width);
      formDataToSend.append("height", formData.height);
      formDataToSend.append("minKb", formData.minKb);
      formDataToSend.append("maxKb", formData.maxKb);

      const response = await axios.post(
        "http://localhost:3000/api/upload/image",
        formDataToSend,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );

      setUploadStatus("success");
      console.log("Image uploaded successfully:", response.data.cloudinaryResponse.url);
      setImageUrl(response.data.cloudinaryResponse.url);
      setImageInfo({
        compressedSize: bytesToKB(response.data.cloudinaryResponse.bytes),
        currentResolution: `${response.data.cloudinaryResponse.width}x${response.data.cloudinaryResponse.height}`
      });
    } catch (error) {
      setUploadStatus("error");
      console.error("Upload failed:", error);
    }
  };
  const handleDownload = () => {
    // Create a temporary link element
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "downloaded_image.jpg"; // You can adjust the filename here
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <input
        type="number"
        name="width"
        placeholder="Width"
        value={formData.width}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="height"
        placeholder="Height"
        value={formData.height}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="minKb"
        placeholder="Minimum KB"
        value={formData.minKb}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="maxKb"
        placeholder="Maximum KB"
        value={formData.maxKb}
        onChange={handleInputChange}
      />
      <button onClick={handleUpload} disabled={uploadStatus === "uploading"}>
        {uploadStatus === "idle"
          ? "Upload Image"
          : uploadStatus === "uploading"
          ? "Uploading..."
          : "success"}
      </button>
      {uploadStatus === "success" &&   <div>
          <p>Image uploaded successfully!</p>
          <p>Compressed Size: {imageInfo.compressedSize} Kb</p>
          <p>Current Resolution: {imageInfo.currentResolution}</p>
          <button onClick={handleDownload}>Download Image</button>
        </div>}
    </div>
  );
};

export default ImgUpload;

