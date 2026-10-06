"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase-client";

export default function Greeting() {
	const [name, setName] = useState("");

	useEffect(() => {
		supabase.auth.getSession().then(({ data }) => {
			setName(data.session?.user.user_metadata?.name ?? "");
		});
	}, []);

	return <>Good morning{name && `, ${name}`}</>;
}
