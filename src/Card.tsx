import type { User } from "./UserType";

export default function Card({ user }: { user: User }) {
	const border = user.hasImgBorder ? "border-2" : "border-0";
	return (
		<article
			className={`flex flex-col gap-4 p-8 ${user.backgroundColor} h-full w-full rounded-lg shadow-2xl/30`}
		>
			<header className="flex items-center gap-[17px]">
				<img
					src={user.imgURL}
					width="28px"
					height="28px"
					className={`rounded-full ${border} ${user.backgroundColor}`}
				/>
				<div>
					<h2 className={`text-preset-2 ${user.colorPalette[0]}`}>
						{user.name}
					</h2>
					<p className={`text-preset-4 mt-1 ${user.colorPalette[1]}`}>
						{user.status}
					</p>
				</div>
			</header>
			<section>
				<h1 className={`text-preset-1 ${user.colorPalette[2]}`}>
					{user.testimonial}
				</h1>
				<blockquote className={`text-preset-3 mt-4 ${user.colorPalette[3]}`}>
					"{user.story}"
				</blockquote>
			</section>
		</article>
	);
}
