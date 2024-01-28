const users = ["Juan", "Pedro", "Sofia", "Victor"];

const sendResponse = (code, body = null) => {
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
        case 204:
            response.msg = "No content";
            break;
        default:
            response.msg = "Unknown status code";
    }

    return response;
};

const getUser = (userName) => {
    try {
        if (users.length === 0){
            return sendResponse(204);
        }
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
};

const getUsers = () => {
    try {
        if (users.length === 0){
            return sendResponse(204);
        }

        return sendResponse(200, users);
       
    } catch (error) {
        return sendResponse(500, error);
    }
};

const addUser = (userName) => {
    try{
        if(!userName || typeof userName !="string"){
            return sendResponse(400);
        }
        users.push(userName);
    
     
        return sendResponse(200, {userName, users} );    
    }catch(error){
        return sendResponse(500, error);
    }

};

const removeUserByIndex = (index) => {
    try{
        if (users.length === 0){
            return sendResponse(204);
        }

        if (typeof index != "number"){
            return sendResponse(400);
        }
        
        userEliminated = users[index];
        users.includes(userEliminated);

        if(users.includes(userEliminated)){
            users.splice(index, 1);
            return sendResponse(200, {userEliminated, users});
        }
        
        return sendResponse(404);
        
        
    }catch(error){
        return sendResponse(500, error);
    }

};

const removeLastUser = () => {
    try{
        if (users.length === 0){
            return sendResponse(204);
        }

        lastUser = users.pop();
    
        return sendResponse(200, {lastUser, users});
    }catch(error)
    {
        return sendResponse(500, error);
    }
};

const removeFirstUser = () => {
    try{
        if (users.length === 0){
            return sendResponse(204);
        }

        firstUser = users.shift();
    
        return sendResponse(200, {firstUser, users});
    }catch(error)
    {
        return sendResponse(500, error);
    }
    
};

const updateUserByIndex = (index, userName) => {
    userUpdated = users[index];

    try{
        if (users.length === 0){
            return sendResponse(204);
        }

        if (!userName || typeof userName != "string") {
            return sendResponse(400);
        }
        if (users.includes(userUpdated) ){
            users.splice(index, 1, userName);
            return sendResponse(200, {userUpdated, users});   
        }
      
        return sendResponse(404);

    }catch(error){
        return sendResponse(500, error);
    }
};

const getUserSize = () => {
    try{
        if (users.length === 0){
            return sendResponse(204);
        }
        numberOfUsers = users.length;
        return sendResponse(200, {numberOfUsers});
    
    }catch(error){
        return sendResponse(500, error);
    }
};
