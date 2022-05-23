import React from 'react';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item ms-4">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item ms-4">
                            <a class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item ms-4">
                            <a class="nav-link text-white" href="#">Dental services</a>
                        </li>
                        <li class="nav-item ms-4">
                            <a class="nav-link text-white" href="#">Reviews</a>
                        </li>
                        <li class="nav-item ms-4">
                            <a class="nav-link text-white" href="#">Blogs</a>
                        </li>
                        <li class="nav-item ms-4">
                            <a class="nav-link text-white" href="#">Contact us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;