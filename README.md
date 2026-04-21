# ChuckJokesVue - Task 10

## 📌 Description
This project is a Vue.js application developed as part of an academic activity.  
The application displays a list of Chuck Norris jokes using reusable Vue components, props, and a responsive design with Bootstrap.

## 🚀 Features
- Vue 3 application using CDN
- Custom reusable component `<chuck-card>`
- Data passed between components using **props**
- Dynamic rendering using `v-for`
- Bootstrap cards with image and text
- Responsive layout:
  - 3 cards per row on large screens
  - 2 cards per row on medium screens
  - 1 card per row on small screens
- Random images loaded from an external source

## 🧩 Technologies Used
- HTML5
- CSS3
- JavaScript
- Vue.js
- Bootstrap 5

## 🛠️ How it Works
- A Vue instance contains an array called `chuck`
- Each object includes:
  - `icon_url` (image)
  - `value` (joke text)
- The `<chuck-card>` component receives this data using props
- The cards are generated dynamically using `v-for`
- Bootstrap grid system ensures responsiveness across devices

## 📱 Responsive Design
The application adapts automatically:
- Large screens → 3 cards per row
- Medium screens → 2 cards per row
- Small screens → 1 card per row

## 🎨 UI Design
- Custom lilac gradient background
- Smooth hover effects on cards
- Clean and modern card layout
- Images loaded from https://picsum.photos/

## 👩‍💻 Author
Nahomi Mercado Loaiza
