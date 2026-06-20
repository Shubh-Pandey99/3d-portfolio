<div align="center">

# 🚀 3D Interactive Developer Portfolio

![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

**An immersive, interactive 3D physics-based playground, featuring smooth animations and high-performance routing.**

👉 **Live Site:** [https://3d-portfolio-pi-lac-70.vercel.app](https://3d-portfolio-pi-lac-70.vercel.app)
👉 **Contact:** [shubhpandet@gmail.com](mailto:shubhpandet@gmail.com)

</div>

---

## ✨ Features

- **🎮 3D Interactive Physics Canvas**: A real-time 3D physics playground utilizing `@react-three/rapier` where visitors can drag and interact with custom-textured spheres representing core platform skills.
- **🎨 Warm Amber Glow & Premium UI Theme**: Redesigned from standard templates to feature a warm amber and orange glow theme, sleek dark modes, premium glassmorphism, and modern typography.
- **⚙️ Self-Healing Cloud & SRE Projects**: Showcases premium cloud infrastructure engineering and automation projects with dedicated tool tags, descriptions, and interactive external links.
- **⏱️ Interactive Smooth Scroll**: Implements `@gsap/react` and `ScrollTrigger` animations for fluid page transitions and rich visual section revealing.
- **👤 Custom 3D Avatar Ready**: Preconfigured to mount and render a custom 3D model/avatar (like Ready Player Me) with full dynamic camera tracking.

---

## ⚙️ Tech Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **3D Graphics**: [Three.js](https://threejs.org/) + [React Three Fiber (R3F)](https://docs.pmnd.rs/react-three-fiber/)
- **3D Physics**: [@react-three/rapier](https://github.com/pmnd/rapier-js)
- **Animations**: [GSAP (GreenSock)](https://gsap.com/) + `@gsap/react`
- **Styling**: Vanilla CSS (Premium ambient glows, responsive layout tokens)

---

## 🛠️ Getting Started & Local Setup

To run this project locally, ensure you have **Node.js** (v18 or higher) installed, then follow these steps:

### 1. Clone the Repository
```bash
git clone https://github.com/Shubh-Pandey99/3d-portfolio.git
cd 3d-portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run in Development Mode
```bash
npm run dev
```
Open your browser and navigate to **`http://localhost:5173/`** to view it live!

### 4. Build for Production
```bash
npm run build
```

---

## 👤 Customizing the 3D Avatar (Ready Player Me)

The portfolio supports custom 3D avatars. To customize the avatar to resemble yourself:

1. Visit **[Ready Player Me](https://readyplayer.me/)** and create a personalized avatar.
2. Customize the clothes, skin tone, hair, and download the `.glb` model.
3. Save your avatar file in the appropriate directory, and run the encryption utility if needed:
   ```bash
   node public/models/encrypt.cjs
   ```
4. Verify the model renders perfectly in the local environment!

---

## 📄 License & Usage Notice

This project is licensed under the **Personal Portfolio License (PPL) v1.0**. 

Please see the [LICENSE](LICENSE) file for full details. 

**Summary of Terms:**
- You are free to view, study, and draw inspiration from the code.
- Cloning, copying, or replicating the complete website design or experience directly for hosting, reposting with minor changes, or commercial usage is strictly prohibited.
- If you utilize parts of the codebase, proper attribution linking back to this repository and mentioning **Shubh Pandey** is required.
