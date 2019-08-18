export function getHandler(event, context, callback) {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "Get was called successfully",
        }),
    };
};
