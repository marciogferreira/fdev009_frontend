import Menu from "./Menu";

export default function LayoutDefault({ children }) {
    return (
        <>
            <Menu />
            {children}
        </>
    )
}