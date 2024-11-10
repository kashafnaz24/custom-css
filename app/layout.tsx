
import Navbar from "./Navbar/page";
import Footer from "./Footer/page";
import "./globals.css";

function RootLayout({children}:any){
  return(
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
export default RootLayout;
