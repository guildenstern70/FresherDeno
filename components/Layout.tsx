/*
 *
 * Fresher Deno
 * A web template project for Deno
 * Copyright (c) 2023 Alessio Saltarin
 * MIT License
 *
 */

import { Head } from "$fresh/runtime.ts";
import Header from './Header.tsx';
import { Component, JSX } from 'preact';

interface LayoutProps {
    hasNav: boolean
}

export default class Layout extends Component<LayoutProps> {

    constructor(props: LayoutProps) {
        super(props);
    }

    getNavBar(): JSX.Element {
        if (this.props.hasNav) return <Header />
        return <></>
    }

    render(): JSX.Element {
        return (
            <>
                <Head>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css"
                          rel="stylesheet"
                          integrity="sha384-aFq/bzH65dt+w6FI2ooMVUpc+21e0SRygnTpmBvdBgSdnuTN7QbdgL+OapgHtvPp"
                          crossOrigin="anonymous" />
                    <link rel="stylesheet" href="/main.css" />
                </Head>
                { this.getNavBar() }
                <main>
                    <div class="container px-3 py-5" id="page-container">
                        {this.props.children}
                    </div>
                </main>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js"
                        integrity="sha384-qKXV1j0HvMUeCBQ+QVp7JcfGl760yU08IQ+GpUo5hlbpg51QRiuqHAJz8+BrxE/N"
                        crossOrigin="anonymous"></script>

            </>
        );
    }


}
