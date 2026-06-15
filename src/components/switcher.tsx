import { Link } from 'gatsby'
import React, { useEffect, useState } from 'react'

export default function Switcher() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    setIsDark(initialTheme === 'dark');
    document.documentElement.className = initialTheme;
  }, []);

  const changeTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTheme = e.target.checked ? 'dark' : 'light';
    setIsDark(e.target.checked);
    document.documentElement.className = newTheme;
    localStorage.setItem('theme', newTheme);
  };
  
  return (
    <div className="fixed top-1/4 -right-2 z-3">
      <span className="relative inline-block rotate-90">
        <input 
          type="checkbox" 
          className="checkbox opacity-0 absolute" 
          id="chk" 
          onChange={changeTheme}
          checked={isDark}
        />
        <label 
          className="label bg-slate-900 dark:bg-white shadow-sm dark:shadow-gray-800 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8" 
          htmlFor="chk"
        >
          <i className="uil uil-moon text-[20px] text-yellow-500"></i>
          <i className="uil uil-sun text-[20px] text-yellow-500"></i>
          <span className="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] left-[2px] w-7 h-7"></span>
        </label>
      </span>
    </div>
  )
}

export function Head() {
  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/7.4.47/css/materialdesignicons.min.css" integrity="sha512-/k658G6UsCvbkGRB3vPXpsPHgWeduJwiWGPCGS14IQw3xpr63AEMdA8nMYG2gmYkXitQxDTn6iiK/2fD4T87qA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"></link>
    </>
  )
}