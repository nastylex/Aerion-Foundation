'use client'

import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('aerion-theme')
    const initialTheme = savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : 'dark'
    
    setTheme(initialTheme)
    document.documentElement.setAttribute('data-theme', initialTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('aerion-theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  if (!mounted) {
    return (
      <label className="switch-button" htmlFor="theme-switch">
        <div className="switch-outer">
          <input id="theme-switch" type="checkbox" disabled />
          <div className="button">
            <span className="button-toggle"></span>
            <span className="button-indicator"></span>
          </div>
        </div>
      </label>
    )
  }

  return (
    <label className="switch-button" htmlFor="theme-switch">
      <div className="switch-outer">
        <input
          id="theme-switch"
          type="checkbox"
          checked={theme === 'light'}
          onChange={toggleTheme}
          aria-label="Toggle theme"
        />
        <div className="button">
          <span className="button-toggle"></span>
          <span className="button-indicator"></span>
        </div>
      </div>
    </label>
  )
}
