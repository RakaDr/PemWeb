function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username == "admin" && password == "12345") {
        alert("Login Success");
        window.location = "awal.html";
        return false;
    } else if (username == "" || password == "") {
        alert("Username dan Password tidak boleh kosong");
    } else {
        alert("Username atau Password salah");
    }
}