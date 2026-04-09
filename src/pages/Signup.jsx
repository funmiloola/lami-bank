import Input from "../components/Input";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();
  const navigate = useNavigate();
  const email = watch("email");
  const onSubmit = () => {
    let role = "";
    if (email.endsWith("@partner.com")) {
      role = "category_a";
    } else if (email.endsWith("@admin.com")) {
      role = "category_b";
    } else {
      role = "end-user";
    }
    const userSession = { email, role, isAuthenticated: true };
      localStorage.setItem("user", JSON.stringify(userSession));
      
      if (role === "category_a") {
          toast.success("Login Successfully")
          navigate("/admin-dashboard");
      }
          
          
      else if (role === "category_b") {
          toast.success("Login Successfully")
          navigate("/dashboard")
      }
      else {
          toast.success("Login Successfully")
          navigate("/onboarding");
      }   
  };

  return (
    <section className="font-sans flex flex-col gap-6 items-center justify-center pt-24 px-8">
      <h2 className="text-[#49B0C9] text-[32px] font-semibold">
        Login To your Account
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full lg:w-[25%] gap-3 "
      >
        <div className="w-full">
          <Input
            type="text"
            placeholder="Email"
            label="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="w-full">
          <Input
            type="password"
            placeholder="*********"
            label="Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Enter a minimum of 8 Characters",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-[#45B2C7] w-full flex items-center justify-center gap-2  py-2 text-white rounded-md font-semibold cursor-pointer mt-8"
          disabled={isSubmitting}
        >
          <span>Log in</span>
          {isSubmitting ? (
            <svg
              className="mr-3 -ml-1 size-5 animate-spin text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : null}
        </button>
      </form>
      <button className="text-[#45B2C7] font-semibold cursor-pointer">
        Forgotten Password?
      </button>
      <p className="text-base text-[#6B7280]">
        You don't have an account?{" "}
        <span className="text-[#45B2C7] font-semibold cursor-pointer">
          Create Account
        </span>
      </p>
    </section>
  );
}
