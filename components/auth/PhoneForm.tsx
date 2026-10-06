"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase-client";
import { ErrorText, Heading, SubmitButton, inputClass } from "./AuthUI";

export default function PhoneForm({
	onSent,
}: {
	onSent: (phone: string) => void;
}) {
	const [phone, setPhone] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const handleSubmit = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		setError("");
		setLoading(true);

		const cleanPhone = phone.replace(/\s+/g, "");
		const { error } = await supabase.auth.signInWithOtp({
			phone: cleanPhone,
		});

		setLoading(false);

		if (error) {
			setError(error.message);
			return;
		}

		onSent(cleanPhone);
	};

	return (
		<>
			<Heading
				title="Log in to Northline"
				subtitle="Enter your phone number and we'll send you a one-time code."
			/>

			<form onSubmit={handleSubmit} className="mt-7 flex flex-col gap-4">
				<div className="flex flex-col gap-2">
					<label
						htmlFor="phone"
						className="text-sm font-medium text-zinc-400"
					>
						Phone number
					</label>
					<input
						id="phone"
						type="tel"
						required
						value={phone}
						onChange={e => setPhone(e.target.value)}
						placeholder="+91 98765 43210"
						className={inputClass}
					/>
				</div>

				<ErrorText message={error} />
				<SubmitButton
					loading={loading}
					label="Send OTP"
					loadingLabel="Sending..."
				/>
			</form>
		</>
	);
}
