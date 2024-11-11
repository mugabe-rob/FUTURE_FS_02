<p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/6295/6295417.png" width="100" />
</p>
<p align="center">
    <h1 align="center">FRONTEND</h1>
</p>
<p align="center">
    <em>HTTP error 401 for prompt `slogan`</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/mugabe-rob/frontend?style=flat&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/mugabe-rob/frontend?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/mugabe-rob/frontend?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/mugabe-rob/frontend?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat&logo=HTML5&logoColor=white" alt="HTML5">
	<img src="https://img.shields.io/badge/Vite-646CFF.svg?style=flat&logo=Vite&logoColor=white" alt="Vite">
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
	<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white" alt="ESLint">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>
<hr>

##  Quick Links

> - [ Overview](#-overview)
> - [ Features](#-features)
> - [ Repository Structure](#-repository-structure)
> - [ Modules](#-modules)
> - [ Getting Started](#-getting-started)
>   - [ Installation](#-installation)
>   - [ Running frontend](#-running-frontend)
>   - [ Tests](#-tests)
> - [ Project Roadmap](#-project-roadmap)
> - [ Contributing](#-contributing)
> - [ License](#-license)
> - [ Acknowledgments](#-acknowledgments)

---

##  Overview
This project is a web-based platform designed to facilitate easy online food ordering for people living in Rwanda. The platform aims to streamline the process of ordering food, reducing transportation costs and saving time for users. Built with modern web technologies, this platform ensures a smooth and efficient user experience.

## Technologies Used
- **Frontend:** TypeScript, React, Tailwind CSS
- **Backend:** MongoDB

The combination of these technologies ensures a responsive, fast, and scalable application that meets the needs of users and food vendors alike.


---

##  Features

- **User-Friendly Interface:** Intuitive and easy-to-navigate interface built with React and Tailwind CSS.
- **Efficient Food Ordering:** Simplifies the process of ordering food online, allowing users to place orders quickly and conveniently.
- **Cost Reduction:** Helps users save on transportation costs by offering a centralized platform for food ordering.
- **Time-Saving:** Reduces the time spent on ordering food through streamlined processes and fast load times.
- **Responsive Design:** Ensures a seamless experience across various devices, including desktops, tablets, and mobile phones.
- **Secure Data Management:** Utilizes MongoDB for secure and efficient handling of user data and order information.


---

##  Repository Structure

```sh
└── frontend/
    ├── README.md
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── public
    │   ├── fod.png
    │   ├── food.png
    │   └── vite.svg
    ├── src
    │   ├── App.css
    │   ├── App.jsx
    │   ├── Components
    │   │   ├── AppDownload
    │   │   │   ├── AppDownload.css
    │   │   │   └── AppDownload.jsx
    │   │   ├── Contact
    │   │   │   ├── Contact.css
    │   │   │   └── Contact.jsx
    │   │   ├── ExploreMenu
    │   │   │   ├── ExploreMenu.css
    │   │   │   └── ExploreMenu.jsx
    │   │   ├── FoodDisplay
    │   │   │   ├── FoodDisplay.css
    │   │   │   └── FoodDisplay.jsx
    │   │   ├── FoodItem
    │   │   │   ├── FoodItem.css
    │   │   │   └── FoodItem.jsx
    │   │   ├── Footer
    │   │   │   ├── Footer.css
    │   │   │   └── Footer.jsx
    │   │   ├── Header
    │   │   │   ├── Header.css
    │   │   │   └── Header.jsx
    │   │   ├── LoginPopup
    │   │   │   ├── LoginPopup.css
    │   │   │   └── LoginPopup.jsx
    │   │   └── Navbar
    │   │       ├── Navbar.css
    │   │       └── Navbar.jsx
    │   ├── Pages
    │   │   ├── Cart
    │   │   │   ├── Cart.css
    │   │   │   └── Cart.jsx
    │   │   ├── Home
    │   │   │   ├── Home.css
    │   │   │   └── Home.jsx
    │   │   └── PlaceOrder
    │   │       ├── PlaceOrder.css
    │   │       └── PlaceOrder.jsx
    │   ├── assets
    │   │   ├── 1.jpg
    │   │   ├── 2.jpg
    │   │   ├── 3.jpg
    │   │   ├── Gmail - Africa's Talking Hackathon Event.pdf
    │   │   ├── add.png
    │   │   ├── add_icon_black.png
    │   │   ├── add_icon_green.png
    │   │   ├── app_store_image.png
    │   │   ├── assets.js
    │   │   ├── bag.png
    │   │   ├── beef.jpg
    │   │   ├── beef1.jpg
    │   │   ├── beef2.jpeg
    │   │   ├── beef3.jpg
    │   │   ├── beef4.jpg
    │   │   ├── beer.jpg
    │   │   ├── beer1.jpg
    │   │   ├── beer2.jpg
    │   │   ├── beer3.jpg
    │   │   ├── beer4.jpeg
    │   │   ├── cart.png
    │   │   ├── chicken.jpg
    │   │   ├── chicken1.jpeg
    │   │   ├── chicken2.png
    │   │   ├── chicken3.jpg
    │   │   ├── chicken4.jpg
    │   │   ├── chinese.jpg
    │   │   ├── chinese1.jpeg
    │   │   ├── chinese2.jpeg
    │   │   ├── chinese3.jpeg
    │   │   ├── chinese4.jpeg
    │   │   ├── cross-icon.png
    │   │   ├── dark_arrow.png
    │   │   ├── fish.jpg
    │   │   ├── google_play_store.png
    │   │   ├── instagram_icon.png
    │   │   ├── italian_dish1.jpg
    │   │   ├── italian_dish2.jpg
    │   │   ├── italian_dish3.jpeg
    │   │   ├── italian_dish4.jpg
    │   │   ├── linkedin_icon.png
    │   │   ├── location-icon.png
    │   │   ├── logo.svg
    │   │   ├── mail-icon.png
    │   │   ├── message_icon.png
    │   │   ├── phone-icon.png
    │   │   ├── rating_icon.png
    │   │   ├── rating_stars.jpg
    │   │   ├── react.svg
    │   │   ├── remove_icon.png
    │   │   ├── remove_icon_red.png
    │   │   ├── salad.jpg
    │   │   ├── salad1.jpg
    │   │   ├── salad2.jpg
    │   │   ├── salad3.jpg
    │   │   ├── salad4.jpg
    │   │   ├── salads.jpeg
    │   │   ├── search-icon.png
    │   │   ├── turkish_kebab1.jpg
    │   │   ├── turkish_kebab2.jpg
    │   │   ├── turkish_kebab3.jpg
    │   │   ├── turkish_kebab4.jpg
    │   │   ├── twitter_icon.jpeg
    │   │   ├── twitter_icon.png
    │   │   ├── wine.jpg
    │   │   ├── wine1.jpg
    │   │   ├── wine2.jpg
    │   │   ├── wine3.jpg
    │   │   ├── wine4.jpeg
    │   │   └── youtube_icon.png
    │   ├── context
    │   │   └── StoreContext.jsx
    │   ├── index.css
    │   └── main.jsx
    └── vite.config.js
```

---

##  Modules

<details closed><summary>.</summary>

| File                                                                                      | Summary                                       |
| ---                                                                                       | ---                                           |
| [index.html](https://github.com/mugabe-rob/frontend/blob/master/index.html)               | HTTP error 401 for prompt `index.html`        |
| [vite.config.js](https://github.com/mugabe-rob/frontend/blob/master/vite.config.js)       | HTTP error 401 for prompt `vite.config.js`    |
| [package.json](https://github.com/mugabe-rob/frontend/blob/master/package.json)           | HTTP error 401 for prompt `package.json`      |
| [package-lock.json](https://github.com/mugabe-rob/frontend/blob/master/package-lock.json) | HTTP error 401 for prompt `package-lock.json` |

</details>

<details closed><summary>src</summary>

| File                                                                          | Summary                                   |
| ---                                                                           | ---                                       |
| [App.jsx](https://github.com/mugabe-rob/frontend/blob/master/src/App.jsx)     | HTTP error 401 for prompt `src/App.jsx`   |
| [App.css](https://github.com/mugabe-rob/frontend/blob/master/src/App.css)     | HTTP error 401 for prompt `src/App.css`   |
| [index.css](https://github.com/mugabe-rob/frontend/blob/master/src/index.css) | HTTP error 401 for prompt `src/index.css` |
| [main.jsx](https://github.com/mugabe-rob/frontend/blob/master/src/main.jsx)   | HTTP error 401 for prompt `src/main.jsx`  |

</details>

<details closed><summary>src.Components.ExploreMenu</summary>

| File                                                                                                             | Summary                                                                |
| ---                                                                                                              | ---                                                                    |
| [ExploreMenu.jsx](https://github.com/mugabe-rob/frontend/blob/master/src/Components/ExploreMenu/ExploreMenu.jsx) | HTTP error 401 for prompt `src/Components/ExploreMenu/ExploreMenu.jsx` |
| [ExploreMenu.css](https://github.com/mugabe-rob/frontend/blob/master/src/Components/ExploreMenu/ExploreMenu.css) | HTTP error 401 for prompt `src/Components/ExploreMenu/ExploreMenu.css` |

</details>

<details closed><summary>src.Components.Navbar</summary>

| File                                                                                              | Summary                                                      |
| ---                                                                                               | ---                                                          |
| [Navbar.jsx](https://github.com/mugabe-rob/frontend/blob/master/src/Components/Navbar/Navbar.jsx) | HTTP error 401 for prompt `src/Components/Navbar/Navbar.jsx` |
| [Navbar.css](https://github.com/mugabe-rob/frontend/blob/master/src/Components/Navbar/Navbar.css) | HTTP error 401 for prompt `src/Components/Navbar/Navbar.css` |

</details>

<details closed><summary>src.Components.Header</summary>

| File                                                                                              | Summary                                                      |
| ---                                                                                               | ---                                                          |
| [Header.css](https://github.com/mugabe-rob/frontend/blob/master/src/Components/Header/Header.css) | HTTP error 401 for prompt `src/Components/Header/Header.css` |
| [Header.jsx](https://github.com/mugabe-rob/frontend/blob/master/src/Components/Header/Header.jsx) | HTTP error 401 for prompt `src/Components/Header/Header.jsx` |

</details>

<details closed><summary>src.Components.FoodDisplay</summary>

| File                                                                                                             | Summary                                                                |
| ---                                                                                                              | ---                                                                    |
| [FoodDisplay.jsx](https://github.com/mugabe-rob/frontend/blob/master/src/Components/FoodDisplay/FoodDisplay.jsx) | HTTP error 401 for prompt `src/Components/FoodDisplay/FoodDisplay.jsx` |
| [FoodDisplay.css](https://github.com/mugabe-rob/frontend/blob/master/src/Components/FoodDisplay/FoodDisplay.css) | HTTP error 401 for prompt `src/Components/FoodDisplay/FoodDisplay.css` |

</details>

<details closed><summary>src.Components.AppDownload</summary>

| File                                                                                                             | Summary                                                                |
| ---                                                                                                              | ---                                                                    |
| [AppDownload.css](https://github.com/mugabe-rob/frontend/blob/master/src/Components/AppDownload/AppDownload.css) | HTTP error 401 for prompt `src/Components/AppDownload/AppDownload.css` |
| [AppDownload.jsx](https://github.com/mugabe-rob/frontend/blob/master/src/Components/AppDownload/AppDownload.jsx) | HTTP error 401 for prompt `src/Components/AppDownload/AppDownload.jsx` |

</details>

<details closed><summary>src.Components.LoginPopup</summary>

| File                                                                                                          | Summary                                                              |
| ---                                                                                                           | ---                                                                  |
| [LoginPopup.jsx](https://github.com/mugabe-rob/frontend/blob/master/src/Components/LoginPopup/LoginPopup.jsx) | HTTP error 401 for prompt `src/Components/LoginPopup/LoginPopup.jsx` |
| [LoginPopup.css](https://github.com/mugabe-rob/frontend/blob/master/src/Components/LoginPopup/LoginPopup.css) | HTTP error 401 for prompt `src/Components/LoginPopup/LoginPopup.css` |

</details>

<details closed><summary>src.Components.Footer</summary>

| File                                                                                              | Summary                                                      |
| ---                                                                                               | ---                                                          |
| [Footer.jsx](https://github.com/mugabe-rob/frontend/blob/master/src/Components/Footer/Footer.jsx) | HTTP error 401 for prompt `src/Components/Footer/Footer.jsx` |
| [Footer.css](https://github.com/mugabe-rob/frontend/blob/master/src/Components/Footer/Footer.css) | HTTP error 401 for prompt `src/Components/Footer/Footer.css` |

</details>

<details closed><summary>src.Components.Contact</summary>

| File                                                                                                 | Summary                                                        |
| ---                                                                                                  | ---                                                            |
| [Contact.css](https://github.com/mugabe-rob/frontend/blob/master/src/Components/Contact/Contact.css) | HTTP error 401 for prompt `src/Components/Contact/Contact.css` |
| [Contact.jsx](https://github.com/mugabe-rob/frontend/blob/master/src/Components/Contact/Contact.jsx) | HTTP error 401 for prompt `src/Components/Contact/Contact.jsx` |

</details>

<details closed><summary>src.Components.FoodItem</summary>

| File                                                                                                    | Summary                                                          |
| ---                                                                                                     | ---                                                              |
| [FoodItem.css](https://github.com/mugabe-rob/frontend/blob/master/src/Components/FoodItem/FoodItem.css) | HTTP error 401 for prompt `src/Components/FoodItem/FoodItem.css` |
| [FoodItem.jsx](https://github.com/mugabe-rob/frontend/blob/master/src/Components/FoodItem/FoodItem.jsx) | HTTP error 401 for prompt `src/Components/FoodItem/FoodItem.jsx` |

</details>

<details closed><summary>src.Pages.Cart</summary>

| File                                                                                   | Summary                                             |
| ---                                                                                    | ---                                                 |
| [Cart.css](https://github.com/mugabe-rob/frontend/blob/master/src/Pages/Cart/Cart.css) | HTTP error 401 for prompt `src/Pages/Cart/Cart.css` |
| [Cart.jsx](https://github.com/mugabe-rob/frontend/blob/master/src/Pages/Cart/Cart.jsx) | HTTP error 401 for prompt `src/Pages/Cart/Cart.jsx` |

</details>

<details closed><summary>src.Pages.PlaceOrder</summary>

| File                                                                                                     | Summary                                                         |
| ---                                                                                                      | ---                                                             |
| [PlaceOrder.jsx](https://github.com/mugabe-rob/frontend/blob/master/src/Pages/PlaceOrder/PlaceOrder.jsx) | HTTP error 401 for prompt `src/Pages/PlaceOrder/PlaceOrder.jsx` |
| [PlaceOrder.css](https://github.com/mugabe-rob/frontend/blob/master/src/Pages/PlaceOrder/PlaceOrder.css) | HTTP error 401 for prompt `src/Pages/PlaceOrder/PlaceOrder.css` |

</details>

<details closed><summary>src.Pages.Home</summary>

| File                                                                                   | Summary                                             |
| ---                                                                                    | ---                                                 |
| [Home.css](https://github.com/mugabe-rob/frontend/blob/master/src/Pages/Home/Home.css) | HTTP error 401 for prompt `src/Pages/Home/Home.css` |
| [Home.jsx](https://github.com/mugabe-rob/frontend/blob/master/src/Pages/Home/Home.jsx) | HTTP error 401 for prompt `src/Pages/Home/Home.jsx` |

</details>

<details closed><summary>src.context</summary>

| File                                                                                                | Summary                                                  |
| ---                                                                                                 | ---                                                      |
| [StoreContext.jsx](https://github.com/mugabe-rob/frontend/blob/master/src/context/StoreContext.jsx) | HTTP error 401 for prompt `src/context/StoreContext.jsx` |

</details>

---

##  Getting Started

***Requirements***

Ensure you have the following dependencies installed on your system:

* **JavaScript**: `version x.y.z`

###  Installation

1. Clone the frontend repository:

```sh
git clone https://github.com/mugabe-rob/frontend
```

2. Change to the project directory:

```sh
cd frontend
```

3. Install the dependencies:

```sh
npm install
```

###  Running frontend

Use the following command to run frontend:

```sh
node app.js
```

###  Tests

To execute tests, run:

```sh
npm test
```

---

##  Project Roadmap

- [X] `► INSERT-TASK-1`
- [ ] `► INSERT-TASK-2`
- [ ] `► ...`

---

##  Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/mugabe-rob/frontend/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/mugabe-rob/frontend/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/mugabe-rob/frontend/issues)**: Submit bugs found or log feature requests for Frontend.

<details closed>
    <summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone https://github.com/mugabe-rob/frontend
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

##  License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

##  Acknowledgments

- List any resources, contributors, inspiration, etc. here.

[**Return**](#-quick-links)

---