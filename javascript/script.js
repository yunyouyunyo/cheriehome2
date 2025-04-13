// cursor select 
document.addEventListener("DOMContentLoaded", function () {
    const options = document.querySelectorAll(".cursor-option");
    const body = document.body;

    options.forEach(option => {
        option.addEventListener("click", function () {
            // 清除所有的選擇狀態
            options.forEach(opt => opt.classList.remove("selected"));

            // 加上目前點選的選項
            this.classList.add("selected");

            // 移除舊的游標樣式 class
            body.classList.remove("default-cursor", "heart-cursor", "star-cursor", "pen-cursor");

            // 加上新的游標樣式 class
            const selectedCursor = this.dataset.cursor;
            body.classList.add(`${selectedCursor}-cursor`);
        });
    });
});

let lastScrollTop = 0;
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // 向下滾動，隱藏 nav
        nav.classList.add("hide");
    } else {
        // 向上滾動，顯示 nav
        nav.classList.remove("hide");
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

const images = [
    './img/proarticle/thphoon-800.png',
    './img/proarticle/iStock-970253016.png',
    './img/proarticle/iStock-464990556.png',
    './img/proarticle/Firefly two or three DNAs 56896-800.png',
    './img/proarticle/iStock-1323860801.png',
    './img/proarticle/iStock-599478092.png',
    './img/proarticle/reproducibility.png800.png',
    './img/proarticle/piglet.png',
    './img/proarticle/drink_add.png'
];

const links = [
    'https://www.bienen.com.tw/tw/pro-articles/typhoon_protect',
    'https://www.bienen.com.tw/tw/pro-articles/laying-hens',
    'https://www.bienen.com.tw/tw/pro-articles/poultry-mineral-deficiency',
    'https://www.bienen.com.tw/tw/pro-articles/arginine',
    'https://www.bienen.com.tw/tw/pro-articles/antioxidants_feed_pig',
    'https://www.bienen.com.tw/tw/pro-articles/piglet-water',
    'https://www.bienen.com.tw/tw/pro-articles/sow-childbirth2',
    'https://www.bienen.com.tw/tw/pro-articles/high-yield-sow',
    'https://www.bienen.com.tw/tw/pro-articles/drink-additive'
];

const texts = [
    '颱風即將來臨，對於畜牧業者來說，這不僅是對飼養設施的挑戰，也是對動物健康管理的一次重大考驗。不僅是颱風登陸的當下，颱風過後水質會有所變化，病菌、寄生蟲與鼠害也會跟著跑出來。因此，每次自然災害前的防範與善後都需要我們特別注意。',
    '從營養的角度來看，正確的飲水供應量和水質不僅相當重要，對於疾病的感染也有重要影響。過多的水會導致環境過於潮濕，更容易發生由多種微生物引起的腸炎。水量不足則會降低生產力，並導致脫水和腎衰竭。',
    '通常飼料中會添加符合家禽各階段營養需求的預混料，所以維生素和微量礦物質缺乏症幸運地較為罕見，並且增加了額外劑量以彌補飼料製造過程中的損失。特別是當飼料被壓製成顆粒時，某些維生素可能會因加熱而受損，因此在壓粒過程中需要額外增加維生素的量，以應對緊迫或疾病期間增加的需求，以及長期儲存飼料時可能發生的損失。',
    '缺乏精胺酸，動物的生長就會受到限制，因此精胺酸對於動物的生長具有舉足輕重的角色。精胺酸在人類和大多數其他哺乳動物體內都以脯胺酸(Proline)、麩醯胺酸(Glutamine)和麩胺酸(Glutamate)作為原料，透過腸—腎軸進行內源性合成。但是，年幼哺乳動物及家禽類則因為缺乏合成精胺酸的一些內源性酵素而無法順利合成精胺酸。',
    '在畜牧業中，飼料的品質對於動物的健康和生產效率非常重要。然而，隨著飼料存放時間的延長，尤其是在高溫、高濕的環境下，飼料容易氧化變質，導致養分流失，甚至生成有害物質。',
    '研究發現，育肥豬的飲水量呈現特定週期，尤其在使用鼻頂式飲水器時，飲水量於飼養初期與出欄前達到高峰。此外，水分攝取量於早晨採食後 2 小時與下午採食後1小時達到峰值。',
    '難產的訊號包括厭食、懷孕時間延長、帶血或帶臭味的分泌物、胎糞排出未經過抽搐、母豬持久的出力、抽搐但沒有仔豬出生、母豬精疲力竭且停止出力、母豬焦慮。最常見導致難產的原因是1到2頭仔豬胎位不正而導致產道堵塞。',
    '仔豬的哺乳模式是演化而來，以確保每隻仔豬都能「認領」特定的乳頭，從而減少同胎仔豬之間對乳汁的競爭。因此，當母豬產下的仔豬數量超過其可用乳頭數量時，一些仔豬將無法成功認領乳頭，若飼養人員不採取任何措施，這些仔豬將面臨體溫過低及饑餓的風險。',
    '俗話說病從口入，對動物而言，除了環境中的病原菌外，最容易影響動物健康的東西就是飼料及飲水。飼料中營養的平衡固然重要，但穩定的飼料品質也不能忽略。而動物每日的飲水比飼料高出了2~3倍。因此注重飲水的品質確實與動物的健康有相當大的關係。'
];

const titles = [
    '防颱攻略全公開',
    '蛋雞的重點基礎管理',
    '維生素與礦物質缺乏症',
    '精胺酸對仔豬的重要性',
    '抗氧化劑',
    '豬隻的飲水模式',
    '母豬分娩的基本原理',
    '母豬的初乳量夠用嗎',
    '飲水添加劑的核心概念'
]
const gallery = document.getElementById('gallery');

images.forEach((img, index) => {
    const item = document.createElement('div');
    item.className = 'item';
    item.innerHTML = `
    <a href="${links[index]}" target="_blank">
      <img src="${img}" alt="圖片 ${index + 1}" />
      <div class="title">${titles[index]}</div>
      <div class="text">${texts[index]}</div>
    `;
    gallery.appendChild(item);
});