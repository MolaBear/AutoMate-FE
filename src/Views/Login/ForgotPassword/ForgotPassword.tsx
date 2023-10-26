import { useForm } from "react-hook-form";
import { ZodType, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
interface Props {
  title: string;
  text: string;
}
type FormData = {
  employeeCode: string;
  securityQuestion: string;
  answer: string;
};

const ForgotPasswordForm = ({ title, text }: Props) => {
  const schema: ZodType<FormData> = z

    .object({
      employeeCode: z.string().min(6),
      securityQuestion: z
        .string()
        .nonempty({ message: "This field is required." }),
      answer: z.string().nonempty({message: "This field is required."}),
    })
    // .refine((data) => data.securityQuestion === data.answer, {
    //   message: "Incorrect response",

    //   path: ["answer"],
    // });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const navigate = useNavigate();
  const submitData = (data: FormData) => {
    
    //Remove the bellow and send data to the server
    console.log("It worked", data);

    navigate('/reset-password');
  };

  return (
    <form onSubmit={handleSubmit(submitData)}>
      <h3>{title}</h3>
      <p>{text}</p>
      <div>
        <input type="text" id="employeeCode" placeholder="Employee Code"{...register("employeeCode")}/>
       
      </div>
      {errors.employeeCode?.message && (
          <span className="text-danger">{errors.employeeCode?.message} </span>
        )}
        
      <div>
        <select  id="securityQuestion" {...register("securityQuestion")} defaultValue="">
          <option  disabled value=""> Security Question</option>
          <option value="q1">What is your favorite color?</option>
          <option value="q2">What is your mother's maiden name?</option>
          <option value="q3">What was the name of your first pet?</option>
        </select>
        
        
      </div>
      {errors.securityQuestion?.message && (
          <span className="text-danger">{errors.securityQuestion?.message} </span>
        )}
      <div>
        <input type="text" placeholder="Answer" id="answer" {...register("answer")} />
        
      </div>
      <button type="submit">Reset Password</button>
    </form>
  );
};

export default ForgotPasswordForm;
