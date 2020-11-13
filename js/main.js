const menuToggle = document.querySelector('#menu-toggle');
const menu = document.querySelector('.sidebar');

const regExpValidEmail = /^\w+@\w+\.\w{2,}$/;

const loginElem = document.querySelector('.login');
const loginForm = document.querySelector('.login-form');
const emailInput = document.querySelector('.login-email');
const passwordInput = document.querySelector('.login-password');
const loginRegister = document.querySelector('.login-register');
const userElem = document.querySelector('.user');
const userNameElem = document.querySelector('.user-name');
const exitElem = document.querySelector('.exit');
const editElem = document.querySelector('.edit');
const editContainer = document.querySelector('.edit-container');
const editUsername = document.querySelector('.edit-username');
const editPhoto = document.querySelector('.edit-photo');
const userAvatarElem = document.querySelector('.user-avatar');
const postsElem = document.querySelector('.posts');

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
    if (!regExpValidEmail.test(email)) return alert('Неверный email');
    const user = this.getUser(email);
    if (user && user.password === password) {
      this.authorizeUser(user);
      handler();
    } else {
      alert('Пользователь с такими данными не найден');
    }
  },

  logOut(handler) {
    this.user = null;
    handler();
  },

  register(email, password, handler) {
    if (!regExpValidEmail.test(email)) return alert('Неверный email');
    if (!email.trim() || !password.trim()) {
      alert('Введите данные');
      return;
    }
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

  editUser(userName, userPhoto, handler) {
    if (userName) {
      this.user.displayName = userName;
    }
    if (userPhoto) {
      this.user.photo = userPhoto;
    }
    handler();
  },

  getUser(email) {
    return listUsers.find(item => item.email === email)
  },

  getUsername(email) {
    let user = listUsers.find(user => user.email === email);
    return user.displayName;
  },

  authorizeUser(user) {
    this.user = user;
  }
}

const setPosts = {
  allPosts: [
    {
      title: 'Про рыбные тексты. Часть 1',
      text: ['Далеко-далеко за словесными горами в стране гласных, и согласных живут рыбные тексты. Подзаголовок запятых реторический меня букв они правилами! Все предложения запятых текстами великий власти живет он то о что она большого на берегу жизни сих злых взгляд ручеек пунктуация домах переулка там, это агентство переписывается? Составитель большой заглавных коварный. Себя если силуэт ему образ продолжил парадигматическая lorem одна подзаголовок напоивший она, несколько от всех текстов всеми коварный своих пустился однажды переписывается выйти лучше скатился ручеек знаках предупреждал рот? Снова рыбного строчка предложения сих она обеспечивает, своего собрал деревни за. Большого что за грамматики, послушавшись ему щеке запятой пор она инициал обеспечивает!', 'Инициал там курсивных единственное над живет безопасную. Родного жизни возвращайся гор безопасную букв заголовок текстами, буквенных даже парадигматическая единственное журчит проектах строчка семь себя лучше заманивший правилами подпоясал семантика выйти использовало осталось одна. Имени ipsum своего вдали, дал пустился вершину составитель переписали оксмокс приставка то выйти путь текст это инициал безопасную но скатился рыбными буквенных заголовок коварный если рукопись, языком знаках? Переписали составитель текста бросил точках, правилами ручеек всеми пунктуация инициал lorem коварных страну назад заглавных решила, переулка вопрос все подпоясал свою запятых, реторический свое напоивший ее имеет там? Алфавит речью оксмокс парадигматическая составитель не путь первую пустился заглавных, точках щеке использовало.'],
      tags: ['#свежее', '#горячее', '#мое', '#случайность'],
      author: 'pepa@mail.com',
      date: '12.11.20, 20:54:29',
      likes: 15,
      comments: 5
    },
    {
      title: 'Про рыбные тексты. Часть 2',
      text: ['Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Ipsum, свой текстов ее о взгляд вскоре над снова безопасную. Это от всех вопрос которой первую. Грустный но щеке продолжил пунктуация большого точках? Решила злых она взобравшись ipsum необходимыми. Снова которой то деревни назад использовало знаках но оксмокс запятой! Гор на берегу вдали необходимыми которое моей над вскоре обеспечивает маленькая грустный запятых переулка подзаголовок бросил там грамматики всеми, домах скатился рыбными от всех своего последний. Все рыбного вершину решила, страна текст запятых? Города встретил свое там! Это снова домах рот подпоясал. Первую рекламных прямо его вскоре, переулка букв проектах знаках лучше своего залетают.', 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Единственное обеспечивает злых, которое мир на берегу языком переписывается, собрал эта даль моей над. Переписывается единственное одна, рыбного над безорфографичный семь по всей рукописи правилами подпоясал страну вопрос реторический о составитель власти живет моей повстречался журчит семантика которой переулка бросил наш лучше, своего строчка. Она родного обеспечивает дороге возвращайся власти своих безорфографичный пояс, пунктуация которой рекламных имеет меня не, вскоре буквоград рыбного от всех моей языкового толку залетают снова осталось? Проектах точках коварных диких свой то безорфографичный переулка путь, текст до напоивший силуэт сбить буквенных на берегу там семь знаках ее взгляд предложения снова?'],
      tags: ['#свежее', '#горячее', '#мое', '#случайность'],
      author: 'pepa@mail.com',
      date: '13.11.20, 20:54:29',
      likes: 5,
      comments: 2
    }

  ],

}

const toggleAuthDom = () => {
  const user = setUsers.user;
  console.log('user: ', user);

  if (user) {
    loginElem.style.display = 'none';
    userElem.style.display = '';
    userNameElem.textContent = user.displayName;
    userAvatarElem.src = user.photo || userAvatarElem.src;
  } else {
    loginElem.style.display = '';
    userElem.style.display = 'none';
  }
}

const showAllPosts = () => {
  let postsHTML = '';

  setPosts.allPosts.forEach(({ title, text, tags, author, date, likes, comments }) => {
    postsHTML += `
      <section class="post">
        <div class="post-body">
          <h2 class="post-title">${title}</h2>
          ${text.map(text => {
            return `
            <p class="post-text">${text}</p>
            `
          }).join('')}
          <div class="tags">
            ${tags.map(tag => {
              return `
              <a href="#" class="tag">${tag}</a>
              `
            }).join('')}
          </div>
        </div>
        <!-- /.post-body -->
        <div class="post-footer">
          <div class="post-buttons">
            <button class="post-button likes">
              <svg width="19" height="20" class="icon icon-like">
                <use xlink:href="img/icons.svg#like"></use>
              </svg>
              <span class="likes-counter">${likes}</span>
            </button>
            <button class="post-button comments">
              <svg width="21" height="21" class="icon icon-comment">
                <use xlink:href="img/icons.svg#comment"></use>
              </svg>
              <span class="comments-counter">${comments}</span>
            </button>
            <button class="post-button save">
              <svg width="19" height="19" class="icon icon-save">
                <use xlink:href="img/icons.svg#save"></use>
              </svg>
            </button>
            <button class="post-button share">
              <svg width="17" height="19" class="icon icon-share">
                <use xlink:href="img/icons.svg#share"></use>
              </svg>
            </button>
          </div>
          <!-- /.post-buttons -->
          <div class="post-author">
            <div class="author-about">
              <a href="#" class="author-username">${setUsers.getUsername(author)}<a>
                  <span class="post-time">${date}</span>
            </div>
            <a href="#" class="author-link"><img src="img/avatar.jpg" alt="author: avatar" class="author-avatar"></a>
          </div>
          <!-- /.post-author -->
        </div>
        <!-- /.post-footer -->
      </section>
    `;
  })
  postsElem.innerHTML = postsHTML;
}

const init = () => {
  menuToggle.addEventListener('click', function (event) {
    event.preventDefault();           // отмена стандартного события по клику
    menu.classList.toggle('visible'); // присвоение нового класса
  })

  loginForm.addEventListener('submit', event => {
    event.preventDefault();
    setUsers.logIn(emailInput.value, passwordInput.value, toggleAuthDom);
  });

  loginRegister.addEventListener('click', event => {
    event.preventDefault();
    setUsers.register(emailInput.value, passwordInput.value, toggleAuthDom);
  });

  exitElem.addEventListener('click', event => {
    event.preventDefault();
    setUsers.logOut(toggleAuthDom);
    loginForm.reset();
  });

  editElem.addEventListener('click', event => {
    event.preventDefault();
    editContainer.classList.toggle('visible');
    editUsername.value = setUsers.user.displayName;
  });

  editContainer.addEventListener('submit', event => {
    event.preventDefault();
    setUsers.editUser(editUsername.value, editPhoto.value, toggleAuthDom);
    editContainer.reset();
    editContainer.classList.remove('visible');
  });
  
  showAllPosts();
  toggleAuthDom();
}

document.addEventListener('DOMContentLoaded', () => {
  init();
});