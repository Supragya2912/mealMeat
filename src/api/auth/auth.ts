
type UserLogin = {
  email: string;
  password: string;
};


type RegisterUser = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    };

// const URL = process.env.REACT_APP_API_URL || 'http:/:8800';
const URL = 'http://10.0.2.2:8800';
console.log('URL FROM HERE is', URL);

export const RegisterUser = async (data: RegisterUser) => {

    try {
        const response = await fetch(`${URL}/api/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });


        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const json = await response.json();

        if (json.code === 200) {
            return json;
        } else {
            console.error('Registration failed:', json.message || 'Unknown error');
            return null;
        }
    } catch (err) {
        console.error('Error:', err);
        return null;
    }
};

export const LoginUser = async (data: UserLogin) => {
  try {
    const response = await fetch(`${URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    console.log('Response:', response);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const json = await response.json();

    if (json.code === 200 && json.data?.token) {
      return json;
    } else {
      console.error('Login failed:', json.message || 'Unknown error');
      return null;
    }
  } catch (err) {
    console.error('Error:', err);
    return null;
  }
};
