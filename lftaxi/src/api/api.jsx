export const serverLogIn = async (email, password) => {
  return fetch(
    `https://loft-taxi.glitch.me/auth`, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify({
      "email": email,
      "password": password,
    })
  } 
    
  ).then(res => res.json());
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

  export const serverAddresses = async () => {
    return fetch(
      `https://loft-taxi.glitch.me/addressList`
    ).then(res => res.json());
  };

  export const serverRegisterCard = async (cardNumber, expiryDate, cardName, cvc, token) =>
  {
    return fetch(`https://loft-taxi.glitch.me/card`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        cardNumber,
        expiryDate,
        cardName,
        cvc,
        token
      }) 
    }).then((res) => res.json());
  }

  export const serverGetCardData = async (token) => {
    return fetch(`https://loft-taxi.glitch.me/card?token=${token}`, {
      method: "GET",
    }).then((res) => res.json());
  }

  