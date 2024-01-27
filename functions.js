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
};



