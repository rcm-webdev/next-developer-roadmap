import NextAuth from "next-auth";
import Resend from "next-auth/providers/resend";
import Google from "next-auth/providers/google";
import Discord from "next-auth/providers/discord";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/libs/mongo";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    Resend({
      apiKey: process.env.RESEND_KEY,
      from: "no-reply@resend.rcmcodes.com",
      name: "Email",
    }),
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    Discord({
      clientId: process.env.AUTH_DISCORD_ID,
      clientSecret: process.env.AUTH_DISCORD_SECRET,
    }),
  ],
});
