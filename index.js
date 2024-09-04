document.getElementById('toggleToregister').addEventListener('click', function(){
    document.getElementById('loginForm').classList.remove('active')
    document.getElementById('registerForm').classList.add('active')

})

document.getElementById('toggleToLogin').addEventListener('click', function(){
    document.getElementById('registerForm').classList.remove('active')
    document.getElementById('loginForm').classList.add('active')

})

document.getElementById('loginForm').addEventListener('submit', function(e){
    e.preventDefault();



    const username =document.getElementById('username').value;
    const email =document.getElementById('email').value;
    const password =document.getElementById('password').value;

    const user={
        username: username,
        email: email,
        password: password
    }
   
    console.log('User Object:',user)
     
    document.getElementById('loginForm').reset();
})