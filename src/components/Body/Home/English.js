import { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const English = () => {

    useEffect(() => {

        const rerun = (head) => {
            let word = document.getElementById(head.id);
            if (word) {
                word.classList.remove("invisi");
                word.classList.add("visi");
            }
        }
        const scrap = (head) => {
            let word = document.getElementById(head.id);
            if (word) {
                word.classList.remove("visi");
                word.classList.add("invisi");
            }
        }
        const hideme = (ghost, state) => {
            let word = document.getElementById(ghost.id);
            if (word && state === 0) {
                word.classList.add("hideme");
            }
            else if (word && state === 1) {
                word.classList.remove("hideme");
            }
        }
        const heads = gsap.utils.toArray('.bck-img');
        heads.forEach(head => {
            ScrollTrigger.create({
                id: `id-${head.id}`,
                trigger: head,
                start: "top 70%",
                end: "bottom 25%",
                //markers: true,
                onEnter: () => rerun(head),
                onLeave: () => scrap(head),
                onEnterBack: () => rerun(head),
                onLeaveBack: () => scrap(head),
            });
        });
        const ghosts = gsap.utils.toArray('.ghost');
        ghosts.forEach(ghost => {
            ScrollTrigger.create({
                id: `id-${ghost.id}`,
                trigger: ghost,
                start: "top 70%",
                end: "bottom 25%",
                //markers: true,
                onEnter: () => hideme(ghost, 1),
                onLeave: () => hideme(ghost, 0),
                onEnterBack: () => hideme(ghost, 1),
                onLeaveBack: () => hideme(ghost, 0),
            });
        });
    }, []);

    return (
        <div id="eng" className="mt-3 mb-3" lang="en">
            <div className="paragraph mb-4">
                <p>It was 2017. It all started with a tiny effort. Bengali culture without creative art is somewhat unimaginable.
                And this magazine is just a small contribution towards the rich culture. The journry started with a few friends.
                Over the years they have been the pillers of the magazine. But we can't forget about those who has been there with us throughout
                the years. They've enriched the magazine with their creation. Without them this small feat would have never been possible.
                So we're ever grateful to them.</p>
            </div>
            <div className="paragraph mb-4">
                <p>A lot of us have the habit/desire to write/paint a little. But a lot us don't have proper platform to share our ceation with the whole world.
                So a lot of cretive minds never get to shine, they remain unknown to the known world. The main motive of this magazine is to give them a platform
                to express themselves. To show the world what they can create i.e., to depict their creative mind. The year was 2017. Since the initiative was taken
                the magazine needs to be published, even if it's for one single edition. The plan for the first edition was somewhat like that. This wonderful journey started from there.</p>
            </div>
            <div className="paragraph mb-4">
                <div className="ghost ghost-bck" id="e1"></div>
                <div className="bck-img invisi" id='edn1'></div>
                <p>
                    From one to two, two to three, and eventually six friends gathered together to publish the very first edition of this magazine on September 2017.
                    We've have to name these six pillers of the magazine. Without Debarghya Kr. Chakraborty, Aritra Dutta, Sohan Ghosh, Sayak Chakraborty, Swapnanil Halder and
                    Anirban Manna, the magazine might've never seen the beautiful light of the marvellous world. Their active involvement and some more integral contribution
                    made it possible for the magazine to dream to fly high one day. Those who contributed with their written stories, poems, paintings, photography, puzzles,
                    sudoku and quizs need to be mentioned specially. These 13 people from various backgroud helped us to fill our magazine with incredible contents. They're
                    Dalian Bose, Smriti Beg Biswas, Chandramouli Das, Avik Dutta, Saptorothi, Piyali Paul, Agamani Mandal, Arkaprava Naskar, Rupam Rana, Atreyee Halder, Durjoy
                    Dutta Choudhury, Shankha Bhattacharya and Sruti Sarkar.
                </p>
            </div>
            <div className="paragraph mb-4">
                <div className="ghost ghost-bck" id="e4"></div>
                <div className="bck-img invisi" id='edn4'></div>
                <p>
                    Nearly 4 years went by just like that. The year is 2020. The pandemic due to Corona Virus is ravaging throughout the entire world.
                    Amidst all of these can we publish our magazine! The small seed of doublt started growing into a full-grown sapling.
                    But just like weeds are cleared out, the doubts of whether the magazine can be published or not were eradicated with one month of hard work.
                    And eventually on October 2020 the Fourth Edition was released. We had phenomenal contributions in this edition.
                    The small magaizine that wanted to fly one day was ever closer to its dream. But the story doesn't stop there. Neither does the journry.
                    Up until third edition the magazine was distributed free of cost. From fourth edition it was decided that the magazine would be distributed
                    in exchange of a very small amount and the entire sum gathered would be donated to a organization involved in socail welfare.
                    Those who came forward to help with this initiave were the key to our success. The amount gathered from the magazine distribution went
                    to "Kodalia Netaji Scout and Guides Group". How they come forward whenever someone needs help and offers help with everyting they've got is highly admirable.
                    We can only hope to help everyone one day like how they've been doing for years.
                </p>
            </div>
            <div className="paragraph mb-4">
                <div className="ghost ghost-bck" id="e6"></div>
                <div className="bck-img invisi" id='edn6'></div>
                <p>
                    Now it's 2021. We've arrived at out latest edition i.e., Edition 6.
                </p>
            </div>
            <div className="para">
            </div>
        </div>
        );
}

export default English;