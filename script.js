// ======================================
// WEBSITE PENGUMUMAN SPMB
// SD NEGERI 3 BAUBAU
// ======================================

const form = document.getElementById("searchForm");
const result = document.getElementById("result");
const loading = document.getElementById("loading");

// ======================================
// CEK DATA
// ======================================

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const registrasi = document
        .getElementById("registrasi")
        .value
        .trim();

    const identitas = document
        .getElementById("identitas")
        .value
        .trim();

    loading.classList.remove("hidden");

    setTimeout(() => {

        loading.classList.add("hidden");

        cariData(registrasi, identitas);

    }, 800);

});function cariData(registrasi, identitas) {

    const siswa = DATA.find(item =>

        item.registrasi === registrasi &&

        (
            item.nisn === identitas ||

            item.nik === identitas
        )

    );

    if (!siswa) {

        tampilTidakAda();

        return;

    }

    tampilHasil(siswa);

}function tampilHasil(siswa){

    let warna="";
    let judul="";
    let pesan="";

    if(siswa.status==="DITERIMA"){

        warna="success";

        judul="🎉 SELAMAT<br>ANDA DINYATAKAN DITERIMA";

        pesan=`

        <p>

        BAGI MURID YANG DINYATAKAN
        <b>"DITERIMA"</b>
        DI SD NEGERI 3 BAUBAU.

        </p>

        <p>

        SEGERA MENDAFTAR ULANG
        DI SD NEGERI 3 BAUBAU

        TANGGAL

        <b>7–11 JULI 2026</b>

        </p>

        <br>

        <p>

        TTD.

        <br><br>

        PANITIA

        </p>

        `;

    }else{

        warna="fail";

        judul="MOHON MAAF BELUM DITERIMA";

        pesan=`

        <p>

        BAGI MURID YANG DINYATAKAN

        <b>"BELUM DITERIMA"</b>

        DI SD NEGERI 3 BAUBAU.

        </p>

        <p>

        TETAPLAH SEMANGAT,

        MASIH BANYAK SEKOLAH

        YANG SIAP MENJADI TEMPATMU

        UNTUK MERAIH CITA-CITA.

        </p>

        <br>

        <p>

        TTD.

        <br><br>

        PANITIA

        </p>

        `;

    }    result.innerHTML=`

    <div class="result-card ${warna}">

        <h2>${judul}</h2>

        <table>

            <tr>

                <td>Nama</td>

                <td>${siswa.nama}</td>

            </tr>

            <tr>

                <td>Nomor Registrasi</td>

                <td>${siswa.registrasi}</td>

            </tr>

            <tr>

                <td>Jenis Kelamin</td>

                <td>${siswa.jk}</td>

            </tr>

        </table>

        <div class="info">

            ${pesan}

        </div>

        <br>

        <button
            class="btn-primary"
            onclick="window.print()">

            CETAK HASIL

        </button>

    </div>

    `;

    result.classList.remove("hidden");

    result.scrollIntoView({

        behavior:"smooth"

    });

}function tampilTidakAda(){

    result.innerHTML=`

    <div class="result-card fail">

        <h2>

        DATA TIDAK DITEMUKAN

        </h2>

        <br>

        <p style="text-align:center">

        Nomor Registrasi atau

        NISN / NIK

        yang Anda masukkan

        tidak sesuai.

        </p>

    </div>

    `;

    result.classList.remove("hidden");

}