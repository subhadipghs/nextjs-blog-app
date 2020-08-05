export default function Card({ title, imgsrc, contents, tags, children, ...rest }) {

	const pillButtonColors = ["blue", "red", "gray", "for"];

	return (
		<div style={{ width: '23%', backgroundColor: '#aaaaaa77'}} className="flex flex-wrap justify-start flex-col items-start shadow-sm rounded-md border-gray-200 p-3 m-3">
			<div className="image w-full h-42">
				<img src={imgsrc} />
			</div>
			<div className="text-left my-2 text-xl font-bold">
				<h1>{title}</h1>
			</div>
			<div className="py-2">
				{contents}
			</div>
			<div className="tags flex flex-wrap m-2 justify-start p-2">
				{tags.slice(0, 3).map(tag => {
					return (
						<div key={tag} className="bg-red-400 text-white m-1 px-4 py-1 rounded-full border-gray-200">
							{`#${tag}`}
						</div>
					);
				})}
			</div>
		</div>
	)
}
