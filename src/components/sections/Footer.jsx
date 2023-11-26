import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div className="footer">
      <a href="/privacy" className="footer__link">Privacy Policy & Cookies Statement</a>
      <Link className="footer__link" to="/terms">Website Terms Of Use</Link>
    </div>
  )
}
