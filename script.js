function masukkanData() {
    var banyak_data = parseInt(document.getElementById("banyak_data").value);
    var data_container = document.getElementById("data_container");
    data_container.innerHTML = "";

    for (var i = 0; i < banyak_data; i++) {
        var input_x = document.createElement("input");
        input_x.type = "number";
        input_x.placeholder = `x[${i}]`;
        input_x.id = `x[${i}]`;
        data_container.appendChild(input_x);

        var input_y = document.createElement("input");
        input_y.type = "number";
        input_y.placeholder = `y[${i}]`;
        input_y.id = `y[${i}]`;
        data_container.appendChild(input_y);

        // Add line break after each pair of inputs
        data_container.appendChild(document.createElement("br"));
    }
}

function hitungNilai() {
    var nilai_X = parseFloat(document.getElementById("nilai_X").value);
    var hasil = document.getElementById("hasil");
    hasil.innerHTML = "";

    var banyak_data = parseInt(document.getElementById("banyak_data").value);
    var x_values = [];
    var y_values = [];

    for (var i = 0; i < banyak_data; i++) {
        var input_x = document.getElementById(`x[${i}]`);
        var input_y = document.getElementById(`y[${i}]`);

        x_values.push(parseFloat(input_x.value));
        y_values.push(parseFloat(input_y.value));
    }

    var Y = 0;

    for (var i = 0; i < banyak_data; i++) {
        var pembilang = 1;
        var penyebut = 1;

        for (var j = 0; j < banyak_data; j++) {
            if (i != j) {
                pembilang *= (nilai_X - x_values[j]);
                penyebut *= (x_values[i] - x_values[j]);
            }
        }

        var L = pembilang / penyebut;
        Y += y_values[i] * L;
    }

    hasil.innerHTML = "Nilai Y = " + Y;
}