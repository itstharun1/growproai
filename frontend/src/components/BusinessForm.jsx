import { useState } from "react";
import { useDispatch } from "react-redux";
import { setBusinessData } from "../redux/businessSlice";

export default function BusinessForm() {
	const dispatch = useDispatch();
	const [name, setName] = useState("");
	const [location, setLocation] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!name || !location) return;
		setLoading(true);
		try {
			const res = await fetch("http://localhost:5000/business-data", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ name, location }),
			});
			const data = await res.json();
			dispatch(setBusinessData({ name, location, ...data }));
		} catch (err) {
			console.error("Failed to fetch business data:", err);
		} finally {
			setName("");
			setLocation("");
			setLoading(false);
		}
	};

	return (
		<>
			{/* Full-page loading overlay */}
			{loading && (
				<div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
					<svg
						className="animate-spin h-10 w-10 text-white"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
					>
						<circle
							className="opacity-25"
							cx="12"
							cy="12"
							r="10"
							stroke="currentColor"
							strokeWidth="4"
						></circle>
						<path
							className="opacity-75"
							fill="currentColor"
							d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
						></path>
					</svg>
				</div>
			)}

			<form
				onSubmit={handleSubmit}
				className="w-full max-w-xl mx-auto mt-10 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col gap-5"
			>
				<h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
					Enter Business Details
				</h2>

				<input
					type="text"
					placeholder="Business Name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>

				<input
					type="text"
					placeholder="Location"
					value={location}
					onChange={(e) => setLocation(e.target.value)}
					className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>

				<button
					type="submit"
					disabled={loading}
					className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm md:text-base font-semibold rounded-lg text-white transition duration-300
						${
							loading
								? "bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 cursor-not-allowed"
								: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-90"
						}`}
				>
					{loading ? (
						<>
							<svg
								className="animate-spin h-5 w-5 text-white"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
							>
								<circle
									className="opacity-25"
									cx="12"
									cy="12"
									r="10"
									stroke="currentColor"
									strokeWidth="4"
								></circle>
								<path
									className="opacity-75"
									fill="currentColor"
									d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
								></path>
							</svg>
							Submitting...
						</>
					) : (
						<>🚀 Submit</>
					)}
				</button>
			</form>
		</>
	);
}
