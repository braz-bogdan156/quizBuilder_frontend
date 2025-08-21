import React from "react";

export default function FormError({ message }: { message?: string }) {
  if (!message) return null;
  return <div style={{ color: "#ef4444", fontSize: 12, marginTop: 6 }}>{message}</div>;
}