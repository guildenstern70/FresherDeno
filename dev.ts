#!/usr/bin/env -S deno run -A --watch=static/,routes/
/*
 *
 * Fresher Deno
 * A web template project for Deno
 * Copyright (c) 2023 Alessio Saltarin
 * MIT License
 *
 */

import dev from "$fresh/dev.ts";

await dev(import.meta.url, "./main.ts");
