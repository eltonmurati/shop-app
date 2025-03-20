import AdminNav from "@/components/AdminNav";

export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return(
        <div className="flex min-h-max h-[calc(100vh-80px)] xl:h-[calc(100vh-144px)]">
            <AdminNav />
            {children}
        </div>
    );
}