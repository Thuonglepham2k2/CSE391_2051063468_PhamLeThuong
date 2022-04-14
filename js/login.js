var users = [
    {
        username: "admin@tlu.edu.vn",
        password: "abc",
        permission: "admin"
    },
    {
        username: "thao01@tlu.edu.vn",
        password: "123",
        permission: "students"
    },
    {
        username: "thuong02@tlu.edu.vn",
        password: "456",
        permission: "students"
        
    },
    {
        username: "trang03@tlu.edu.vn",
        password: "789",
        permission: "students"
    },
    ]

function Login() {
     event.preventDefault();
    var username = myForm.username.value;
    var password = myForm.password.value;

    var val = check_user(username, password, users);
    if (val != false) {
       
        if (val.permission == "admin") {
            location.href = "admin/index.html";
        } else if (val.permission == "students") {
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