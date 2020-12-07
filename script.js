let url = window.location.toString();

let getUsername = (url) => {
    let urlSplit = url.split('=');
    let userName = urlSplit[1];
    if (userName == undefined) {
      userName = 'zinfira';
    }
    return userName;
}

let name = getUsername(url);

fetch('https://api.github.com/users/' + name)
  .then(res => res.json())
  .then(json => {
    let avatar = json.avatar_url;
    let name = json.login;
    let bio = json.bio;
    let profile = json.html_url;
    if (name) {
      let createAvatar = () => {
      let addAvatar = document.createElement('img');
      addAvatar.src = avatar;
      document.body.appendChild(addAvatar);
      }

      let createBio = () => {
        let addBio = document.createElement('h3');
        addBio.innerHTML = bio;
        document.body.appendChild(addBio);
      }

      let createProfile = () => {
        let elementForLink = document.createElement('a');
        let elementForHeader = document.createElement('h2');
        elementForHeader.innerText = name;
        elementForLink.href = profile;
        document.body.appendChild(elementForLink);
        elementForLink.appendChild(elementForHeader);
      }

      createAvatar();
      createProfile();
      createBio();

    } else {
      alert('Информация о пользователе не доступна');
    }
  })

  .catch(err => alert(err + ' Информация о пользователе не доступна'));