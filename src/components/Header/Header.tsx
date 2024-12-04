import Link from "next/link";
import Logo from "../Logo/Logo";
import Button from "../ui/Button/Button";

const Header = () => {
    return (
        <>
            <header className="fixed w-full p-4">
                <div className="container mx-auto bg-white rounded-default flex justify-around items-center p-4">
                    <Logo />
                    <nav>
                        <ul className="flex gap-4 text-sm">
                            <Link href="/dashboard"><li>Dashboard</li></Link>

                            {/* next two points shiuld be in dashboard as a cards */}
                            {/* <li>Expense Tracker</li>
                            <li>Income Tracker</li> */}

                            <Link href="/budget-managment"><li>Budget Managment</li></Link>

                            {/* this shit also add as a feature in dashboard */}
                            <li>Export Data</li>
                        </ul>
                    </nav>
                    <div className="flex items-center gap-2">
                        <Button name="Add Wallet" className="" />

                        {/* user logo */}
                        {/* <div className="p-5 rounded-full bg-slate-400" /> */}

                        <Link href="/login"><Button name="Log In" className="w-fit" /></Link>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
