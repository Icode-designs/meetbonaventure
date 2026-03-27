"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/button/button";
import { supabase } from "../../utils/supabase";
import {
  LoginWrapper,
  LoginCard,
  LoginForm,
  InputGroup,
  ErrorMessage,
  SuccessMessage,
} from "./login.styles";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else if (data.session) {
      setSuccess("Successfully logged in! Redirecting...");
      router.push("/dashboard");
    }
  };

  return (
    <LoginWrapper>
      <LoginCard>
        <div>
          <h1>Welcome Back</h1>
        </div>

        <LoginForm onSubmit={handleLogin}>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {success && <SuccessMessage>{success}</SuccessMessage>}

          <InputGroup>
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </InputGroup>

          <InputGroup>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </InputGroup>

          <div style={{ marginTop: "8px" }}>
            <Button variant="primary" disabled={loading}>
              {loading ? "Signing in..." : "Sign in"}
            </Button>
          </div>
        </LoginForm>
      </LoginCard>
    </LoginWrapper>
  );
};

export default Login;
