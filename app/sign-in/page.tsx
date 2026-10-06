"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Bricolage_Grotesque } from "next/font/google";
import PhoneForm from "@/components/auth/PhoneForm";
import OtpForm from "@/components/auth/OtpForm";
import NameForm from "@/components/auth/NameForm";

const display = Bricolage_Grotesque({
	subsets: ["latin"],
	weight: ["600", "700"],
	variable: "--font-display",
});

type Step = "phone" | "otp" | "name";

const Page = () => {
	const router = useRouter();
	const [step, setStep] = useState<Step>("phone");
	const [phone, setPhone] = useState("");

	const goToDashboard = () => router.push("/dashboard");

	return (
		<div
			className={`${display.variable} relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0A0A0F] px-6 text-zinc-50`}
		>
			<div
				className="pointer-events-none absolute -top-40 right-[-15%] h-155 w-155 rounded-full opacity-40 blur-[130px]"
				style={{
					background:
						"radial-gradient(circle, #6EE7D8 0%, #4F8CFF 45%, transparent 70%)",
				}}
			/>
			<div
				className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-120 w-120 rounded-full opacity-25 blur-[120px]"
				style={{
					background:
						"radial-gradient(circle, #4F8CFF 0%, transparent 70%)",
				}}
			/>

			<div className="relative z-10 w-full max-w-sm">
				<div className="mb-8 text-center">
					<span
						className="text-2xl font-bold tracking-tight text-zinc-50"
						style={{ fontFamily: "var(--font-display)" }}
					>
						Northline
					</span>
				</div>

				<div className="rounded-2xl border border-white/10 bg-[#101019]/80 p-9 shadow-2xl shadow-black/40 backdrop-blur-md">
					{step === "phone" && (
						<PhoneForm
							onSent={p => {
								setPhone(p);
								setStep("otp");
							}}
						/>
					)}

					{step === "otp" && (
						<OtpForm
							phone={phone}
							onBack={() => setStep("phone")}
							setStep={setStep}
							goToDashboard={goToDashboard}
						/>
					)}

					{step === "name" && <NameForm onSaved={goToDashboard} />}
				</div>
			</div>
		</div>
	);
};

export default Page;
