class Request {
    constructor(url){
        this.url = url;
    }
    get = async () => {
        const response = await fetch(this.url);
        const responseData = await response.json();

        return responseData;
    }
    post = async data => {
        const response = await fetch(this.url, {
            method : "POST",
            body : JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        });
        const responseData = response.json();

        return responseData;
    }
    put = async (id,data) => {
        const response = await fetch(this.url + "/" + id, {
            method : "PUT",
            body : JSON.stringify(data),
            headers : {
                'Content-type' : 'application/json; charset=UTF-8',
            }
        });
        const responseData = response.json();

        return responseData;
    }
    delete = async id => {
        const response = await fetch(this.url + "/" + id, {
            method : "DELETE"
        });
        return console.log("Veri silindi.");
    }
}