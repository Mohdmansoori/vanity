import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <section>
                <div className="conatiner-fluid header">
                    <Link to={'/Home'} className="vanity"></Link>
                </div>
            </section>
        </>
    )
}

export default Navbar;