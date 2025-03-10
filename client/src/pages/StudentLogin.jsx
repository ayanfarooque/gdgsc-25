import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as LoginContext from "./LoginContext";
import "./style.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function StudentLogin() {
    const [isStudentSignIn, toggleStudent] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   // const { setatoken, backendUrl } = useContext(StudentContext);
    const navigate = useNavigate();

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        console.log("Submitting to:", `${backendUrl}/api/Students/login`);
        console.log("Email:", email, "Password:", password);

        try {
            const { data } = await axios.post(`${backendUrl}/api/Students/login`, { email, password });
            if (data.success) {
                console.log("Login successful, token:", data.token);
                localStorage.setItem("sToken", data.token);
                setatoken(data.token);
                toast.success("Login successful!");
            } else {
                toast.error(data.message || "Invalid credentials");
            }
        } catch (error) {
            console.error("Error logging in:", error.response?.data || error.message);
            toast.error("An error occurred during login. Please try again.");
        }
    };

    return (
        <LoginContext.PageWrapper>
            <button
                className="back-button"
                onClick={() => navigate("/")}
                style={{
                    position: "absolute",
                    top: "20px",
                    left: "20px",
                    padding: "10px 20px",
                    fontSize: "16px",
                    cursor: "pointer",
                }}
            >
                Back
            </button>

            <LoginContext.Container>
                <LoginContext.SignUpContainer signinIn={isStudentSignIn}>
                    <LoginContext.Form onSubmit={onSubmitHandler}>
                        <LoginContext.Title>Create Student Account</LoginContext.Title>
                        <LoginContext.Input type="text" placeholder="Student Name" />
                        <LoginContext.Input
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="Student Email"
                        />
                        <LoginContext.Input
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="Password"
                        />
                        <LoginContext.Button type="submit">Sign Up</LoginContext.Button>
                    </LoginContext.Form>
                </LoginContext.SignUpContainer>

                <LoginContext.SignInContainer signinIn={isStudentSignIn}>
                    <LoginContext.Form onSubmit={onSubmitHandler}>
                        <LoginContext.Title>Student Sign In</LoginContext.Title>
                        <LoginContext.Input
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="Student Email"
                        />
                        <LoginContext.Input
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="Password"
                        />
                        <LoginContext.Anchor href="#">Forgot your password?</LoginContext.Anchor>
                        <LoginContext.Button type="submit">Sign In</LoginContext.Button>
                    </LoginContext.Form>
                </LoginContext.SignInContainer>

                <LoginContext.OverlayContainer signinIn={isStudentSignIn}>
                    <LoginContext.Overlay signinIn={isStudentSignIn}>
                        <LoginContext.LeftOverlayPanel signinIn={isStudentSignIn}>
                            <LoginContext.Title>Welcome Back, Student!</LoginContext.Title>
                            <LoginContext.Paragraph>
                                To stay connected with us, please log in with your Student credentials.
                            </LoginContext.Paragraph>
                            <LoginContext.GhostButton onClick={() => toggleStudent(true)}>
                                Sign In
                            </LoginContext.GhostButton>
                        </LoginContext.LeftOverlayPanel>

                        <LoginContext.RightOverlayPanel signinIn={isStudentSignIn}>
                            <LoginContext.Title>Hello, Student!</LoginContext.Title>
                            <LoginContext.Paragraph>
                                Enter your details and start accessing your student portal.
                            </LoginContext.Paragraph>
                            <LoginContext.GhostButton onClick={() => toggleStudent(false)}>
                                Sign Up
                            </LoginContext.GhostButton>
                        </LoginContext.RightOverlayPanel>
                    </LoginContext.Overlay>
                </LoginContext.OverlayContainer>
            </LoginContext.Container>
            <ToastContainer />
        </LoginContext.PageWrapper>
    );
}

export default StudentLogin;