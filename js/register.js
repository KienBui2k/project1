
function uuid() {
    var temp_url = URL.createObjectURL(new Blob());
    var uuid = temp_url.toString();
    URL.revokeObjectURL(temp_url);
    return uuid.substr(uuid.lastIndexOf('/') + 1); // remove prefix (e.g. blob:null/, blob:www.test.com/, ...)
}

function showSuccessToast() {
    toast({
        title: "Thành Công!",
        message: "Bạn đã đăng ký thành công!",
        type: "success",
        duration: 5000
    });
}

function showErrorToast() {
    toast({
        title: "Thất Bại!",
        message: "Bạn đã đăng ký thất bại, tài khoản này đã tồn tại!",
        type: "error",
        duration: 5000
    });
}




function changeImage(element) {
    console.log("11111", element);
    var file = element.files[0];
    console.log("file", file.size);
    var reader = new FileReader();
    reader.onloadend = function () {
        console.log('RESULT', reader.result);
        localStorage.setItem("image", reader.result);
        readerImage()
    }
    reader.readAsDataURL(file);
}
function readerImage() {
    let result = localStorage.getItem("image");
    console.log("22222", result);
    document.getElementById("changeImg").src = result;
}
readerImage();



// Toast function
function toast({ title = "", message = "", type = "info", duration = 3000 }) {
    const main = document.getElementById("toast");
    if (main) {
        const toast = document.createElement("div");

        // Auto remove toast
        const autoRemoveId = setTimeout(function () {
            main.removeChild(toast);
        }, duration + 1000);

        // Remove toast when clicked
        toast.onclick = function (e) {
            if (e.target.closest(".toast__close")) {
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        };
        
        const icons = {
            success: "fas fa-check-circle",
            info: "fas fa-info-circle",
            warning: "fas fa-exclamation-circle",
            error: "fas fa-exclamation-circle"
        };
        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);

        toast.classList.add("toast", `toast--${type}`);
        toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;

        toast.innerHTML = `
                    <div class="toast__icon">
                        <i class="${icon}"></i>
                    </div>
                    <div class="toast__body">
                        <h3 class="toast__title">${title}</h3>
                        <p class="toast__msg">${message}</p>
                    </div>
                    <div class="toast__close">
                        <i class="fas fa-times"></i>
                    </div>
                `;
        main.appendChild(toast);
    }
}
// Chức năng đăng ký



