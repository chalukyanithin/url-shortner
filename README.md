# 📍 URL Shortner

A simple and lightweight **URL shortening web application** built with **Node.js**, **Express**, and **EJS** — allows you to shorten long URLs into concise ones that redirect to the original link.([GitHub][1])

---

## 🚀 Features

* Shorten long URLs into compact links
* Redirect short links to original URLs
* Built with Express and EJS templates
* Easily deployable with Docker
* Ideal starter project or portfolio demo

---

## 🧱 Tech Stack

| Technology     | Purpose                     |
| -------------- | --------------------------- |
| **Node.js**    | Backend runtime             |
| **Express.js** | Web framework               |
| **EJS**        | Templating engine           |
| **CSS**        | Styling                     |
| **Docker**     | Containerization (optional) |

---

## 📁 Folder Structure

```
controllers/       # business logic for URL routing
middlewares/       # custom middleware functions
models/            # schema & data logic
routes/            # API & web routes
services/          # helper utilities
views/             # frontend EJS views
public/            # static assets (CSS, JS)
server.js          # entrypoint
Dockerfile         # container instructions
.env               # environment configuration
```

---

## 🛠️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/chalukyanithin/url-shortner.git
cd url-shortner
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env` file in the project root:

```env
PORT=3000
DATABASE_URL=<your_db_connection_string>
```

*(Configure database as needed if your implementation stores URLs.)*

### 4. Run locally

```bash
npm start
```

Visit: `http://localhost:3000`

---

## 🚢 Deployment

### With Docker

Build the image:

```bash
docker build -t url-shortner .
```

Run container:

```bash
docker run -p 3000:3000 url-shortner
```

---

## 📌 How It Works

1. User enters a long URL on the homepage.
2. Server generates a short unique identifier.
3. Short URL redirects users to the original address.

URL shorteners take long URLs and assign a short alias to them for easier sharing and readability.([GitHub][2])

---

## 📦 API Endpoints

| Endpoint      | Method | Description              |
| ------------- | ------ | ------------------------ |
| `/`           | GET    | Homepage/form            |
| `/shorten`    | POST   | Create short URL         |
| `/:shortCode` | GET    | Redirect to original URL |

---

## ❤️ Contributing

Contributions, issues & feature requests are welcome!

1. Fork it
2. Create your feature branch: `git checkout -b feature/AwesomeFeature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/AwesomeFeature`
5. Open a Pull Request

---

## 🙌 Acknowledgements

Inspired by common URL shortener designs like TinyURL, Bit.ly and open source projects.

---

If you’d like, I can also **generate a badge section** (build status, npm version, license, etc.) to include at the top — just tell me which services you’re using!

[1]: https://github.com/topics/url-shortner?utm_source=chatgpt.com "url-shortner · GitHub Topics"
[2]: https://github.com/Vinelab/url-shortener/blob/master/README.md?utm_source=chatgpt.com "README.md - Vinelab/url-shortener - GitHub"
