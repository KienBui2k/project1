
function uuid() {
    var temp_url = URL.createObjectURL(new Blob());
    var uuid = temp_url.toString();
    URL.revokeObjectURL(temp_url);

    return uuid.substr(uuid.lastIndexOf('/') + 1); // remove prefix (e.g. blob:null/, blob:www.test.com/, ...)
}

var date = new Date().getDate() + '-' + (new Date().getMonth() + 1) +
    '-' + new Date().getFullYear() + " " + new Date().getHours() + ":" + new Date().getMinutes();
console.log(date);
// let listMovie = [
//     {
//         name: "avatar 2",
//         src: "./img/img-item/avatar-2-VI_TU-HK.jpg",
//         comment: [],
//         idMovie: uuid(),
//         styleMovie: ["VI_TU", "PL"],
//         nation: "HK",
//         year: "2020-3-24",
//         info: `Avatar: Dòng Chảy Của Nước – Avatar: The Way of Water lấy bối cảnh 10 năm sau những sự 
//         kiện xảy ra ở phần đầu tiên. Phim kể câu chuyện về gia đình mới của Jake Sully (Sam Worthington thủ vai)
//          cùng những rắc rối theo sau và bi kịch họ phải chịu đựng khi phe loài người xâm lược hành tinh Pandora.`
//     },
//     {
//         name: "Ba Kiếp Yêu Hận",
//         src: "./img/img-item/Ba-Kiep-Yeu-Han-TC-HC.jpg",
//         comment: [],
//         idMovie: uuid(),
//         styleMovie: ["TC", "PL"],
//         nation: "HC",
//         year: "2021-8-6",
//         info: `Ba Kiếp Yêu Hận – Circle of Love nói về năm xưa, Cố Mộng – con gái độc nhất của phú hộ một 
//         vùng- bị vị hôn phu Tiêu Hồng Diệp hại nhà tan cửa nát. Nay cô trở về là một con người khác hiểm độc hơn, 
//         cô hóa thân thành vũ nữ, muốn ám sát Tiêu Hồng Diệp – giờ đã là một tên quân phiệt quyền lực – nhưng không 
//         may bị mất trí nhớ;`
//     },
//     {
//         name: "Blue Beetle",
//         src: "./img/img-item/Blue-Beetle-2023-VI_TU-HK.jpg",
//         comment: [],
//         idMovie: uuid(),
//         styleMovie: ["VI_TU", "PL"],
//         nation: "Hk",
//         year: "2023-4-13",
//         info: `Blue Beetle một phiên bản cải tiến của nhân vật này, nhà khảo cổ học Dan Garrett, được giới thiệu
//          vào năm 1964 bởi Charlton Comics, đã vẽ ra những khả năng thần bí từ một con bọ hung Ai Cập cổ đại. 
//          Được xuất bản bởi Charlton Comics và sau đó là DC, tác phẩm sáng tạo năm 1966 Ted Kord là học trò của Garret, 
//          người tiếp tục di sản chiến đấu chống tội phạm lâu đời của mình, mặc dù anh ta không có siêu năng lực.`
//     },
//     {
//         name: "Búp Bê Ma",
//         src: "./img/img-item/bup-be-ma-TL-TQ.jpg",
//         comment: [],
//         idMovie: uuid(),
//         styleMovie: ["KD", "PL"],
//         nation: "TQ",
//         year: "2022-5-13",
//         info: `Búp Bê Ma – The Spirit Puppet mười năm trước, nguyên soái Trương Lộc Chi của phủ Nguyên soái bị
//         giết một cách kỳ lạ, những người hầu canh giữ nhà tang lễ thấy nắp quan tài mở ra mà không có lý do, một bàn
//         tay con rối vươn ra khỏi quan tài để dọa đám đông di chuyển. Nguyên soái đang hút thuốc trong phòng phía sau
//         bị một con rối lặng lẽ tiếp cận và chết ngay tại chỗ.`
//     },
//     {
//         name: "Ba Phần Hoang Dã",
//         src: "./img/img-item/Ba-Phan-Hoang-Da-TC-TQ.jpg",
//         comment: [],
//         idMovie: uuid(),
//         styleMovie: ["TC", "PL"],
//         nation: "TQ",
//         year: "2020-7-10",
//         info: `Ba Phần Hoang Dã – Here We Meet Again , cô chủ tập đoàn Đông Hòa nhận nhiệm vụ phải
//          cứu công ty con Tây An đang trên bờ vực phá sản, bắt đầu hành trình tôi luyện của mình. Hướng Viên gặp gỡ
//           nam thần Từ Yến Thời mà thời đi học cô từng khổ sở cũng không theo đuổi được`
//     },
//     {
//         name: "Cái Chết Của Bảy Vị Vua",
//         src: "./img/img-item/Cai-Chet-Cua-Bay-Vi-Vua-CT-TQ.jpg",
//         comment: [],
//         idMovie: uuid(),
//         styleMovie: ["CT", "PL"],
//         nation: "TQ",
//         year: "2019-7-6",
//         info: `Vương Triều Cuối Cùng: Cái Chết Của Bảy Vị Vua – The Last Kingdom: Seven Kings Must Die 
//         sau khi vua Edward qua đời, Uhtred xứ Bebbanburg và các đồng đội phiêu lưu qua một vương quốc bị chia
//         cắt với hi vọng cuối cùng sẽ thống nhất nước Anh`
//     },
//     {
//         name: "Con Nhót Mót Chồng",
//         src: "./img/img-item/Con-Nhot-Mot-Chong-PH-VN.jpg",
//         comment: [],
//         idMovie: uuid(),
//         styleMovie: ["PH", "PL"],
//         nation: "VN",
//         year: "2022-5-4",
//         info: ``
//     },
//     {
//         name: "Chuyện Lạ Dân Gian",
//         src: "./img/img-item/Chuyen-La-Dan-Gian-Nguy-Hi-Ban-KD-HC.jpg",
//         comment: [],
//         idMovie: uuid(),
//         styleMovie: ["KD", "PL"],
//         nation: "HC",
//         year: "2018-3-8",
//         info: ``
//     },
//     {
//         name: "Dạ Điểu",
//         src: "./img/img-item/Da-Dieu-CO_T-HQ.jpg",
//         comment: [],
//         idMovie: uuid(),
//         styleMovie: ["CO_T", "PL"],
//         nation: "HQ",
//         year: "2019-12-23",
//         info: ``
//     },
//     {
//         name: "Đại Hán Quân Hồn",
//         src: "./img/img-item/dai-han-quan-hon-CT-TQ.jpg",
//         comment: [],
//         idMovie: uuid(),
//         styleMovie: ["CT", "PL"],
//         nation: "TQ",
//         year: "2023-1-3",
//         info: ``
//     },
//     {
//         name: "Đầu Gấu Đụng Đầu Đất",
//         src: "./img/img-item/dau-gau-dung-dau-dat-PH-HQ.jpg",
//         comment: [],
//         idMovie: uuid(),
//         styleMovie: ["PH", "PL"],
//         nation: "HQ",
//         year: "2021-6-2",
//         info: ``
//     },
//     {
//         name: "Vận Hà Kim Long",
//         src: "./img/img-item/Dich-Nhan-Kiet-Van-Ha-Kinh-Long-CO_T-TQ.jpg",
//         comment: [],
//         idMovie: uuid(),
//         styleMovie: ["CO_T", "PL"],
//         nation: "TQ",
//         year: "2023-4-2",
//         info: ``
//     },
//     {
//         name: "Hộ Tâm",
//         src: "./img/img-item/ho-tam-CO_T-HC.jpg",
//         comment: [],
//         idMovie: uuid(),
//         styleMovie: ["CO_T", "PL"],
//         nation: "HC",
//         year: "2022-3-21",
//         info: ``
//     },
//     {
//         name: "Khế Ước",
//         src: "./img/img-item/khe-uoc-CT-AD.jpg",
//         comment: [],
//         idMovie: uuid(),
//         styleMovie: ["CT", "PL"],
//         nation: "AD",
//         year: "2019-12-25",
//         info: ``
//     },
//     {
//         name: "Khóa Chặt Cửa Nào Suzume",
//         src: "./img/img-item/Khoa-Chat-Cua-Nao-Suzume-2022-HH-NB.jpg",
//         comment: [],
//         idMovie: uuid(),
//         styleMovie: ["HH", "PL"],
//         nation: "NB",
//         year: "2022-3-14",
//         info: ``
//     },
//     {
//         name: "Khởi Động Địa Cầu",
//         src: "./img/img-item/khoi-dong-dia-cau-VI_TU-TQ.jpg",
//         comment: [],
//         idMovie: uuid(),
//         styleMovie: ["VI_TU", "PL"],
//         nation: "TQ",
//         year: "2023-2-29",
//         info: ``
//     },
//     {
//         name: "Khủng Long Đột Biến",
//         src: "./img/img-item/khung-long-dot-bien-KD-TQ.jpg",
//         comment: [],
//         idMovie: uuid(),
//         styleMovie: ["KD", "PL"],
//         nation: "TQ",
//         year: "2019-12-13",
//         info: ``
//     },
//     {
//         name: "Máu Và Vàng",
//         src: "./img/img-item/mau-va-vang-CT-HK.jpg",
//         comment: [],
//         idMovie: uuid(),
//         styleMovie: ["CT", "PL"],
//         nation: "HK",
//         year: "2021-7-29",
//         info: ``
//     },
//     {
//         name: "Mục Trung Võ Nhân",
//         src: "./img/img-item/Muc-trung-vo-nhan-VO_T-TQ.jpg",
//         comment: [],
//         idMovie: uuid(),
//         styleMovie: ["VO_T", "PL"],
//         nation: "TQ",
//         year: "2022-8-21",
//         info: ``
//     },
//     {
//         name: "Nàng Tiên Cá",
//         src: "./img/img-item/nang-tien-ca-TC-TL.jpg",
//         comment: [],
//         idMovie: uuid(),
//         styleMovie: ["TC", "PL"],
//         nation: "TL",
//         year: "2019-8-13",
//         info: ``
//     },
//     {
//         name: "Cuộc Nổi Dậy Của AI",
//         src: "./img/img-item/cuoc-noi-day-cua-AI-HD-HK.jpg",
//         comment: [],
//         idMovie: uuid(),
//         styleMovie: ["HD", "PL"],
//         nation: "HK",
//         year: "2019-7-20",
//         info: ``
//     },
//     {
//         name: "Nhập Quan ",
//         src: "./img/img-item/nhap-quan-KD-DL.jpg",
//         comment: [],
//         idMovie: uuid(),
//         styleMovie: ["KD", "PL"],
//         nation: "DL",
//         year: "2018-7-22",
//         info: ``
//     },
//     {
//         name: "Black Adam",
//         src: "./img/img-item/Phim-Black-Adam-HD-HK.jpg",
//         comment: [],
//         idMovie: uuid(),
//         styleMovie: ["HD", "PL"],
//         nation: "HK",
//         year: "2023-3-8",
//         info: ``
//     },
//     {
//         name: "Phong Thần Ngoại Truyện",
//         src: "./img/img-item/Phong-Than-Ngoai-Truyen-Loi-Chan-Tu-CO_T-TQ.jpg",
//         comment: [],
//         idMovie: uuid(),
//         styleMovie: ["CO_T", "Pl"],
//         nation: "TQ",
//         year: "2020-9-1",
//         info: ``
//     },
//     {
//         name: "Vệ Binh Đại Ngân Hà 3",
//         src: "./img/img-item/Ve-Binh-Dai-Ngan-Ha-3-HD-HK.jpg",
//         comment: [],
//         idMovie: uuid(),
//         styleMovie: ["HD", "PL"],
//         nation: "HK",
//         year: "2020-9-2",
//         info: ``
//     },
//     {
//         name: "Lính Bắn Tỉa",
//         src: "./img/img-item/Siberian-Sniper-CT-DL.jpg",
//         comment: [],
//         idMovie: uuid(),
//         styleMovie: ["CT", "PL"],
//         nation: "DL",
//         year: "2023-1-22",
//         info: ``
//     },
//     {
//         name: "Sao Hỏa Dị Biến",
//         src: "./img/img-item/sao-hoa-di-bien-HD-TQ.jpg",
//         comment: [],
//         idMovie: uuid(),
//         styleMovie: ["HD", "PL"],
//         nation: "TQ",
//         year: "2023-5-1",
//         info: ``
//     },
//     {
//         name: "Lưu Lạc Địa Cầu 2",
//         src: "./img/img-item/phim-luu-lac-dia-cau-2-HD-HK.jpg",
//         comment: [],
//         idMovie: uuid(),
//         styleMovie: ["HD", "PL"],
//         nation: "HK",
//         year: "2019-7-10",
//         info: ``
//     },
//     {
//         name: "Hoa Sen Đen",
//         src: "./img/img-item/hoa-sen-den-HD-HK.jpg",
//         comment: [],
//         idMovie: uuid(),
//         styleMovie: ["HD", "PL"],
//         nation: "HK",
//         year: "2020-9-24",
//         info: ``
//     },
//     {
//         name: "Thần Thám Trốn Học",
//         src: "./img/img-item/than-tham-tron-hoc-VO_T-TQ.jpg",
//         comment: [],
//         idMovie: uuid(),
//         styleMovie: ["VO_T", "Pl"],
//         nation: "TQ",
//         year: "2020-10-26",
//         info: ``
//     },
//     {
//         name: "Trương Tam Phong",
//         src: "./img/img-item/Truong-tam-phong-VO_T-TQ.jpg",
//         comment: [],
//         idMovie: uuid(),
//         styleMovie: ["VO_T", "Pl"],
//         nation: "TQ",
//         year: "2021-11-23",
//         info: ``
//     },
//     {
//         name: "Vũ Khí Thể Xác",
//         src: "./img/img-item/vu-khi-the-xac-VO_T-HC.jpg",
//         comment: [],
//         idMovie: uuid(),
//         styleMovie: ["VO_T", "Pl"],
//         nation: "HC",
//         year: "2018-7-13",
//         info: ``
//     },
//     {
//         name: "Nộ Hỏa",
//         src: "./img/img-item/No-hoa-HD-HK.jpg",
//         comment: [],
//         idMovie: uuid(),
//         styleMovie: ["HD", "PL"],
//         nation: "HK",
//         year: "2018-12-7",
//         info: ``
//     },
//     {
//         name: "Nhà Bà Nữ",
//         src: "./img/img-item/nha-ba-nu-CR-VN.jpg",
//         comment: [],
//         idMovie: uuid(),
//         styleMovie: ["CR", "PL"],
//         nation: "VN",
//         year: "2023-3-22",
//         info: ``
//     },
//     {
//         name: "Lật Mặt 6",
//         src: "./img/img-item/Lat-Mat-6-Tam-Ve-Dinh-Menh-CR-VN.jpg",
//         comment: [],
//         idMovie: uuid(),
//         styleMovie: ["CR", "PL"],
//         nation: "VN",
//         year: "2023-5-4",
//         info: ``
//     },
//     {
//         name: "Trường Nguyệt Tận Minh",
//         src: "./img/img-item/truong-nguyet-tan-minh-PB-TQ.jpg",
//         comment: [],
//         idMovie: uuid(),
//         styleMovie: ["PB"],
//         nation: "TQ",
//         year: "2021-6-21",
//         info: ``
//     },
// ];
// localStorage.setItem("listMovie", JSON.stringify(listMovie));


let listMovie = JSON.parse(localStorage.getItem("listMovie"));

let listComment = JSON.parse(localStorage.getItem("listComments")) || [];
console.log(listMovie);
//  phan trang 
let filteredMovies = [];
let currentPage = 1;
let totalItemPage = 5;
let star;
let end;

filteredMovies = listMovie;
function showCurrentPaage(page) {
    star = (page - 1) * totalItemPage;
    end = page * totalItemPage;
}
showCurrentPaage(currentPage);

function increasePage() {
    let oderNumberPage = Math.ceil((filteredMovies.length - 1) / totalItemPage)
    currentPage++;
    if (currentPage == oderNumberPage + 1) {
        currentPage = oderNumberPage;
    }
    let listItemPage = document.getElementsByClassName("item-page");
    for (let i = 0; i < listItemPage.length; i++) {
        if (i == currentPage - 1) {
            listItemPage[i].classList.add("active-page")
        } else {
            listItemPage[i].classList.remove("active-page")
        }
    }
    showCurrentPaage(currentPage);
    renderListMovie(filteredMovies);
}
function decreasePage() {
    currentPage--;
    if (currentPage == 0) {
        currentPage = 1;
    }
    let listItemPage = document.getElementsByClassName("item-page");
    for (let i = 0; i < listItemPage.length; i++) {
        if (i == currentPage - 1) {
            listItemPage[i].classList.add("active-page")
        } else {
            listItemPage[i].classList.remove("active-page")
        }
    }
    showCurrentPaage(currentPage);
    renderListMovie(filteredMovies);
}
document.querySelector("#show-list-page-left").setAttribute("onclick", " decreasePage();");
document.querySelector("#show-list-page-right").setAttribute("onclick", " increasePage();");
// function click tung list page

function pageNow(pageNow1) {
    let listItemPage = document.querySelectorAll(".item-page");
    for (let i = 0; i < listItemPage.length; i++) {
        if (i == pageNow1) {
            listItemPage[i].classList.add("active-page")
        } else {
            listItemPage[i].classList.remove("active-page")
        }
    }
    currentPage = pageNow1 + 1;
    showCurrentPaage(currentPage);
    renderListMovie(filteredMovies);
}

function showListPage(totalPage) {
    let oderNumberPage = Math.ceil((totalPage - 1) / totalItemPage)
    let result = "";
    for (let i = 0; i < oderNumberPage; i++) {
        result += `
                <li onclick=pageNow(${i}) class="item-page">${i + 1}</li>               
                `
        document.getElementById("listPage").innerHTML = result;
        document.getElementsByClassName("item-page")[0].classList.add("active-page");
    }
}

showListPage(listMovie.length);

function renderListMovie(param) {
    let result = "";
    for (let i = 0; i < param.length; i++) {
        if (i >= star && i < end) {
            result += `
         <div onclick="showMoivieItem(${i})" class="item">
                <div class="item-img">
                    <img src="${param[i].src}" alt="">
                </div>
                <div class="item-info">
                    <p>${param[i].name}</p>
                </div>
            </div>
        `;
        }
    }
    document.querySelector("#render__Movie").innerHTML = result;
}
renderListMovie(listMovie)
function filterStyle(arrayStyle, style) {
    for (let i in arrayStyle) {
        if (arrayStyle[i].toUpperCase() == style.toUpperCase()) {
            return true
        }
    }
    return false
}
function renderMovieByStyle(style) {
    currentPage = 1;
    let listRender_movie_byStyle = [];
    for (let i = 0; i < listMovie.length; i++) {
        if (filterStyle(listMovie[i].styleMovie, style)) {
            listRender_movie_byStyle.push(listMovie[i]);
        }
    }
    filteredMovies = listRender_movie_byStyle;
    star = 0;
    end = 5;
    showCurrentPaage(currentPage);
    renderListMovie(filteredMovies);
    showListPage(filteredMovies.length);

}
let catalogStyleList = document.querySelectorAll(".catalog__style");
for (let i in catalogStyleList) {
    if (i == 'entries') {
        break
    }
    catalogStyleList[i].addEventListener("click", function () {
        renderMovieByStyle(catalogStyleList[i].classList[1]);
    });
}
// render theo từng quốc gia 
function renderMovieByNation(nation) {
    currentPage = 1;
    let listRender__movie__byNation = [];
    for (let i = 0; i < listMovie.length; i++) {
        if (listMovie[i].nation == nation) {
            listRender__movie__byNation.push(listMovie[i])
        }
    }
    filteredMovies = listRender__movie__byNation;
    star = 0;
    end = 5;
    showCurrentPaage(currentPage);
    renderListMovie(filteredMovies);
    showListPage(filteredMovies.length);
}
let catalogNationList = document.querySelectorAll(".catalog__nat");

for (let i in catalogNationList) {
    if (i == 'entries') {
        break
    }
    catalogNationList[i].addEventListener("click", function () {
        renderMovieByNation(catalogNationList[i].classList[1]);
    });
}
function clicklogo() {
    filteredMovies = listMovie;
    currentPage = 1;
    showCurrentPaage(currentPage);
    renderListMovie(listMovie);
    showListPage(listMovie.length);
}
document.querySelector("#logo").setAttribute("onClick", "javascript:clicklogo()");

// tìm kiếm 

function removeAccents(str) {
    const accents = 'àáảãạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵđ';
    const nonAccents = 'aaaaaaaaaaaaaaaaaeeeeeeeeeeiiiiiooooooooooooooooouuuuuuuuuuuyyyyyd';
    let result = '';

    for (let i = 0; i < str.length; i++) {
        const charIndex = accents.indexOf(str[i]);
        result += (charIndex !== -1) ? nonAccents[charIndex] : str[i];
    }
    return result;
}

const items = document.querySelectorAll('.item');
const searchInput = document.querySelector('.nav-span-option-inp');
searchInput.addEventListener('input', function () {
    const searchKeyword = removeAccents(searchInput.value.trim().toLowerCase());

    filteredMovies = listMovie.filter(function (movie) {
        const title = removeAccents(movie.name.toLowerCase());
        return title.includes(searchKeyword);
    });
    currentPage = 1;
    showCurrentPaage(currentPage);
    renderListMovie(filteredMovies);
    showListPage(filteredMovies.length);
});

// lọc theo thời gian , ưu tiên phim mới 
document.querySelector(".filterMovie").setAttribute("onclick", "javascript: sorfMovie();");
function sorfMovie() {
    let listMovie = JSON.parse(localStorage.getItem("listMovie"));
    let x = listMovie.sort((a, b) => {
        return a.year.split("-").reverse().join("") - b.year.split("-").reverse().join("")
    })
    renderListMovie(x)
}


function on_button() {
    let a = document.getElementById("input__commment");
    if (a.value !== "") {
        document.getElementById("onSubmitCmt").classList.add("active__button");
    } else {
        document.getElementById("onSubmitCmt").classList.remove("active__button");
    }
    var key = window.event.keyCode;
    if (key === 13) {
        if (a.value.trim() !== "") {
            addComment();
            a.value = "";
            document.getElementById("ii").innerHTML =
                `<textarea onkeydown=on_button() name="" id="input__commment" cols="30" rows="10"></textarea>`;
        } else {
            document.getElementById("onSubmitCmt").classList.remove("active__button");
        }
        return false;
    } else {
        return true;
    }
}

function removeShowMoivieItem() {

    document.querySelector("#kien").innerHTML = "";
}

function showMoivieItem(param) {

    let index;
    let checkLogin = localStorage.getItem("checkLogin");
    if (checkLogin == null) {
        window.location.href = "./html/login.html";
        alert("bạn chưa đăng nhập")
    }
    for (let i = 0; i < listMovie.length; i++) {
        if (i == param) {
            index = listMovie[i];
            localStorage.setItem("indexMovie", index.idMovie);
            break;
        }
    }
    let check__user = JSON.parse(localStorage.getItem("listUsers"));
    console.log(check__user);
    let userItem;

    for (let i = 0; i < check__user.length; i++) {
        if (check__user[i].idUser == checkLogin) {
            userItem = check__user[i];
        }
    }

    {
        let result = "";
        result += ` 
                      <div id="trailer-container">
            <div class="trailer-movie-left">
                <div class="trailer-movie-video">
                    <video src="./videos/video__project.mp4" controls>
                        Your browser does not support the <code>video</code> element.
                    </video>
                </div>
                <div class="trailer-movie-comment-container">
                    <div class="trailer-movie-comment">


                        <div class="trailer-movie-comment-header">
                            <h3><span id="total__comment"> 0 </span> 
                            <span> Bình luận </span></h3>

                        </div>

                        <div class="trailer-movie-comment-body">
                            <div class="user__img">
                                <img src="${userItem.profile}" alt="">
                            </div>
                            <div id="ii" class="user__comment">
                                <textarea  onkeydown=on_button() name="" id="input__commment" cols="30"
                                    rows="10"></textarea>
                            </div>
                            <div class="sumbit__comment">
                                <button onclick="addComment()" id="onSubmitCmt" class="on__sumbit__comment"> 
                                    Đăng
                                </button>
                            </div>
                        </div>

                        <div class="trailer-movie-comment-footer">
                       
                        </div>
                    </div>
                </div>
            </div>

            
            <div class="trailer-movie-right">
                <div class="right-item">
                    <div class="right-item-img">
                        <img src="${index.src}" alt="">
                    </div>
                    <div class="right-item-info">
                        <p>${index.name}</p>
                        <div class="rating">
                            <i class="fa-regular fa-star"></i>
                            <span class="point">12</span>
                            <span class="year">2023</span>
                            <p class="info__movie">Vệ Binh Dải Ngân Hà 3 – Guardians of the Galaxy Volume 3 (2023) sau
                                khi
                                mua Knowhere từ The Collector, đội Vệ binh dải
                                Ngân Hà cố gắng biến nó thành nơi trú ẩn an toàn cho những người tị nạn sau cú búng tay
                                di
                                dời. Nhưng sau một cuộc tấn
                                công tàn bạo, Peter Quill, vẫn cảm xúc vì mất Gamora, phải tập hợp các Vệ binh để thực
                                hiện
                                sứ mệnh bảo vệ vũ trụ và bảo
                                vệ một người trong số họ khỏi kẻ thù chung nguy hiểm.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
        document.querySelector("#kien").innerHTML = result;
    }
    const loginContainer = document.getElementById('trailer-container');
    loginContainer.scrollIntoView();
    renderListComment();

}

function addComment() {
    let check__user = JSON.parse(localStorage.getItem("listUsers"));
    let listMovie = JSON.parse(localStorage.getItem("listMovie"));
    let nameUser;
    let imgUser;
    let checkLogin = localStorage.getItem("checkLogin");
    var getListComments = JSON.parse(localStorage.getItem("listComments")) || [];
    var indexMovie = localStorage.getItem("indexMovie");
    let valueComment = document.getElementById("input__commment").value;
    for (let i = 0; i < check__user.length; i++) {
        if (check__user[i].idUser == checkLogin) {
            nameUser = check__user[i].name;
            imgUser = check__user[i].profile
        }
        console.log(imgUser);
    }
    let obj = {
        nameUser: nameUser,
        idMovie: indexMovie,
        content: valueComment,
        timeComment: date,
        imgUser: imgUser
    };
    let obj__user__comment = {
        idMovie: indexMovie,
        comment: valueComment,
    };
    console.log("test comment obj", obj__user__comment);
    if (valueComment.trim() !== "") {
        getListComments.push(obj);
        localStorage.setItem("listComments", JSON.stringify(getListComments));
        document.getElementById("input__commment").value = "";
        renderListComment();
    }
    for (let i = 0; i < listMovie.length; i++) {
        if (listMovie[i].idMovie == indexMovie) {
            listMovie[i].comment.unshift(obj);
            localStorage.setItem("listMovie", JSON.stringify(listMovie));
        }
    }
    renderListComment();
    for (let i = 0; i < check__user.length; i++) {
        if (check__user[i].idUser == checkLogin) {
            check__user[i].comment.push(obj__user__comment)
            localStorage.setItem("listUsers", JSON.stringify(check__user));
        }
    }
}

function renderListComment() {
    let listMovie = JSON.parse(localStorage.getItem("listMovie"));
    let indexMovie = localStorage.getItem("indexMovie");
    let filterComment = listMovie.filter((item) => {
        return item.idMovie == indexMovie;
    })

    let result = "";
    for (let i = 0; i < filterComment.length; i++) {
        for (let j = 0; j < filterComment[i].comment.length; j++) {

            result += ` <div class="comment__item">
                <div class="user__img__foo">
                    <img src="${filterComment[i].comment[j].imgUser}" alt="">
                </div>
                <div class="user__comment__foo">
                    <h3>${filterComment[i].comment[j].nameUser}</h3>
                    <p>${filterComment[i].comment[j].timeComment}</p>
                    <p>${filterComment[i].comment[j].content}</p>
                </div>
            </div>  
              `
        }
    }
    document.getElementsByClassName("trailer-movie-comment-footer")[0].innerHTML = result;
    document.getElementById("total__comment").innerHTML = filterComment[0].comment.length;

}
let check__user = JSON.parse(localStorage.getItem("listUsers"));
let checkLogin = localStorage.getItem("checkLogin");
if (checkLogin) {
    document.querySelector(".login_btn").style.display = "none"
    document.querySelector(".logout_btn").style.display = "flex";
}
function checkLogout() {
    document.querySelector(".login_btn").style.display = "flex";
    document.querySelector(".logout_btn").style.display = "none";
    localStorage.removeItem('checkLogin');
}
// for (let i in check__user){
if (check__user[0].idUser === checkLogin) {
    document.querySelector(".admin_btn").style.display = "flex";
    document.querySelector(".logout_btn").style.display = "flex";
    document.querySelector(".login_btn").style.display = "none";
    document.querySelector("#btn__setting__img").style.display = "none";
    document.querySelector("#btn__style__img__user").style.display = "none";
}


function changeImage(element) {
    console.log("11111", element);
    var file = element.files[0];
    console.log("file", file.size);
    var reader = new FileReader();
    reader.onloadend = function () {
        console.log('RESULT', reader.result);
        let checkLogin = localStorage.getItem("checkLogin");
        let check__user = JSON.parse(localStorage.getItem("listUsers"));
        for (let i = 0; i < check__user.length; i++) {
            if (check__user[i].idUser == checkLogin) {
                check__user[i].profile = reader.result;
                localStorage.setItem("listUsers", JSON.stringify(check__user));
                readerImage()
            }

        }
    }
    reader.readAsDataURL(file);
}
function readerImage() {

    let checkLogin = localStorage.getItem("checkLogin");
    let check__user = JSON.parse(localStorage.getItem("listUsers"));
    for (let i = 0; i < check__user.length; i++) {
        if (check__user[i].idUser == checkLogin) {

            document.getElementById("img_profile").src = check__user[i].profile;
        }

    }

}
readerImage();


// actionSlideBar();
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
let sideBarImgList = [
    {
        src: "./img/banner-img/du_hanh_vu_tru_nhen.jpg",
    },
    {
        src: "./img/banner-img/khong_loi_thoat.jpg",
    },
    {
        src: "./img/banner-img/oan_hon.jpg",
    },
    {
        src: "./img/banner-img/quai_thu_troi_day.jpg",
    },
    {
        src: "./img/banner-img/avatar_2.jpg",
    },

]

function initSlideBar() {
    const defaultImg = document.querySelector(".defaultImg");
    const nextImg = document.querySelector(".nextImg");

    defaultImg.src = sideBarImgList[0].src;
    nextImg.src = sideBarImgList[1].src;
}

let current = 0;

async function sideBar() {
    const defaultImg = document.querySelector(".defaultImg");
    const nextImg = document.querySelector(".nextImg");
    const slidebar = document.querySelector(".slidebar");
    defaultImg.src = sideBarImgList[current].src;
    nextImg.src = sideBarImgList[current + 1].src;

    let barItemList = document.querySelectorAll(".bar__item");
    current = current + 1;
    await sleep(3000);
    while (true) {
        let copiedElement = nextImg.cloneNode(true);
        slidebar.appendChild(copiedElement);

        setTimeout(() => {
            setTimeout(() => {
                defaultImg.src = copiedElement.src;
                copiedElement.remove();
            }, 3000);

            copiedElement.classList.add("active");
            for (let i in barItemList) {
                if (i == 'entries') {
                    break
                }
                if (i == current) {
                    barItemList[i].classList.add('active');
                } else {
                    barItemList[i].classList.remove('active');
                }
            }
        }, 3000);

        await sleep(3000)

        if (current == sideBarImgList.length - 1) {
            current = 0;
        } else {
            current = current + 1;
        }

        nextImg.src = sideBarImgList[current].src;
    }
}


sideBar();


