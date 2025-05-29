"use client";
// app/admin/page.tsx (or similar top-level page file)
import dynamic from "next/dynamic";

// Dynamically import the AdminClientComponent and disable SSR
const ReactAdmin = dynamic(
	() => import("@/components/ReactAdmin"), // Adjust path as needed
	{ ssr: false }
);

export default function AdminPage() {
	// You can add a loading state here if you wish
	return <ReactAdmin />;
}
