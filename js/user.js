let sideBarImgList = [
    {
        src: "./img/banner-img/test.jpg",
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
let current = 0;
//call function
window.onload = function () {
    initSlideBar();
    sideBar();
    renderListMovie();
}

// hàm tự sinh id
function uuid() {
    var temp_url = URL.createObjectURL(new Blob());
    var uuid = temp_url.toString();
    URL.revokeObjectURL(temp_url);

    return uuid.substr(uuid.lastIndexOf('/') + 1); // remove prefix (e.g. blob:null/, blob:www.test.com/, ...)
}
// biến lấy thời gian hiện tại trong máy
var date = new Date().getDate() + '-' + (new Date().getMonth() + 1) +
    '-' + new Date().getFullYear() + " " + new Date().getHours() + ":" + new Date().getMinutes();

console.log(date);
let listMovie = [
    {
        name: "avatar 2",
        src: "../img/img-item/avatar-2-VI_TU-HK.jpg",
        comment: [],
        idMovie: uuid(),
        styleMovie: ["VI_TU", "PL"],
        nation: "HK",
        year: "2020-3-24",
        info: `Avatar: Dòng Chảy Của Nước – Avatar: The Way of Water lấy bối cảnh 10 năm sau những sự 
        kiện xảy ra ở phần đầu tiên. Phim kể câu chuyện về gia đình mới của Jake Sully (Sam Worthington thủ vai)
         cùng những rắc rối theo sau và bi kịch họ phải chịu đựng khi phe loài người xâm lược hành tinh Pandora.`
    },
    {
        name: "Ba Kiếp Yêu Hận",
        src: "../img/img-item/Ba-Kiep-Yeu-Han-TC-HC.jpg",
        comment: [],
        idMovie: uuid(),
        styleMovie: ["TC", "PL"],
        nation: "HC",
        year: "2021-8-6",
        info: `Ba Kiếp Yêu Hận – Circle of Love nói về năm xưa, Cố Mộng – con gái độc nhất của phú hộ một 
        vùng- bị vị hôn phu Tiêu Hồng Diệp hại nhà tan cửa nát. Nay cô trở về là một con người khác hiểm độc hơn, 
        cô hóa thân thành vũ nữ, muốn ám sát Tiêu Hồng Diệp – giờ đã là một tên quân phiệt quyền lực – nhưng không 
        may bị mất trí nhớ;`
    },
    {
        name: "Blue Beetle",
        src: "../img/img-item/Blue-Beetle-2023-VI_TU-HK.jpg",
        comment: [],
        idMovie: uuid(),
        styleMovie: ["VI_TU", "PL"],
        nation: "Hk",
        year: "2023-4-13",
        info: `Blue Beetle một phiên bản cải tiến của nhân vật này, nhà khảo cổ học Dan Garrett, được giới thiệu
         vào năm 1964 bởi Charlton Comics, đã vẽ ra những khả năng thần bí từ một con bọ hung Ai Cập cổ đại. 
         Được xuất bản bởi Charlton Comics và sau đó là DC, tác phẩm sáng tạo năm 1966 Ted Kord là học trò của Garret, 
         người tiếp tục di sản chiến đấu chống tội phạm lâu đời của mình, mặc dù anh ta không có siêu năng lực.`
    },
    {
        name: "Búp Bê Ma",
        src: "../img/img-item/bup-be-ma-TL-TQ.jpg",
        comment: [],
        idMovie: uuid(),
        styleMovie: ["KD", "PL"],
        nation: "TQ",
        year: "2022-5-13",
        info: `Búp Bê Ma – The Spirit Puppet mười năm trước, nguyên soái Trương Lộc Chi của phủ Nguyên soái bị
        giết một cách kỳ lạ, những người hầu canh giữ nhà tang lễ thấy nắp quan tài mở ra mà không có lý do, một bàn
        tay con rối vươn ra khỏi quan tài để dọa đám đông di chuyển. Nguyên soái đang hút thuốc trong phòng phía sau
        bị một con rối lặng lẽ tiếp cận và chết ngay tại chỗ.`
    },
    {
        name: "Ba Phần Hoang Dã",
        src: "../img/img-item/Ba-Phan-Hoang-Da-TC-TQ.jpg",
        comment: [],
        idMovie: uuid(),
        styleMovie: ["TC", "PL"],
        nation: "TQ",
        year: "2020-7-10",
        info: `Ba Phần Hoang Dã – Here We Meet Again , cô chủ tập đoàn Đông Hòa nhận nhiệm vụ phải
         cứu công ty con Tây An đang trên bờ vực phá sản, bắt đầu hành trình tôi luyện của mình. Hướng Viên gặp gỡ
          nam thần Từ Yến Thời mà thời đi học cô từng khổ sở cũng không theo đuổi được`
    },
    {
        name: "Cái Chết Của Bảy Vị Vua",
        src: "../img/img-item/Cai-Chet-Cua-Bay-Vi-Vua-CT-TQ.jpg",
        comment: [],
        idMovie: uuid(),
        styleMovie: ["CT", "PL"],
        nation: "TQ",
        year: "2019-7-6",
        info: `Vương Triều Cuối Cùng: Cái Chết Của Bảy Vị Vua – The Last Kingdom: Seven Kings Must Die 
        sau khi vua Edward qua đời, Uhtred xứ Bebbanburg và các đồng đội phiêu lưu qua một vương quốc bị chia
        cắt với hi vọng cuối cùng sẽ thống nhất nước Anh`
    },
    {
        name: "Con Nhót Mót Chồng",
        src: "../img/img-item/Con-Nhot-Mot-Chong-PH-VN.jpg",
        comment: [],
        idMovie: uuid(),
        styleMovie: ["PH", "PL"],
        nation: "VN",
        year: "2022-5-4",
        info: `Chuyện Xóm Tui: Con Nhót Mót Chồng là câu chuyện của Nhót – người phụ nữ “chưa kịp già” đã 
        sắp bị mãn kinh, vội vàng đi tìm chồng. Nhưng sâu thẳm trong cô, là khao khát muốn có một đứa con
         và luôn muốn hàn gắn với người cha suốt ngày say xỉn của mình.`
    },
    {
        name: "Chuyện Lạ Dân Gian",
        src: "../img/img-item/Chuyen-La-Dan-Gian-Nguy-Hi-Ban-KD-HC.jpg",
        comment: [],
        idMovie: uuid(),
        styleMovie: ["KD", "PL"],
        nation: "HC",
        year: "2018-3-8",
        info: `Chuyện Lạ Dân Gian: Ngụy Hi Ban – Folk Stories: The Tricksters 
        giai đoạn Trung Hoa Dân Quốc, có một thị trấn hẻo lánh phải dốc sức bảo vệ sự bình
        yên vốn có giữa lúc chiến sự liên miên, Từ Thiên Hữu, hộ nghèo trong trấn ấy đang
         cùng với mẹ nương tựa lẫn nhau. Trời chợt nổi cơn giông, anh đang trú mưa ở căn chòi
          hoang đầu ngõ vào làng thì gặp ba người đàn ông lạ mặt đang canh giữ một chiếc hộp gỗ 
          đặt cược, họ nói rằng ai thắng sẽ có được tiền trong chiếc hộp đó.`
    },
    {
        name: "Dạ Điểu",
        src: "../img/img-item/Da-Dieu-CO_T-HQ.jpg",
        comment: [],
        idMovie: uuid(),
        styleMovie: ["CO_T", "PL"],
        nation: "HQ",
        year: "2019-12-23",
        info: `Dạ Điểu – The Night Owl Kyung Soo là một danh y mù có kỹ năng châm cứu xuất sắc. 
        Anh được tiến cử vào cung và vô tình vướng vào cái chết của thế tử So Hyun. Những thế lực tàn ác
         muốn lợi dụng đôi mắt mù lòa của anh, nhưng nào biết khi bóng tối bao trùm, đôi mắt đó lại trở nên
          sáng rõ.

`
    },
    {
        name: "Đại Hán Quân Hồn",
        src: "../img/img-item/dai-han-quan-hon-CT-TQ.jpg",
        comment: [],
        idMovie: uuid(),
        styleMovie: ["CT", "PL"],
        nation: "TQ",
        year: "2023-1-3",
        info: `Đại Hán Quân Hồn – Army Soul Of The Han Dynasty Đông Hán năm kiến quốc đầu tiên,Hung 
        Nô từ phương Bắc lợi dụng lúc thôn tính Tây Vực khống chế cả Con Đường Tơ Lụa, nhà Hán cử Ban Siêu 
        đến Tây Vực mở lại Con Đường Tơ Lụa. Trước sự cướp bóc man rợ của Hung Nô, Tư Mã Cảnh Cung đã dẫn
         quân Hán một lưới bắt sống hoàng tử của Hung Nô, lập được đại công.`
    },
    {
        name: "Đầu Gấu Đụng Đầu Đất",
        src: "../img/img-item/dau-gau-dung-dau-dat-PH-HQ.jpg",
        comment: [],
        idMovie: uuid(),
        styleMovie: ["PH", "PL"],
        nation: "HQ",
        year: "2021-6-2",
        info: `Đầu Gấu Đụng Đầu Đất – Ungnami theo chân Woong-nam (Park Sung Woong thủ vai), chàng “đầu đất”
         với năng lực bẩm sinh siêu phàm tựa như loài gấu, bất đắc dĩ phải đối đầu với một tổ chức tội phạm
          quốc tế.`
    },
    {
        name: "Vận Hà Kim Long",
        src: "../img/img-item/Dich-Nhan-Kiet-Van-Ha-Kinh-Long-CO_T-TQ.jpg",
        comment: [],
        idMovie: uuid(),
        styleMovie: ["CO_T", "PL"],
        nation: "TQ",
        year: "2023-4-2",
        info: `Vận Hà Kinh Long – Legend of Detective Dee (2023) nói về hoàng hậu Võ Tắc Thiên và một trăm quan
         chức tuần tra Vận Hà vào ban đêm, hàng ngàn người ở Lạc Dương đã đổ xô đến chỉ để được nhìn thấy mặt Võ 
         Tắc Thiên, không ngờ trong kênh xuất hiện một con quái vật hình rồng chạm với thuyền rồng.`
    },
    {
        name: "Hộ Tâm",
        src: "../img/img-item/ho-tam-CO_T-HC.jpg",
        comment: [],
        idMovie: uuid(),
        styleMovie: ["CO_T", "PB"],
        nation: "HC",
        year: "2022-3-21",
        info: `Hộ Tâm – Back From the Brink (2022) được chuyển thể từ tiểu thuyết cùng tên của Cửu Lộ Phi Hương.
         Hai mươi năm trước, Thiên Diệu bị người thương là Tố Ảnh, môn chủ Quảng Hàn Môn rút gân róc xương, đồng 
         thời dùng sức mạnh ngũ hành phong ấn ở tứ phương. Tình cờ làm sao, mười năm trước linh hồn của Thiên Diệu
          đã thoát khỏi phong ấn, hắn cảm nhận được một hồ nước nơi làng núi đang phong ấn long cốt của hắn, bèn
           nhập vào người một cậu bé chết yểu, chờ thời cơ lấy lại long cốt`
    },
    {
        name: "Khế Ước",
        src: "../img/img-item/khe-uoc-CT-AD.jpg",
        comment: [],
        idMovie: uuid(),
        styleMovie: ["CT", "PL"],
        nation: "AD",
        year: "2019-12-25",
        info: `Khế Ước – Guy Ritchie’s The Covenant ( sẽ là phim hành động chiến tranh cảm xúc nhất của tài tử Jake
             Gyllenhaal. Tác phẩm hội tụ tất cả yếu tố: phân cảnh cháy nổ hoành tráng, những pha rượt đuổi, bắn súng
              hoành tráng, yếu tố chính trị căng thẳng.`
    },
    {
        name: "Khóa Chặt Cửa Nào Suzume",
        src: "../img/img-item/Khoa-Chat-Cua-Nao-Suzume-2022-HH-NB.jpg",
        comment: [],
        idMovie: uuid(),
        styleMovie: ["HH", "PL"],
        nation: "NB",
        year: "2022-3-14",
        info: `Khóa Chặt Cửa Nào Suzume – Suzume No Tojimari (2022) câu chuyện bắt đầu khi Suzume vô tình gặp chàng 
        trai Souta đến thị trấn nơi cô sinh sống với mục đích tìm kiếm “một cánh cửa”. Để bảo vệ Nhật Bản khỏi thảm 
        họa, những cánh cửa rải rác khắp nơi phải được đóng lại, và bất ngờ thay Suzume cũng có khả năng đóng cửa đặc 
        biệt này. Từ đó cả hai cùng nhau thực hiện sự mệnh “khóa chặt cửa”!`
    },
    {
        name: "Khởi Động Địa Cầu",
        src: "../img/img-item/khoi-dong-dia-cau-VI_TU-TQ.jpg",
        comment: [],
        idMovie: uuid(),
        styleMovie: ["VI_TU", "PL"],
        nation: "TQ",
        year: "2023-2-29",
        info: `Khởi Động Địa Cầu – Restart the Earth (2023) con người vì muốn chống lại hiện tượng sa mạc hoá, đã nghiên
         cứu ra thuốc thúc đẩy quá trình sinh sản của tế bào thực vật. Điều này vô tình giải phóng hệ thống kích thích
         phản ứng của thực vật, đánh thức cảm xúc của chúng, khiến thực vật sinh sôi nảy nở nhanh chóng.`
    },
    {
        name: "Khủng Long Đột Biến",
        src: "../img/img-item/khung-long-dot-bien-KD-TQ.jpg",
        comment: [],
        idMovie: uuid(),
        styleMovie: ["KD", "PL"],
        nation: "TQ",
        year: "2019-12-13",
        info: `Khủng Long Đột Biến – Variation of Tyrannosaurus tại một viện nghiên cứu Gen đột biến, người giúp viện vô 
        tình mở một chiếc lồng sắt tại phòng thí nghiệm và bị một quái vật giết chết. Để điều tra nguồn gốc vụ án có
         liên quan đến con trăn kỳ lạ, A Lương một nhà sinh vật động vật hoang dã, đã đến tập đoàn Gen nơi bạn gái cũ
          Thi Văn làm việc. Tại đây, anh phát hiện ra được những bí mật kinh hoàng mà công ty Gen tạo ra.`
    },
    {
        name: "Máu Và Vàng",
        src: "../img/img-item/mau-va-vang-CT-HK.jpg",
        comment: [],
        idMovie: uuid(),
        styleMovie: ["CT", "PL"],
        nation: "HK",
        year: "2021-7-29",
        info: `Máu Và Vàng – Blood & Gold (2021) trong giai đoạn cuối đầy tàn khốc của Thế chiến II, một viên lính đào
         ngũ người Đức và một phụ nữ trẻ bị kéo vào trận chiến đẫm máu với nhóm Đức Quốc xã đang săn lùng vàng bị giấu.`
    },
    {
        name: "Mục Trung Võ Nhân",
        src: "../img/img-item/Muc-trung-vo-nhan-VO_T-TQ.jpg",
        comment: [],
        idMovie: uuid(),
        styleMovie: ["VO_T", "PL"],
        nation: "TQ",
        year: "2022-8-21",
        info: `Mục Trung Vô Nhân – Blind Sword (2022) do Ngụy Tuấn Tử sản xuất, giám chế Trương Triết, Dương Bỉnh đạo
         diễn kiêm kịch bản, cùng sự tham gia của các diễn viên Cao Duy Mạn, Hướng Hạo, Lưu Bôn, Trương Địch Anh. Anh 
         chàng “bắt dao” với những pha nguy hiểm, gặp Nghê Yến một cô gái bị làm nhục, vốn dĩ không muốn can thiệp,
          nhưng vô tình bị kéo vào một cuộc tranh chấp quyền lực đen tối. Thành Hạt Tử bắt đầu con đường tìm kiếm công
           lí và trả thù, dần dần danh tính thực sự của cậu ta cũng được tiết lộ…`
    },
    {
        name: "Nàng Tiên Cá",
        src: "../img/img-item/nang-tien-ca-TC-TL.jpg",
        comment: [],
        idMovie: uuid(),
        styleMovie: ["TC", "PL"],
        nation: "TL",
        year: "2019-8-13",
        info: `Nàng Tiên Cá – The Little Mermaid là câu chuyện được yêu thích về Ariel – một nàng tiên cá trẻ xinh
         đẹp và mạnh mẽ với khát khao phiêu lưu. Ariel là con gái út của Vua Triton và cũng là người ngang ngạnh nhất, 
         nàng khao khát khám phá về thế giới bên kia đại dương.`
    },
    {
        name: "Cuộc Nổi Dậy Của AI",
        src: "../img/img-item/cuoc-noi-day-cua-AI-HD-HK.jpg",
        comment: [],
        idMovie: uuid(),
        styleMovie: ["HD", "PL"],
        nation: "HK",
        year: "2019-7-20",
        info: `Cuộc Nổi Dậy Của AI – Simulant kể về tương lai gần, khi Evan (do Robbie Amell thủ vai), một
         robot simulant được tạo ra để thay thế cho người chồng đã mất của Faye (do Jordana Brewster thủ vai). Để
          thực hiện được tất cả các đặc tính con người của mình, Evan đã tìm đến Casey (do Simu Liu thủ vai), một 
          hacker thiên tài toàn cầu với nhiệm vụ xóa bỏ tất cả các giới hạn đối với suy nghĩ và khả năng của những
           robot simulant.`
    },
    {
        name: "Nhập Quan ",
        src: "../img/img-item/nhap-quan-KD-DL.jpg",
        comment: [],
        idMovie: uuid(),
        styleMovie: ["KD", "PL"],
        nation: "DL",
        year: "2018-7-22",
        info: `Nhập Quan – Enter The Coffin  trên có mẹ già, dưới có con nhỏ, kho hàng chuyển phát nhận khoán lại bất
         ngờ bị cháy phải bồi thường, Mã Viễn Hạo rơi vào khủng hoảng tuổi trung niên, cùng đường bí lối nên đã thỉnh
          cầu đại sư hóa giải kiếp nạn dưới sự khích lệ của mẹ mình.`
    },
    {
        name: "Black Adam",
        src: "../img/img-item/Phim-Black-Adam-HD-HK.jpg",
        comment: [],
        idMovie: uuid(),
        styleMovie: ["HD", "PL"],
        nation: "HK",
        year: "2023-3-8",
        info: `Black Adam do Dwayne Johnson sẽ góp mặt trong tác phẩm hành động – phiêu lưu mới của New Line Cinema,
         mang tên BLACK ADAM. Đây là bộ phim đầu tiên trên màn ảnh rộng khai thác câu chuyện của siêu anh hùng DC này.`
    },
    {
        name: "Phong Thần Ngoại Truyện",
        src: "../img/img-item/Phong-Than-Ngoai-Truyen-Loi-Chan-Tu-CO_T-TQ.jpg",
        comment: [],
        idMovie: uuid(),
        styleMovie: ["CO_T", "Pl"],
        nation: "TQ",
        year: "2020-9-1",
        info: `Phong Thần Ngoại Truyện: Lôi Chấn Tử – League of Gods: Leizhenzi  Hạ Đinh ban đầu là con của một gia 
        đình tướng quân ở thànhTây Kì. Những kẻ man rợ đã xâm chiếm và giết cha mẹ của Hạ Đinh và tất cả binh lính 
        của thànhTây Kì. Hạ Đinh chạy trốn đến trấn Thái Bình và lớn lên ở đây và hay bị con trai tù trưởng bắt nạt..`
    },
    {
        name: "Vệ Binh Đại Ngân Hà 3",
        src: "../img/img-item/Ve-Binh-Dai-Ngan-Ha-3-HD-HK.jpg",
        comment: [],
        idMovie: uuid(),
        styleMovie: ["HD", "PL"],
        nation: "HK",
        year: "2020-9-2",
        info: `Vệ Binh Dải Ngân Hà 3 – Guardians of the Galaxy Volume 3 sau khi mua Knowhere từ The Collector,
         đội Vệ binh dải Ngân Hà cố gắng biến nó thành nơi trú ẩn an toàn cho những người tị nạn sau cú búng tay di
          dời. Nhưng sau một cuộc tấn công tàn bạo, Peter Quill, vẫn cảm xúc vì mất Gamora, phải tập hợp các Vệ binh 
          để thực hiện sứ mệnh bảo vệ vũ trụ và bảo vệ một người trong số họ khỏi kẻ thù chung nguy hiểm.`
    },
    {
        name: "Lính Bắn Tỉa",
        src: "../img/img-item/Siberian-Sniper-CT-DL.jpg",
        comment: [],
        idMovie: uuid(),
        styleMovie: ["CT", "PL"],
        nation: "DL",
        year: "2023-1-22",
        info: `Lính Bắn Tỉa Siberia – Siberian Sniper  trong thời kỳ đỉnh cao của Thế chiến thứ hai, người lính bắn tỉa 
        cuối cùng còn sống sót của một đơn vị Liên Xô được cử đi thực hiện một nhiệm vụ liều chết nhằm phá vỡ một thành
         trì của Đức để cứu những người lính của mình.`
    },
    {
        name: "Sao Hỏa Dị Biến",
        src: "../img/img-item/sao-hoa-di-bien-HD-TQ.jpg",
        comment: [],
        idMovie: uuid(),
        styleMovie: ["HD", "PL"],
        nation: "TQ",
        year: "2023-5-1",
        info: `Sao Hoả Dị Biến – Mutation on Mars kể về kho gen căn cứ Sao Hỏa bị mưa sao băng va chạm, phi hành gia
         Trung Quốc buộc phải đến cứu hộ, không ngờ một con cá Côn khổng lồ bí ẩn xuất hiện.`
    },
    {
        name: "Lưu Lạc Địa Cầu 2",
        src: "../img/img-item/phim-luu-lac-dia-cau-2-HD-HK.jpg",
        comment: [],
        idMovie: uuid(),
        styleMovie: ["HD", "PL"],
        nation: "HK",
        year: "2019-7-10",
        info: `Lưu Lạc Địa Cầu 2 – The Wandering Earth 2 con người đã chế tạo những động cơ khổng lồ trên bề mặt trái
         đất để tìm một ngôi nhà mới khi mặt trời có nguy cơ bị hủy diệt. Dẫu vậy con đường đến với vũ trụ chưa đựng
         đầy rẫy nguy hiểm. Để cứu trái đất, những người trẻ tuổi một lần nữa phải bước ra để bắt đầu một cuộc chạy
          đua với thời gian cho sự sống và cái chết.`
    },
    {
        name: "Hoa Sen Đen",
        src: "../img/img-item/hoa-sen-den-HD-HK.jpg",
        comment: [],
        idMovie: uuid(),
        styleMovie: ["HD", "PL"],
        nation: "HK",
        year: "2020-9-24",
        info: `Hoa Sen Đen – Black Lotus một cựu đặc nhiệm thuê một người đàn ông chiến đấu trên đường phố
        Amsterdam để giải cứu con gái của bạn mình khỏi tổ chức tội phạm địa phương.`
    },
    {
        name: "Thần Thám Trốn Học",
        src: "../img/img-item/than-tham-tron-hoc-VO_T-TQ.jpg",
        comment: [],
        idMovie: uuid(),
        styleMovie: ["VO_T", "Pl"],
        nation: "TQ",
        year: "2020-10-26",
        info: `Thần Thám Trốn Học – Detective Chen một vụ giết người kỳ lạ xảy ra ở trường trung học
         St. Martin. Hà Mạn Quân, con trai của Bộ trưởng Bộ Quân sự và Chính trị đã chết một cách kỳ lạ. Viên 
         cảnh sát Trần Hổ nhận nhiệm vụ và bí mật điều tra sự thật trong trường. Khuôn viên tưởng chừng yên bình
          lại ngấm ngầm dậy sóng, thầy trò chia bè kết phát, nhưng lại có thể cùng nhau chống lại kẻ thù bên ngoài,
           người ta nghi ngờ người bạn gái bị bắt từng báo cảnh sát bắt Hà Mạn Quân vì tội cưỡng hiếp.`
    },
    {
        name: "Trương Tam Phong",
        src: "../img/img-item/Truong-tam-phong-VO_T-TQ.jpg",
        comment: [],
        idMovie: uuid(),
        styleMovie: ["VO_T", "Pl"],
        nation: "TQ",
        year: "2021-11-23",
        info: `Trương Tam Phong – The Tai Chi Master vào cuối triều đại Nam Tống, đất nước rối ren, các bộ tộc
         ngoại bang rình rập, tìm cách xâm lược Trung Nguyên. Vào ngày này, khi ngoại bang tấn công, Trương Quân Bảo 
         đệ tử của phái Vô Cực đã lật ngược tình thế và giúp Nguỵ Lâm Xuyên, tướng quân của nhà Tống, bảo vệ thành công
          biên giới.`
    },
    {
        name: "Vũ Khí Thể Xác",
        src: "../img/img-item/vu-khi-the-xac-VO_T-HC.jpg",
        comment: [],
        idMovie: uuid(),
        styleMovie: ["VO_T", "Pl"],
        nation: "HC",
        year: "2018-7-13",
        info: `Vũ Khí Thể Xác nói về một cô gái trẻ bị bọn xã hội đen cưỡng hiếp. Cô đã tiến hành việc trả thù bằng cách 
        dùng chính thể xác của mình để dụ dỗ bọn chúng`
    },
    {
        name: "Nộ Hỏa",
        src: "../img/img-item/No-hoa-HD-HK.jpg",
        comment: [],
        idMovie: uuid(),
        styleMovie: ["HD", "PL"],
        nation: "HK",
        year: "2018-12-7",
        info: `Nộ Hỏa – Raging Fire kể về câu chuyện của đội trưởng Tề Vĩ Bân (do Hình Hãn Khanh thủ vai) và đội phó
         Trần Mẫn (do Lý Manh Manh thủ vai). Sau khi nhận được cuộc gọi báo cáo về vụ việc buôn bán ma túy, hai người
          họ dẫn theo các thành viên trong nhóm tiến hành một cuộc điều tra bí mật về mục tiêu bị nghi ngờ. và gặp gỡ 
          các trùm ma túy Duẫn Khôn (do Cố Bân thủ vai) và Duẫn Dực (do Trữ Tiến thủ vai). Đây là một cuộc đấu trí và
           so gan trong công cuộc chống ma túy.`
    },
    {
        name: "Nhà Bà Nữ",
        src: "../img/img-item/nha-ba-nu-CR-VN.jpg",
        comment: [],
        idMovie: uuid(),
        styleMovie: ["CR", "PL"],
        nation: "VN",
        year: "2023-3-22",
        info: `Nhà Bà Nữ xoay quanh gia đình bà Nữ gồm ba thế hệ sống cùng nhau trong một ngôi nhà. Bà Nữ một tay cáng
         đáng mọi sự, nổi tiếng với quán bánh canh cua và cũng khét tiếng với việc kiểm soát cuộc sống của tất cả mọi
          người, từ con gái đến con rể. Mọi chuyện diễn ra bình thường cho đến khi cô con gái út si mê anh chàng điển
           trai xuất thân từ một gia đình giàu có.`
    },
    {
        name: "Lật Mặt 6",
        src: "../img/img-item/Lat-Mat-6-Tam-Ve-Dinh-Menh-CR-VN.jpg",
        comment: [],
        idMovie: uuid(),
        styleMovie: ["CR", "PL"],
        nation: "VN",
        year: "2023-5-4",
        info: `Lật Mặt 6: Tấm Vé Định Mệnh một nhóm bạn thân lâu năm bất ngờ nhận được cơ hội đổi đời khi biết tấm vé
         của cả nhóm trúng giải độc đắc 136.8 tỷ. Đột nhiên An, người nắm giữ tấm vé bất ngờ gặp tai nạn không qua 
         khỏi. Đứng trước món tiền trúng số đáng mơ ước lẽ ra sẽ dễ dàng có được trong tầm tay, nhóm bạn bước chân vào 
         hành trình đi tìm tờ vé số. Nhưng đó chỉ là khởi đầu của vô số những sự kiện không ngờ đến. Liệu hành trình 
         tìm kiếm và chia chác món tiền trong mơ béo bở này sẽ thực sự dẫn đưa cả nhóm đến đâu?`
    },
    {
        name: "Trường Nguyệt Tận Minh",
        src: "../img/img-item/truong-nguyet-tan-minh-PB-TQ.jpg",
        comment: [],
        idMovie: uuid(),
        styleMovie: ["PB"],
        nation: "TQ",
        year: "2021-6-21",
        info: `Trường Nguyệt Tẫn Minh bắt đầu từ khi tam giới bị ma thần Đạm Đài Tẫn thống trị, chúng linh lầm than.
         Để cứu lấy chúng sinh, Lê Tô Tô – con gái của Hành Dương tông chưởng môn đã thực hiện một nhiệm vụ vô cùng
         nguy hiểm, quay trở lại thời điểm 500 năm trước ngăn cản Đạm Đài Tẫn trước khi hắn bị tà cốt trong người xâm
          chiếm hoàn toàn trở thành ma thần.`
    },
];

// kiểm tra và set local
if (localStorage.getItem("listMovie") == null) {
    localStorage.setItem("listMovie", JSON.stringify(listMovie));
}


// let listMovie = JSON.parse(localStorage.getItem("listMovie"));

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
    if (param == null) {
        param = JSON.parse(localStorage.getItem("listMovie"));
    }
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
    const loginContainer = document.getElementById('render__Movie');
    loginContainer.scrollIntoView();
}


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
    let sortedMovies = listMovie.sort((a, b) => {
        return a.year.split("-").reverse().join("") - b.year.split("-").reverse().join("");
    });

    filteredMovies = sortedMovies;
    star = 0;
    end = 5;
    showCurrentPaage(currentPage);
    renderListMovie(filteredMovies);
    showListPage(filteredMovies.length);
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
    localStorage.removeItem('indexMovie');
    const loginContainer = document.getElementById('content');
    // scrollIntoView() dùng để cuộn tới vị trí của phần tử loginContainer
    loginContainer.scrollIntoView();
}

function showMoivieItem(param) {
    let index;
    let checkLogin = localStorage.getItem("checkLogin");
    if (checkLogin == null) {
        window.location.href = "./html/login.html";
        alert("bạn chưa đăng nhập")
    }
    let listMovie = JSON.parse(localStorage.getItem("listMovie"));
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
                            <p class="info__movie">${index.info}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
        document.querySelector("#kien").innerHTML = result;
    }
    const loginContainer = document.getElementById('trailer-container');
    // scrollIntoView() dùng để cuộn tới vị trí của phần tử loginContainer
    loginContainer.scrollIntoView();
    renderListComment();
}

function addComment() {
    let check__user = JSON.parse(localStorage.getItem("listUsers"));
    let listMovie = JSON.parse(localStorage.getItem("listMovie"));

    let nameUser;
    let imgUser;
    let idUser
    let checkLogin = localStorage.getItem("checkLogin");
    var getListComments = JSON.parse(localStorage.getItem("listComments")) || [];
    var indexMovie = localStorage.getItem("indexMovie");
    let valueComment = document.getElementById("input__commment").value;
    for (let i = 0; i < check__user.length; i++) {
        if (check__user[i].idUser == checkLogin) {
            nameUser = check__user[i].name;
            imgUser = check__user[i].profile
            idUser = check__user[i].idUser
        }
    }
    let obj = {
        idComment: uuid(),
        idUser: idUser,
        nameUser: nameUser,
        idMovie: indexMovie,
        content: valueComment,
        timeComment: date,
        imgUser: imgUser
    };

    if (valueComment.trim() !== "") {
        getListComments.unshift(obj);
        localStorage.setItem("listComments", JSON.stringify(getListComments));
        document.getElementById("input__commment").value = "";
    }

    renderListComment();
}

function renderListComment() {
    let listComment = JSON.parse(localStorage.getItem("listComments")) || [];
    let indexMovie = localStorage.getItem("indexMovie");
    let filterComment = listComment.filter((item) => {
        return item.idMovie == indexMovie;
    })
    let result = "";
    for (let i = 0; i < filterComment.length; i++) {
        result += ` <div class="comment__item">
                <div class="user__img__foo">
                    <img src="${filterComment[i].imgUser}" alt="">
                </div>
                <div class="user__comment__foo">
                    <h3>${filterComment[i].nameUser}</h3>
                    <p>${filterComment[i].timeComment}</p>
                    <p>${filterComment[i].content}</p>
                </div>
            </div>
            `
    }
    document.getElementsByClassName("trailer-movie-comment-footer")[0].innerHTML = result;
    document.getElementById("total__comment").innerHTML = filterComment.length;

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
    document.querySelector(".user-manage_btn").style.display = "flex";
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

function initSlideBar() {

    const defaultImg = document.querySelector(".defaultImg");
    const nextImg = document.querySelector(".nextImg");
    defaultImg.src = sideBarImgList[0].src;
    nextImg.src = sideBarImgList[1].src;
}

async function sideBar() {
    const defaultImg = document.querySelector(".defaultImg");
    const nextImg = document.querySelector(".nextImg");
    const slidebar = document.querySelector(".slidebar");
    defaultImg.src = sideBarImgList[current].src;
    nextImg.src = sideBarImgList[current + 1].src;

    let barItemList = document.querySelectorAll(".bar__item");
    current = current + 1;

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




