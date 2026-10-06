import { Bricolage_Grotesque } from "next/font/google";
import Link from "next/link";

const display = Bricolage_Grotesque({
	subsets: ["latin"],
	weight: ["600", "700"],
	variable: "--font-display",
});

export default function Home() {
	return (
		<div
			className={`${display.variable} relative flex min-h-screen flex-col overflow-hidden bg-[#0A0A0F] text-zinc-50`}
		>
			{/* Ambient gradient glow */}
			<div
				className="pointer-events-none absolute -top-40 right-[-15%] h-[720px] w-[720px] rounded-full opacity-40 blur-[130px]"
				style={{
					background:
						"radial-gradient(circle, #6EE7D8 0%, #4F8CFF 45%, transparent 70%)",
				}}
			/>
			<div
				className="pointer-events-none absolute bottom-[-25%] left-[-10%] h-[520px] w-[520px] rounded-full opacity-25 blur-[120px]"
				style={{
					background:
						"radial-gradient(circle, #4F8CFF 0%, transparent 70%)",
				}}
			/>

			{/* Nav */}
			<header className="relative z-10 flex items-center justify-between px-8 py-7 sm:px-14">
				<span
					className="text-2xl font-bold tracking-tight text-zinc-50"
					style={{ fontFamily: "var(--font-display)" }}
				>
					Northline
				</span>
				<Link href={"/sign-in"}>
					<button className="rounded-full border border-zinc-700/70 bg-white/[0.03] px-6 py-2.5 text-sm font-medium text-zinc-200 backdrop-blur-sm transition-colors hover:border-zinc-500 hover:bg-white/[0.07]">
						Log in
					</button>
				</Link>
			</header>

			{/* Hero */}
			<main className="relative z-10 grid flex-1 items-center gap-16 px-8 py-16 sm:px-14 lg:grid-cols-[1.1fr_0.9fr] lg:py-0">
				<div className="max-w-2xl">
					<h1
						className="text-[3.25rem] leading-[1.05] tracking-tight text-zinc-50 sm:text-7xl"
						style={{
							fontFamily: "var(--font-display)",
							fontWeight: 700,
						}}
					>
						Stay in sync, wherever your team works.
					</h1>
					<p className="mt-7 max-w-md text-xl leading-8 text-zinc-400">
						Northline brings your projects, conversations, and
						updates into one place, so nothing gets lost between
						tools or time zones.
					</p>

					<div className="mt-11 flex flex-wrap items-center gap-4">
						<button
							className="rounded-full px-7 py-3.5 text-base font-semibold text-zinc-950 transition-opacity hover:opacity-90"
							style={{
								background:
									"linear-gradient(90deg, #6EE7D8, #4F8CFF)",
							}}
						>
							Create your workspace
						</button>
						<button className="rounded-full border border-zinc-700/70 px-7 py-3.5 text-base font-medium text-zinc-300 transition-colors hover:border-zinc-500 hover:text-zinc-50">
							See how it works
						</button>
					</div>

					<p className="mt-9 text-sm text-zinc-500">
						No credit card required. Set up in under two minutes.
					</p>
				</div>

				{/* Floating preview card */}
				<div className="relative hidden lg:block">
					<div className="absolute inset-0 -m-6 rounded-[32px] border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm" />
					<div className="relative rounded-2xl border border-white/10 bg-[#101019]/80 p-6 shadow-2xl shadow-black/40 backdrop-blur-md">
						<div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
							<span className="text-sm font-medium text-zinc-300">
								Product launch
							</span>
							<span className="rounded-full bg-[#6EE7D8]/10 px-3 py-1 text-xs font-medium text-[#6EE7D8]">
								On track
							</span>
						</div>
						<div className="mt-5 space-y-4">
							{[
								{ name: "Design review", status: "Done" },
								{ name: "Beta rollout", status: "In progress" },
								{
									name: "Launch announcement",
									status: "Scheduled",
								},
							].map(row => (
								<div
									key={row.name}
									className="flex items-center justify-between text-sm"
								>
									<span className="text-zinc-300">
										{row.name}
									</span>
									<span className="text-zinc-500">
										{row.status}
									</span>
								</div>
							))}
						</div>
						<div className="mt-6 flex -space-x-2">
							{["#6EE7D8", "#4F8CFF", "#A78BFA"].map((c, i) => (
								<div
									key={i}
									className="h-8 w-8 rounded-full border-2 border-[#101019]"
									style={{ background: c }}
								/>
							))}
							<div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#101019] bg-zinc-800 text-[11px] font-medium text-zinc-400">
								+4
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
