
export const useDataFromLocal = (): any[] => {
  const existingDataString = localStorage.getItem("userData");
  const existingData = existingDataString ? JSON.parse(existingDataString) : [];
  return existingData;
};


export const CheckData = (email: string, password: string): any=> {
  const userDataString = localStorage.getItem("userData");
  if (userDataString !== null) {
    const userInfo: any[] = JSON.parse(userDataString);
    const userData = userInfo.find(
      (user) =>
        user.email === email && user.password === password
    );

    if (userData !== undefined) {
      localStorage.setItem("isLoggedIn", "true");
    }
    return userData;
  } else {
    alert("No User found");
    return undefined;
  }
};
