"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import Overview from "@/components/pages/client-onboarding/Overview";
import OnboardingPipeline from "@/components/pages/client-onboarding/OnboardingPipeline";
import StandardOnboardingProcess from "@/components/pages/client-onboarding/StandardOnboardingProcess";
import Status from "@/components/pages/client-onboarding/Status";

export default function ClientOnboardingPage() {
  return (
    <DashboardLayout
      dashboardTitle="Client Onboarding"
      currentPath="/pages/client-onboarding"
      currentTab="client-onboarding"
    >
      <div className="space-y-6">
        <Overview />
        <OnboardingPipeline />
        <StandardOnboardingProcess />
        <Status />
      </div>
    </DashboardLayout>
  );
}