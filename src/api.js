const authBaseUrl= "http://localhost:9000/api/v1/auth"


const registerUser = async (formdata) => {
    const response = await fetch( authBaseUrl + '/register',{
      headers:{
        'Content-Type':'application/json' 
      },
      method: 'POST',
      body: JSON.stringify(formData)
  })
}
