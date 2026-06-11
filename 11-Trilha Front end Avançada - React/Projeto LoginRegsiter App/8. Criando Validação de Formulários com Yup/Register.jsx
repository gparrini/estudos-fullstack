import React from "react";
import { InputField } from "../components/InputField";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  password: yup
    .string()
    .required("Senha é Obrigatória")
    .min(6, "Mínimo 6 caracteres"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "As senhas não conferem")
    .required("Confirmação é Obrigatória"),
});

export function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: { name: "", email: "", password: "", confirmPassword: "" },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);

    alert("Conta criada com sucesso");

    reset();
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        className="bg-white p-8 rounded-2xl shadow-md w-96"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        <InputField
          label="Nome"
          id="name"
          type="text"
          name="name"
          autoComplete="username"
          register={register}
          error={errors.name}
        />

        <InputField
          label="Email"
          id="email"
          type="email"
          name="email"
          autoComplete="email"
          register={register}
          error={errors.email}
        />

        <InputField
          label="Senha"
          id="password"
          type="password"
          name="password"
          autoComplete="new-password"
          register={register}
          error={errors.password}
        />

        <InputField
          label="Confirmar Senha"
          id="confirmPassword"
          type="password"
          name="confirmPassword"
          autoComplete="new-password"
          register={register}
          error={errors.confirmPassword}
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
