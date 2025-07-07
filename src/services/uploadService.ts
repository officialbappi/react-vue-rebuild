
import axios from "axios";

const BASE_URL = "https://upload.autogearinfo.com/api";

/**
 * Uploads file to Cloudflare R2 using a signed URL.
 * @param {File} file - File object from <input type="file" />
 * @param {function} onProgress - Callback for progress updates (0-100)
 * @returns {Promise<string>} - Unique file name stored in R2
 */
export const uploadFileToR2 = async (file: File, onProgress?: (percent: number) => void): Promise<string> => {
  try {
    // 1. Get signed upload URL from backend
    const { data: { uploadUrl, fileName } } = await axios.post(`${BASE_URL}/uploadFile`, {
      fileName: file.name,
      fileType: file.type,
    });

    // 2. Upload the file using the signed URL with progress tracking
    await axios.put(uploadUrl, file, {
      headers: {
        "Content-Type": file.type,
      },
      onUploadProgress: (progressEvent) => {
        if (progressEvent.total) {
          const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          if (onProgress) onProgress(percent);
        }
      },
    });

    console.log(fileName);
    return fileName; // return the stored file name
  } catch (error) {
    console.error("Upload error:", error);
    throw error;
  }
};

/**
 * Gets a file URL from R2.
 */
export const getR2FileUrl = (fileKey: string | null): string | null => {
  if (!fileKey) {
    return null;
  }
  const url = 'https://cdn.autogearinfo.com';
  return `${url}/${fileKey}`;
};

/**
 * Deletes a file from R2.
 */
export const deleteR2File = async (fileKey: string): Promise<void> => {
  try {
    await axios.post(`${BASE_URL}/deleteFile/${fileKey}`);
  } catch (error) {
    console.error("Delete file error:", error);
    throw error;
  }
};
