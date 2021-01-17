export const serverLogIn = async (email, password) => {
    return fetch(
      `https://loft-taxi.glitch.me/auth?username=${email}&password=${password}`
    ).then(res => res.json()).then(data => data.success);
  };

export const serverRegistration = async (email, name, surname, password) => {
    return fetch(
      `https://loft-taxi.glitch.me/register`, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({
        "email": email,
        "password": password,
        "name": name,
        "surname": surname
      })
    } 
      
    ).then(res => res.json()).then(data => data.success);
  };