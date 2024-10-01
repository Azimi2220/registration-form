import { useForm } from "react-hook-form";
function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-sm shadow-white w-96 rounded-lg p-8"
      >
        <h1 className="text-4xl font-serif pt-5">Register</h1>
        <hr className="mt-4" />
        <div className="space-y-8 mt-5">
          <div>
            <input
              type="text"
              {...register("name", { required: true })}
              className="border-b-2  w-full h-8 "
              placeholder="Name"
            ></input>
            {errors.name && (
              <div className="text-red-600 text-left text-xs">
                This field is required!
              </div>
            )}
          </div>
          <div>
            <input
              type="email"
              {...register("email", { required: true })}
              className="border-b-2 w-full h-8 "
              placeholder="Email"
            ></input>
            {errors.email && (
              <div className="text-red-600 text-xs text-left">
                This field is required!
              </div>
            )}
          </div>
          <div>
            <input
              {...register("password", { required: true })}
              type="number"
              className="border-b-2 w-full h-8 "
              placeholder="Password"
            ></input>
            {errors.password && (
              <div className="text-red-600 text-xs text-left">
                This fiels is required!
              </div>
            )}
          </div>
          <div>
            <input
            {...register ("confirmPassword",{required:true})}
            type="number"
              className="border-b-2 w-full h-8"
              placeholder="Confirm Password"
            ></input>
            {errors.confirmPassword && (<div className="text-red-600 text-xs text-left">This field is required!</div>)}
          </div>
        </div>
        <button
          type="submit"
          className="w-80 bg-zinc-200 text-black border-2 border-black rounded-3xl mt-7 h-10"
        >
          Sign Up
        </button>
        <div className="flex justify-center gap-2 font-serif mt-5 text-gray-400">
          <p>Have an Account?</p>
          <a href="#" className="text-sky-600 mb-10">
            Login Here
          </a>
        </div>
      </form>
    </div>
  );
}
export default Register;
