R = 0;
x1 = .1;
y1 = .05;
x2 = .25;
y2 = .24;
x3 = 1.6;
y3 = .24;
x4 = 300;
y4 = 200;
x5 = 300;
y5 = 200;
DI = document.getElementsByTagName("img");
DIL = DI.length;

function Takeover(ratio, imageurl) {
    this.ratio = ratio;
    this.imageurl = imageurl
}

var getTakeover = {
    init: function(myTakeover) {
        this.myTakeover = myTakeover
    },
    horizontal: function() {
        return this.myTakeover.filter(function(myTakeover) {
            return myTakeover.ratio === "horizontal";
        });
    },
    vertical: function() {
        return this.myTakeover.filter(function(myTakeover) {
            return myTakeover.ratio === "vertical";
        });
    },
    square: function() {
        return this.myTakeover.filter(function(myTakeover) {
            return myTakeover.ratio === "square";
        });
    }
};

function Randomize(images) {
    return Math.floor(Math.random() * images.length);
}

var myTakeover = [
    new Takeover("horizontal", "http://images.clipartpanda.com/nazi-clipart-RTAyexoyc.png"),
    new Takeover("horizontal", "http://images.clipartpanda.com/nazi-clipart-RTAyexoyc.png"),
    new Takeover("horizontal", "http://images.clipartpanda.com/nazi-clipart-RTAyexoyc.png"),
    new Takeover("vertical", "http://images.clipartpanda.com/nazi-clipart-RTAyexoyc.png"),
    new Takeover("vertical", "http://images.clipartpanda.com/nazi-clipart-RTAyexoyc.png"),
    new Takeover("square", "http://images.clipartpanda.com/nazi-clipart-RTAyexoyc.png"),
    new Takeover("square", "http://images.clipartpanda.com/nazi-clipart-RTAyexoyc.png")
];

function imageRatio(image) {
    var proportion = image.height / image.width;
    if (proportion > 1) return "vertical";
    else if (proportion === 1) return "square";
    else if (proportion < 1) return "horizontal"
}

function runBookmarklet(target) {
    var images = (target || document).getElementsByTagName("img");
    var length = images.length;

    getTakeover.init(myTakeover);
    for (var i = 0; i < length; i++) {
        var ratio = imageRatio(images[i]);
        if (ratio === "horizontal") {
            var number = Randomize(getTakeover.horizontal());
            var img = getTakeover.horizontal()[number];
            images[i].src = img.imageurl
        } else if (ratio === "square") {
            var number = Randomize(getTakeover.square());
            var img = getTakeover.square()[number];
            images[i].src = img.imageurl
        } else if (ratio === "vertical") {
            var number = Randomize(getTakeover.vertical());
            var img = getTakeover.vertical()[number];
            images[i].src = img.imageurl
        }
    }
} <
/script>

<
script >
    onload = function() {

        var bookmarklet = document.getElementById("bookmarklet");
        var code = document.getElementById("bookmarklet-code").textContent;

        code = "(function() { " + code + "; runBookmarklet(); })();";
        bookmarklet.setAttribute("href", "javascript:" + encodeURIComponent(code));


        var after = document.getElementById("after");
        var beforeHTML = document.getElementById("before").innerHTML;
        after.innerHTML = beforeHTML;
        runBookmarklet(after);
    };

function A() {
    for (i = 0; i - DIL; i++) {
        DIS = DI[i].style;
        DIS.position = 'absolute';
        DIS.left = (Math.sin(R * x1 + i * x2 + x3) * x4 + x5) + "px";
        DIS.top = (Math.cos(R * y1 + i * y2 + y3) * y4 + y5) + "px"
    }
    R++
}
setInterval('A()', 5);
void(0);
