import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import Image from 'next/image'

export default function Menu() {
	return (
		<Navbar>
			<Container>
				<Navbar.Brand href="/"><Image src="/logo.png" width={120} height={57} alt="Boomi logo" /></Navbar.Brand>
				<Navbar.Toggle aria-controls="boomi-main-navbar" />
				<Navbar.Collapse id="boomi-main-navbar">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

