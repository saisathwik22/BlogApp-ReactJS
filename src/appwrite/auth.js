/* auth.js code file is useful for future appwrite projects also. Every method in this file works for all types of projects which contain user login, signup module. Save this file module for later use. */

import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

/* Appwrite Suggested code block */
/* const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("[PROJECT_ID");

const account = new Account(client);

const user = await account.create(ID.unique(), "abc@email.com", "password");
*/

/* Optimized approach of above code */

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        // call another method
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log("Appwrite service :: createAccount :: error", error);
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log("Appwrite service :: login :: error", error);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite service :: getCurrentUser :: error", error);
    }
    return null;
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite service :: logout :: error", error);
    }
  }
}

const authService = new AuthService();

export default authService;
