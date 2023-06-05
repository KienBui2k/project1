document.addEventListener("DOMContentLoaded", function () {
    let listUsers = JSON.parse(localStorage.getItem("listUsers")) || [];
    function displayUserList() {
        let userList = document.getElementById("userList");
        userList.innerHTML = "";

        for (let user of listUsers) {
            let row = document.createElement("tr");

            let emailCell = document.createElement("td");
            emailCell.textContent = user.email;

            let nameCell = document.createElement("td");
            nameCell.textContent = user.name;

            // Hiển thị danh sách comment
            let commentCell = document.createElement("td");
            let listComment = JSON.parse(localStorage.getItem("listComments")) || [];
            let filterComment = listComment.filter((item) => {
                return item.idUser == user.idUser;
            });

            for (let comment of filterComment) {
                let commentText = document.createElement("span");
                commentText.textContent = comment.content;

                let deleteCommentBtn = document.createElement("button");
                deleteCommentBtn.textContent = "Xóa";
                deleteCommentBtn.classList.add("delete-btn");

                deleteCommentBtn.addEventListener("click", function () {
                    // xóa comment theo id
                    filterComment = filterComment.filter(function (c) {
                        return c.idComment !== comment.idComment;
                    });
                    localStorage.setItem("listComments", JSON.stringify(filterComment));
                    displayUserList();
                });

                commentCell.appendChild(commentText);
                commentCell.appendChild(deleteCommentBtn);
                commentCell.appendChild(document.createElement("br"));
            }

            let actionsCell = document.createElement("td");

            let editBtn = document.createElement("button");
            editBtn.textContent = "Edit";
            editBtn.classList.add("edit-btn");
            editBtn.addEventListener("click", function () {
                editUser(user);
            });

            actionsCell.appendChild(editBtn);

            // Nếu người dùng không phải là admin
            if (user.idUser !== listUsers[0].idUser) {
                let lockBtn = document.createElement("button");
                lockBtn.classList.add("lock-btn");
                lockBtn.addEventListener("click", function () {
                    toggleLockUser(user);
                });

                actionsCell.appendChild(lockBtn);

                // Kiểm tra trạng thái khoá của người dùng để thay đổi nội dung và lớp của nút khóa
                if (user.isLocked) {
                    lockBtn.textContent = "Unlock";
                    lockBtn.classList.add("unlock-btn");
                } else {
                    lockBtn.textContent = "Lock";
                }
            }

            row.appendChild(emailCell);
            row.appendChild(nameCell);
            row.appendChild(commentCell);
            row.appendChild(actionsCell);
            userList.appendChild(row);
        }
    }


    // Chỉnh sửa người dùng
    function editUser(user) {
        document.getElementById("formTitle").textContent = "Edit User";
        document.getElementById("email").value = user.email;
        document.getElementById("name").value = user.name;
        document.getElementById("password").value = user.password;
        document.getElementById("confirmPassword").value = user.password;

        document.getElementById("userForm").style.display = "block";
        document.getElementById("submitButton").textContent = "Save";

        // Bắt sự kiện submit form
        document.getElementById("userForm").addEventListener("submit", function (event) {
            event.preventDefault();

            // Lấy giá trị từ form
            let password = document.getElementById("password").value;
            let confirmPassword = document.getElementById("confirmPassword").value;

            // Kiểm tra mật khẩu trùng khớp
            if (password !== confirmPassword) {
                alert("Password and Confirm Password must match");
                return;
            }

            // Cập nhật thông tin người dùng
            user.password = password;

            // Cập nhật dữ liệu trong localStorage
            localStorage.setItem("listUsers", JSON.stringify(listUsers));

            // Hiển thị danh sách người dùng
            displayUserList();

            // Reset form
            document.getElementById("userForm").reset();
            document.getElementById("userForm").style.display = "none";
        });

        // Bắt sự kiện click nút Cancel
        document.getElementById("cancelButton").addEventListener("click", function () {
            document.getElementById("userForm").reset();
            document.getElementById("userForm").style.display = "none";
        });
    }

    // Khoá/Mở khoá người dùng
    function toggleLockUser(user) {
        if (confirm(`Bạn có chắc chắn muốn ${user.isLocked ? 'mở khoá' : 'khoá'} người dùng này?`)) {
            user.isLocked = !user.isLocked;
            localStorage.setItem("listUsers", JSON.stringify(listUsers));
            displayUserList();
        }
    }

    // Hiển thị danh sách người dùng ban đầu
    displayUserList();
});
