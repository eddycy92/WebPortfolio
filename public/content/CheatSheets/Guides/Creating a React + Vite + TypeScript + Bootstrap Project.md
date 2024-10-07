### **Vite + React + TypeScript + Bootstrap Cheatsheet**

---

#### **Initialize Project**

- `npm create vite@latest <project-name> --template react-ts`
  - ***Definition:*** Initializes a new Vite project with React and TypeScript template.
  - ***Tags:*** #vite #react #typescript

- `cd <project-name>`
  - ***Definition:*** Changes the directory to your newly created project.
  - ***Tags:*** #npm #navigation

---

#### **Install Dependencies**

- `npm install`
  - ***Definition:*** Installs all the project dependencies listed in `package.json`.
  - ***Tags:*** #npm #dependencies

- `npm install bootstrap`
  - ***Definition:*** Installs Bootstrap for styling in your project.
  - ***Tags:*** #bootstrap #css

- `npm install react-icons`
  - ***Definition:*** Installs `react-icons` to use popular icons in your React components.
  - ***Tags:*** #react #icons

---

#### **Configure TypeScript**

- `import 'bootstrap/dist/css/bootstrap.min.css';`
  - ***Definition:*** Import Bootstrap CSS in your `src/main.tsx` or entry file.
  - ***Tags:*** #typescript #bootstrap #css

- `{
    "compilerOptions": {
      "jsx": "react-jsx"
    }
  }`
  - ***Definition:*** Ensures TypeScript is configured to handle React JSX in `tsconfig.json`.
  - ***Tags:*** #typescript #jsx

---

#### **Vite Server Configuration**

- `import { defineConfig } from 'vite';
   import react from '@vitejs/plugin-react';

   export default defineConfig({
     plugins: [react()],
     server: {
       host: true,
       port: 5173,
       open: true,
     },
   });`
  - ***Definition:*** Configures Vite to be accessible on all network interfaces and automatically opens the browser when the server starts.
  - ***Tags:*** #vite #configuration

---

#### **Running the Development Server**

- `npm run dev`
  - ***Definition:*** Starts the Vite development server, allowing you to view your project in the browser.
  - ***Tags:*** #vite #development

- `npm run dev -- --host`
  - ***Definition:*** Starts the Vite server with network exposure, making it accessible from other devices on the same network.
  - ***Tags:*** #vite #networking

---

#### **Troubleshooting**

- **Issue:**
