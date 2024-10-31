import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { FaTimes, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Button from "./Button";

const LoginRegisterModal = forwardRef((props, ref) => {
  const dialogRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setLogin] = useState(false);

  const [loginPassword, setLoginPassword] = useState("password");
  const [registerPassword, setRegisterPassword] = useState("password");
  const [confirmPassword, setConfirmPassword] = useState("password");

  function handleChangePasswordType(passwordType) {
    if (passwordType === "login") {
      setLoginPassword((prev) => (prev === "password" ? "text" : "password"));
    } else if (passwordType === "register") {
      setRegisterPassword((prev) =>
        prev === "password" ? "text" : "password"
      );
    } else if (passwordType === "confirm") {
      setConfirmPassword((prev) => (prev === "password" ? "text" : "password"));
    }
  }

  function closeModal() {
    setIsOpen((isOpen) => !isOpen);
    dialogRef.current.close();
  }

  function handleLogin() {
    setLogin((isLogin) => !isLogin);
  }

  useImperativeHandle(ref, () => ({
    showModal: () => {
      if (dialogRef.current) {
        dialogRef.current.showModal();
        setIsOpen(true);
      }
    },
  }));

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40" />
      )}
      <dialog
        className="fixed z-50 h-[600px] w-[968px] bg-white rounded-lg"
        ref={dialogRef}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 h-full text-white">
          <div
            className={`bg-lightblue h-full hidden md:block ${isLogin && "order-1"}`}
          >
            <span>Light Blue Content</span>
          </div>
          <div className="h-full relative bg-darkblue py-10">
            {!isLogin && (
              <div className="w-[90%] lg:w-[80%] mx-auto">
                <button
                  onClick={closeModal}
                  className="text-white absolute right-7 top-4"
                >
                  <FaTimes className="h-6 w-6" />
                </button>
                <h1 className="text-3xl mb-5 text-center">
                  Create Your Account
                </h1>
                <form action="" method="post">
                  <label htmlFor="role">Register As:</label>
                  <div className="flex my-2">
                    <div className="flex-1 flex justify-center gap-1 group">
                      <input
                        type="radio"
                        name="role"
                        id="customer"
                        defaultChecked
                        className="peer cursor-pointer"
                      />
                      <label
                        htmlFor="customer"
                        className="text-gray-400  peer-checked:text-white cursor-pointer"
                      >
                        Customer
                      </label>
                    </div>
                    <div className="flex-1 flex justify-center gap-1 group">
                      <input
                        type="radio"
                        name="role"
                        id="professional"
                        className="peer cursor-pointer"
                      />
                      <label
                        htmlFor="professional"
                        className="text-gray-400 peer-checked:text-white cursor-pointer"
                      >
                        Professional
                      </label>
                    </div>
                  </div>
                  <div className="grid gap-5">
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        name="fname"
                        placeholder="First Name"
                        className="bg-transparent border-gray-400 border-b-2 py-2 focus-within:outline-none focus-within:border-white"
                      />
                      <input
                        type="text"
                        name="lname"
                        placeholder="Last Name"
                        className="bg-transparent border-gray-400 border-b-2 py-2 focus-within:outline-none focus-within:border-white"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="bg-transparent border-gray-400 border-b-2 py-2 focus-within:outline-none focus-within:border-white"
                      />
                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone number"
                        className="bg-transparent border-gray-400 border-b-2 py-2 focus-within:outline-none focus-within:border-white"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        name="house"
                        placeholder="House/Lot/Block"
                        className="bg-transparent border-gray-400 border-b-2 py-2 focus-within:outline-none focus-within:border-white"
                      />
                      <input
                        type="text"
                        name="street"
                        placeholder="Street"
                        className="bg-transparent border-gray-400 border-b-2 py-2 focus-within:outline-none focus-within:border-white"
                      />
                    </div>
                    <input
                      type="text"
                      name="barangay"
                      placeholder="Barangay"
                      className="bg-transparent border-gray-400 border-b-2 py-2 focus-within:outline-none focus-within:border-white"
                    />
                    <div className="flex relative">
                      <input
                        type={registerPassword}
                        name="rpassword"
                        placeholder="Password"
                        className="bg-transparent border-gray-400 border-b-2 py-2 focus-within:outline-none focus-within:border-white flex-1"
                      />
                      {registerPassword === "password" ? (
                        <FaRegEyeSlash
                          className="absolute right-2 top-3 cursor-pointer"
                          onClick={() => handleChangePasswordType("register")}
                        />
                      ) : (
                        <FaRegEye
                          className="absolute right-2 top-3 cursor-pointer"
                          onClick={() => handleChangePasswordType("register")}
                        />
                      )}
                    </div>
                    <div className="flex relative">
                      <input
                        type={confirmPassword}
                        name="cpassword"
                        placeholder="Confirm Password"
                        className="bg-transparent border-gray-400 border-b-2 py-2 focus-within:outline-none focus-within:border-white flex-1"
                      />
                      {confirmPassword === "password" ? (
                        <FaRegEyeSlash
                          className="absolute right-2 top-3 cursor-pointer"
                          onClick={() => handleChangePasswordType("confirm")}
                        />
                      ) : (
                        <FaRegEye
                          className="absolute right-2 top-3 cursor-pointer"
                          onClick={() => handleChangePasswordType("confirm")}
                        />
                      )}
                    </div>
                  </div>
                  <div className="flex py-4 gap-2">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="cursor-pointer"
                    />
                    <p className="italic text-[10px] md:text-sm">
                      I Agree to the{" "}
                      <span className="font-bold not-italic">
                        Terms and Conditions
                      </span>{" "}
                      and{" "}
                      <span className="font-bold not-italic">
                        Privacy Policy
                      </span>
                    </p>
                  </div>
                  <Button className="rounded-sm bg-lightblue w-full">
                    Register
                  </Button>
                  <p className="italic text-[10px] md:text-sm font-normal py-4">
                    Already have an account?{" "}
                    <button className="hover:underline" onClick={handleLogin}>
                      Click here
                    </button>
                  </p>
                </form>
                <div className="flex items-center mb-4">
                  <hr className="flex-grow border-t" />
                  <span className="px-4">Or</span>
                  <hr className="flex-grow border-t" />
                </div>
                <form action="" method="post">
                  <Button className="rounded-sm w-full border-lightblue border-2">
                    Sign in With Google
                  </Button>
                </form>
              </div>
            )}

            {isLogin && (
              <div className="w-[90%] lg:w-[80%] mx-auto">
                <button
                  onClick={closeModal}
                  className="text-white absolute right-7 top-4"
                >
                  <FaTimes className="h-6 w-6" />
                </button>
                <h1 className="text-2xl font-bold my-5 text-center">
                  Login to Your Account
                </h1>
                <form action="" method="post">
                  <div className="grid gap-5 mt-10">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="bg-transparent border-gray-400 border-b-2 py-2 focus-within:outline-none focus-within:border-white"
                    />
                    <div className="flex relative">
                      <input
                        type={loginPassword}
                        name="lpassword"
                        placeholder="Password"
                        className="bg-transparent border-gray-400 border-b-2 py-2 focus-within:outline-none focus-within:border-white flex-1"
                      />
                      {loginPassword === "password" ? (
                        <FaRegEyeSlash
                          className="absolute right-2 top-3 cursor-pointer"
                          onClick={() => handleChangePasswordType("login")}
                        />
                      ) : (
                        <FaRegEye
                          className="absolute right-2 top-3 cursor-pointer"
                          onClick={() => handleChangePasswordType("login")}
                        />
                      )}
                    </div>
                  </div>
                  <div className="flex py-4 gap-2">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="cursor-pointer"
                    />
                    <p className="italic text-sm text-gray-400">Remember Me</p>
                  </div>
                  <p className="italic text-[10px] md:text-sm font-normal py-4">
                    Don't have an account?{" "}
                    <button className="hover:underline" onClick={handleLogin}>
                      Sign up
                    </button>
                  </p>
                  <Button className="rounded-sm bg-lightblue w-full">
                    Login
                  </Button>
                </form>
                <div className="flex items-center my-4">
                  <hr className="flex-grow border-t" />
                  <span className="px-4">Or</span>
                  <hr className="flex-grow border-t" />
                </div>
                <form action="" method="post">
                  <Button className="rounded-sm w-full border-lightblue border-2">
                    Login in With Google
                  </Button>
                </form>
              </div>
            )}
          </div>
        </div>
      </dialog>
    </>
  );
});

export default LoginRegisterModal;
