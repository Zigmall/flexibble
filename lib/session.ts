import { getServerSession } from "next-auth/next";
import { NextAuthOptions, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";
import { jsonwebtoken } from 'jsonwebtoken';
import { JWT } from 'next-auth/jwt';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })
  ],
  //   jwt: {
  //     encode: (secret, token) => {},
  //     decode: async (secret, token) => {}
  //   },
  theme: {
    colorScheme: 'light',
    logo: '/logo.png'
  },
  callbacks: {
    async session({ session }) {
      return session;
    },
    async signIn({ user }: { user: AdapterUser | User }) {
      try {
        // get the user if it exists

        // if it doesn't exist, create it

        return true;
      } catch (error: any) {
        console.log(error);
        return false;
      }
    }
  }
};
