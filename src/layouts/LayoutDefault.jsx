import Menu from "./Menu";

export default function LayoutDefault({ children }) {
    return (
        <>
            <Menu />
            <div className="container mt-3">
                {children}
            </div>
        </>
    )
}