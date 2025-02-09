import { authOptions } from "@/utils/authOptions";
import NextAuth from "next-auth/next";

const handller = NextAuth(authOptions);

export { handller as GET, handller as POST };
