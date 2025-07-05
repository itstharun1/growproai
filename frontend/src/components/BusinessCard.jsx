import { useDispatch, useSelector } from "react-redux";
import { updateHeadline } from "../redux/businessSlice";
import { useState } from "react";

export default function BusinessCard() {
	const { name, location, rating, reviews, headline } = useSelector(
		(state) => state.business
	);
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(false);

	const regenerate = async () => {
		setLoading(true);
		try {
			const res = await fetch(
				`http://localhost:5000/regenerate-headline?name=${name}&location=${location}`
			);
			const data = await res.json();
			dispatch(updateHeadline(data.headline));
		} catch (err) {
			console.error("Failed to regenerate headline:", err);
		} finally {
			setLoading(false);
		}
	};

	if (!rating) return null;

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

			<div className="w-full max-w-xl mx-auto mt-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg p-6 sm:p-8 text-center">
				<h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 dark:text-white leading-snug">
					{headline}
				</h2>

				<p className="mt-3 text-gray-600 dark:text-gray-300 text-sm md:text-base">
					<span className="text-yellow-500 font-semibold text-lg">
						⭐ {rating}
					</span>
					<span className="mx-1">•</span>
					<span className="text-gray-500">{reviews} Reviews</span>
				</p>

				<button
					onClick={regenerate}
					disabled={loading}
					className={`mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm md:text-base font-semibold rounded-lg text-white transition duration-300
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
							Regenerating...
						</>
					) : (
						<>🔁 Regenerate Headline</>
					)}
				</button>
			</div>
		</>
	);
}
