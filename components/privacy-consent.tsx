'use client'

import { useEffect, useState } from 'react'

export default function PrivacyConsent() {
  const [showConsent, setShowConsent] = useState(false)
  const [hasAgreed, setHasAgreed] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('aerion-privacy-consent')
    if (!consent) {
      setShowConsent(true)
    }
  }, [])

  const handleAgree = () => {
    localStorage.setItem('aerion-privacy-consent', 'agreed')
    setShowConsent(false)
  }

  if (!showConsent) {
    return null
  }

  return (
    <div className="privacy-overlay">
      <div className="privacy-modal">
        <div className="privacy-modal-header">
          <p className="eyebrow">PRIVACY & DATA PROTECTION</p>
          <h2>
            Welcome to <span>A</span>ERION<span className="dot">.</span>
          </h2>
        </div>

        <div className="privacy-modal-body">
          <p>
            By continuing to use this website, we want to ensure you understand our Privacy Policy
            and how we handle your personal information.
          </p>

          <p>
            Please review our Privacy Policy to learn about what information we collect, how we use
            it, and your rights under applicable law.
          </p>

          <a href="/privacy-policy" className="privacy-link" target="_blank" rel="noopener noreferrer">
            Read the full Privacy Policy
          </a>
        </div>

        <div className="privacy-modal-footer">
          <label className="privacy-checkbox">
            <input
              type="checkbox"
              checked={hasAgreed}
              onChange={(e) => setHasAgreed(e.target.checked)}
            />
            <span>I have read and agree to the Privacy Policy</span>
          </label>

          <button
            className="primary-cta light"
            onClick={handleAgree}
            disabled={!hasAgreed}
          >
            Agree & Continue
          </button>
        </div>
      </div>
    </div>
  )
}
