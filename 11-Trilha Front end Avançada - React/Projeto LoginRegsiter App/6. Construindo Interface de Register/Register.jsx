import React from "react";
import { InputField } from "../components/InputField";
import { Link } from "react-router";

export function Register() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="bg-white p-8 rounded-2xl shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        <InputField
          label="Nome"
          id="name"
          type="text"
          name="name"
          autoComplete="username"
          register={() => {}}
        />

        <InputField
          label="Email"
          id="email"
          type="email"
          name="email"
          autoComplete="email"
          register={() => {}}
        />

        <InputField
          label="Senha"
          id="password"
          type="password"
          name="password"
          autoComplete="new-password"
          register={() => {}}
        />

        <InputField
          label="Confirmar Senha"
          id="confirmPassword"
          type="password"
          name="confirmPassword"
          autoComplete="new-password"
          register={() => {}}
        />

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
        >
          Registrar
        </button>

        <p className="mt-4 text-center text-sm">
          Já tem conta?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Faça login
          </Link>
        </p>
      </form>
    </div>
  );
}
