import BusinessForm from "./components/BusinessForm.jsx";
import BusinessCard from "./components/BusinessCard.jsx";

function App() {
	return (
		<div className="min-h-screen w-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 px-4 sm:px-6 lg:px-16">
			{/* Header */}
			<header className="py-10 max-w-screen-xl mx-auto w-full">
				<div className="text-center">
					<h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-white tracking-tight">
						Local Business Dashboard
					</h1>
					<p className="mt-2 text-gray-600 dark:text-gray-300 text-base md:text-lg">
						Manage and grow your local presence with AI.
					</p>
				</div>
			</header>

			{/* Main content */}
			<main className="flex flex-col gap-12 pb-20 w-full max-w-screen-md mx-auto">
				<BusinessForm />
				<BusinessCard />
			</main>
		</div>
	);
}

export default App;
