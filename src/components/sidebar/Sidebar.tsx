"use client";

import Image from "next/image";
import { atomWithStorage } from "jotai/utils";
import { useAtom } from "jotai";
import { RiMenuUnfoldLine, RiMenuFoldLine } from "react-icons/ri";
import clsx from "clsx";

const minimizeAtom = atomWithStorage("SIDEBAR_MINIMIZE", false);

export default function Sidebar() {
	const [isMinimized, setMinimize] = useAtom(minimizeAtom);
	return (
		<aside
			className={clsx(
				"flex h-auto flex-shrink-0 flex-col border-r",
				isMinimized ? "w-16" : "w-fit",
			)}
		>
			<header className="h-20">
				{isMinimized ? (
					<Image
						className="m-1.5"
						src="/assets/nats-icon-color.svg"
						alt="logo"
						width="52"
						height="52"
					/>
				) : (
					<Image
						className="m-1"
						src="/assets/nats-horizontal-color.svg"
						alt="logo"
						width="250"
						height="62"
					/>
				)}
			</header>

			<nav className="flex flex-col px-5 py-5">
				<button
					type="button"
					className="ml-auto block"
					onClick={() => setMinimize((prev) => !prev)}
				>
					{isMinimized ? (
						<RiMenuUnfoldLine className="h-6 w-6" />
					) : (
						<RiMenuFoldLine className="h-6 w-6" />
					)}
				</button>
			</nav>
		</aside>
	);
}
