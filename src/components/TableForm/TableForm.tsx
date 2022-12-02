import { FC } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { nanoid } from "@reduxjs/toolkit";
import { addFeedback, useAppDispatch } from "../../redux";
import style from "./TableForm.module.css";
import * as yup from "yup";
import { SubmitButton } from "../Buttons/SubmitButton";

type Inputs = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  message: string;
};

const phoneRegExp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

const schema = yup
  .object()
  .shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    phoneNumber: yup.string().matches(phoneRegExp, "Phone number is not valid"),
    email: yup.string().email().required(),
    message: yup.string().min(20, "Must be at least 20 symbols"),
  })
  .required();

export const TableForm: FC = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<Inputs>({ mode: "onBlur", resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(addFeedback({ id: nanoid(), user: data }));
    reset();
  };

  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
      <div className="flex">
        <h1 className={style.formHeader}>
          Give us <br /> feedback
        </h1>
      </div>
      <div className={style.inputContainer}>
        <label className="relative">
          {errors.firstName && (
            <span className={style.error}>{errors?.firstName?.message}</span>
          )}
          <input
            className={style.formInput}
            placeholder="First Name*"
            {...register("firstName", { required: "First Name is required!" })}
          />
        </label>
        <label className="relative">
          {errors.lastName && (
            <span className={style.error}>{errors?.lastName?.message}</span>
          )}
          <input
            className={style.formInput}
            placeholder="Last Name*"
            {...register("lastName", {
              required: "Second Name is required!",
            })}
          />
        </label>
        <label className="relative">
          {errors.email && (
            <span className={style.error}>{errors?.email?.message}</span>
          )}
          <input
            className={style.formInput}
            placeholder="Email*"
            {...register("email", { required: "Email is required!" })}
          />
        </label>
        <label className="relative">
          {errors.phoneNumber && (
            <span className={style.error}>{errors?.phoneNumber?.message}</span>
          )}
          <input
            className={style.formInput}
            placeholder="Phone*"
            {...register("phoneNumber", {
              required: "Phone number is required!",
            })}
          />
        </label>
      </div>
      <div className="my-4 relative">
        {errors.message && (
          <span className={style.error}>{errors?.message?.message}</span>
        )}
        <textarea
          placeholder="Message*"
          className={style.textarea}
          {...register("message", { required: "Message is required!" })}
        ></textarea>
      </div>
      <div className="my-2 w-1/2 lg:w-1/4">
        <SubmitButton text="Send feedback" isDisabled={isValid} />
      </div>
    </form>
  );
};
