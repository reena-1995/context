import React from 'react'
import './style.css';
const Login = () => {
    return (
             <div class="d-table mainDiv">
                <div class="d-table-cell imageArea">
                    <div class="imgTextsub">
                        <div class="uiBlock">
                            <ul>
                                <li>View Vehicle Pre Inspection</li>
                                <li>Send Enquiry E-mail</li>
                                <li>Upload Additional Images</li>
                                <li>Complete Online Incident Report Form</li>
                            </ul>
                         </div>
                    </div>
                </div>
                <div class="d-table-cell formArea">
                    <div class="logoImgBlock">

                    </div>
                    <div class="formBlock">
                        <div className="formDiv">
                            <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                            </div>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </div>
    )
}

export default Login
