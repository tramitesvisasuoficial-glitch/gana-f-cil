import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Demo Account",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "demo@avanza.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Para este prototipo demo, permitimos el acceso con una cuenta predefinida
        if (credentials?.email === "demo@avanza.com" && credentials?.password === "demo123") {
          return {
            id: "demo-user-id",
            name: "Demo User",
            email: "demo@avanza.com",
            isAdmin: true,
          };
        }
        return null;
      }
    })
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async session({ session, token }: any) {
      if (token && session.user) {
        session.user.id = token.sub;
      }
      return session;
    }
  },
  session: {
    strategy: "jwt" as const,
  },
  secret: process.env.NEXTAUTH_SECRET || "avanza-demo-secret",
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
