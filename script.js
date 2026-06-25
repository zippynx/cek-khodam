const khodams = [
  { name: "Harimau Putih",       meaning: "Kamu kuat dan berani seperti harimau, karena pendahulumu mewariskan kekuatan besar padamu." },
  { name: "Macan Kumbang",       meaning: "Kamu misterius dan kuat, seperti macan yang jarang terlihat tapi selalu waspada." },
  { name: "Naga Emas",           meaning: "Kamu berwibawa tinggi, membawa aura kejayaan dan rezeki ke mana pun kamu pergi." },
  { name: "Garuda Sakti",        meaning: "Kamu adalah sosok pelindung sejati yang punya jiwa kepemimpinan alami." },
  { name: "Singa Bermahkota",    meaning: "Kamu lahir sebagai pemimpin, memiliki kekuatan dan kebijaksanaan seorang raja." },
  { name: "Burung Phoenix",      meaning: "Berapa kali pun kamu jatuh, kamu selalu bisa bangkit lagi menjadi versi yang lebih kuat." },
  { name: "Elang Biru",          meaning: "Kamu memiliki visi yang tajam dan selalu bisa melihat peluang emas dari jauh." },
  { name: "Kapibara Santuy",     meaning: "Masbro sejati. Kamu punya energi damai yang bikin semua orang, bahkan musuh, nyaman di dekatmu." },
  { name: "Kucing Oren",         meaning: "Kamu penuh energi, bar-bar, susah ditebak, tapi entah kenapa semua orang sayang padamu." },
  { name: "Bebek Karet",         meaning: "Kamu selalu tenang dan ceria, mampu mengapung santai di atas kerasnya gelombang masalah hidup." },
  { name: "Panda Ompong",        meaning: "Kamu sangat menggemaskan dan selalu berhasil membuat orang tersenyum hanya dengan kehadiranmu." },
  { name: "Cicak Nyengir",       meaning: "Kamu pendiam, suka memantau dari atas, dan diam-diam tahu semua rahasia teman-temanmu." },
  { name: "Nyamuk Kebal",        meaning: "Mental baja! Kamu pantang menyerah meskipun sudah diusir dan ditolak berkali-kali." },
  { name: "Kucing Kulkas",       meaning: "Sangat misterius, kamu selalu muncul tiba-tiba saat ada makanan nganggur." },
  { name: "Seblak Ceker",        meaning: "Aura kamu pedas dan membara, kadang bikin sakit perut tapi anehnya selalu ngangenin." },
  { name: "Nasi Padang",         meaning: "Kamu adalah penyelamat di kala susah, porsi kebaikanmu selalu pas dan memuaskan semua orang." },
  { name: "Indomie Goreng",      meaning: "Pahlawan akhir bulan. Tidak ada yang bisa menolak pesonamu di saat genting." },
  { name: "Es Teh Plastik",      meaning: "Kamu sederhana, merakyat, tapi kehadiranmu selalu bisa menyegarkan suasana yang panas." },
  { name: "Pecel Lele",          meaning: "Kamu setia menemani di malam hari, perpaduan krispi dan pedasmu adalah kunci kebahagiaan." },
  { name: "Gorengan Anget",      meaning: "Kamu selalu jadi rebutan. Kalau ada kamu, suasana tongkrongan pasti langsung hidup." },
  { name: "Martabak Manis",      meaning: "Spesialis pembawa kebahagiaan di malam hari, kehadiranmu selalu dinantikan orang rumah." },
  { name: "Kopi Susu Gula Aren", meaning: "Kamu manis tapi punya sisi pahit yang realistis, selalu bikin semangat orang-orang di sekitarmu." },
  { name: "Tupperware Emak",     meaning: "Sangat berharga dan sakral. Kalau kamu hilang, dunia bisa kiamat." },
  { name: "Charger Putus",       meaning: "Meski kondisimu sering lelah dan harus ditekuk-tekuk, kamu tetap sumber energi utama bagi sekitarmu." },
  { name: "Remote TV",           meaning: "Misterius. Kamu sering menghilang saat dicari-cari, tapi muncul sendiri saat tidak dibutuhkan." },
  { name: "Gayung Bolong",       meaning: "Meski usahamu kadang bocor di tengah jalan, kamu tidak pernah lelah mencoba menampung harapan." },
  { name: "Kipas Angin Cosmos",  meaning: "Kamu setia memberikan kesejukan, walaupun kadang cuma bisa geleng-geleng kanan-kiri melihat masalah temanmu." },
  { name: "Rice Cooker",         meaning: "Kamu adalah tulang punggung keluarga, selalu memberikan kehangatan tanpa banyak bicara." },
  { name: "Jemuran Terbang",     meaning: "Jiwa kamu bebas! Kamu tidak suka terikat oleh aturan dan sering bikin panik orang rumah." },
  { name: "Sendok Semen",        meaning: "Kamu kasar di luar tapi sebenarnya sangat kuat membangun fondasi pertemanan." },
  { name: "Supra Bapak",         meaning: "Legendaris! Kamu irit, tidak banyak gaya, tapi selalu bisa diandalkan untuk menanjak di kerasnya kehidupan." },
  { name: "Vario Mberr",         meaning: "Aura kamu agresif, suka mencari perhatian di jalanan, tapi diam-diam solid kalau diajak nongkrong." },
  { name: "Motor Vespa",         meaning: "Selalu klasik dan penuh gaya. Kamu menikmati hidup dengan santai tanpa peduli kecepatan orang lain." },
  { name: "Wifi Lemot",          meaning: "Kehadiranmu sering kali menguji kesabaran orang lain, tapi mereka tetap tidak bisa lepas darimu." },
  { name: "Sinyal E (Edge)",     meaning: "Kamu sering tiba-tiba menghilang di saat-saat penting dan muncul lagi saat sudah tidak dibutuhkan." },
  { name: "Flashdisk Penuh",     meaning: "Isi kepalamu terlalu banyak menyimpan memori masa lalu sampai lupa menyimpan hal baru." }
];

const nameInput       = document.getElementById('nameInput');
const btnClear        = document.getElementById('btnClear');
const btnCek          = document.getElementById('btnCek');
const btnReset        = document.getElementById('btnReset');
const btnShare        = document.getElementById('btnShare');
const loadingState    = document.getElementById('loadingState');
const resultContainer = document.getElementById('resultContainer');
const resultName      = document.getElementById('resultName');
const resultMeaning   = document.getElementById('resultMeaning');
const historyContainer= document.getElementById('historyContainer');
const historyList     = document.getElementById('historyList');

const loadingTexts    = [
  'Membuka portal mistis…',
  'Memanggil entitas kuno…',
  'Menelusuri alam gaib…',
  'Menyibak tirai semesta…'
];

window.onload = () => {
  nameInput.focus();
  renderHistory();
};

nameInput.addEventListener('input', () => {
  btnClear.style.display = nameInput.value.length > 0 ? 'block' : 'none';
});

btnClear.addEventListener('click', () => {
  nameInput.value = '';
  btnClear.style.display = 'none';
  nameInput.focus();
});

function showToast(message, isSuccess = false) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMessage');
  const icon = toast.querySelector('i');
  
  icon.className = isSuccess ? 'ph ph-check-circle toast-icon' : 'ph ph-warning-circle toast-icon';
  icon.style.color = isSuccess ? 'var(--success)' : 'var(--error)';
  toast.style.borderColor = isSuccess ? 'var(--success)' : 'var(--error)';
  
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

function saveHistory(name, khodamName) {
  let history = JSON.parse(localStorage.getItem('khodamHistory')) || [];
  history = history.filter(item => item.name.toLowerCase() !== name.toLowerCase());
  history.unshift({ name, khodamName });
  if (history.length > 5) history.pop();
  
  localStorage.setItem('khodamHistory', JSON.stringify(history));
  renderHistory();
}

function renderHistory() {
  const history = JSON.parse(localStorage.getItem('khodamHistory')) || [];
  if (history.length === 0) {
    historyContainer.style.display = 'none';
    return;
  }
  
  historyContainer.style.display = 'block';
  historyList.innerHTML = '';
  history.forEach(item => {
    const li = document.createElement('li');
    li.className = 'history-item';
    li.innerHTML = `<span class="h-name">${item.name}</span> <span class="h-khodam">${item.khodamName}</span>`;
    historyList.appendChild(li);
  });
}

function typeWriterEffect(text, element, callback) {
  element.innerHTML = '<span class="typing-cursor"></span>';
  let i = 0;
  const speed = 70;
  
  const timer = setInterval(() => {
    if (i < text.length) {
      element.innerHTML = text.substring(0, i + 1) + '<span class="typing-cursor"></span>';
      i++;
    } else {
      clearInterval(timer);
      element.innerHTML = text;
      if(callback) callback();
    }
  }, speed);
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
    
    resultMeaning.textContent = ""; 
    resultContainer.classList.add('visible');
    
    typeWriterEffect(khodam.name, resultName, () => {
      resultMeaning.textContent = khodam.meaning;
      saveHistory(name, khodam.name); 
      btnCek.disabled = false;
    });

  }, 2400);
}

async function shareResultImage() {
  const name = nameInput.value.trim();
  const captureBox = document.getElementById('captureBox');
  const btnShareOriginalText = btnShare.innerHTML;
  
  try {
    btnShare.innerHTML = '<i class="ph ph-spinner-gap ph-spin"></i> Memproses...';
    btnShare.disabled = true;

    const canvas = await html2canvas(captureBox, {
      backgroundColor: '#110e1c', 
      scale: 2 
    });

    const link = document.createElement('a');
    link.download = `Khodam_${name}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
    
    showToast('Gambar berhasil disimpan ke perangkat!', true);
  } catch (error) {
    showToast('Gagal menyimpan gambar. Coba lagi.');
    console.error(error);
  } finally {
    btnShare.innerHTML = btnShareOriginalText;
    btnShare.disabled = false;
  }
}

function resetForm() {
  nameInput.value = '';
  btnClear.style.display = 'none';
  resultContainer.classList.remove('visible');
  nameInput.focus();
}

btnCek.addEventListener('click', cekKhodam);
btnReset.addEventListener('click', resetForm);
btnShare.addEventListener('click', shareResultImage); 

nameInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') cekKhodam();
});

function renderHistory() {
  const history = JSON.parse(localStorage.getItem('khodamHistory')) || [];
  if (history.length === 0) {
    historyContainer.style.display = 'none';
    return;
  }
  
  historyContainer.style.display = 'block';
  historyList.innerHTML = '';
  history.forEach(item => {
    const li = document.createElement('li');
    li.className = 'history-item';
    li.innerHTML = `<span class="h-name">${item.name}</span> <span class="h-khodam">${item.khodamName}</span>`;
    li.addEventListener('click', () => {
      nameInput.value = item.name;
      btnClear.style.display = 'block';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      cekKhodam(); 
    });
    historyList.appendChild(li);
  });
}
