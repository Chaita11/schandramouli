import { Raleway } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/comp/Navbar";
import Footer from "@/comp/Footer";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "S Chandramouli",
  description: "Hello there, I am Chandramouli. I am a student and a tech geek",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body className={raleway.className}>
        <div className="max-w-7xl my-0 mx-auto">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
