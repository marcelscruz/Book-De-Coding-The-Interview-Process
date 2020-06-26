async function getUsers() {
  const result = await fetch("https://randomuser.me/api/?results=10");
  const users = await result.json();
  const wrapperNode = document.querySelector(".wrapper");

  users.results.forEach(({ name, picture }) => {
    const firstName = document.createElement("p");
    firstName.textContent = name.first;

    const lastName = document.createElement("p");
    lastName.textContent = name.last;

    const nameWrapper = document.createElement("div");
    nameWrapper.classList.add("name-wrapper");
    nameWrapper.appendChild(firstName);
    nameWrapper.appendChild(lastName);

    const avatar = document.createElement("img");
    avatar.src = picture.large;
    avatar.alt = `${name.first} ${name.last}`;

    const card = document.createElement("div");
    card.classList.add("card");
    card.appendChild(avatar);
    card.appendChild(nameWrapper);

    wrapperNode.appendChild(card);
  });
}

getUsers();
