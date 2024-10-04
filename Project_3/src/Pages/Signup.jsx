import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../FirebaseFolder/Firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const UserCollection = collection(db, "users");
  const [d, setD] = useState([]);
  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

  useEffect(() => {
    const getData = async () => {
      try {
        let data = await getDocs(UserCollection);
        let val = data.docs.map((el) => ({
          id: el.id,
          ...el.data(),
        }));
        setD(val);
      } catch (error) {
        toast.error("Failed to load users", { autoClose: 3000 });
      }
    };
    getData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!emailRegex.test(email)) {
      toast.error("Invalid email format. Please enter a valid email.", {
        autoClose: 3000,
      });
      return;
    }

    if (!passwordRegex.test(pass)) {
      toast.error(
        "Password must be at least 8 characters long and include letters and numbers.",
        { autoClose: 3000 }
      );
      return;
    }

    let existingUser = d.find((el) => el.email === email);

    let newUser = {
      email,
      pass,
    };

    if (existingUser) {
      toast.error("User already registered", { autoClose: 3000 });
    } else {
      try {
        await addDoc(UserCollection, newUser);
        toast.success("User Signup Successfully", { autoClose: 3000 });
        setTimeout(() => {
          navigate("/Login");
        }, 3000);
      } catch (error) {
        toast.error("Signup failed", { autoClose: 3000 });
      }
    }
  };
  return (
    <>
    <ToastContainer />
      <section class="vh-100 gradient-custom">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
              <div class="card bg-dark text-white" style="border-radius: 1rem;">
                <div class="card-body p-5 text-center">
                  <div class="mb-md-5 mt-md-4 pb-5">
                    <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                    <p class="text-white-50 mb-5">
                      Please enter your login and password!
                    </p>

                    <div
                      data-mdb-input-init
                      class="form-outline form-white mb-4"
                    >
                      <input
                        type="email"
                        id="typeEmailX"
                        class="form-control form-control-lg"
                      />
                      <label class="form-label" for="typeEmailX">
                        Email
                      </label>
                    </div>

                    <div
                      data-mdb-input-init
                      class="form-outline form-white mb-4"
                    >
                      <input
                        type="password"
                        id="typePasswordX"
                        class="form-control form-control-lg"
                      />
                      <label class="form-label" for="typePasswordX">
                        Password
                      </label>
                    </div>

                    <p class="small mb-5 pb-lg-2">
                      <a class="text-white-50" href="#!">
                        Forgot password?
                      </a>
                    </p>

                    <button
                      data-mdb-button-init
                      data-mdb-ripple-init
                      class="btn btn-outline-light btn-lg px-5"
                      type="submit"
                    >
                      Login
                    </button>

                    <div class="d-flex justify-content-center text-center mt-4 pt-1">
                      <a href="#!" class="text-white">
                        <i class="fab fa-facebook-f fa-lg"></i>
                      </a>
                      <a href="#!" class="text-white">
                        <i class="fab fa-twitter fa-lg mx-4 px-2"></i>
                      </a>
                      <a href="#!" class="text-white">
                        <i class="fab fa-google fa-lg"></i>
                      </a>
                    </div>
                  </div>

                  <div>
                    <p class="mb-0">
                      Don't have an account?{" "}
                      <a href="#!" class="text-white-50 fw-bold">
                        Sign Up
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
