import AWS from 'aws-sdk';

const cognito = new AWS.CognitoIdentityServiceProvider();

const userDataForEvent = async event => {
    const authProvider = event.requestContext.identity.cognitoAuthenticationProvider;
    // Cognito authentication provider looks like:
    // cognito-idp.us-east-1.amazonaws.com/us-east-1_xxxxxxxxx,cognito-idp.us-east-1.amazonaws.com/us-east-1_aaaaaaaaa:CognitoSignIn:qqqqqqqq-1111-2222-3333-rrrrrrrrrrrr
    // Where us-east-1_aaaaaaaaa is the User Pool id
    // And qqqqqqqq-1111-2222-3333-rrrrrrrrrrrr is the User Pool User Id
    const parts = authProvider.split(':');
    const userPoolIdParts = parts[parts.length - 3].split('/');

    const userPoolId = userPoolIdParts[userPoolIdParts.length - 1];
    const userPoolUserId = parts[parts.length - 1];

    const extra = await getExtraInfo(userPoolId, userPoolUserId);

    return {
        identityId: event.cognitoIdentityId,
        identityPoolId: event.cognitoIdentityPoolId,
        userPoolId: userPoolId,
        userPoolUserId: userPoolUserId,
        extra: extra
    };
};

const getExtraInfo = async (userPoolId, userPoolUserId) => {
    return cognito.adminGetUser({
        UserPoolId: userPoolId,
        Username: userPoolUserId
    }).promise();
};

export {userDataForEvent};