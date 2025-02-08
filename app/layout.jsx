import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import "@/assets/styles/globals.css";

const MainLayout = ({ children }) => {
    return (
        <html>
            <body>
                <Navbar />

                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
};

export default MainLayout;
