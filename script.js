const khodams = [
  { name: "Harimau Putih",       meaning: "Kamu kuat dan berani seperti harimau, karena pendahulumu mewariskan kekuatan besar padamu." },
  { name: "Macan Kumbang",       meaning: "Kamu misterius dan kuat, seperti macan yang jarang terlihat tapi selalu waspada." },
  { name: "Harimau Loreng",      meaning: "Kamu tangguh dan memiliki kekuatan untuk melindungi dan menyerang." },
  { name: "Singa Bermahkota",    meaning: "Kamu lahir sebagai pemimpin, memiliki kekuatan dan kebijaksanaan seorang raja." },
  { name: "Gajah Putih",         meaning: "Kamu bijaksana dan memiliki kekuatan besar, lambang dari keberanian dan keteguhan hati." },
  { name: "Banteng Sakti",       meaning: "Kamu kuat dan penuh semangat, tidak takut menghadapi rintangan." },
  { name: "Kuda Emas",           meaning: "Kamu berharga dan kuat, siap untuk berlari menuju kesuksesan." },
  { name: "Elang Biru",          meaning: "Kamu memiliki visi yang tajam dan dapat melihat peluang dari jauh." },
  { name: "Ular Raksasa",        meaning: "Kamu memiliki kebijaksanaan dan kekuatan tersembunyi, siap menyerang jika diperlukan." },
  { name: "Ikan Dewa",           meaning: "Kamu tenang dan penuh kedamaian, membawa rezeki dan keberuntungan." },
  { name: "Rusa Emas",           meaning: "Kamu anggun dan berharga, selalu dihargai oleh orang-orang di sekitarmu." },
  { name: "Kijang Perak",        meaning: "Kamu cepat dan cekatan, selalu waspada dan siap untuk melompat lebih jauh." },
  { name: "Lumba-lumba",         meaning: "Kamu pintar dan selalu membawa keceriaan di lautan kehidupan." },
  { name: "Anjing Pelacak",      meaning: "Kamu setia dan penuh dedikasi, selalu menemukan jalan menuju tujuanmu." },
  { name: "Kucing Hitam",        meaning: "Kamu misterius dan penuh dengan rahasia, membawa keberuntungan bagi yang memahami." },
  { name: "Iguana Pink",         meaning: "Kamu eksotis dan selalu menarik perhatian dengan warnamu yang unik." },
  { name: "Panda Ompong",        meaning: "Kamu menggemaskan dan selalu berhasil membuat orang tersenyum dengan keanehanmu." },
  { name: "Bebek Karet",         meaning: "Kamu selalu tenang dan ceria, mampu menghadapi gelombang masalah dengan senyum." },
  { name: "Ninja Turtle",        meaning: "Kamu lincah dan tangguh, siap melindungi yang lemah dengan kekuatan tempurmu." },
  { name: "Kucing Kulkas",       meaning: "Kamu misterius dan selalu ada di tempat-tempat yang tak terduga." },
  { name: "Kuda Lumping",        meaning: "Kamu penuh semangat dan selalu tampil beda di setiap kesempatan." },
  { name: "Kucing Gemuk",        meaning: "Kamu santai dan selalu bikin orang tersenyum dengan kelucuanmu." },
  { name: "Semut Kecil",         meaning: "Kamu pekerja keras dan selalu bisa diandalkan dalam situasi apa pun." },
  { name: "Robot Mini",          meaning: "Kamu canggih dan selalu siap membantu dengan kecerdasan teknologi tinggi." },
  { name: "Ikan Terbang",        meaning: "Kamu unik dan penuh kejutan, selalu melampaui batasan yang ada." },
  { name: "Lampu Tertidur",      meaning: "Terlihat ngantuk tapi selalu memberikan cahaya yang hangat." },
  { name: "Sabun Wangi",         meaning: "Kamu selalu membawa keharuman dan kesegaran di mana pun kamu berada." },
  { name: "Moge Suzuki",         meaning: "Kamu cepat dan penuh gaya, selalu menjadi pusat perhatian di jalanan." },
  { name: "Cupcake Pelangi",     meaning: "Kamu manis dan penuh warna, selalu membawa kebahagiaan dan keceriaan." },
  { name: "Indomie Goreng",      meaning: "Selalu bikin kenyang dan bahagia di setiap kesempatan." },
  { name: "Es Krim Meleleh",     meaning: "Selalu mencairkan suasana dengan rasa manisnya yang tak tertahankan." },
  { name: "Bakso Ulet",          meaning: "Selalu gigih dan bulat dalam menghadapi masalah." },
  { name: "Ayam Goreng",         meaning: "Kamu selalu disukai dan dinanti oleh banyak orang, penuh kelezatan dalam setiap langkahmu." },
  { name: "Kecoa Terbang",       meaning: "Kamu selalu mengagetkan dan bikin heboh seisi ruangan." },
  { name: "Nasi Padang",         meaning: "Kamu selalu bikin kenyang dan puas dengan kelezatanmu yang khas." },
  { name: "Rendang Daging",      meaning: "Selalu empuk dan kaya rempah, lambang ketahanan dan kekuatan." },
  { name: "Sate Ayam",           meaning: "Selalu enak di segala acara, kamu selalu pas di setiap situasi." },
  { name: "Rawon Sapi",          meaning: "Kamu penuh misteri seperti rawon yang hitam namun nikmat luar biasa." },
  { name: "Pempek Palembang",    meaning: "Selalu enak dan gurih, kamu dicintai oleh semua kalangan." },
  { name: "Coto Makassar",       meaning: "Selalu gurih dan nikmat, kamu membawa kekayaan rasa dalam setiap interaksi." },
  { name: "Wedang Jahe",         meaning: "Selalu hangat dan menenangkan, kamu hadir di saat yang paling dibutuhkan." },
  { name: "Kopi Susu",           meaning: "Kamu manis dan selalu bikin semangat orang-orang di sekitarmu." },
  { name: "Teh Botol Sosro",     meaning: "Selalu segar di segala suasana tanpa pernah mengecewakan." },
  { name: "Jamu Pahit",          meaning: "Selalu memberi kekuatan meski tak enak di awal, manfaatmu terasa belakangan." },
  { name: "Es Kelapa",           meaning: "Kamu segar dan selalu bikin adem di saat-saat panas." },
  { name: "Motor Vespa",         meaning: "Selalu klasik dan penuh gaya, tak lekang oleh zaman." },
  { name: "Honda Supra",         meaning: "Selalu bisa diandalkan di jalanan mana pun dan kapan pun." },
  { name: "Honda CBR",           meaning: "Selalu cepat dan penuh gaya, kamu lahir untuk memimpin." },
  { name: "Honda PCX",           meaning: "Selalu mewah dan nyaman, kamu tampil premium di setiap situasi." },
  { name: "Kompor Meledak",      meaning: "Selalu memberikan kehangatan yang luar biasa, terkadang terlalu bersemangat." },
  { name: "Kipas Angin Kelereng",meaning: "Selalu memberikan angin segar dengan cara yang kocak dan unik." },
  { name: "Payung Bocor",        meaning: "Selalu memberikan kejutan saat hujan, kamu penuh dengan twist tak terduga." },
  { name: "Buku Lucu",           meaning: "Mampu membuatmu tertawa di setiap halaman, kamu adalah hiburan sejati." },
  { name: "Pensil Penghilang",   meaning: "Selalu menghilang saat dibutuhkan, misterius namun selalu ada saat genting." },
  { name: "Penghapus Pelawak",   meaning: "Selalu membuat kesalahan menjadi lucu dan pelajaran menjadi ringan." },
  { name: "Sandal Jepit",        meaning: "Selalu santai dan nyaman, kamu membuat semua orang merasa rileks." },
  { name: "Rice Cooker",         meaning: "Selalu memasak nasi dengan sempurna, kamu adalah tulang punggung yang diandalkan." },
  { name: "Kulkas Berisik",      meaning: "Selalu bising tapi berguna, kamu penuh energi dan tak terbendung." },
  { name: "Rak Buku Pintar",     meaning: "Selalu memberikan buku yang sesuai dengan minatmu, kamu sumber pengetahuan sejati." },
  { name: "Lampu Tidur",         meaning: "Selalu memberikan cahaya lembut, kamu adalah ketenangan di tengah kegelapan." },
  { name: "Bantal Guling",       meaning: "Selalu nyaman di pelukan, kamu hadir di saat orang paling butuh kenyamanan." },
  { name: "Karet Gelang",        meaning: "Selalu fleksibel dan berguna, kamu bisa menyesuaikan diri di segala situasi." },
  { name: "Sapu Lidi",           meaning: "Kamu kuat dan selalu bisa diandalkan untuk membersihkan masalah." },
  { name: "Panci Presto",        meaning: "Selalu cepat dan praktis, kamu menyelesaikan masalah dengan efisien." },
  { name: "Talenan Kayu",        meaning: "Selalu setia menemani dapur, kamu adalah fondasi yang tak tergantikan." },
  { name: "Cangkir Teh",         meaning: "Selalu menghangatkan suasana dan membuat orang merasa nyaman di dekatmu." },
  { name: "Cermin Menggigil",    meaning: "Selalu memberikan pantulan yang lucu, kamu tak pernah membuat situasi membosankan." },
  { name: "Kursi Muter",         meaning: "Memberikan sensasi berputar di setiap duduknya, kamu selalu menghadirkan perspektif baru." },
  { name: "Tas Pintar",          meaning: "Selalu memberikan apa yang diperlukan saat dibutuhkan, kamu siap sedia." },
  { name: "Pena Bocor",          meaning: "Selalu meninggalkan jejak, kamu adalah pribadi yang tak mudah dilupakan." },
  { name: "Toples Kue",          meaning: "Selalu penuh kejutan manis, kamu membawa kebahagiaan bagi orang sekitar." },
  { name: "Gelang Ajaib",        meaning: "Kamu membawa keberuntungan dan selalu ada di sisi orang yang menyayangimu." },
  { name: "Lilin Meleleh",       meaning: "Selalu memberikan cahaya di kegelapan meski harus berkorban demi orang lain." },
  { name: "Kabel Kusut",         meaning: "Selalu membuat penasaran dan bingung, tapi di balik itu tersimpan koneksi yang kuat." }
];

const nameInput       = document.getElementById('nameInput');
const btnCek          = document.getElementById('btnCek');
const btnReset        = document.getElementById('btnReset');
const btnShare        = document.getElementById('btnShare');
const loadingState    = document.getElementById('loadingState');
const resultContainer = document.getElementById('resultContainer');
const resultName      = document.getElementById('resultName');
const resultMeaning   = document.getElementById('resultMeaning');

const loadingTexts    = [
  'Membuka portal mistis…',
  'Memanggil entitas kuno…',
  'Menelusuri alam gaib…',
  'Menyibak tirai semesta…'
];

function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMessage');
  toastMsg.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3200);
}

function generateHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}

function cekKhodam() {
  const name = nameInput.value.trim();

  if (!name) {
    showToast('Masukkan nama kamu terlebih dahulu!');
    nameInput.focus();
    return;
  }

  resultContainer.classList.remove('visible');
  btnCek.disabled = true;
  loadingState.classList.add('visible');

  let textIdx = 0;
  const loadingTextEl = document.getElementById('loadingText');
  loadingTextEl.textContent = loadingTexts[0];
  
  const textCycle = setInterval(() => {
    textIdx = (textIdx + 1) % loadingTexts.length;
    loadingTextEl.textContent = loadingTexts[textIdx];
  }, 700);

  setTimeout(() => {
    clearInterval(textCycle);
    loadingState.classList.remove('visible');

    const hash = generateHash(name.toLowerCase());
    const khodamIndex = hash % khodams.length;
    const khodam = khodams[khodamIndex];
    
    resultName.textContent = khodam.name;
    resultMeaning.textContent = khodam.meaning;

    resultContainer.classList.add('visible');
    btnCek.disabled = false;
  }, 2400);
}

async function shareResult() {
  const name = nameInput.value.trim();
  const khodam = resultName.textContent;
  const shareText = `Ternyata khodam pendamping si ${name} adalah ${khodam}! Cek khodam kamu sekarang.`;

  if (navigator.share) {
    try {
      await navigator.share({
        title: 'Cek Khodam Nusantara',
        text: shareText,
        url: window.location.href
      });
    } catch (err) {
      console.log('Share canceled');
    }
  } else {
    navigator.clipboard.writeText(shareText);
    showToast('Hasil disalin ke clipboard!');
  }
}

function resetForm() {
  nameInput.value = '';
  resultContainer.classList.remove('visible');
  nameInput.focus();
}

btnCek.addEventListener('click', cekKhodam);
btnReset.addEventListener('click', resetForm);
btnShare.addEventListener('click', shareResult);

nameInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') cekKhodam();
});