import { devkit } from "https://raw.githubusercontent.com/hhatto/dev-kit-js/deno/libdeno/mod.ts";

async function handleRequest(request: Request) {
	const { pathname } = new URL(request.url);

	console.log(devkig);

	const encoded = { message: "Hello world" };
	return new Response(encoded, {
		headers: {
			"content-type": "application/json",
		},
	});
}

addEventListener("fetch", (event) => {
	event.respondWith(handleRequest(event.request));
});
