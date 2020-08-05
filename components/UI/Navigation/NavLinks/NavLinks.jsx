export default function NavLinks({ links }) {
	return (
		<ul className="flex justify-between items-center space-x-4">
			{links.map(({ href, label }) => (
				<li key={`${href}${label}`}>
					<a href={href} className="bg-theme rounded-sm text-white p-2">
						{label}
					</a>
				</li>
			))}
		</ul>
	);
}