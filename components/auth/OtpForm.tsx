"use client";

import { SetStateAction, useState } from "react";
import { supabase } from "@/lib/supabase-client";
import { ErrorText, Heading, SubmitButton, inputClass } from "./AuthUI";

export default function OtpForm({
	phone,
	setStep,
	onBack,
	goToDashboard,
}: {
	phone: string;
	setStep: React.Dispatch<SetStateAction<"phone" | "otp" | "name">>;
	onBack: () => void;
	goToDashboard: () => void;
}) {
	const [otp, setOtp] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const handleSubmit = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		setError("");
		setLoading(true);

		const { data, error } = await supabase.auth.verifyOtp({
			phone,
			token: otp,
			type: "sms",
		});

		setLoading(false);

		if (error) {
			setError("Incorrect code, please try again.");
			return;
		}

		if (data.user?.user_metadata?.name) {
			goToDashboard();
		} else {
			setStep("name");
		}
	};

	return (
		<>
			<Heading
				title="Enter your code"
				subtitle={
					<>
						We sent a 6-digit code to{" "}
						<span className="text-zinc-300">{phone}</span>.
					</>
				}
			/>

			<form onSubmit={handleSubmit} className="mt-7 flex flex-col gap-4">
				<div className="flex flex-col gap-2">
					<label
						htmlFor="otp"
						className="text-sm font-medium text-zinc-400"
					>
						6-digit code
					</label>
					<input
						id="otp"
						type="text"
						inputMode="numeric"
						maxLength={6}
						required
						value={otp}
						onChange={e => setOtp(e.target.value)}
						placeholder="123456"
						className={`${inputClass} text-center text-xl tracking-[0.5em] placeholder:tracking-normal`}
					/>
				</div>

				<ErrorText message={error} />
				<SubmitButton
					loading={loading}
					label="Verify"
					loadingLabel="Verifying..."
				/>

				<button
					type="button"
					onClick={onBack}
					className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-300"
				>
					Use a different number
				</button>
			</form>
		</>
	);
}
