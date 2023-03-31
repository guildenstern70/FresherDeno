/*
 *
 * Fresher Deno
 * A web template project for Deno
 * Copyright (c) 2023 Alessio Saltarin
 * MIT License
 *
 */

import NavButtons from '../islands/NavButtons.tsx';

export default function Header() {

    return (
        <nav className="navbar navbar-expand-sm bg-light">
            <div className="container-fluid">
                <a href="/" className="badge bg-primary fs-5" style="width: 10rem; text-decoration: none;">
                    Fresher Deno
                </a>
                <NavButtons />
                <div>
                    <a href="/login" className="btn btn-outline-secondary btn-sm">Login</a>
                </div>
            </div>
        </nav>
    );
}

