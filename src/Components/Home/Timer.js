export default function Timer(currenTime) {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

        ctx.strokeStyle = 'rgba(89, 34, 213) ';
		ctx.lineWidth = 17;
		ctx.shadowBlur= 15;
		ctx.shadowColor = '#FA5FE5'

        var now = new Date();
        var today = now.toDateString();
        var time = now.toLocaleTimeString();
        var hrs = now.getHours();
        var min = now.getMinutes();
        var sec = now.getSeconds();
        var mil = now.getMilliseconds();
        var smoothsec = sec+(mil/1000);
        var smoothmin = min+(smoothsec/60);

        //Background
        const gradient = ctx.createRadialGradient(250, 250, 5, 250, 250, 300);
        gradient.addColorStop(0, 'rgba(89, 34, 213)');
		gradient.addColorStop(1, "#2c2c2c");
		ctx.fillStyle = gradient;
		ctx.fillStyle = '#2c2c2c';
		ctx.fillRect(0, 0, 500, 500);
        //Hours
        ctx.beginPath();
        ctx.arc(250,250,200, degToRad(270), degToRad((hrs*30)-90));
        ctx.stroke();
        //Minutes
        ctx.beginPath();
        ctx.arc(250,250,170, degToRad(270), degToRad((smoothmin*6)-90));
        ctx.stroke();
        //Seconds
        ctx.beginPath();
        ctx.arc(250,250,140, degToRad(270), degToRad((smoothsec*6)-90));
        ctx.stroke();
        //Date
        ctx.font = "25px Open Sans";
        ctx.fillStyle = '#FA5FE5'
        ctx.fillText(today, 175, 250);
        //Time
        ctx.font = "25px Open Sans";
			ctx.fillStyle = '#FA5FE5'
			ctx.fillText(today, 175, 250);
			//Time
			ctx.font = "25px Open Sans";
			ctx.fillStyle = '#FA5FE5';
      ctx.textShadow=  '0 0 10px #FFF, 0 0 15px #FFF, 16px 16px 10px rgba(179,140,227,0.62), 16px 16px 10px rgba(179,140,227,0.62)';
			ctx.fillText(time+":"+mil, 175, 280);

        function degToRad(degree){
            var factor = Math.PI/180;
            return degree*factor;
        }
}

