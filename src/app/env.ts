const endpoint = process.env.NEXT_PUBLIC_APPWRITE_HOST_URL?.trim() || "https://cloud.appwrite.io/v1";
const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID?.trim() || "";
const apikey = process.env.APPWRITE_API_KEY?.trim() || "";

const env = {
  appwrite: {
    endpoint,
    projectId,
    apikey,
  },
};

export default env