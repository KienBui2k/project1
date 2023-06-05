document.addEventListener("DOMContentLoaded", function () {
    // Lấy danh sách phim từ localStorage
    let listMovie = JSON.parse(localStorage.getItem("listMovie")) || [];

    // Hiển thị danh sách phim
    displayMovieList();

    // Biến để lưu trạng thái form (add/edit)
    let isEditing = false;
    let movieIdToEdit = "";

    // Bắt sự kiện submit form
    document.getElementById("movieForm").addEventListener("submit", function (e) {
        e.preventDefault();
        // Lấy giá trị từ form
        let name = document.getElementById("name").value;
        let src = document.getElementById("src").value;
        let style = document.getElementById("style").value.split(",");
        let nation = document.getElementById("nation").value;
        let year = document.getElementById("year").value;
        let info = document.getElementById("info").value;

        if (isEditing) {
            // Sửa thông tin phim
            let movieToEdit = listMovie.find(function (movie) {
                return movie.idMovie === movieIdToEdit;
            });

            if (movieToEdit) {
                movieToEdit.name = name;
                movieToEdit.src = src;
                movieToEdit.styleMovie = style;
                movieToEdit.nation = nation;
                movieToEdit.year = year;
                movieToEdit.info = info;
            }

            // Reset trạng thái form
            isEditing = false;
            movieIdToEdit = "";
            document.getElementById("submitButton").textContent = "Thêm phim";
            document.getElementById("formTitle").textContent = "Add Movie";
        } else {
            // Thêm phim mới vào danh sách
            let newMovie = {
                name: name,
                src: src,
                comment: [],
                idMovie: uuid(),
                styleMovie: style,
                nation: nation,
                year: year,
                info: info
            };
            listMovie.unshift(newMovie);
        }

        // Lưu danh sách phim mới vào localStorage
        localStorage.setItem("listMovie", JSON.stringify(listMovie));

        // Hiển thị danh sách phim mới
        displayMovieList();

        // Reset form
        document.getElementById("movieForm").reset();
    });

    // Bắt sự kiện click nút Hủy
    document.getElementById("cancelButton").addEventListener("click", function () {
        // Reset trạng thái form
        isEditing = false;
        movieIdToEdit = "";
        document.getElementById("submitButton").textContent = "Thêm phim";
        document.getElementById("formTitle").textContent = "Add Movie";
        document.getElementById("movieForm").reset();
    });

    // Hiển thị danh sách phim
    function displayMovieList() {
        let tableBody = document.getElementById("movieList");
        tableBody.innerHTML = "";
        for (let movie of listMovie) {
            let row = document.createElement("tr");

            let nameCell = document.createElement("td");
            nameCell.textContent = movie.name;

            let imageCell = document.createElement("td");
            let image = document.createElement("img");
            image.src = movie.src;
            imageCell.appendChild(image);

            // Hiển thị danh sách comment
            let commentCell = document.createElement("td");
            let listComment = JSON.parse(localStorage.getItem("listComments")) || [];
            let filterComment = listComment.filter((item) => {
                return item.idMovie == movie.idMovie;
            })

            for (let comment of filterComment) {

                let deleteCommentBtn = document.createElement("button");
                deleteCommentBtn.textContent = "Xóa";
                deleteCommentBtn.classList.add("delete-btn");

                let commentText = document.createElement("span");
                commentText.textContent = comment.content;
                deleteCommentBtn.addEventListener("click", function () {
                    // xóa comment theo id
                    filterComment = filterComment.filter(function (c) {
                        return c.idComment !== comment.idComment;
                    });
                    localStorage.setItem("listComments", JSON.stringify(filterComment));
                    displayMovieList();
                });
                commentCell.appendChild(commentText);
                commentCell.appendChild(deleteCommentBtn);
                commentCell.appendChild(document.createElement("br"));
            }

            let actionsCell = document.createElement("td");
            let editBtn = document.createElement("button");
            editBtn.textContent = "Sửa";
            editBtn.classList.add("edit-btn");
            editBtn.addEventListener("click", function () {
                // Đổ dữ liệu phim vào form để chỉnh sửa
                document.getElementById("name").value = movie.name;
                document.getElementById("src").value = movie.src;
                document.getElementById("style").value = movie.styleMovie.join(",");
                document.getElementById("nation").value = movie.nation;
                document.getElementById("year").value = movie.year;
                document.getElementById("info").value = movie.info;

                // Đặt trạng thái form là Edit
                isEditing = true;
                movieIdToEdit = movie.idMovie;
                document.getElementById("submitButton").textContent = "Cập nhật";
                document.getElementById("formTitle").textContent = "Edit Movie";
            });
            actionsCell.appendChild(editBtn);

            let deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Xóa";
            deleteBtn.classList.add("delete-btn");
            deleteBtn.addEventListener("click", function () {
                listMovie = listMovie.filter(function (m) {
                    return m.idMovie !== movie.idMovie;
                });
                localStorage.setItem("listMovie", JSON.stringify(listMovie));
                displayMovieList();
            });
            actionsCell.appendChild(deleteBtn);

            row.appendChild(nameCell);
            row.appendChild(imageCell);
            row.appendChild(commentCell);
            row.appendChild(actionsCell);

            tableBody.appendChild(row);
        }
    }

    function uuid() {
        var temp_url = URL.createObjectURL(new Blob());
        var uuid = temp_url.toString();
        URL.revokeObjectURL(temp_url);

        return uuid.substr(uuid.lastIndexOf('/') + 1); // remove prefix (e.g. blob:null/, blob:www.test.com/, ...)
    }
});
