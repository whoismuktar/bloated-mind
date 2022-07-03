import Footer from "../Footer"
import Nav from "../Nav"

export default function index({ pageConfig, children }) {
    // console.log({ pageConfig, children });
    const { noFooter, noNav, noTopSpace } = pageConfig

    return (
        <div className="app-wrapper">
            {!noNav && <Nav></Nav>}
            <main className={`${noNav ? "no-nav" : ""}${noFooter ? "no-footer" : ""}${noTopSpace? "no-top-space" : ""} main-body container mx-auto`}>{children}</main>
            {!noFooter && <Footer></Footer>}
        </div >
    )
}
