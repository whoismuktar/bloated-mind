import { useState } from "react";
import { FaBeer } from 'react-icons/fa';

export default function Sidenav () {
    const [nav, setNav] = useState([
        {
            icon: "ball",
            title: "menu 1"
        }
    ])
    return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}