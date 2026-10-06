import Greeting from "@/components/Greeting";
import UserMenu from "@/components/UserMenu";
import { Bricolage_Grotesque } from "next/font/google";
import Link from "next/link";

const display = Bricolage_Grotesque({
	subsets: ["latin"],
	weight: ["600", "700"],
	variable: "--font-display",
});

const GRADIENT = "linear-gradient(90deg, #6EE7D8, #4F8CFF)";

const navItems = [
	{ label: "Overview", active: true },
	{ label: "Projects", active: false },
	{ label: "Conversations", active: false },
	{ label: "Updates", active: false },
	{ label: "Team", active: false },
	{ label: "Settings", active: false },
];

const stats = [
	{ label: "Active projects", value: "12", note: "3 due this week" },
	{ label: "Open tasks", value: "48", note: "9 assigned to you" },
	{ label: "Unread threads", value: "7", note: "2 need a reply" },
	{ label: "Team online", value: "14", note: "across 5 time zones" },
];

const projects = [
	{
		name: "Product launch",
		owner: "Aarav",
		progress: 78,
		status: "On track",
	},
	{
		name: "Mobile redesign",
		owner: "Mina",
		progress: 45,
		status: "In progress",
	},
	{
		name: "Billing migration",
		owner: "Jonas",
		progress: 92,
		status: "On track",
	},
	{
		name: "Partner onboarding",
		owner: "Priya",
		progress: 23,
		status: "At risk",
	},
];

const activity = [
	{
		who: "Mina",
		what: "commented on Mobile redesign",
		when: "4m ago",
		color: "#6EE7D8",
	},
	{
		who: "Jonas",
		what: "completed Invoice export",
		when: "22m ago",
		color: "#4F8CFF",
	},
	{
		who: "Priya",
		what: "moved Partner onboarding to At risk",
		when: "1h ago",
		color: "#A78BFA",
	},
	{
		who: "Aarav",
		what: "scheduled Launch announcement",
		when: "3h ago",
		color: "#6EE7D8",
	},
	{
		who: "Sam",
		what: "joined the workspace",
		when: "Yesterday",
		color: "#4F8CFF",
	},
];

const bars = [40, 65, 52, 80, 58, 90, 72];
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const statusStyle: Record<string, string> = {
	"On track": "bg-[#6EE7D8]/10 text-[#6EE7D8]",
	"In progress": "bg-[#4F8CFF]/10 text-[#4F8CFF]",
	"At risk": "bg-[#A78BFA]/10 text-[#A78BFA]",
};

const card =
	"rounded-2xl border border-white/10 bg-[#101019]/80 shadow-2xl shadow-black/40 backdrop-blur-md";

const Page = () => {
	return (
		<div
			className={`${display.variable} relative flex min-h-screen overflow-hidden bg-[#0A0A0F] text-zinc-50`}
		>
			{/* Ambient gradient glow */}
			<div
				className="pointer-events-none absolute -top-40 right-[-15%] h-180 w-180 rounded-full opacity-30 blur-[130px]"
				style={{
					background:
						"radial-gradient(circle, #6EE7D8 0%, #4F8CFF 45%, transparent 70%)",
				}}
			/>
			<div
				className="pointer-events-none absolute bottom-[-25%] left-[-10%] h-130 w-130 rounded-full opacity-20 blur-[120px]"
				style={{
					background:
						"radial-gradient(circle, #4F8CFF 0%, transparent 70%)",
				}}
			/>

			{/* Sidebar */}
			<aside className="fixed inset-y-0 left-0 z-20 hidden h-screen w-64 flex-col border-r border-white/6 bg-white/2 px-5 py-7 backdrop-blur-sm md:flex">
				<Link
					href="/"
					className="px-3 text-2xl font-bold tracking-tight"
					style={{ fontFamily: "var(--font-display)" }}
				>
					Northline
				</Link>

				<nav className="mt-10 flex flex-col gap-1">
					{navItems.map(item => (
						<button
							key={item.label}
							className={`rounded-full px-4 py-2.5 text-left text-sm font-medium transition-colors ${
								item.active
									? "border border-zinc-700/70 bg-white/[0.07] text-zinc-50"
									: "border border-transparent text-zinc-400 hover:bg-white/4 hover:text-zinc-200"
							}`}
						>
							{item.label}
						</button>
					))}
				</nav>

				<div className="mt-auto rounded-2xl border border-white/10 bg-[#101019]/80 p-4">
					<p className="text-sm font-medium text-zinc-200">
						Invite your team
					</p>
					<p className="mt-1 text-xs leading-5 text-zinc-500">
						Add teammates to share projects and updates.
					</p>
					<button
						className="mt-4 w-full rounded-full px-4 py-2 text-sm font-semibold text-zinc-950 transition-opacity hover:opacity-90"
						style={{ background: GRADIENT }}
					>
						Invite people
					</button>
				</div>
			</aside>

			{/* Main */}
			<div className="relative z-10 flex min-w-0 flex-1 flex-col md:ml-64">
				{/* Top bar */}
				<header className="flex items-center justify-between gap-4 px-6 py-6 sm:px-10">
					<div>
						<h1
							className="text-3xl leading-tight tracking-tight sm:text-4xl"
							style={{
								fontFamily: "var(--font-display)",
								fontWeight: 700,
							}}
						>
							<Greeting />
						</h1>
						<p className="mt-1 text-sm text-zinc-400">
							Here&apos;s what&apos;s happening across your
							workspace today.
						</p>
					</div>
					<div className="flex items-center gap-3">
						<input
							placeholder="Search projects"
							className="hidden w-56 rounded-full border border-zinc-700/70 bg-white/3 px-5 py-2.5 text-sm text-zinc-200 placeholder:text-zinc-500 backdrop-blur-sm focus:border-zinc-500 focus:outline-none sm:block"
						/>
						<button
							className="rounded-full px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-opacity hover:opacity-90"
							style={{ background: GRADIENT }}
						>
							New project
						</button>
						<UserMenu />
					</div>
				</header>

				<main className="flex-1 space-y-6 px-6 pb-10 sm:px-10">
					{/* Stats */}
					<section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
						{stats.map(s => (
							<div key={s.label} className={`${card} p-5`}>
								<p className="text-sm text-zinc-400">
									{s.label}
								</p>
								<p
									className="mt-3 text-4xl tracking-tight"
									style={{
										fontFamily: "var(--font-display)",
										fontWeight: 700,
									}}
								>
									{s.value}
								</p>
								<p className="mt-2 text-xs text-zinc-500">
									{s.note}
								</p>
							</div>
						))}
					</section>

					<section className="grid gap-6 xl:grid-cols-[1.4fr_1fr]">
						{/* Projects */}
						<div className={`${card} p-6`}>
							<div className="flex items-center justify-between border-b border-white/6 pb-4">
								<span className="text-sm font-medium text-zinc-300">
									Projects
								</span>
								<button className="text-sm text-zinc-500 transition-colors hover:text-zinc-200">
									View all
								</button>
							</div>
							<div className="mt-5 space-y-5">
								{projects.map(p => (
									<div key={p.name}>
										<div className="flex items-center justify-between text-sm">
											<div>
												<span className="text-zinc-200">
													{p.name}
												</span>
												<span className="ml-3 text-zinc-500">
													{p.owner}
												</span>
											</div>
											<span
												className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyle[p.status]}`}
											>
												{p.status}
											</span>
										</div>
										<div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/6">
											<div
												className="h-full rounded-full"
												style={{
													width: `${p.progress}%`,
													background: GRADIENT,
												}}
											/>
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Activity */}
						<div className={`${card} p-6`}>
							<div className="border-b border-white/6 pb-4">
								<span className="text-sm font-medium text-zinc-300">
									Recent activity
								</span>
							</div>
							<div className="mt-5 space-y-4">
								{activity.map((a, i) => (
									<div
										key={i}
										className="flex items-start gap-3 text-sm"
									>
										<div
											className="mt-0.5 h-8 w-8 shrink-0 rounded-full border-2 border-[#101019]"
											style={{ background: a.color }}
										/>
										<div className="min-w-0 flex-1">
											<p className="text-zinc-300">
												<span className="font-medium text-zinc-50">
													{a.who}
												</span>{" "}
												{a.what}
											</p>
											<p className="mt-0.5 text-xs text-zinc-500">
												{a.when}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</section>

					{/* Weekly chart */}
					<section className={`${card} p-6`}>
						<div className="flex items-center justify-between border-b border-white/6">
							<span className="text-sm font-medium text-zinc-300">
								Tasks completed this week
							</span>
							<span className="rounded-full bg-[#6EE7D8]/10 px-3 py-1 text-xs font-medium text-[#6EE7D8]">
								+18% vs last week
							</span>
						</div>
						<div className="mt-8 flex h-44 items-end justify-between gap-3 sm:gap-6">
							{bars.map((h, i) => (
								<div
									key={days[i]}
									className="flex h-full flex-1 flex-col items-center justify-end gap-3"
								>
									<div
										className="w-full max-w-12 rounded-t-lg"
										style={{
											height: `${h}%`,
											background:
												"linear-gradient(180deg, #6EE7D8, #4F8CFF)",
											opacity: i === 5 ? 1 : 0.55,
										}}
									/>
									<span className="text-xs text-zinc-500">
										{days[i]}
									</span>
								</div>
							))}
						</div>
					</section>
				</main>
			</div>
		</div>
	);
};

export default Page;
