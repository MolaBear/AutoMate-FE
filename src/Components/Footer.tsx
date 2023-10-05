import styled from "styled-components";

const FixedFooter = styled.button`
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 10px; /* Adjust the padding as needed */
    text-align: center; /* Align the content to the center if desired */
`;

export default function Footer() {
    return (
            <FixedFooter>
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between text-center">
                    {/* <!--Copyright section--> */}
                <span className="mx-auto mt-6 w-full max-w-container px-4 sm:px-6 lg:px-8">Copyright &copy;2015 - {new Date().getFullYear()} <a href="https://www.hollywoodbets.com/" className="hover:underline">Hollywood Bets</a>. All Rights Reserved.
                    </span>

                </div>
            </FixedFooter>
    )

}