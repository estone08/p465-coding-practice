import styles from "../styles/NavBar.module.css"
import Link from "next/link";

export default function NavBar(){
    return(
        <>
            <nav className={styles.navbar}>
                <ul>
                    <li>Home</li>
                    <Link href={"/customers"}>
                        <li>Customer</li>
                    </Link>
                    <li>Login</li>
                </ul>
            </nav>
        </>
    )
}