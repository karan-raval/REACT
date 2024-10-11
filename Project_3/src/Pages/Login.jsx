import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import { useDispatch, useSelector } from "react-redux";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../FirebaseFolder/Firebase";
import { toast, ToastContainer } from "react-toastify";
import { google, UserReducer } from "../Redux/User/UserReducer";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [d, setD] = useState([]);
  const UserCollection = collection(db, "users");
  const navigate = useNavigate();
  const dispatch  = useDispatch();
  const state = useSelector((s)=>s.UserReducer)
  const [user,setUser] = useState(null)
  console.log(state)
  console.log(state.isLogin)

  useEffect(() => {
      const getData = async () => {
          try {
              let data = await getDocs(UserCollection);
              let val = data.docs.map((el) => ({
                  id: el.id,
                  ...el.data(),
              }))
              setD(val);
          } catch (error) {
              toast.error("Failed to load user data", { autoClose: 3000 });
          }
      };
      getData();
  }, []);

  const handleSubmit = (e) => {
      e.preventDefault();

      let user = d.filter((el) => el.email === email && el.pass === pass);

      if (user.length > 0) {
          toast.success("Login Successful!", { autoClose: 3000 });
          setTimeout(() => {
            navigate("/");
        }, 3000); 
      } else {
          toast.error("Login Unsuccessful! Please check your credentials.", { autoClose: 3000 });
      }
  };

  const handleClick=()=>{
    dispatch(google)
  }
  useEffect(()=>{
    if(state.isLogin == true)
      {
        navigate('/')
      }
  },[state.isLogin])


  return (
    <>
      {/* <Header /> */}
      <ToastContainer />

      <section className="vh-100 bgs">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-2-strong br">
                <form onSubmit={handleSubmit}>
                  <div className="card-body p-5 text-center">
                    <h3 className="">Log in</h3>

                    <div data-mdb-input-init className="form-outline mb-4">
                      <input
                        type="email"
                        id="typeEmailX-2"
                        className="form-control form-control-lg"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label className="form-label">Email</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="typePasswordX-2"
                        className="form-control form-control-lg"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                      />
                      <label className="form-label">Password</label>
                    </div>

                    {/* <div className="form-check d-flex justify-content-start mb-4">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="form1Example3"
                      />
                      <label className="form-check-label" for="form1Example3">
                        Remember password
                      </label>
                    </div> */}

                    <button
                      className="btn btn-primary btn-lg btn-block"
                      type="submit"
                    >
                      Login
                    </button>

                    <hr className="my-4" />

                    <button
                      className="btn btn-lg btn-block btn-primary bgs1"
                      // type="su"
                      onClick={handleClick}
                    >
                      <i className="fab fa-google me-2"></i> Sign in with google
                    </button>
                    <div>
                      <p className="mt-2">
                        Don't have an account?
                        <span className="text-dark-50 fw-bold">
                          <Link to={"/signup"}>Sign Up</Link>
                        </span>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
