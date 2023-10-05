import { useForm } from 'react-hook-form';
import { ZodType, z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';


type FormData = {
  password: string;
  confirmPassword: string;
  question: string;
  answer: string;
};

function SetPassword() {
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
      question: z.string().nonempty({message: 'Field is Required'}),
      answer: z.string().nonempty({message:'Field is Required'})
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
    <form className="form" onSubmit={handleSubmit(submitData)}>
      <h2>New Password</h2>
      <p>Set up your new password, make sure that it is easy to remember, but not so easy to guess, goodluck!</p>
      <input type="password" placeholder="New Password" {...register("password")} />
      {errors.password && <span className="text-danger">{errors.password?.message} </span>}
      <input type="password" placeholder="Confirm Password" {...register("confirmPassword")} />
      {errors.confirmPassword && <span className="text-danger">{errors.confirmPassword?.message} </span>}
      <select {...register("question")}>
        <option></option>
        <option>What is your mother\'s maiden name?</option>
        <option>What elementary school did you attend?</option>
        <option>What is the name of the town you were born?</option>
      </select>
      {errors.question && <span className="text-danger">{errors.question?.message} </span>}
      <input type="text" placeholder="Security Question Answer"{...register("answer")} />
      {errors.answer && <span className="text-danger">{errors.answer?.message} </span>}
      <button type="submit">Change Password</button>
    </form>
  );
}

export default SetPassword;
