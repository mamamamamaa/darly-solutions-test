import { FC } from "react";
import style from "./TableForm.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { log } from "util";

type Inputs = {
  firstName: string;
  secondName: string;
  phoneNumber: string;
  email: string;
  message: string;
};

export const TableForm: FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => alert(JSON.stringify(data));

  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
      <div className="flex">
        <h1 className={style.formHeader}>
          Give us <br /> feedback
        </h1>
      </div>
      <div className={style.inputContainer}>
        <label>
          {errors.firstName && <span>{errors?.firstName?.message}</span>}
          <input
            className={style.formInput}
            placeholder="First Name*"
            {...register("firstName", { required: "First Name is required!" })}
          />
        </label>
        <label>
          {errors.secondName && <span>{errors?.secondName?.message}</span>}
          <input
            className={style.formInput}
            placeholder="Second Name*"
            {...register("secondName", {
              required: "Second Name is required!",
            })}
          />
        </label>
        <label>
          {errors.email && <span>{errors?.email?.message}</span>}
          <input
            className={style.formInput}
            placeholder="Email*"
            {...register("email", { required: "Email is required!" })}
          />
        </label>
        <label>
          {errors.phoneNumber && <span>{errors?.phoneNumber?.message}</span>}
          <input
            className={style.formInput}
            placeholder="Phone*"
            {...register("phoneNumber", {
              required: "Phone number is required!",
            })}
          />
        </label>
      </div>
      <div className="my-4">
        <textarea
          placeholder="Message*"
          className={style.textarea}
          {...register("message", { required: "Message is required!" })}
        ></textarea>
      </div>
      <div className="my-2 w-1/2 lg:w-1/4">
        <button className={style.submitBtn}>Send Message</button>
      </div>
    </form>
  );
};
