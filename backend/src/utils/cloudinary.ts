import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const uploadToCloudinary = async (imageName: string, username: string) => {
  cloudinary.uploader.upload(
    `./public/images/${imageName}`,
    {
      public_id: imageName,
      use_asset_folder_as_public_id_prefix: true,
      asset_folder: username,
    },
    function (error, result) {
      if (error) {
        throw error;
      }
      console.log(result);
    }
  );
};

// uploadToCloudinary("img.png", "dey");

// First we take the file in our backend using multer, from the user.
// File is saved in the public/images folder.
// Then we upload the image to Cloudinary using the uploadToCloudinary function.
// The image is uploaded to a folder named after the user's username and the image is named after the image name.
// Then we return the response to the user that the file has been uploaded. Save the image URL in the database.
