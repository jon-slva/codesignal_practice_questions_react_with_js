import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import MainNav from './components/MainNav/MainNav'
import PracticeFilesystemFrontendQuestion from './questions/PracticeFilesystemFrontendQuestion/PracticeFilesystemFrontendQuestion'

function App() {

	return (
		<>
			<BrowserRouter>
				<MainNav />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/filesystem-frontend-question" element={<PracticeFilesystemFrontendQuestion />} />
					{/* <Route path="/about" element={<About />} /> */}
					{/* <Route path="/services" element={<Services />} /> */}
					{/* <Route path="/contact" element={<Contact />} /> */}
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
