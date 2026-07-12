import { BirthdayProvider } from "@/context/BirthdayContext";
import { BirthdayExperience } from "@/components/BirthdayExperience";

export default function Home() {
  return (
    <main className="w-full h-[100svh] overflow-hidden bg-brand-bg text-brand-text selection:bg-brand-gold/30">
      <BirthdayProvider>
        <BirthdayExperience />
      </BirthdayProvider>
    </main>
  );
}
