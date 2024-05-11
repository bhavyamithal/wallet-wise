'use server';

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

// export const getUserInfo = async ({ userId }: getUserInfoProps) => {
//     try {
//       const { database } = await createAdminClient();
  
//       const user = await database.listDocuments(
//         DATABASE_ID!,
//         USER_COLLECTION_ID!,
//         [Query.equal('userId', [userId])]
//       )
  
//       return parseStringify(user.documents[0]);
//     } catch (error) {
//       console.log(error)
//     }
// }

export const signIn = async ({ email, password }: signInProps) => {
    try {
        const { account } = await createAdminClient();
        const session = await account.createEmailPasswordSession(email, password);

        cookies().set("appwrite-session", session.secret, {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            secure: true,
        });

        // const user = await getUserInfo({ userId: session.userId })

        // return parseStringify(user);
    } catch (error) {
        console.error('Error', error);
    }
}

export const signUp = async (userData: SignUpParams) => {
    try {
        const { email, password, firstName, lastName } = userData;
        const { account } = await createAdminClient();

        const newUserAccount = await account.create(
            ID.unique(),
            email,
            password,
            `${firstName} ${lastName}`
        );

        const session = await account.createEmailPasswordSession(email, password);

        cookies().set("appwrite-session", session.secret, {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            secure: true,
        });

        // we parse it because we can not just send large json over server actions, 
        // we need to stringify it first
        return parseStringify(newUserAccount);

    } catch (e) {
        console.log(e);
    }
}

export async function getLoggedInUser() {
    try {

        const { account } = await createSessionClient();
        const user = await account.get();
        return parseStringify(user);

    } catch (error) {
        return null;
    }
}

export async function logoutAccout() {
    try {
        const { account } = await createSessionClient();
        cookies().delete('appwrite-session');
        await account.deleteSession('current');
    } catch (e) {
        console.log(e);
        return null;
    }
}
