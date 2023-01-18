const awaitMultipleRequests = async (requestArray) => {
  const responseArray = await Promise.all(requestArray);
  return responseArray.reduce((a, item) => ({ ...a, ...item }), {});
};

export default awaitMultipleRequests;
