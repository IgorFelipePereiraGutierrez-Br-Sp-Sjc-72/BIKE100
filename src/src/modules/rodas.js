class BIKEIG_RODAS {


    constructor(tamanhoAro, tamanhoPneu, qtdRaios) {
        this.tamanhoAro = tamanhoAro;
        this.tamanhoPneu = tamanhoPneu;
        this.qtdRaios = qtdRaios;
        //cubo/rolamentos/etc
        //camara/psi/etc

    }



    ExibirRodaFrente(tamanhoAro, tamanhoPneu, qtdRaios) {
        var canvas = document.getElementById("RodaFrente");
        var ctx = canvas.getContext("2d");
        var cw = tamanhoPneu;
        var ch = tamanhoAro;

        var cx = cw / 2;
        var cy = ch / 2;
        //var radius = 135;
        var radius = tamanhoAro;
        var minutes = 0;
        var minutesIncrement = 0.10;

        animate();

        function animate(time) {
            ctx.clearRect(0, 0, cw, ch);
            ctx.beginPath();
            ctx.stroke();

            fillWedge(300, 150, radius, minutesToAngle(0), minutesToAngle(minutes), 'white');
            ctx.stroke();
            minutes += minutesIncrement;
            if (minutes > 60) {
                minutes = 0;
            }
            requestAnimationFrame(animate);
        }

        var cx = canvas.width / 2;
        var cy = canvas.height / 2;

        var radius = Math.min(canvas.width, canvas.height) * .90 / 2;

        function fillWedge(cx, cy, radius, startAngle, endAngle, fillcolor) {
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.arc(cx, cy, radius, startAngle, endAngle); //Tem um bug que esta colocando uma linha la em cima.
            ctx.closePath();
            ctx.fillStyle = fillcolor;
            ctx.fill();
        }

        function minutesToAngle(minutes) {
            var twelveOClock = Math.PI / 2;
            var fullCircle = Math.PI * 2;
            return (twelveOClock + fullCircle * (minutes / 60));
        }
    }




ExibirRodaTras(tamanhoAro, tamanhoPneu, qtdRaios) {
        var canvas = document.getElementById("RodaTras");
        var ctx = canvas.getContext("2d");
        var cw = tamanhoPneu;
        var ch = tamanhoAro;

        var cx = cw / 2;
        var cy = ch / 2;
        //var radius = 135;
        var radius = tamanhoAro;
        var minutes = 0;
        var minutesIncrement = 0.10;

        animate();

        function animate(time) {
            ctx.clearRect(0, 0, cw, ch);
            ctx.beginPath();
            ctx.stroke();

            fillWedge(400, 150, radius, minutesToAngle(0), minutesToAngle(minutes), 'white');
            ctx.stroke();
            minutes += minutesIncrement;
            if (minutes > 60) {
                minutes = 0;
            }
            requestAnimationFrame(animate);
        }

        var cx = canvas.width / 2;
        var cy = canvas.height / 2;

        var radius = Math.min(canvas.width, canvas.height) * .90 / 2;

        function fillWedge(cx, cy, radius, startAngle, endAngle, fillcolor) {
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.arc(cx, cy, radius, startAngle, endAngle); //Tem um bug que esta colocando uma linha la em cima.
            ctx.closePath();
            ctx.fillStyle = fillcolor;
            ctx.fill();
        }

        function minutesToAngle(minutes) {
            var twelveOClock = Math.PI / 2;
            var fullCircle = Math.PI * 2;
            return (twelveOClock + fullCircle * (minutes / 60));
        }
    }

}



var myBike = new BIKEIG_RODAS(26, 2, 36);

myBike.ExibirRodaFrente(26, 2, 36);

myBike.ExibirRodaTras(26, 2, 36);