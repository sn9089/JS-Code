// local reviews data
const reviews = [{
        id: 1,
        name: "susan smith",
        job: "web developer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst racconstte post-ironic jianbing swag.",
    },
    {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
];

let img = document.getElementById("person-img");
let job = document.getElementById('job');
let author = document.getElementById('author');
let text = document.getElementById('text');
let prevBtn = document.getElementById("left");
let nextBtn = document.getElementById("right");
let randBtn = document.getElementById("random-btn");

let currentItem = -1;

function disable(txt) {
    document.getElementById(txt).style = "color:gray"
    document.getElementById(txt).disabled = true;
    setTimeout(function() {
        document.getElementById(txt).style = "color:92DFF3"
        document.getElementById(txt).disabled = false;
    }, 5000)
}

nextBtn.addEventListener("click", function() {
    if (currentItem > 3) {
        disable("right");
    }
    console.log("next-", currentItem)
    if (currentItem < 4) {
        data(currentItem++);
    }


})

prevBtn.addEventListener("click", function() {
    if (currentItem < -1) {
        disable("left");
    }
    if (currentItem >= 0) {
        console.log("left-", currentItem);
        data(--currentItem);
    }
})

function data(text) {
    const item = reviews[text];
    img.src = item.img;
    author.innerHTML = item.name;
    job.innerHTML = item.job;
    text.innerHTML = item.text;
}