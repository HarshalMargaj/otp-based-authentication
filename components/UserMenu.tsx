"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase-client";

export default function UserMenu() {
	const router = useRouter();
	const [name, setName] = useState("");
	const [open, setOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		supabase.auth.getSession().then(({ data }) => {
			setName(data.session?.user.user_metadata?.name ?? "");
		});

		const onClick = (e: MouseEvent) => {
			if (ref.current && !ref.current.contains(e.target as Node)) {
				setOpen(false);
			}
		};
		document.addEventListener("mousedown", onClick);
		return () => document.removeEventListener("mousedown", onClick);
	}, []);

	const handleLogout = async () => {
		await supabase.auth.signOut();
		router.replace("/sign-in");
		router.refresh();
	};

	return (
		<div ref={ref} className="relative">
			<button
				onClick={() => setOpen(o => !o)}
				className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#101019] text-sm font-semibold text-zinc-950"
				style={{ background: "#A78BFA" }}
			>
				{name.charAt(0).toUpperCase() || "U"}
			</button>

			{open && (
				<div className="absolute right-0 top-12 z-30 w-56 rounded-2xl border border-white/10 bg-[#101019]/95 p-2 shadow-2xl shadow-black/40 backdrop-blur-md">
					<p className="truncate px-3 py-2 text-sm font-medium text-zinc-200">
						{name || "Signed in"}
					</p>
					<div className="my-1 h-px bg-white/6" />
					<button
						onClick={handleLogout}
						className="w-full rounded-xl px-3 py-2 text-left text-sm font-medium text-zinc-400 transition-colors hover:bg-white/5 hover:text-zinc-50"
					>
						Log out
					</button>
				</div>
			)}
		</div>
	);
}
