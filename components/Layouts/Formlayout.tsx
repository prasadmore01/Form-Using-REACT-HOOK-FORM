import { Input } from "postcss"
import React, { useEffect, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"


type formData = {
  email:string,
  password:string
}

const Formlayout:React.FC = ()=>{

    const form = useForm()
    const {register,handleSubmit,formState: { errors }} = form

    const [value,setValue]=useState<formData>({email:'',password:''})
    const [details,setDetails] = useState<any>({name:'Prasad',email:'prasad@gmail.com',pincode:412307
    })

    const onSubmit = (data: any) =>{
      setValue(data)
    }

    useEffect(() => {
      console.log({value}); // This will log the updated value whenever it changes
    }, [value]);


    return(
      
        <div className="max-w-md mx-auto m-8 bg-white shadow-md rounded px-8 py-6">
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            placeholder="Enter your email"
            {...register("email",{
              required:"Email is Required!",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Email is not valid."
            }
            })}
          />
            {errors.email && typeof errors.email.message === 'string' && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
          </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
  id="password"
  type="password"
  placeholder="Enter your password"
  {...register("password",{
    required:"Password is Required!",
    pattern:{
      value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      message:"Password should contain at least one uppercase letter, lowercase letter, digit, and special symbol."
    }
  })}

/>

{errors.password && typeof errors.password.message === 'string' && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
>
            Sign In
          </button>
        </div>
      </form>
  
    </div>

    )
}

export default Formlayout