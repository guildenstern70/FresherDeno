/*
 *
 * Fresher Deno
 * A web template project for Deno
 * Copyright (c) 2023 Alessio Saltarin
 * MIT License
 *
 */

import { useReducer } from 'preact/hooks';

const initialState = 'home';

const reducer = (state: string, action: string) => {
    switch (action) {
        case 'home': return 'home';
        case 'pageone': return 'pageone';
        case 'pagetow': return 'pagetwo';
        default: throw new Error('Unexpected action');
    }
};

interface NavButtonProps {
    showBold: boolean
    linkName: string
    linkUrl: string
}

function NavLink(props: NavButtonProps) {
    if (props.showBold) return (
        <li className="nav-item">
            <a className="nav-link fw-bold" href={ props.linkUrl }>{props.linkName}</a>
        </li>
    )
    return (
        <li className="nav-item">
            <a className="nav-link" href={ props.linkUrl }>{props.linkName}</a>
        </li>
    )
}

export default function NavButtons() {
    // Returns the current state and a dispatch function to
    // trigger an action
    const [currentPage, dispatch] = useReducer(reducer, initialState);
    const isHome = (currentPage === 'home')
    const isPageOne = (currentPage === 'pageone')
    const isPageTwo = (currentPage === 'pagetwo')
    return (
        <ul className="navbar-nav">
            <NavLink linkName={'Home'} linkUrl={'/home'} showBold={isHome} />
            <NavLink linkName={'PageOne'} linkUrl={'/pageone'} showBold={isPageOne} />
            <NavLink linkName={'PageTwo'} linkUrl={'/pagetwo'} showBold={isPageTwo} />
        </ul>
    );
}

