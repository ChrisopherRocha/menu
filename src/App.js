import Title from './Title';
import { useState } from 'react';
import Menu from './Menu';
import menu from './data.js'
import './App.css';


function App() {
  const [menuItems, setMenuItems] = useState(menu)
  return (
    <main>
      <section className='menu'>
        <Title text="Our Title" />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
