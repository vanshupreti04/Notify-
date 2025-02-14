# Notify - An Open-Source Notion Clone

An open-source Notion-like application with powerful features such as note-taking, live collaboration, GitHub sync, task management, and offline support.

## Built for FOSS Hackathon

### Team Members:
- **Vansh Upreti**
- **Yash Vardhan Ruia**
- **Yuvraj Singh Parihar**
- **Kushagra Srivastva**

## Features
- 📝 **Note-taking**
- 🔄 **Live collaboration**
- 🔗 **GitHub Sync**
- ✅ **Task Management**
- 📶 **Offline Support**
- 🌐 **Real-time WebSocket Communication**

## Tech Stack
### Frontend
- **React** (Vite + Tailwind CSS)
- **Various Open-Source UI Libraries**

### Backend
- **Node.js + Express**
- **MongoDB**
- **WebSockets**

## Getting Started

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (latest LTS version recommended)
- [MongoDB](https://www.mongodb.com/)

### Installation

#### 1️⃣ Clone the repository:
```sh
 git clone https://github.com/your-repo/notify.git
 cd notify
```

#### 2️⃣ Install dependencies:

```sh
cd frontend
npm install
```

#### 3️⃣ Setup Environment Variables
Create a `.env` file in the root directory and add:
```sh
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

#### 4️⃣ Run the development servers:

**Frontend (React + Vite)**
```sh
cd frontend
npm run dev
```

**Backend (Express + WebSockets)**
```sh
npm start
```

## Additional Dependencies
To enhance the UI and animation experience, install these:
```sh
npm install motion clsx tailwind-merge @tabler/icons-react
npm install gsap
```

## Tailwind CSS Setup
To set up Tailwind CSS, install it using:
```sh
npm install -D tailwindcss@3.4.17 postcss autoprefixer
```
Then initialize Tailwind:
```sh
npx tailwindcss init -p
```

Modify `tailwind.config.js`:
```js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## Contributing
We welcome contributions! Feel free to open issues and pull requests.

## Social Links
- 🌍 [GitHub Repository](https://github.com/your-repo/notify)
- 🔗 [LinkedIn](https://www.linkedin.com/in/your-profile)

## License
This project is licensed under the [MIT License](LICENSE).
