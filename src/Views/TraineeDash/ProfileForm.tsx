import { useForm } from "react-hook-form";
import { ZodType, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


// interface Props {
//   title: string;
//   text: string;
//   username: string | null; 
// }
type FormData = {
  Branch: string;
  PhoneNumber: string;
  Signature: File;
  
};


const ProfileForm = () => {
  
  
  const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
  );
  const allowedFileTypes = /\.(png|jpeg|jpg|gif)$/i;

  const schema: ZodType<FormData> = z.object({
    Branch: z.string().nonempty({ message: "Branch is required." }),
    PhoneNumber: z.string().min(10).regex(phoneRegex, 'Invalid Number!'),
    Signature: z.custom<File>((value) => {
      if (!value) {
        return false; // File is required, so return false if it's null
      }

      return allowedFileTypes; // Check if the file name matches the allowed file types
    }, {
      message: "Invalid file type. Only PNG, JPEG, JPG, and GIF files are allowed.",
    }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const submitData = (data: FormData) => {
    //Remove the bellow and send data to the server
    //<SaveChangeModal onClose={()=> console.log("Close Modal")} onConfirm={()=>console.log("Success")}/>
    console.log("It worked", data);
  };
  
  return (
    <form onSubmit={handleSubmit(submitData)}>
      {/* <h3>{title}</h3>
      <p>{text}</p> */}

      <div className="formContainer">
        <div className="left-colunm">
          <div>
            <input type="text" placeholder="First Name" disabled />
          </div>
          <div>
            <input type="text" placeholder="Last Name" disabled />
          </div>
          <div>
            <select id="Branch" {...register("Branch")} defaultValue="">
              <option disabled value="">
                Select Branch
              </option>
              <option>Durban</option>
              <option>Johannesburg</option>
              <option>Cape Town</option>
            </select>
            {errors.Branch?.message && (
              <div className="text-danger">{errors.Branch?.message} </div>
            )}
          </div>
          <div>
            <input type="text" placeholder="ID/Passport Number" disabled />
          </div>
        </div>

        <div className="right-column">
          <div>
            <input type="text" placeholder="Employee Code" disabled />
          </div>
          <div>
            <input
              type="number"
              id="PhoneNumber"
              placeholder=" Phone Number"
              {...register("PhoneNumber")}
            />
            {errors.PhoneNumber?.message && (
              <div className="text-danger">{errors.PhoneNumber?.message} </div>
            )}
          </div>
          <div>
            <input className="signature" type="file" {...register("Signature")}  required/>
            {errors.Signature?.message && (
              <div className="text-danger">{errors.Signature?.message} </div>
            )}
          </div>
        </div>
      </div>

      <button className="wrap" type="submit" >
        Save Changes
      </button>
    </form>
  );
};

export default ProfileForm;