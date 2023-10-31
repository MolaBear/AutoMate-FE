import { useForm } from 'react-hook-form';
import { ZodType, z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Form, FormField, InputField1, UserRoleSelect } from '../../../Components/Styled Components/AppStyle';
import { useNavigate } from 'react-router-dom';


type FormData = {
  password: string;
  confirmPassword: string;
  question: string;
  answer: string;
};

function SetPassword() {
  const navigate = useNavigate();
  const schema: ZodType<FormData> = z.object({
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
                                    answer: z.string().nonempty({message:'Set Security Question'})
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
    window.location.replace("trainee");
  };
  return (
    <div style={{textAlign:'center', marginTop:'30px'}}>
    <Form className="form">
      <h2>Set New Password</h2>
      <p>Set up your new password, make sure that it is easy to remember, but not so easy to guess, goodluck!</p><br/>
      <FormField  style={{marginBottom:"20px"}}>
        <InputField1 type="password" placeholder="New Password" {...register("password")} style={{margin:'auto'}} width='50%'/>
        {errors.password && <span className="text-danger" style={{color:"red"}}>{errors.password?.message} </span>}
      </FormField>
      <FormField  style={{marginBottom:"20px"}}>
      <InputField1 type="password" placeholder="Confirm Password" {...register("confirmPassword")} style={{margin:'auto', marginBottom:"20px"}} width='50%'/>
      {errors.confirmPassword && <span className="text-danger" style={{color:"red"}}>{errors.confirmPassword?.message} </span>}
      </FormField>
      <UserRoleSelect style={{margin:'auto', marginBottom:"20px"}} width='50%' {...register("question")}>
        <option hidden> Security Question</option>
        <option>What is your mother's maiden name?</option>
        <option>What elementary school did you attend?</option>
        <option>What is the name of the town you were born?</option>
      </UserRoleSelect>
      <FormField  style={{marginBottom:"20px"}}>
      {errors.question && <span className="text-danger">{errors.question?.message} </span>}
      <InputField1 type="text" placeholder="Security Question Answer"{...register("answer")} style={{margin:'auto'}} width='50%'/>
      {errors.answer && <span className="text-danger" style={{color:"red"}}>{errors.answer?.message} </span>}
      </FormField>
      <div>
        <Button 
              style={{marginBottom: "25px"}} 
              id="submitBtn" 
              color="primary" 
              onClick={handleSubmit(submitData)}
            >
              Submit
            </Button>
      </div>
    </Form>
    </div>
  );
}

export default SetPassword;
