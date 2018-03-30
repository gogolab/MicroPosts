class EasyHTTP {
    async get(url) {
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    }

    async post(url, data) {
        const config = {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        };

        const response = await fetch(url, config);
        const resData = await response.json();
        return resData;
    }

    async put(url, data) {
        const config = {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        };

        const response = await fetch(url, config);
        const resData = await response.json();
        return resData;
    }

    async delete(url) {
        const config = {
            method: "DELETE"
        };

        const response = await fetch(url, config);
        const resData = await response.json();
        return resData;
    }
}

export const http = new EasyHTTP();