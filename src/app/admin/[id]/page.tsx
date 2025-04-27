"use client"

import { useParams } from "next/navigation";

export default function AdminUserProfilePage() {

  const { id } = useParams();

  return <div>User profile {id}</div>;
}