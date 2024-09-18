// src/configuration/menus/MainMenu.tsx

import { Home, About, Projects, Guides, CheatSheets, Articles, Contact } from '../../pages/PagesIndex';

const MainMenu = () => [
  { label: 'Home', path: '/', component: <Home /> },
  { label: 'About', path: '/about', component: <About /> },
  { label: 'Projects', path: '/projects', component: <Projects /> },
  { label: 'Guides', path: '/guides', component: <Guides /> },
  { label: 'CheatSheets', path: '/cheatsheets', component: <CheatSheets /> },
  { label: 'Articles', path: '/articles', component: <Articles /> },
  { label: 'Contact', path: '/contact', component: <Contact /> },
];

export default MainMenu;
