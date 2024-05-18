import NextAuth from "next-auth/next";
import { SessionStrategy } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { createUser, findUniqueUser } from "@/lib/actions/user.action";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId:
        "240422036417-d2tgf38r765u438eiphltqhf3ceq1321.apps.googleusercontent.com",
      clientSecret: "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",
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  session: { strategy: "jwt" as SessionStrategy },
  pages: {
    signIn: "/auth",
  },

  callbacks: {
    async jwt({ token }: any) {
      return token;
    },

    async session({ session, token }: { session: any; token: any }) {
      if (token) {
        session.accessToken = token.accessToken;
        session.user.id = token.sub;
      }

      const data = await findUniqueUser({
        sub: token.sub,
      });

      if (data) {
        session.user = { ...session.user, userId: data._id };
      } else {
        const user = await createUser({
          name: token.name,
          email: token.email,
          sub: token.sub,
        });

        session.user = { ...session.user, userId: user._id };
      }

      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
