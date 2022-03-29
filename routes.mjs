import { add, getAll, getByName, update, remove } from "./products.mjs";

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
