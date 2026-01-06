import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";


const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials");
        }

        // TEMP USER (will replace with DB in next step)
        const user = {
          id: "1",
          name: "Manager",
          email: "manager@test.com",
          password: await bcrypt.hash("password123", 10),
          role: "MANAGER"
        };

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isValid) return null;

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role
        };
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.role = token.role as string;
      return session;
    }
  },
  pages: {
    signIn: "/login"
  }
});

export { handler as GET, handler as POST };
