import { add, getAll, getByName, update, remove } from "./products.mjs";
import http, { request } from "http";

/*const getMethod = async (request, response) => {
    let getUrl = request.url.split("/")
    if(getUrl[1] === "products") {
        if(getUrl[2]){
            response.write(JSON.stringify(getByName(getUrl[2])));
        } else {
            response.write(JSON.stringify(getAll()));
        }
    } else {
        response.write("Request wrong");
    }
  response.end();
}*/

const route = async (request, response) => {
    if(request.method === "POST") {
        const body = await postMethod(request);
        add(body.name, body.quantity) 
        return "produit ajouté"
    } else {
        let getUrl = request.url.split("/")
        if(getUrl[1] === "products") {
            if(getUrl[2]){
                return JSON.stringify(getByName(getUrl[2]));
            } else {
                return JSON.stringify(getAll());
            }
        }
    }
}

const data = JSON.stringify({
    name: "Kiwi",
    quantity: 67
})

const postMethod = (request) => {
    let body = ""

    return new Promise((resolve, reject) => {
        request.on("data", (chunk) => {
            body += chunk.toString();
        });
        request.on("end", () => {
            return resolve(JSON.parse(body));
        });
    });
};

export default route;
