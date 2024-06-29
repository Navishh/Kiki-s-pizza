'use client'
import Image from "next/image";
import { useState } from "react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleFormSubmit(ev) {
    ev.preventDefault();
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      alert("User registered successfully!");
    } catch (error) {
      console.error("Error registering user:", error);
      alert("Registration failed. Please try again.");
    }
  }

  return (
    <>
      <section className="mt-8">
        <h1 className="text-center text-primary text-4xl mb-6">Register</h1>
        <form className="block max-w-sm mx-auto" onSubmit={handleFormSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            required
          />
          <button type="submit">Register</button>
          <div className="my-4 text-center text-gray-500">
            or login with provider
          </div>
          <button className="flex gap-4 justify-center">
            <Image src="/google.png" alt="googleicon" width={20} height={20} />
            Login with Google
          </button>
        </form>
      </section>
    </>
  );
}
