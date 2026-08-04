"use client";

import QuestionForm from "@/components/QuestionForm";
import { useAuthStore } from "@/store/Auth";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const { user, hydrated } = useAuthStore();
  const router = useRouter();

  React.useEffect(() => {
    if (!hydrated) return;

    if (!user) {
      router.push("/login");
    }
  }, [hydrated, user, router]);

  if (!hydrated || !user) {
    return (
      <div className="min-h-screen bg-slate-950 px-4 py-10 text-center text-white">
        <div className="mx-auto max-w-xl rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-2xl backdrop-blur-xl">
          <p className="text-sm text-slate-400">Checking your account... please wait.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-10 text-white">
      <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-2xl backdrop-blur-xl">
        <div className="mb-8">
          <h1 className="text-4xl font-semibold">Ask a question</h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-400">
            Share your problem with the community and get help from other developers.
          </p>
        </div>
        <QuestionForm />
      </div>
    </div>
  );
};

export default Page;
