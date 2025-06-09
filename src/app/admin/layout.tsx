import AdminNav from "@/components/AdminNav";

export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return(
        <div className="flex h-max min-h-[calc(100vh-80px)] xl:min-h-[calc(100vh-144px)]">
            <AdminNav />
            {children}
        </div>
    );
}