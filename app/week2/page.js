import Link from "next/link";
import StudentInfo from "../StudentInfo";


export default function Week2() {
    return (
        <main>
            <h1 classname="text-3xl m-5">My Shopping List</h1>
            <StudentInfo/>
            <Link href="./">Home</Link>
        </main>
    );
}