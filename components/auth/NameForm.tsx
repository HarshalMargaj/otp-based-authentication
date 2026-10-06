"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase-client";
import { ErrorText, Heading, SubmitButton, inputClass } from "./AuthUI";

export default function NameForm({ onSaved }: { onSaved: () => void }) {
	const [name, setName] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const handleSubmit = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		setError("");
		setLoading(true);

		const { error } = await supabase.auth.updateUser({
			data: { name: name.trim() },
		});

		setLoading(false);

		if (error) {
			setError(error.message);
			return;
		}

		onSaved();
	};

	return (
		<>
			<Heading
				title="What should we call you?"
				subtitle="We'll use this to personalise your dashboard."
			/>

			<form onSubmit={handleSubmit} className="mt-7 flex flex-col gap-4">
				<div className="flex flex-col gap-2">
					<label
						htmlFor="name"
						className="text-sm font-medium text-zinc-400"
					>
						Your name
					</label>
					<input
						id="name"
						type="text"
						required
						autoFocus
						value={name}
						onChange={e => setName(e.target.value)}
						placeholder="Harshal"
						className={inputClass}
					/>
				</div>

				<ErrorText message={error} />
				<SubmitButton
					loading={loading}
					label="Continue"
					loadingLabel="Saving..."
				/>
			</form>
		</>
	);
}
