/*
 *
 * Fresher Deno
 * A web template project for Deno
 * Copyright (c) 2023 Alessio Saltarin
 * MIT License
 *
 */


import { PageProps } from "$fresh/server.ts";
import Layout from '../components/Layout.tsx';

export default function Greet(props: PageProps) {
  return (
      <Layout hasNav={true}>
        <div>This is {props.params.name}</div>
      </Layout>
  );
}
