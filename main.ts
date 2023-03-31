/*
 *
 * Fresher Deno
 * A web template project for Deno
 * Copyright (c) 2023 Alessio Saltarin
 * MIT License
 *
 */

/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";

await start(manifest);
