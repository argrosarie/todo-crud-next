export const Layout = ({children}) => {
    return(
        <div className="bg-gray-900 text-white h-full w-screen">
            <main className="h-screen px-28 py-10">{children}</main>
        </div>
    )
}