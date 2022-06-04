﻿import { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Bengali = () => {
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
        <div id="beng" className="mt-3 mb-3" lang="bn">
            <div className="paragraph mb-4">
                পথ চলা শুরু ২০১৭ সালে। একটা ছোট্ট প্রয়াস। বাঙালীর জীবনে ওতপ্রোত ভাবে জড়িয়ে রয়েছে কাব্য সংস্কৃতি। সেই সংস্কৃতিতেই সামান্য অবদান এই পত্রিকা।
                কয়েক বন্ধুর যৌথ প্রয়াসের ওপর ভোর করা শুরু হয়েছিল যাত্রার সূচনা। তারপর দেখতে দেখতে কেটে গেছে কয়েক বছর। পাশে এসে দাঁড়িয়েছেন বহু মানুষ।
                তারাও পত্রিকার মূল স্তম্ভ। সকলের সহায়তা ছাড়া এই প্রয়াস কোনদিনই সফল হতো না। তাই সকলের কাছেই আমরা চির-কৃতজ্ঞ।
            </div>
            <div className="paragraph mb-4">
                সামান্য লেখা-লিখির শখ বহু মানুষেরই আছে। কিন্তু সেই সামান্য সৃষ্টি সকলের সামনে তুলে ধরার মত প্ল্যাটফর্ম নেই তেমন। তাই অজ্ঞাত পরিচয় হয়ে থেকে যায় বহু কবি, লেখক, অঙ্কণ শিল্পী।
                সেই সকলকেই একটা প্ল্যাটফর্ম দেওয়ার উদ্দেশ্যেই প্রথম প্রকাশিত হয় "আমাদের স্বাধীন কলম"। সালটা ২০১৭ । সাফল্য মিলুক বা নয় মিলুক উদ্যোগ যখন নেয়ায়র কথা একবার হয়েছে তখন প্রকাশ করায় হবে
                অন্তত একবার। সেই রকমই কিছুটা পরিকল্পনা ছিল প্রথমবছর। সেখান থেকেই শুরু পথ চলা।
            </div>
            <div className="paragraph mb-4">
                <div className="ghost ghost-bck" id="e1"></div>
                <div className="bck-img invisi" id='edn1'></div>
                <p>একজন থেকে দুজন, দুজন থেকে তিনজন, এভাবে ছয় জনের প্রচেষ্টায় প্রথমবারের জন্যে প্রকাশিত হয় "আমাদের স্বাধীন কলম" ২০১৭ সালের সেপ্টেম্বর মাসে।
                    এই ছয় জন কান্ডারী হল দেবার্ঘ্য কুমার চক্রবর্তী, অরিত্র দত্ত, সোহান ঘোষ, সায়ক চক্রবর্তী, স্বপ্ননীল হালদার এবং অনির্বাণ মান্না। এদের উদ্যোগে এবং আর কয়েকজনের
                    সক্রিয় সহায়তায় প্রথম বারের জন্যে ডানা  মেলে ওড়ার চেষ্টা করে "আমাদের স্বাধীন কলম"। নিজেদের লেখা গল্প, কবিতা, স্বহস্তে আঁকা বহু অঙ্কণ, কিছু ফটোগ্রাফি আর সঙ্গে ধাঁধা
                    , সুদোকু আর কুইজ দিয়ে যারা প্রথম সংখ্যাকে ভরিয়ে তুলেছেন তাদের কাছে আমরা চির-কৃতজ্ঞ। তাই সেই ১৩ জনকে বিশেষ ভাবে উল্লেখ না করলেই নয়।
                    ডালিয়ান বোস,স্মৃতি বেগ বিশ্বাস,চন্দ্রমৌলি দাস,অভীক দত্ত,সপ্তরথী,পিয়ালী পাল,আগমনী মণ্ডল,অর্কপ্রভ নস্কর,রূপম রানা,আত্রেয়ী হালদার, দুর্জয় চৌধুরী,শঙ্খ ভট্টাচার্য এবং শ্রুতি সরকার।
                </p>
            </div>
            <div className="paragraph mb-4">
                <div className="ghost ghost-bck" id="e4"></div>
                <div className="bck-img invisi" id='edn4'></div>
                <p>এভাবেই পথ চলতে চলতে কেটে যায় ৪ টে বছর। আসে ২০২০ সাল। করোনা ভাইরাসের দাপটে চারিদিকে মহামারী। মানুষের হাহাকার চারিদিকে। এমত পরিস্থিতিতে পত্রিকা প্রকাশিত হবে কিনা তা নিয়ে
                    সংশয়ের বীজ থেকে ধীরে ধীরে চারাগাছে পরিণত হতে থাকে। তবে আগাছা পরিষ্কার করার মতই শেষে এক মাসের প্রচেষ্টায় প্রকাশিত হয় "আমাদের স্বাধীন কলম" এর চতুর্থ সংখ্যা। এতদিনে পত্রিকা অডিও-ভিসুয়াল
                    পত্রিকায় পরিণত হয়েছে। পরিবর্তন ঘটেছে সম্পাদক তালিকাতেও। এসেছে কিছু বাঁধা-বিপত্তি। তবে সেই সকলকেই অতিক্রম করে চতুর্থ সংখ্যা প্রকাশিত হয় ২০২০ সালের অক্টোবর মাসে। বহু মানুষকে পাশে পেয়েছি আমরা
                    এই সংখ্যায়। এক ছোট পত্রিকার ডানা মেলার উদ্যোগ সফল হয়েছে। তবে সেখানে থেমে থাকেলেই চলবে না। তৃতীয় সংখ্যা পর্যন্ত সকল সংখ্যা বিনামূল্যেই বিতরণ করা হয়েছিল সকলের মধ্যে। চতুর্থ সংখ্যা থেকে সামান্য কিছু অর্থ মূল্যের
                    বিনিময়ে সকলের হাতে তুলে দেওয়ার সিদ্ধান্ত হয়। আর সংগৃহীত অর্থ সমাজসেবমূলক কাজে নিযুক্ত সংস্থার হাতে তুলে দেওয়ার সিদ্ধান্ত নেওয়া হয়। আমাদের এই প্রয়াসে যারা পাশে দাঁড়িয়েছেন তারাই সাফল্যের চাবিকাঠি। পত্রিকা সুত্রে প্রাপ্ত
                    সামান্য অর্থমূল্য তুলে দেওয়া হয় "কোদালিয়া নেতাজি সুভাষ স্কাউট এণ্ড গাইড গ্রুপ" এর হাতে। মানুষের সকল প্রয়োজনে তারা যেভাবে নিজেদের সমস্তটা দিয়ে পাশে এসে দাঁড়ায় তা সত্যিই প্রশংসনীয়।
                </p>
            </div>
            <div className="paragraph mb-4">
                <div className="ghost ghost-bck" id="e6"></div>
                <div className="bck-img invisi" id='edn6'></div>
                <p>
                    দেখতে দেখতে আমরা পৌছে গেছি আমাদের ষষ্ঠ সংখ্যায়। সালটা ২০২১ । মহালয়ার শুভ তিথিতে "আমাদের স্বাধী কলম"-এর ষষ্ঠ সংখ্যা প্রকাশিত হয়।
                </p>
            </div>
            <div className="para">
            </div>
        </div>
        );
}

export default Bengali;