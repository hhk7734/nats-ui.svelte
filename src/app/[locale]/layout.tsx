import Sidebar from "@/components/sidebar/Sidebar";

export default function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex">
			<Sidebar />
			<main>{children}</main>
		</div>
	);
}
