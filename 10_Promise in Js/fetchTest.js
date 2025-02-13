const ApiUrl = "https://api.github.com/users/akshaymarch7";

async function handlePromise() {
  try {
    const data = await fetch(ApiUrl);
    const jsonValue = await data.json();
    console.log(jsonValue);
  } 
  catch (error) {
    console.log(error);
  }
}

handlePromise();
