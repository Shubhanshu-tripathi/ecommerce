
const { v2: cloudinary } = require("cloudinary");

cloudinary.config({
  
  cloud_name: process.env.CLOUD_NAME,
  api_key:process.env.CLOUD_API_KEY,
  api_secret:process.env.CLOUD_API_SECRET   

})
const cloudinaryUplaod = async (path) => {
    if(!path) return null
    const response = await cloudinary.uploader.upload(path, {
      resource_type: 'auto',
    });        
    if(response?.url){   
      fs.unlinkSync(path)
    }
    return response;    
};
  
  
  module.exports = { cloudinaryUplaod };   