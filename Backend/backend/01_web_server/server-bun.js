import {serve} from "bun"


serve({
  fetch(request){
    const url = new URL(request.url);
    if(url.pathname === '/') {
      return new Response("Hello black tea", {status: 200})
    } else if(url.pathname === '/ice-tea') {
      return new Response("Lets have an ice tea", {status: 200})
    } else {
      return new Response("404 not found", {status: 404});
    }
  },

  port: 3000,
  hostname: '127.0.0.1'
})