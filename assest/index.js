document.getElementById("button").addEventListener("click", crossRandom);



    function random_item(crosshairs)
    {
        
  
    return crosshairs[Math.floor(Math.random()*crosshairs.length)];  
    }

    function crossRandom(crosshairs)
    {
        var crosshairs = ["0;s;1;P;c;5;h;0;m;1;0l;4;0o;2;0a;1;0f;0;1b;0;S;c;4;o;1", "0;P;d;1;f;0;0t;4;0l;1;0o;0;0a;1;0f;0;1b;0", "0;P;d;1;f;0;0t;4;0l;1;0o;0;0a;1;0f;0;1b;0", "0;P;h;0;f;0;0t;4;0l;1;0o;2;0a;1;0f;0;1b;0", "0;P;c;4;h;0;d;1;f;0;0t;6;0l;1;0o;1;0a;1;0f;0;1b;0", "0;P;c;7;h;0;f;0;0l;4;0o;2;0a;1;0f;0;1t;8;1l;1;1o;1;1a;1;1m;0;1f;0", "0;P;d;1;f;0;0t;4;0l;1;0o;0;0a;1;0f;0;1b;0", "0;P;c;5;h;0;f;0;0t;1;0l;3;0o;0;0a;1;0f;0;1t;3;1o;0;1a;1;1m;0;1f;0", "0;P;c;5;h;0;f;0;0t;1;0l;3;0o;0;0a;1;0f;0;1t;3;1o;0;1a;1;1m;0;1f;0", "0;P;o;1;f;0;0t;4;0l;1;0o;5;0a;0;0f;0;1l;4;1o;3;1a;0;1m;0;1f;0", "0;P;h;0;f;0;0t;9;0l;1;0o;1;0a;1;0f;0;1t;3;1l;1;1o;4;1a;1;1m;0;1f;0", "0;P;h;0;f;0;0b;0;1t;7;1l;1;1o;1;1a;1;1m;0;1f;0", "0;P;o;1;d;1;z;6;0b;0;1t;6;1l;3;1o;0;1a;0;1m;0;1f;0", "0;P;h;0;f;0;0l;4;0o;0;0a;1;0f;0;1b;0"]
        document.getElementById("text-cross").innerHTML = (random_item(crosshairs));
    }

