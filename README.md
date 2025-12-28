📝 Paste App

A modern paste management web application built with React, Redux Toolkit, and Tailwind CSS.
It allows users to create, edit, search, copy, delete, and share text pastes with persistent storage using localStorage.


🚀 Features:-
✏️ Create new pastes
🔄 Edit existing pastes
🗑️ Delete pastes
🔍 Search pastes by title (real-time)
📋 Copy paste content to clipboard
🔗 Share paste using native browser share (with fallback)
💾 Persistent storage using localStorage
📱 Responsive and clean UI
🔔 Toast notifications for user actions



🛠️ Tech Stack:-
Frontend: React
State Management: Redux Toolkit
Routing: React Router
Styling: Tailwind CSS
Notifications: react-hot-toast
Icons: react-icons / lucide-react
Storage: Browser localStorage



Project Structure:-
src/
├── components/
│   ├── Home.jsx
│   ├── Paste.jsx
│   ├── ViewPastes.jsx
│   └── Navbar.jsx
├── redux/
│   └── pasteSlice.js
├── store.js
├── App.jsx
└── main.jsx


⚙️ Installation & Setup:-
Clone the repository
git clone https://github.com/your-username/paste-app.git

Navigate to the project folder
cd paste-app

Install dependencies
npm install

Run the app
npm run dev

The app will run at:
http://localhost:5173


🧠 How It Works:-
Redux Toolkit manages all paste data globally.
Pastes are stored in localStorage to persist data after refresh.
useSearchParams is used for edit mode.
useParams is used to view individual pastes.
UI updates automatically on state changes.


📌 Future Enhancements:-
🔐 User authentication
☁️ Cloud database support
🏷️ Tags for pastes
🌙 Dark mode
📄 Export pastes as files
🤝 Contributing

Contributions are welcome!
Feel free to fork the repository and submit a pull request.

GitHub: Mahindra021

⭐ If you like this project, don’t forget to star the repository!