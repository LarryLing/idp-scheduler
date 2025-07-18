import ResetPasswordCard from "@/components/authentication/reset-password-card";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/reset-password")({
  beforeLoad: ({ context }) => {
    if (!context.auth.user) {
      throw redirect({ to: "/login" });
    }
  },
  component: ResetPassword,
});

function ResetPassword() {
  return (
    <div className="flex h-screen items-center justify-center">
      <ResetPasswordCard />
    </div>
  );
}
