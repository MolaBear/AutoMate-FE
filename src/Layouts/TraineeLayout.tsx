import React, { useState } from 'react';
// import Alert from './components/Alert';
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar';

export default function TraineeLayout({
    children,
}: {
    children: React.ReactNode;
    }) {
    // const [showAlert] = useState(false);
    return (
        <>

            <div>
                {/* {showAlert ?
                    <Alert color="pink" message="This is an alerts" /> : null
                } */}

                <NavBar />
                  {children}
                <Footer />
            </div>
        </>
    );
}
