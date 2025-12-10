# Angular Internationalization Project

A multilingual Angular application demonstrating internationalization (i18n) with **English, French, and Spanish** support. Users can switch languages dynamically on the frontend using a language switcher.

GitHub Repository: [https://github.com/ongunakaycom/Internationalization-in-Angular](https://github.com/ongunakaycom/Internationalization-in-Angular)

---

## Table of Contents

- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Building for Production](#building-for-production)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [Author](#author)
- [License](#license)

---

## About

This project is an Angular 19 application that showcases internationalization using Angular's `$localize` and translation files. The app supports dynamic language switching for English, French, and Spanish.

---

## Features

- Multilingual support: English (en), French (fr), Spanish (es)
- Language switcher in the UI
- Dynamic page content updates without page reload
- Ready-to-use translation files (`messages.xlf`, `messages.fr.xlf`, `messages.es.xlf`)
- Fully standalone Angular 19 setup
- Compatible with Angular `$localize` and i18n pipelines

---

## Installation

Make sure you have **Node.js** and **Yarn** installed. Then, clone the repo and install dependencies:

```bash
git clone https://github.com/ongunakaycom/Internationalization-in-Angular.git
cd Internationalization-in-Angular
yarn install
````

---

## Running the Application

Start the development server:

```bash
yarn start
```

The app will run at `http://localhost:3000`. Use the language buttons in the UI to switch between **English**, **Français**, and **Español**.

---

## Building for Production

To build the application for production:

```bash
yarn build
```

For localized builds:

```bash
ng build --localize
```

---

## Project Structure

```
├─ node_modules/
├─ public/
│  └─ favicon.ico
├─ src/
│  ├─ app/
│  │  ├─ services/language.service.ts
│  │  ├─ app.component.ts
│  │  ├─ app.component.html
│  │  └─ app.component.css
│  ├─ locale/
│  │  ├─ messages.xlf
│  │  ├─ messages.fr.xlf
│  │  └─ messages.es.xlf
│  └─ main.ts
├─ angular.json
├─ package.json
├─ tsconfig.json
└─ README.md
```

---

## Contributing

Feel free to open issues, submit pull requests, or suggest features. Contributions are always welcome!

---

## Author

# About Me

I'm Ongun Akay, a Senior Full-Stack Developer with expertise across various technologies.

- 👀 I specialize in full-stack development with extensive experience in frontend and backend technologies.
- 🌱 Currently, I'm sharpening my skills in advanced concepts of web development.
- 💞️ I’m always open to exciting collaborations and projects that challenge my abilities.
- 🌐 Visit my website: https://ongunakay.com
- 📫 You can reach me at [info@ongunakay.com](mailto:info@ongunakay.com)

---

## License

This project is licensed under the MIT License.

```