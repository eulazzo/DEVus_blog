import Footer from "./Footer"
import { Header } from "./index"

const Layout = ({children}) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
