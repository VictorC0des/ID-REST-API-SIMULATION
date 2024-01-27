const users = ["Juan", "Pedro", "Sofia", "Victor"];

function sendResponse(code, body = null) {
    const response = {
        code,
        body,
    };

    switch (code) {
        case 200:
            response.msg = "Ok";
            break;
        case 400:
            response.msg = "Endpoint not valid";
            break;
        case 404:
            response.msg = "Not found";
            break;
        case 500:
            response.msg = "Internal Server Error";
            break;
        default:
            response.msg = "Unknown status code";
    }

    return response;
}

function getUser(userName) {
    try {
        // Early return guard clauses
        if (!userName) {
            return sendResponse(400);
        }

        const userIndex = users.indexOf(userName);

        if (userIndex >= 0) {
            const user = users.at(userIndex);

            return sendResponse(200, user);
        }

        return sendResponse(404);
    } catch (error) {
        return sendResponse(500, error);
    }
}


function getUsers() {
    try {
        if (users.length > 0) {
            return sendResponse(200, users);
        } else {
            return sendResponse(404);
        }
    } catch (error) {
        return sendResponse(500, error);
    }
}

function addUser(userName) {
    try{
        if(!userName || typeof userName !="string"){
            return sendResponse(400)
        }
        users.push(userName);
    
     
        return sendResponse(200, {userName, users} )    
    }catch(error){
        return sendResponse(500, error);
    }

}
console.log(addUser("victor"));




