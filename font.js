import { Kaisei_Decol, Inter } from "next/font/google";

const kaisei = Kaisei_Decol({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export { kaisei, inter };
