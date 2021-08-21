import client from "https://raw.githubusercontent.com/hhatto/dev-kit-js/deno/libdeno/mod.mjs";

async function handleRequest(request: Request) {
	const { pathname } = new URL(request.url);

	console.log(client);

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
