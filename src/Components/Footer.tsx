
export default function Footer() {
    return (
            <footer className="">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between text-center">
                    {/* <!--Copyright section--> */}
                <span className="mx-auto mt-6 w-full max-w-container px-4 sm:px-6 lg:px-8">Copyright &copy;2015 - {new Date().getFullYear()} <a href="https://www.hollywoodbets.com/" className="hover:underline">Hollywood Bets</a>. All Rights Reserved.
                    </span>

                </div>
            </footer>
    )

}