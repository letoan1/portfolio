import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FiDribbble } from 'react-icons/fi'

export default function HeaderSocials() {
  return (
	<div className="header__socials">
		<a href="https://www.linkedin.com/in/l%C3%AA-v%C4%83n-to%E1%BA%A3n-b87a70249/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
		<a href="https://github.com/letoan1" target="_blank" rel="noreferrer"><FaGithub /></a>
		<a href="https://dribbble.com" target="_blank" rel="noreferrer"><FiDribbble /></a>
	</div>
  )
}
