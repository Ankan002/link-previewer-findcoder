# Link Previews

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=whitev)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Recoil](https://img.shields.io/badge/-Recoil-%233577E5?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

## AIM

To display a nice looking container while that shows various meta data like title, url etc just like it happens in case of Whatsapp or Facebook or any other social media sites.

## Technologies used

- NodeJS
- NextJS
- Recoil
- Typescript
- TailwindCSS
- Link Preview JS
- Github
- Vercel

## How did I build it ?

- First of all I built a backend API with the help of NEXT API and Link Preview JS that helps me scrape meta tags. This API returns a JSON object conatining the following details:

  - Site URL
  - Site Title
  - Site Favicon
  - Site Description

- The above mentioned API takes the requested URL via the body and Accepts a JSON object.

- Now I consumed the data given to me from the backend via a JSON response and displayed the data in the frontend.

- In the frontend part of the things... I am taking the URL via a Text Input and calling the API with the URL in the body of the POST request.

- Finally to add two cherries on the top I have added two eatures:

  - A skeleton loader tht depicts the loading state while the backend query is being sent.

  - A light and dark mode option so that every user can adjust according to their vission preferences.

## Screenshots

![light mode]("https://github.com/Ankan002/link-previewer-findcoder/blob/main/assets/screenshots/light-scr.png")

![dark mode]("https://github.com/Ankan002/link-previewer-findcoder/blob/main/assets/screenshots/src-dark.png")

![light result]("https://github.com/Ankan002/link-previewer-findcoder/blob/main/assets/screenshots/light-result.png")

![dark result]("https://github.com/Ankan002/link-previewer-findcoder/blob/main/assets/screenshots/dark-result.png")
