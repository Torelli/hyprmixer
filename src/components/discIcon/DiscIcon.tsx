import * as React from "react"

const DiscIcon = (props) => (
	<svg className="absolute"
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		{...props}
	>
		<circle cx={12} cy={12} r={3} stroke="white" strokeWidth={0.8} />
		<path
			stroke="white"
			strokeLinecap="round"
			strokeWidth={0.8}
			d="M7.404 16.597a6.5 6.5 0 0 1 0-9.193m9.192 0a6.47 6.47 0 0 1 1.827 3.597m-1.827 5.596A6.496 6.496 0 0 0 17.768 15"
		/>
		<path
			stroke="white"
			strokeLinecap="round"
			strokeWidth={0.8}
			d="M7 3.338A9.954 9.954 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"
		/>
	</svg>
)
export default DiscIcon