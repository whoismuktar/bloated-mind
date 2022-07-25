import Footer from "../Footer"
import Nav from "../Nav"

export default function index(props) {
    // console.log({ pageConfig, children });
    const pageConfig = props.pageConfig
    const children = props.children
    const { noFooter = false, noNav = false, noTopSpace = false } = pageConfig

    return (
        <div className="app-wrapper">
            {!noNav && <Nav></Nav>}
            <main className={`${noNav ? "no-nav" : ""}${noFooter ? "no-footer" : ""}${noTopSpace? "no-top-space" : ""} main-body container mx-auto`}>{children}</main>
            {!noFooter && <Footer></Footer>}
        </div >
    )
}
