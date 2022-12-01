type Mahasiswa = {
    name: string,
    nim : string,
    noHp : string,
    seleksi : string
}

type MahasiswaLakiLaki = {
    name : string,
    jenisKelamin : string ,
    status : string,
    startDate : Date
}

type DaftarMahasiswa = Mahasiswa & MahasiswaLakiLaki;

const p1: DaftarMahasiswa = {
    name: "Nanda Aditya Putra",
    nim : "205150207111047",
    noHp : "082329212758",
    seleksi : "SBMPTN",
    jenisKelamin : "Laki-Laki",
    status : "Aktif",
    startDate : new Date()
}

console.log(p1)