import "./App.css";
import Card from "./Card";
import { users } from "./users";

function App() {
	return (
		<main className="flex items-center justify-center px-[35px] py-[73px] md:px-[60px] md:pt-[83px] md:pb-[113px] xl:pt-[229px] xl:pb-[218px]">
			<div className="grid auto-rows-min grid-cols-1 gap-8 md:grid-cols-2 md:grid-rows-4 xl:max-h-[582px] xl:max-w-[1114px] xl:grid-cols-4 xl:grid-rows-2">
				{users.map((user, index) => (
					<div
						className={
							(index === 1 || index === 2 ? "md:col-span-1" : "md:col-span-2") +
							" " +
							(index === 4 &&
								"xl:col-span-1 xl:col-start-4 xl:row-span-2 xl:row-start-1")
						}
					>
						<Card key={index} user={user} />
					</div>
				))}
			</div>
		</main>
	);
}

export default App;
