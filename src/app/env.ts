const endpoint =
  process.env.NEXT_PUBLIC_APPWRITE_HOST_URL?.trim() ||
  process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT?.trim() ||
  process.env.NEXT_PUBLIC_APPWRITE_URL?.trim() ||
  "https://cloud.appwrite.io/v1";

const projectId =
  process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID?.trim() ||
  process.env.NEXT_PUBLIC_APPWRITE_PROJECT?.trim() ||
  "";

const apikey = process.env.APPWRITE_API_KEY?.trim() || "";
const isConfigured = Boolean(endpoint && projectId);

const env = {
  appwrite: {
    endpoint,
    projectId,
    apikey,
    isConfigured,
  },
};

export default env