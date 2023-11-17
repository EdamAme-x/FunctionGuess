import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import fs from "node:fs";

const app = new Hono()
app.get('/', async (c) => {
    const html = await fs.readFileSync("../static/idnex.html", {
        encoding: "utf-8"
    });

    return c.html(html);
})

serve(app)
