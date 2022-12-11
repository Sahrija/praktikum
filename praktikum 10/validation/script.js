function validateTicket(form) {
    var nama = document.getElementById("nama").value;

    var email = document.forms.writes.email.value;
    var jam = document.forms.writes.jam.value;
    var tujuan = document.forms.writes.tujuan.value;
    var jumlah = document.forms.writes.jumlah.value;
    if ((nama == "Ahmad Sahrija") && (email == "sahrija@gmail.com") && (jam == "09:00") && (tujuan == "jepang") && (jumlah == "4")) {
        document.getElementById("tiket-nama").value = nama;
        document.getElementById("tiket-email").value = email;
        document.getElementById("tiket-jam").value = jam;
        document.getElementById("tiket-tujuan").value = tujuan;
        document.getElementById("tiket-tiket").value = jumlah;
        parent = document.getElementById("result");
        parent.style.display = "block";
    }
    else {
        alert("data didn't match!")
    }
    return false;
}




// create new
function createNew(form) {
    var nama = document.forms.writes.nama.value;
    var email = document.forms.writes.email.value;
    var jam = document.forms.writes.jam.value;
    var tujuan = document.forms.writes.tujuan.value;
    var jumlah = document.forms.writes.jumlah.value;


    document.getElementById("tiket-nama").value = nama;
    document.getElementById("tiket-email").value = email;
    document.getElementById("tiket-jam").value = jam;
    document.getElementById("tiket-tujuan").value = tujuan;
    document.getElementById("tiket-tiket").value = jumlah;
    parent = document.getElementById("result");
    parent.style.display = "block";

    return false;
}