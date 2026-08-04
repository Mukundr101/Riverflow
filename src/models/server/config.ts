import env from "@/app/env";

import { Avatars, Client, Databases, Storage, Users } from "node-appwrite";

const client = new Client();

if (env.appwrite.endpoint) {
    client.setEndpoint(env.appwrite.endpoint);
}

if (env.appwrite.projectId) {
    client.setProject(env.appwrite.projectId);
}

if (env.appwrite.apikey) {
    client.setKey(env.appwrite.apikey);
}

const databases = new Databases(client);
const avatars = new Avatars(client);
const storage = new Storage(client);
const users = new Users(client);

export { client, databases, users, avatars, storage };