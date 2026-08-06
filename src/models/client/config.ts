import env from "@/app/env";

import { Client, Account, Avatars, Databases, Storage } from "appwrite";

const client = new Client()
    .setEndpoint(env.appwrite.endpoint) // Your API Endpoint
    .setProject(env.appwrite.projectId); // Your project ID

const databases = new Databases(client)
const account = new Account(client);
const avatars = new Avatars(client);
const storage = new Storage(client);
const isAppwriteConfigured = env.appwrite.isConfigured;

if (!isAppwriteConfigured) {
    console.warn(
        "Appwrite is not configured. Set NEXT_PUBLIC_APPWRITE_HOST_URL and NEXT_PUBLIC_APPWRITE_PROJECT_ID in Vercel."
    );
}

export { client, databases, account, avatars, storage, isAppwriteConfigured }
