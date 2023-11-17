import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import fs from "node:fs";

const app = new Hono()
app.get('/', async (c) => {
    const html = await fs.readFileSync("./static/index.html", {
        encoding: "utf-8"
    });

    return c.html(html);
})

app.get("/runtime", async (c) => {
    const js = fs.readFileSync("./static/index.js", {
        encoding: "utf-8"
    });

    return new Response(js, {
        headers: new Headers({
            "Content-Type": "text/javascript"
        })
    })
})

serve(app)
