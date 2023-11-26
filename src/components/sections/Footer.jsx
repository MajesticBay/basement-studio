import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div className="footer">
      <Link className="footer__link" to="/privacy">Privacy Policy & Cookies Statement</Link>
      <Link className="footer__link" to="/terms">Website Terms Of Use</Link>
    </div>
  )
}
