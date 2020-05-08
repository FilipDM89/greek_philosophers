// array with philosophers

const philosophers = [
    {
        name: "Plato",
        quote: "Wise men speak because they have something to say; fools because they have to say something",
        about: "Born circa 428 B.C.E., ancient Greek philosopher Plato was a student of Socrates and a teacher of Aristotle. His writings explored justice, beauty and equality, and also contained discussions in aesthetics, political philosophy, theology, cosmology, epistemology and the philosophy of language. Plato founded the Academy in Athens, one of the first institutions of higher learning in the Western world. He died in Athens circa 348 B.C.E.",
        img: (function() {
            const img = new Image();
            img.src = "assets/images/plato.jpg";
            return img;
          })()
    },
    {
        name: "Aristotle",
        quote: "Those who know, do. Those that understand, teach",
        about: "Aristotle (c. 384 B.C. to 322 B.C.) was an Ancient Greek philosopher and scientist who is still considered one of the greatest thinkers in politics, psychology and ethics. When Aristotle turned 17, he enrolled in Plato’s Academy. In 338, he began tutoring Alexander the Great. In 335, Aristotle founded his own school, the Lyceum, in Athens, where he spent most of the rest of his life studying, teaching and writing. Some of his most notable works include Nichomachean Ethics, Politics, Metaphysics, Poetics and Prior Analytics.",
        img: (function() {
            const img = new Image();
            img.src = "assets/images/aristotle.jpg";
            return img;
          })()
    },
    {
        name: "Socrates",
        quote: "Wonder is the beginning of wisdom",
        about: "Socrates was a scholar, teacher and philosopher born in ancient Greece. His Socratic method laid the groundwork for Western systems of logic and philosophy. When the political climate of Greece turned against him, Socrates was sentenced to death by hemlock poisoning in 399 B.C. He accepted this judgment rather than fleeing into exile.",
        img: (function() {
            const img = new Image();
            img.src = "assets/images/socrates.jpg";
            return img;
          })()
    },
    {
        name: "Epicurus",
        quote: "He who is not satisfied with a little, is satisfied with nothing .",
        about: "Epicurus remains one of the most recognized figures of Greek antiquity. He was a great philosopher who had a significant number of followers. However, as is the case with so many people from Greek antiquity, much of his writings have been lost. Epicurus had compiled roughly 300 written works and mostly all of them are lost or only exist in fragments while some have been preserved due to the efforts of his followers.",
        img: (function() {
            const img = new Image();
            img.src = "assets/images/epicurus.jpg";
            return img;
          })()
    }
];

// Philosophers' loop
for(let key in philosophers){
    let philosopher = philosophers[key]
    for (property in philosopher){
    philosopher.name
    }
}