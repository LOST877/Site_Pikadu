const menuToggle = document.querySelector('#menu-toggle');
const menu = document.querySelector('.sidebar');

menuToggle.addEventListener('click', function (event) {
  event.preventDefault();           // отмена стандартного события по клику
  menu.classList.toggle('visible'); // присвоение нового класса
})

const loginElem = document.querySelector('.login');
const loginForm = document.querySelector('.login-form');
const emailInput = document.querySelector('.login-email');
const passwordInput = document.querySelector('.login-password');
const loginRegister = document.querySelector('.login-register');
const userElem = document.querySelector('.user');
const userNameElem = document.querySelector('.user-name');

const listUsers = [
  {
    id: '01',
    email: 'pepa@mail.com',
    password: '123',
    displayName: 'Spider'
  },
  {
    id: '02',
    email: 'tony_star@mail.com',
    password: '12345',
    displayName: 'Iron Man'
  },
];

const setUsers = {
  user: null,
  logIn(email, password, handler) {
    const user = this.getUser(email);
    if (user && user.password === password) {
      this.authorizeUser(user);
      handler();
    } else {
      alert('Пользователь с такими данными не найден');
    }
  },
  logOut() {
    console.log('logOut');
  },
  register(email, password, handler) {
    if (!this.getUser(email)){
      let displayName = email.substring(0, email.search('@'));
      let user = {
        email,
        password,
        displayName: displayName
      }
      listUsers.push(user);
      this.authorizeUser(user);
      handler();
    } else {
      alert('Пользователь с таким email уже зарегистрирован');
    }
  },
  getUser(email) {
    return listUsers.find(item => item.email === email)
  },
  authorizeUser(user) {
    this.user = user;
  }
}

const toggleAuthDom = () => {
  const user = setUsers.user;
  console.log('user: ', user);

  if (user) {
    loginElem.style.display = 'none';
    userElem.style.display = '';
    userNameElem.textContent = user.displayName;
  } else {
    loginElem.style.display = '';
    userElem.style.display = 'none';
  }
}

loginForm.addEventListener('submit', event => {
  event.preventDefault();
  setUsers.logIn(emailInput.value, passwordInput.value, toggleAuthDom);
})

loginRegister.addEventListener('click', event => {
  event.preventDefault();
  setUsers.register(emailInput.value, passwordInput.value, toggleAuthDom);
})

toggleAuthDom();