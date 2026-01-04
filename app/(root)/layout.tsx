import Header from "@/components/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            <main className="min-h-screen text-gray-400">
                <div className="container py-10">
                    {children}
                </div>
            </main>
        </>
    );
};

export default Layout;
