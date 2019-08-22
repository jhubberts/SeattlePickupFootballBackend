function buildResponse(statusCode, body) {
    const serializedBody = typeof(body) === "string" ? body : JSON.stringify(body);

    return {
        statusCode: statusCode,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true
        },
        body: serializedBody
    };
}

export {buildResponse};