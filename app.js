function fbsubmit(e) {
  e.preventDefault();

  let user = document.getElementById("username").value;
  let surname = document.getElementById("surname").value;
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;
  let mobile = document.getElementById("mobilenumber").value;
  let city = document.getElementById("City").value;
  let zipcode = document.getElementById("zipcode").value;
  if (
    user === "" ||
    surname === "" ||
    email === "" ||
    pass === "" ||
    mobile === "" ||
    city === "" ||
    zipcode === ""
  ) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "All fields are required. Please fill out the entire form.",
    });
    return;
  }
  localStorage.setItem("username", user);
  localStorage.setItem("surname", surname);
  localStorage.setItem("email", email);
  localStorage.setItem("password", pass);
  localStorage.setItem("mobileNumber", mobile);
  localStorage.setItem("city", city);
  localStorage.setItem("zipcode", zipcode);

  document.getElementById("username").value = "";
  document.getElementById("surname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("mobilenumber").value = "";
  document.getElementById("City").value = "";
  document.getElementById("zipcode").value = "";
  setTimeout(function () {
    Swal.fire(`Acoount Create SuccessFully ${user}`);
    location.href = "./sign.html";
  }, 1000);
  return;
}

function sigin(e) {
  e.preventDefault();
  let loginuser = document.getElementById("login_user").value;
  let loginemail = document.getElementById("login_pass").value;
  loginuser.value = "";
  loginemail.value = "";

  if (
    localStorage.getItem("email") === loginuser &&
    localStorage.getItem("password") === loginemail
  ) {
    location.href = "./post.html";
  } else {
    document.getElementById("error_mes").innerHTML = "Invalid Email";
    document.getElementById("error_mes").style.color = "red";
    document.getElementById("error_mes1").innerHTML = "Enter same password";
    document.getElementById("error_mes1").style.color = "red";
  }
}

function postadd() {
  let postTittle = document.getElementById("post_tittle");
  let postDescription = document.getElementById("post_des");
  if (postTittle.value === "" || postDescription === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please Enter  Tittle & description ",
    });
    return;
  }
  let post_div = document.getElementById("post_div");
  post_div.innerHTML += `<div class="container">
      <div class="row">
        <div class="col-12 col-lg-12 post_form">
          <div class="main_div">
            <div class="img_div">
              <img
                src="./images/WhatsApp Image 2024-12-08 at 13.53.37_d01841b2.jpg"
                alt=""
              />
            </div>
            <div class="user_div">
              <p id="para">Hammas</p>
              <p id="date">h</p>
            </div>
            <div>
            <p id="date"></p>
            </div>
          </div>
          <div class="get_title">
            <p class="post_tittle">${postTittle.value}</p>
          </div>
          <div class="get_dec">
            <p class="post_dec">${postDescription.value}</p>
          </div>
          <hr>
          <div class="icon_div">
            <div class="icon_like">
              <span><i class="fa-solid fa-thumbs-up"></i></span>
              <span class="like_text">Like</span>
            </div>
            <div class="icon_comment">
              <span><i class="fa-regular fa-comment"></i></span>
              <span class="like_text">Comment</span>
            </div>
            <div class="icon_whatsap">
              <span><i class="fa-brands fa-whatsapp"></i></span>
              <span class="like_text">Send</span>
            </div>
            <div class="icon_share">
              <span><i class="fa-solid fa-share"></i></span>
              <span class="like_text">Share</span>
            </div>
          </div>
        </div>
      </div>
    </div> `;
  let date = new Date();
  document.getElementById("date").innerHTML = date;
}
