var users = [
    {
        username: "admin@tlu.edu.vn",
        password: "abc",
        permission: "admin"
    },
    {
        username: "thao01@tlu.edu.vn",
        password: "123",
        permission: "users"
    },
    {
        username: "thuong02@tlu.edu.vn",
        password: "456",
        permission: "users"
        
    },
    {
        username: "trang03@tlu.edu.vn",
        password: "789",
        permission: "users"
    },
    ]

function Login() {
     event.preventDefault();
    var username = myForm.username.value;
    var password = myForm.password.value;

    var val = check_user(username, password, users);
    if (val != false) {
        var date = new Date();
        exp_date = date.getTime() + 10 * 24 * 60 * 60 * 1000;
        date.setTime(exp_date);
        document.cookie = "username=" + val.username + ";expires=" + date;
        document.cookie = "permission=" + val.permission + ";expires=" + date;
        if (val.permission == "admin") {
            location.href = "admin/index.html";
        } else if (val.permission == "users") {
            location.href = "index.html";
        }
    } else {
        alert("username must contant '@' and '_'");
    }
    
}
    
function check_user(username, password, users) {
    for (i in users) {
        var user = users[i];
        if (user.username == username && user.password == password) {
            return user;
        }
    }
    return false;
}