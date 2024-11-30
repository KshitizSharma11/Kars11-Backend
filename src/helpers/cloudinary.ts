import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({ 
    cloud_name: 'daiirqqqb', 
    api_key: '934236375949742', 
    api_secret: 'VW2PO', // Replace with your actual API secret
});

/**
 * Function to upload images to Cloudinary
 * @param {Array} files - Array of file objects (each containing a buffer and optionally a filename)
 * @returns {Promise<Array>} - Promise resolving to an array of Cloudinary URLs
 */
const uploadImagesToCloudinary = async (files:any) => {
    try {
        const uploadResults = await Promise.all(
            files.map(async (file:any) => {
                return new Promise((resolve, reject) => {
                    // Use Cloudinary's uploader.upload_stream for buffers
                    const uploadStream = cloudinary.uploader.upload_stream(
                        { resource_type: 'auto' }, // Automatically detect file type
                        (error, result:any) => {
                            if (error) return reject(error);
                            resolve(result.secure_url); // Return the secure URL
                        }
                    );

                    // Pipe the file buffer to Cloudinary
                    uploadStream.end(file.buffer);
                });
            })
        );

        return uploadResults; // Array of URLs
    } catch (error) {
        console.error('Error uploading images to Cloudinary:', error);
        throw error; // Re-throw error for the calling function to handle
    }
};

export default uploadImagesToCloudinary;
