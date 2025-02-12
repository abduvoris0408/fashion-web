// eslint-disable-next-line no-unused-vars
import React from 'react'
import Cards from './components/Cards'
import Filter from './components/Filter'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

const App = () => {
	return (
		<div className='bg-gray-50 '>
			<Navbar />
			<Filter />
			<Cards />
			<Footer />
		</div>
	)
}

export default App
