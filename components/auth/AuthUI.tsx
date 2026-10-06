import type { ReactNode } from "react";

export const inputClass =
	"w-full rounded-xl border border-zinc-700/70 bg-white/[0.03] px-4 py-3.5 text-base text-zinc-50 placeholder:text-zinc-500 outline-none transition-colors focus:border-[#6EE7D8]/60 focus:bg-white/[0.05]";

export function Heading({
	title,
	subtitle,
}: {
	title: string;
	subtitle: ReactNode;
}) {
	return (
		<>
			<h1
				className="text-3xl tracking-tight text-zinc-50"
				style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
			>
				{title}
			</h1>
			<p className="mt-2 text-base text-zinc-400">{subtitle}</p>
		</>
	);
}

export function ErrorText({ message }: { message: string }) {
	if (!message) return null;
	return <p className="text-sm text-red-400">{message}</p>;
}

export function SubmitButton({
	loading,
	label,
	loadingLabel,
}: {
	loading: boolean;
	label: string;
	loadingLabel: string;
}) {
	return (
		<button
			type="submit"
			disabled={loading}
			className="mt-2 w-full rounded-xl py-3.5 text-base font-semibold text-zinc-950 transition-opacity hover:opacity-90 disabled:opacity-60"
			style={{ background: "linear-gradient(90deg, #6EE7D8, #4F8CFF)" }}
		>
			{loading ? loadingLabel : label}
		</button>
	);
}
