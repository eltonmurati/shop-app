import { redirect } from "next/navigation";

const AdminPage = () => {

    redirect("/");

    return(
        <div className="">AdminPage</div>
    );
}

export default AdminPage;