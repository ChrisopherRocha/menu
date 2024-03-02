import Title from './Title';
import { useState } from 'react';
import Menu from './Menu';
import menu from './data.js'
import './App.css';
import Categories from './Categories.jsx';


const allCategories = ['all', ...new Set(menu.map((item) => item.category))]


function App() {
  const [menuItems, setMenuItems] = useState(menu)
  const [category, setCategory] = useState(allCategories)

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(menu)
      return;
    }
    const newItems = menu.filter((item) => item.category === category)
    setMenuItems(newItems)
  }

  return (
    <main>
      <section className='menu'>
        <Title text="Our Title" />
        <Categories category={category} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
