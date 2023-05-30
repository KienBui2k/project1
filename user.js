
function uuid() {
    var temp_url = URL.createObjectURL(new Blob());
    var uuid = temp_url.toString();
    URL.revokeObjectURL(temp_url);
    return uuid.substr(uuid.lastIndexOf('/') + 1); // remove prefix (e.g. blob:null/, blob:www.test.com/, ...)
}

let listMovie = [
    {
        name: "avatar-2",
        src: "./img-item/avatar-2-VI_TU-HK.jpg",
        // href:
        idMovie: uuid(),
        styleMovie: ["VI_TU", "PL"],
        nation: "HK",
        year: "2020-3-24",
    },
    {
        name: "Ba Kiếp Yêu Hận",
        src: "./img-item/Ba-Kiep-Yeu-Han-TC-HC.jpg",
        // href:
        idMovie: uuid(),
        styleMovie: ["TC", "PL"],
        nation: "HC",
        year: "2021-8-6",
    },
    {
        name: "Blue Beetle",
        src: "./img-item/Blue-Beetle-2023-VI_TU-HK.jpg",
        // href:
        idMovie: uuid(),
        styleMovie: ["VI_TU", "PL"],
        nation: "Hk",
        year: "2023-4-13",
    },
    {
        name: "Búp Bê Ma",
        src: "./img-item/bup-be-ma-TL-TQ.jpg",
        // href:
        idMovie: uuid(),
        styleMovie: ["KD", "PL"],
        nation: "TQ",
        year: "2022-5-13",
    },
    {
        name: "Ba Phần Hoang Dã",
        src: "./img-item/Ba-Phan-Hoang-Da-TC-TQ.jpg",
        // href:
        idMovie: uuid(),
        styleMovie: ["TC", "PL"],
        nation: "TQ",
        year: "2020-7-10",
    },
    {
        name: "Cái Chết Của Bảy Vị Vua",
        src: "./img-item/Cai-Chet-Cua-Bay-Vi-Vua-CT-TQ.jpg",
        // href:
        idMovie: uuid(),
        styleMovie: ["CT", "PL"],
        nation: "TQ",
        year: "2019-7-6",
    },
    {
        name: "Con Nhót Mót Chồng",
        src: "./img-item/Con-Nhot-Mot-Chong-PH-VN.jpg",
        // href:
        idMovie: uuid(),
        styleMovie: ["PH", "PL"],
        nation: "VN",
        year: "2022-5-4",
    },
    {
        name: "Chuyện Lạ Dân Gian",
        src: "./img-item/Chuyen-La-Dan-Gian-Nguy-Hi-Ban-KD-HC.jpg",
        // href:
        idMovie: uuid(),
        styleMovie: ["KD", "PL"],
        nation: "HC",
        year: "2018-3-8",
    },
    {
        name: "Dạ Điểu",
        src: "./img-item/Da-Dieu-CO_T-HQ.jpg",
        // href:
        idMovie: uuid(),
        styleMovie: ["CO_T", "PL"],
        nation: "HQ",
        year: "2019-12-23",
    },
    {
        name: "Đại Hán Quân Hồn",
        src: "./img-item/dai-han-quan-hon-CT-TQ.jpg",
        // href:
        idMovie: uuid(),
        styleMovie: ["CT", "PL"],
        nation: "TQ",
        year: "2023-1-3",
    },
    {
        name: "Đầu Gấu Đụng Đầu Đất",
        src: "./img-item/dau-gau-dung-dau-dat-PH-HQ.jpg",
        // href:
        idMovie: uuid(),
        styleMovie: ["PH", "PL"],
        nation: "HQ",
        year: "2021-6-2",
    },
    {
        name: "Vận Hà Kim Long",
        src: "./img-item/Dich-Nhan-Kiet-Van-Ha-Kinh-Long-CO_T-TQ.jpg",
        // href:
        idMovie: uuid(),
        styleMovie: ["CO_T", "PL"],
        nation: "TQ",
        year: "2023-4-2",
    },
    {
        name: "Hộ Tâm",
        src: "./img-item/ho-tam-CO_T-HC.jpg",
        // href:
        idMovie: uuid(),
        styleMovie: ["CO_T", "PL"],
        nation: "HC",
        year: "2022-3-21",
    },
    {
        name: "Khế Ước",
        src: "./img-item/khe-uoc-CT-AD.jpg",
        // href:
        idMovie: uuid(),
        styleMovie: ["CT", "PL"],
        nation: "AD",
        year: "2019-12-25",
    },
    {
        name: "Khóa Chặt Cửa Nào Suzume",
        src: "./img-item/Khoa-Chat-Cua-Nao-Suzume-2022-HH-NB.jpg",
        // href:
        idMovie: uuid(),
        styleMovie: ["HH", "PL"],
        nation: "NB",
        year: "2022-3-14",
    },
    {
        name: "Khởi Động Địa Cầu",
        src: "./img-item/khoi-dong-dia-cau-VI_TU-TQ.jpg",
        // href:
        idMovie: uuid(),
        styleMovie: ["VI_TU", "PL"],
        nation: "TQ",
        year: "2023-2-29",
    },
    {
        name: "Khủng Long Đột Biến",
        src: "./img-item/khung-long-dot-bien-KD-TQ.jpg",
        // href:
        idMovie: uuid(),
        styleMovie: ["KD", "PL"],
        nation: "TQ",
        year: "2019-12-13",
    },
    {
        name: "Máu Và Vàng",
        src: "./img-item/mau-va-vang-CT-HK.jpg",
        // href:
        idMovie: uuid(),
        styleMovie: ["CT", "PL"],
        nation: "HK",
        year: "2021-7-29",
    },
    {
        name: "Mục Trung Võ Nhân",
        src: "./img-item/Muc-trung-vo-nhan-VO_T-TQ.jpg",
        // href:
        idMovie: uuid(),
        styleMovie: ["VO_T", "PL"],
        nation: "TQ",
        year: "2022-8-21",
    },
    {
        name: "Nàng Tiên Cá",
        src: "./img-item/nang-tien-ca-TC-TL.jpg",
        // href:
        idMovie: uuid(),
        styleMovie: ["TC", "PL"],
        nation: "TL",
        year: "2019-8-13",
    },
    {
        name: "Cuộc Nổi Dậy Của AI",
        src: "./img-item/cuoc-noi-day-cua-AI-HD-HK.jpg",
        // href:
        idMovie: uuid(),
        styleMovie: ["HD", "PL"],
        nation: "HK",
        year: "2019-7-20",
    },
    {
        name: "Ninh Ảnh Như Mộng",
        src: "./img-item/ninh-an-nhu-mong-CO_T-HQ.jpg",
        // href:
        idMovie: uuid(),
        styleMovie: ["CO_T", "Pl"],
        nation: "HQ",
        year: "2023-1-12",
    },
    {
        name: "Nhập Quan ",
        src: "./img-item/nhap-quan-KD-DL.jpg",
        // href:
        idMovie: uuid(),
        styleMovie: ["KD", "PL"],
        nation: "DL",
        year: "2018-7-22",
    },
    {
        name: "Nhu Cầu Tuổi Trẻ",
        src: "./img-item/nhu-cau-tuoi-tre-TL-HK.jpg",
        // href:
        idMovie: uuid(),
        styleMovie: ["TL", "PL"],
        nation: "HK",
        year: "2023-2-26",
    },
    {
        name: "Black Adam",
        src: "./img-item/Phim-Black-Adam-HD-HK.jpg",
        // href:
        idMovie: uuid(),
        styleMovie: ["HD", "PL"],
        nation: "HK",
        year: "2023-3-8",
    },
    {
        name: "Già Gân Báo Thù",
        src: "./img-item/Phim-Sisu-Gia-Gan-Bao-Thu-CT-HK.jpg",
        // href:
        idMovie: uuid(),
        styleMovie: ["CT", "PL"],
        nation: "HK",
        year: "2022-8-3",
    },
    {
        name: "Phong Thần Ngoại Truyện",
        src: "./img-item/Phong-Than-Ngoai-Truyen-Loi-Chan-Tu-CO_T-TQ.jpg",
        // href:
        idMovie: uuid(),
        styleMovie: ["CO_T", "Pl"],
        nation: "TQ",
        year: "2020-9-1",
    },
    {
        name: "Vệ Binh Đại Ngân Hà 3",
        src: "./img-item/Ve-Binh-Dai-Ngan-Ha-3-HD-HK.jpg",
        // href:
        idMovie: uuid(),
        styleMovie: ["HD", "PL"],
        nation: "HK",
        year: "2020-9-2",
    },
    {
        name: "Quỷ Núi",
        src: "./img-item/quy-nui-CO_T-DL-TL.jpg",
        // href:
        idMovie: uuid(),
        styleMovie: ["CO_T", "Pl"],
        nation: "TL",
        year: "2022-12-12",
    },
    {
        name: "Lính Bắn Tỉa",
        src: "./img-item/Siberian-Sniper-CT-DL.jpg",
        // href:
        idMovie: uuid(),
        styleMovie: ["CT", "PL"],
        nation: "DL",
        year: "2023-1-22",
    },
    {
        name: "Sao Hỏa Dị Biến",
        src: "./img-item/sao-hoa-di-bien-HD-TQ.jpg",
        // href:
        idMovie: uuid(),
        styleMovie: ["HD", "PL"],
        nation: "TQ",
        year: "2023-5-1",
    },
    {
        name: "Tay Sai Của Quỷ",
        src: "./img-item/Tay-Sai-Cua-Quy-PH-HK.jpg",
        // href:
        idMovie: uuid(),
        styleMovie: ["PH", "PL"],
        nation: "HK",
        year: "2019-9-22",
    },
    {
        name: "Lưu Lạc Địa Cầu 2",
        src: "./img-item/phim-luu-lac-dia-cau-2-HD-HK.jpg",
        // href:
        idMovie: uuid(),
        styleMovie: ["HD", "PL"],
        nation: "HK",
        year: "2019-7-10",
    },
    {
        name: "Tiếng Thét 6",
        src: "./img-item/tieng-thet-6-KD-HK.jpg",
        // href:
        idMovie: uuid(),
        styleMovie: ["KD", "PL"],
        nation: "TL",
        year: "2023-4-30",
    },
    {
        name: "Tình Người Duyên Ma Ngoại Truyện",
        src: "./img-item/tinh-nguoi-duyen-ma-ngoai-truyen-TC-TL.jpg",
        // href:
        idMovie: uuid(),
        styleMovie: ["TL", "PL"],
        nation: "TL",
        year: "2020-12-29",
    },
    {
        name: "Hoa Sen Đen",
        src: "./img-item/hoa-sen-den-HD-HK.jpg",
        // href:
        idMovie: uuid(),
        styleMovie: ["HD", "PL"],
        nation: "HK",
        year: "2020-9-24",
    },
    {
        name: "Thần Thám Trốn Học",
        src: "./img-item/than-tham-tron-hoc-VO_T-TQ.jpg",
        // href:
        idMovie: uuid(),
        styleMovie: ["VO_T", "Pl"],
        nation: "TQ",
        year: "2020-10-26",
    },
    {
        name: "Trương Tam Phong",
        src: "./img-item/Truong-tam-phong-VO_T-TQ.jpg",
        // href:
        idMovie: uuid(),
        styleMovie: ["VO_T", "Pl"],
        nation: "TQ",
        year: "2021-11-23",
    },
    {
        name: "Vũ Khí Thể Xác",
        src: "./img-item/vu-khi-the-xac-VO_T-HC.jpg",
        // href:
        idMovie: uuid(),
        styleMovie: ["VO_T", "Pl"],
        nation: "HC",
        year: "2018-7-13",
    },
    {
        name: "Nộ Hỏa",
        src: "./img-item/No-hoa-HD-HK.jpg",
        // href:
        idMovie: uuid(),
        styleMovie: ["HD", "PL"],
        nation: "HK",
        year: "2018-12-7",
    },
    {
        name: "Nhà Bà Nữ",
        src: "./img-item/nha-ba-nu-CR-VN.jpg",
        // href:
        idMovie: uuid(),
        styleMovie: ["CR", "PL"],
        nation: "VN",
        year: "2023-3-22",
    },
    {
        name: "Lật Mặt 6",
        src: "./img-item/Lat-Mat-6-Tam-Ve-Dinh-Menh-CR-VN.jpg",
        // href:
        idMovie: uuid(),
        styleMovie: ["CR", "PL"],
        nation: "VN",
        year: "2023-5-4",
    },
    {
        name: "Trường Nguyệt Tận Minh",
        src: "./img-item/truong-nguyet-tan-minh-PB-TQ.jpg",
        // href:
        idMovie: uuid(),
        styleMovie: ["PB"],
        nation: "TQ",
        year: "2021-6-21",
    },
];

// localStorage.setItem("listMovie", JSON.stringify(listMovie));
// let listMovie = JSON.parse(localStorage.getItem("listMovie"));

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
    renderListMovie(listMovie);
}
document.querySelector("#show-list-page-left").setAttribute("onclick", " decreasePage();");
document.querySelector("#show-list-page-right").setAttribute("onclick", " increasePage();");
// function click tung list page

function pageNow(pageNow1) {
    let listItemPage = document.querySelectorAll(".item-page");
    for (let i = 0; i < listItemPage.length; i++) {
        if (i == pageNow1) {
            console.log('i', i, pageNow1)
            console.log('i', i, listItemPage[i])
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
         <div class="item">
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
    document.querySelector("#left-content").innerHTML = result;
}

renderListMovie(listMovie)


function filterStyle(arrayStyle, style) {
    for (let i in arrayStyle) {
        console.log('arrayStyle[i]', arrayStyle[i], style)
        if (arrayStyle[i] == style) {
            return true
        }
    }
    return false
}

function renderMovieByStyle(style) {
    let test = [];
    for (let i = 0; i < listMovie.length; i++) {
        if (filterStyle(listMovie[i].styleMovie, style)) {
            test.push(listMovie[i]);
        }
    }
    filteredMovies = test;
    star = 0;
    end = 5;
    renderListMovie(filteredMovies);
    showListPage(filteredMovies.length);
    localStorage.setItem("addList", JSON.stringify(filteredMovies));
}



let catalogStyleList = document.querySelectorAll(".catalog__style");
for (let i in catalogStyleList) {
    if (i == 'entries') {
        break
    }
    //console.log("catalogStyleList[i]", catalogStyleList[i]);
    catalogStyleList[i].addEventListener("click", function () {
        renderMovieByStyle(catalogStyleList[i].classList[1]);
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



// render theo từng quốc gia 
function renderMovieByNation(param) {
    console.log("da vao");
    let array1 = [];
    for (let i = 0; i < listMovie.length; i++) {
        if (listMovie[i].nation.includes(param)) {
            array1.push(listMovie[i])
        }
    }
    star = 0;
    end = 5;
    renderListMovie(array1);
    showListPage(array1.length);
    renderListMovie(array1);
    localStorage.setItem("addList", JSON.stringify(array1));
}


document.querySelector(".VN").addEventListener("click", function () {
    renderMovieByNation("VN");
});
document.querySelector(".HQ").addEventListener("click", function () {
    renderMovieByNation("HQ");
});
document.querySelector(".HK").addEventListener("click", function () {
    renderMovieByNation("HK");
});
document.querySelector(".HC").addEventListener("click", function () {
    renderMovieByNation("HC");
});
document.querySelector(".DL").addEventListener("click", function () {
    renderMovieByNation("DL");
});
document.querySelector(".TL").addEventListener("click", function () {
    renderMovieByNation("TL");
});
document.querySelector(".AD").addEventListener("click", function () {
    renderMovieByNation("AD");
});
document.querySelector(".NB").addEventListener("click", function () {
    renderMovieByNation("NB");
});
document.querySelector(".TQ").addEventListener("click", function () {
    renderMovieByNation("TQ");
});

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

    items.forEach(function (item) {
        const title = removeAccents(item.querySelector('p').textContent.toLowerCase());

        if (title.includes(searchKeyword)) {
            item.style.display = 'inline-block';
        } else {
            item.style.display = 'none';
        }
    });
});

// lọc theo thời gian , ưu tiên phim mới 
document.querySelector(".filterMovie").setAttribute("onClick", "javascript: sorfMovie();");
function sorfMovie() {
    let listMovie = JSON.parse(localStorage.getItem("listMovie"));
    let x = listMovie.sort((a, b) => {
        return a.year.split("-").reverse().join("") - b.year.split("-").reverse().join("")
    })
    renderListMovie(x)
}

