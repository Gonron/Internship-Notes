import React from 'react'
import Rainbow from '../hoc/Rainbow'

const About = props => {
	return (
		<div className="container">
			<h4 className="center">About</h4>
			<p>
				Duis tempor Lorem aliqua pariatur mollit reprehenderit est incididunt excepteur esse
				incididunt dolore voluptate ad. Duis laboris cillum cillum sint excepteur Lorem
				adipisicing proident in sint consectetur ad ullamco. Veniam irure sunt magna eiusmod
				esse aliqua quis voluptate commodo voluptate incididunt quis nisi consectetur. Anim
				id proident do mollit commodo tempor sunt elit fugiat. Lorem magna non anim nisi
				fugiat eiusmod ad aliquip incididunt ullamco sint consectetur. Adipisicing sit
				dolore id eiusmod proident cupidatat sint reprehenderit veniam mollit amet et.
				Tempor cillum fugiat quis elit eiusmod pariatur. Proident cupidatat ipsum sint velit
				deserunt id. Ipsum esse anim veniam officia sint fugiat irure enim.
			</p>
		</div>
	)
}
// super charged component
export default Rainbow(About)
