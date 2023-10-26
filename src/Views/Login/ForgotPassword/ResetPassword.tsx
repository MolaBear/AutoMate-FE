import { useForm } from "react-hook-form";
import { ZodType, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface Props{
    title: string,
    text: string
}
type FormData = {
  password: string;
  confirmPassword: string;
};
const ResetPassword = ({title,text}:Props) => {
  const schema: ZodType<FormData> = z

    .object({
      password: z
        .string()
        .min(8)
        .max(20)
        .regex(
          /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]+$/,

          "Password must contain at least one capital letter and one special character"
        ),

      confirmPassword: z.string().min(8).max(20),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Password do not match.",

      path: ["confirmPassword"],
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const submitData = (data: FormData) => {
    console.log("It worked", data);
    
  };

  return (
    <form onSubmit={handleSubmit(submitData)}>

        <h2>{title}</h2>
        <p>{text}</p>
      <input
        type="password"
        placeholder="New Password"
        {...register("password")}
      />
      {errors.confirmPassword?.message && (
        <span className="text-danger">{errors.password?.message} </span>
      )}    
      
      <input
        type="password"
        placeholder="Confirm Password"
        {...register("confirmPassword")}
      />
      {errors.confirmPassword?.message && (
        <span className="text-danger">{errors.confirmPassword?.message} </span>
      )}
      
      <button type="submit">Change Password</button>
    </form>
  );
};
export default ResetPassword;
