import { UserType } from "@/types";
import { account } from "./config";
import { ID } from "appwrite";

export async function createUserAccount(user: UserType) {
  try {
    const newAccount = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name
    );
    return newAccount;
  } catch (error) {
    console.log(error);
    return error;
  }
}
