import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import LandPlot from './components/LandPlot/LandPlot'

const App = () => {
	return (
		<>
			<Header />
			<main className='wrapper'>

				<LandPlot />

			</main>
			<Footer />
		</>
	)
}

export default App