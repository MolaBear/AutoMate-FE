import React from 'react';
// import Alert from './components/Alert';
import Footer from '../Components/Footer'
import Sidebar from '../Components/Sidebar/sidebar';
import AdminHeader from '../Views/AdminDash/AdminHeader/adminHeader';

export default function AdminLayout({
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
                
                <AdminHeader/>
                <Sidebar />
                  {children}
                <Footer />
            </div>
        </>
    );
}
