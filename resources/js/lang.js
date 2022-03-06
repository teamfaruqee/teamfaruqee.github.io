//console.log(i18next);
i18next
  .use(i18nextXHRBackend)
  .use(i18nextBrowserLanguageDetector)
  .init(
    {
      fallbackLng: "en",
      debug: true,
      ns: ["special", "common"],
      defaultNS: "special",
      resources: {
        en: {
          special: {
            title: "{{what}} in english",
            header: {
              dialogue_header:
                "",
              school_name: "Trauma, Plastic & Reconstructive  Surgery",
              button_1: "Patients' opinion",
              button_2: "Show me more"
            },
            sectionFeature: {
              feature_h2_1:'He who works with his hand is a surgeon, he who works with his mind is a physician and he who works with his hands and mind is a anaesthesian.',
               // 'Children must be taught how to think, not what to think<cite> &mdash; <a href="https://en.wikipedia.org/wiki/Margaret_Mead"                target="_blank">Margaret Mead</a></cite>',
              feature_p_1:
                "Hello, we beleive in quality treatment for our patient to develop his/her recovery process. We know you're always thoughtful about your patient's proper treatment. So let us take care of that, we're really good at it, we promise!",
              feature_h3_1: "Anti-infective and sterile modern operating system",
              feature_p_2:
                "The prerequisite for curing the disease is to provide timely, non-infectious, sterile, modern operation to the person injured in the accident. We are uncompromising on so many issues in our OT centers.",
              feature_h3_2: "Medical services under the supervision of expert team",
              feature_p_3:"We are committed to ensuring that patients are well treated in the light of the views of our team of physicians. We realize the emotional turmoil of an accident victim and his relatives and most of all we strive for the recovery of the patient.",
              feature_h3_3: "Our team is always in touch with patient and his attendent",
              feature_p_4:
                "If you need, you can contact our team members online. Informs him about the patient can ensure medical services at the earliest.",
              feature_h3_4: "Careful Nursing and Full-time Patient Care Attendant",
              feature_p_5:
                "Post operative, diagnostic and OPD services are ensured under the supervision of vigilant nurses and patient care attendants."
            },
            gallery: {
              gallery_h2_1: "Gallery"
            },
            message: {
              message_h2_1: "Our Team",
              message_figcaption_1: "<b>Dr. Sajedur Reja Faruqee</b> <p>Associate Professor, Hand and Microsurgery</p><p>Chief Consultant, Trauma, Plastic & Reconstructive Surgery Unit (Team Lead)</p>",
              message_figcaption_2: "<b>Dr. Md. Alauddin</b> <p>Associate Professor (Retd.)</p>             <p>Consultant, Trauma, Plastic & Reconstructive Surgery Unit</p>",
              message_figcaption_3: "<b>Dr. Mostafa Kamrul Islam</b><p></p><p>Consultant, Anesthestist, Trauma, Plastic & Reconstructive Surgery Unit</p>",
              message_figcaption_4: "<b>Dr. Swadesh Ranjan Sarker, MBBS, MS</b><p>Assistant Professor, Vascular Surgery</p><p>Consultant, Trauma, Plastic & Reconstructive Surgery Unit</p>",
              message_figcaption_5: "<b>Dr. Hasan Nazir Uddin Sumon, MBBS, FCPS</b><p></p><p>Consultant, Trauma, Plastic & Reconstructive Surgery Unit</p>",
              message_figcaption_6: "<b>Dr. Md. Baha Uddin, MBBS, MPH</b><p></p><p>Assistant Registrar, Trauma, Plastic & Reconstructive Surgery Unit</p>",
              message_figcaption_7: "<b>Dr. Asif Ul Haque, MBBS</b><p></p><p>Medical Officer, Trauma, Plastic & Reconstructive Surgery Unit</p>",
              message_figcaption_8: "<b>Dr. Sakera Hossain, MBBS</b><p></p><p>Medical Officer, Trauma, Plastic & Reconstructive Surgery Unit</p>",
              message_figcaption_9: "<b>Mrs. Nasreen Rahman</b><p></p><p>Staff Nurse, Trauma, Plastic & Reconstructive Surgery Unit</p>",
              message_figcaption_10: "<b>Md. Abdul Hamid</b><p></p><p>Staff Nurse, Trauma, Plastic & Reconstructive Surgery Unit</p>",
              message_p_1:
                "Today, the role of a school is not only to pursue academic excellence but also to motivate and empower its students to be                lifelong learners, critical thinkers, and productive members of an ever-changing global society. Almost a decade we are trying to provide such a quality educational environment  to our prentice. The school that is being run under the aegis of well established Management has earned its own niche not only in Pallabi but across the Mirpur. Here we provide an                   atmosphere to our students for multifaceted development, where children are encouraged to channelize their potential in                  the pursuit of excellence.",
              
              message_p_2:
                "We provide an appealing and stimulating curriculum that is flexible and tailored to the needs of each and every student as               we strive for high educational outcomes and personal bests for all of our students. Our passionate teachers ensure our                   students grow in confidence and capabilities and develop the skills for the rapidly changing, 21st century living. Engaging               learning programs that cater for individual differences and learning styles are devised and delivered by our skilled,                     talented and dedicated teachers. We use innovative techniques, rich resources, proven instructional strategies and engaging               programs to promote student learning. "
            },
            location: {
              location_h2_1: "Our location",
              location_h3_1:
                "Al-Manar Hospital, Mohammadpur, Dhaka"
            },
            testimonial: {
              testimonial_h2_1: "Patient's opinion about us.",
              testimonial_bq_1:
                "Lorem ipsum dolor imit Lorem ipsum dolor imit Lorem ipsum dolor imit Lorem ipsum dolor imit Lorem ipsum dolor imit Lorem ipsum dolor imit Lorem ipsum dolor imit Lorem ipsum dolor",
              testimonial_span_1: "Abdul Kuddus",

              testimonial_bq_2:
                "Lorem ipsum dolor imit Lorem ipsum dolor imit Lorem ipsum dolor imit Lorem ipsum dolor imit Lorem ipsum dolor imit Lorem ipsum dolor imit Lorem ipsum dolor imit Lorem ipsum dolor",
              testimonial_span_2: "Jerin Gomez",

              testimonial_bq_3:
                "Lorem ipsum dolor imit Lorem ipsum dolor imit Lorem ipsum dolor imit Lorem ipsum dolor imit Lorem ipsum dolor imit Lorem ipsum dolor imit Lorem ipsum dolor imit Lorem ipsum dolor",
              testimonial_span_3: "Subal Das"
            },
            plan: {
              plan_h2_1: "Admission information",

              plan1_h3_1: "Play",
              plan1_p_1: "Admission fees : &#2547; 12000/- BDT",
              plan1_p_2: "Monthly fees : &#2547; 800/- BDT",
              plan1_span_1: "Books, diary , exercise book, Id card included",
              plan1_a_1: "Contact now",

              plan2_h3_1: "Nursery",
              plan2_p_1: "Admission fees : &#2547; 12000/- BDT",
              plan2_p_2: "Monthly fees : &#2547; 800/- BDT",
              plan2_span_1: "Books, diary , exercise book, Id card included",
              plan2_a_1: "Contact now",

              plan3_h3_1: "Singing / Dancing / Drawing",
              plan3_p_1: "Admission fees : &#2547; 1200/- BDT",
              plan3_p_2: "Monthly fees : &#2547; 300/- BDT",
              plan3_span_1:
                "Drawing board, cartidge paper, pencil, anklet should be brought by student ",
              plan3_a_1: "Contact now"
            },
            form: {
              form_h2_1: "We're happy to hear from you",
              form_name: "Name",
              form_email: "Email",
              form_find: "How did you find us?",
              form_opinion: "Your query / opinion",
              form_news: "Newsletter?",
              form_span_1: " Yes, please ",
              btnSubmit: "Send it!"
            },
            footer: {
              footer_a_1: "About Us",
              footer_a_2: "Contact Us",
              footer_a_3: "Notice Board",
              footer_a_4: "Doctor's Panel",
              footer_p_1:
                "Copyright &copy; 2022 by TPRS. All rights reserved. Courtesy- Jonas Schedmann."
            },
            notice: {
              notice_h2_1: "Notice Board"
            }
          },
          common: {
            button: {
              save: "save {{count}} change",
              save_plural: "save {{count}} changes"
            },
            menu: {
              feature: "Our Feature",
              gallery: "Gallery",
              location: "Our location",
              admission: "Admission Information",
              phoneNumber:"01618-004218"
            }
          }
        },
        bn: {
          special: {
            title: "{{what}} in বাংলা",
            header: {
              dialogue_header:
                "",
              school_name: "ট্রমা, প্লাস্টিক এবং রিকন্সট্রাকটিভ সার্জারী",
              button_1: "রোগীর মতামত",
              button_2: "বিস্তারিত দেখুন"
            },
            sectionFeature: {
              feature_h2_1:'যিনি হস্তদ্বয় ব্যবহার করে সেবা দেন তিনি সার্জন, যিনি মনস্তাত্বিক সেবা দেন তিনি চিকিত্সক আর যিনি  মনস্তাত্বিক ও  হস্তদ্বয়  ব্যবহার করে  সেবা দেন তিনি অ্যানেস্থেশিয়ান।',
               // 'বাচ্চাদের অবশ্যই কীভাবে ভাবতে হবে তা শেখানো উচিত, কী ভাবতে হবে তা নয়<cite> &mdash; <a          href="https://en.wikipedia.org/wiki/Margaret_Mead" target="_blank"> মার্গারেট মিড </a></cite>',
              feature_p_1:
                "আমরা আমাদের রোগীর আরোগ্য লাভের জন্য মানসম্পন্ন সু-চিকিত্সায় বিশ্বাস করি। আমরা জানি আপনি সবসময় আপনার রোগীর সঠিক চিকিৎসার বিষয়ে চিন্তিত। আমরা এতদ বিষয়ে প্রতিশ্রুতিবদ্ধ ।",
              feature_h3_1: "সংক্রমণ বিরোধী এবং জীবাণুমুক্ত  আধুনিক অপারেশ ব্যবস্থা",
              feature_p_2:
                "দূর্ঘটনা জনিত আঘাত প্রাপ্ত ব্যাক্তিকে সঠিক সময়ে সংক্রমন হীন, জীবাণুমুক্ত,  আধুনিক অপারেশ এর ব্যবস্থা করাই হল রোগ মুক্তির পূর্বশর্ত । আমাদের ওটি সেন্টার গুলোতে এতদ বিষয়ে আমরা আপোষহীন ।",
              feature_h3_2: "বিশেষজ্ঞ টিম এর তত্ত্বাবধানে চিকিৎসা সেবা",
              feature_p_3:
                "আমাদের টিম এর চিকিৎসকগণ এর মতামত এর প্রেক্ষিতে রোগীর সু-চিকিৎসা নিশ্চিত করতে আমরা বদ্ধপরিকর । একজন দূর্ঘ্যটনা কবলিত ব্যক্তি ও তার স্বজনদের মানসিক ঝড় আমরা উপলবদ্ধি করি এবং সর্বাধিক গুরুত্ব সহকারে রোগীর আরোগ্য লাভে সচেষ্ট থাকি ।",
              feature_h3_3: "সার্বক্ষনিক যোগাযোগ",
              feature_p_4:
                "আপনি প্রয়োজনে অনলাইনে আমাদের টিম এর সদস্য এর সাথে যোগাযোগ করতে পারবেন । তাকে রোগী সম্পর্কে অবহিত করে দ্রুততম সময়ে চিকিৎসা সেবা নিশ্চিত করতে পারেন ।",
              feature_h3_4: "চৌকস নার্সিং ও সার্বক্ষনিক পেশেন্ট কেয়ার এটেনডেন্ট",
              feature_p_5:
                "চৌকস নার্স ও পেশেন্ট কেয়ার এটেনডেন্টগণ এর তত্ত্বাবধানে পোস্ট অপারেটিভ, ডায়াগনষ্টিক এবং ওপিডি সেবা নিশ্চিত করা হয় ।"
            },
            gallery: {
              gallery_h2_1: "ছবি ঘর"
            },
            message: {
              message_h2_1: "আমাদের পরিচিতি",
              message_figcaption_1: "<b>ডাঃ সাজেদুর রেজা ফারুকী </b> <p>সহযোগী অধ্যাপক, হ্যান্ড অ্যান্ড মাইক্রোসার্জারি</p><p>চিফ কনসালটেন্ট, ট্রমা, প্লাস্টিক ও রিকনস্ট্রাকটিভ সার্জারি ইউনিট (টিম লীড)</p>",
              message_figcaption_2: "<b>ডাঃ মোঃ আলাউদ্দিন</b> <p>অ্যাসোসিয়েট প্রফেসর (অব.)</p> <p>কনসালটেন্ট, ট্রমা, প্লাস্টিক অ্যান্ড রিকনস্ট্রাকটিভ সার্জারি ইউনিট</p>",
              message_figcaption_3: "<b>ডাঃ মোস্তফা কামরুল ইসলাম</b><p></p><p>কনসালটেন্ট, অ্যানেস্থেস্টিস্ট, ট্রমা, প্লাস্টিক অ্যান্ড রিকনস্ট্রাকটিভ সার্জারি ইউনিট</p>",
              message_figcaption_4: "<b>ডাঃ স্বদেশ রঞ্জন সরকার, এমবিবিএস, এমএস</b><p>সহকারী অধ্যাপক, ভাস্কুলার সার্জারি</p><p>কনসালট্যান্ট, ট্রমা, প্লাস্টিক অ্যান্ড রিকনস্ট্রাকটিভ সার্জারি ইউনিট</p>",
              message_figcaption_5: "<b>ডাঃ হাসান নাজির উদ্দিন সুমন, এমবিবিএস, এফসিপিএস</b><p></p><p>কনসালটেন্ট, ট্রমা, প্লাস্টিক অ্যান্ড রিকনস্ট্রাকটিভ সার্জারি ইউনিট</p>",
              message_figcaption_6: "<b>ডাঃ মোঃ বাহা উদ্দিন, এমবিবিএস, এমপিএইচ</b><p></p><p>সহকারী রেজিস্ট্রার, ট্রমা, প্লাস্টিক ও রিকনস্ট্রাকটিভ সার্জারি ইউনিট</p>",
              message_figcaption_7: "<b>ডাঃ আসিফ উল হক, এমবিবিএস</b><p></p><p>মেডিকেল অফিসার, ট্রমা, প্লাস্টিক অ্যান্ড রিকনস্ট্রাকটিভ সার্জারি ইউনিট</p>",
              message_figcaption_8: "<b>ডাঃ সাকেরা হোসেন, এমবিবিএস</b><p></p><p>মেডিকেল অফিসার, ট্রমা, প্লাস্টিক অ্যান্ড রিকনস্ট্রাকটিভ সার্জারি ইউনিট</p>",
              message_figcaption_9: "<b>মিসেস নাসরীন রহমান</b><p></p><p>স্টাফ নার্স, ট্রমা, প্লাস্টিক ও রিকনস্ট্রাকটিভ সার্জারি ইউনিট</p>",
              message_figcaption_10: "<b>মো. আবদুল হামিদ</b><p></p><p>স্টাফ নার্স, ট্রমা, প্লাস্টিক এবং রিকনস্ট্রাকটিভ সার্জারি ইউনিট</p>",
              message_p_1:
                "আজ, একটি বিদ্যালয়ের ভূমিকা কেবলমাত্র একাডেমিক শ্রেষ্টত্ব  অর্জনের জন্য নয়।  শিক্ষার্থীদের আজীবন শিক্ষানবিস, সমালোচক, চিন্তাবিদ এবং একটি পরিবর্তিত বৈশ্বিক সমাজের উত্পাদনশীল সদস্য হতে অনুপ্রেরণা ও ক্ষমতায়িত করাও মূখ্য ব্রত। ২০১১ খৃষ্টাব্দ হতে প্রায় এক দশক সময় ধরে  আমরা শিক্ষা'র পঠ পরিবর্তনের প্রতিশ্রুতি নিয়ে অগ্রসর হচ্ছি। সুপ্রতিষ্ঠিত ম্যানেজমেন্ট  এর নেতৃত্বে পরিচালিত এই বিদ্যালয়টি কেবল পল্লবী নয়, অত্র মিরপুর এলাকায় একটি স্বনামধন্য শিক্ষাবান্ধব পরিবেশ প্রদানে সক্ষম হবে । এখানে আমরা আমাদের শিক্ষার্থীদের বহুমুখী বিকাশের জন্য একটি পরিবেশ প্রদান করি, যেখানে বাচ্চাদের শ্রেষ্ঠত্বের সন্ধানে তাদের সম্ভাব্যতাগুলি চ্যানেলাইজ করতে উত্সাহিত করা হয়।",
              
              message_p_2:
                "আমরা আবেদনমূলক এবং উদ্দীপক পাঠ্যক্রম প্রদান করি যা প্রতিটি শিক্ষার্থীর প্রয়োজন অনুসারে নমনীয় এবং উপযুক্ত হয়।  আমরা আমাদের সকল শিক্ষার্থীর জন্য  শিক্ষাগত উচ্চতর এবং ব্যক্তিগত  সর্বোত্তম  ফলাফল অর্জনের চেষ্টা করি। আমাদের উত্সাহী শিক্ষকরা আমাদের শিক্ষার্থীদের আত্মবিশ্বাস ও দক্ষতায় বৃদ্ধি পেতে এবং একবিংশ শতাব্দীর দ্রুত পরিবর্তনের সহিত সহজ অভিযোজনে'র জন্য সার্বিক সহায়তা নিশ্চিত করে থাকে। আমরা শিক্ষার্থীদের শিক্ষার প্রচারের জন্য উদ্ভাবনী কৌশল, সমৃদ্ধ সংস্থান, প্রমাণিত শিক্ষামূলক কৌশল এবং আকর্ষক প্রোগ্রাম ব্যবহার করি। "
            },
            location: {
              location_h2_1: "আমাদের অবস্থান",
              location_h3_1:
                "আল-মানার হাসপাতাল, মোহম্মদপুর, ঢাকা ।"
            },
            testimonial: {
              testimonial_h2_1: "রোগী ও তার অভিভাবকগণের মতামত।",
              testimonial_bq_1:
                "যে-বই জুড়ে সূর্য ওঠে পাতায় পাতায় গোলাপ ফোটে সে-বই তুমি পড়বে। যে-বই জ্বালে ভিন্ন  আলো তোমায় শেখায় বাসতে ভালো সে-বই তুমি পড়বে। যে-বই তোমায় দেখায় ভয় সেগুলো কোন বই-ই নয় সে-বই তুমি পড়বে না। যে-বই তোমায় অন্ধ করে যে-বই তোমায় বন্দী করে সে-বই তুমি ছুঁবেই না। - 'হুমায়ুন আজাদ'",
              testimonial_span_1: "আবদুল কুদ্দুস",

              testimonial_bq_2:
                "যে-বই জুড়ে সূর্য ওঠে পাতায় পাতায় গোলাপ ফোটে সে-বই তুমি পড়বে। যে-বই জ্বালে ভিন্ন  আলো তোমায় শেখায় বাসতে ভালো সে-বই তুমি পড়বে। যে-বই তোমায় দেখায় ভয় সেগুলো কোন বই-ই নয় সে-বই তুমি পড়বে না। যে-বই তোমায় অন্ধ করে যে-বই তোমায় বন্দী করে সে-বই তুমি ছুঁবেই না। - 'হুমায়ুন আজাদ'",
              testimonial_span_2: "জেরিন গোমেজ",

              testimonial_bq_3:
                "যে-বই জুড়ে সূর্য ওঠে পাতায় পাতায় গোলাপ ফোটে সে-বই তুমি পড়বে। যে-বই জ্বালে ভিন্ন  আলো তোমায় শেখায় বাসতে ভালো সে-বই তুমি পড়বে। যে-বই তোমায় দেখায় ভয় সেগুলো কোন বই-ই নয় সে-বই তুমি পড়বে না। যে-বই তোমায় অন্ধ করে যে-বই তোমায় বন্দী করে সে-বই তুমি ছুঁবেই না। - 'হুমায়ুন আজাদ'",
              testimonial_span_3: "সুবল দাশ"
            },
            plan: {
              plan_h2_1: "ভর্তি সংক্রান্ত তথ্য",

              plan1_h3_1: "প্লে / শিশু",
              plan1_p_1: "ভর্তি ফি :  &#2547; ১২০০০/- ",
              plan1_p_2: "মাসিক ফি :  &#2547; ৮০০/- ",
              plan1_span_1:
                "বই, ডায়েরি, অনুশীলন খাতা , আইডি কার্ড অন্তর্ভুক্ত",
              plan1_a_1: "এখনই যোগাযোগ করুন",

              plan2_h3_1: "নার্সারী",
              plan2_p_1: "ভর্তি ফি :  &#2547; ১২০০০/- ",
              plan2_p_2: "মাসিক ফি :  &#2547; ৮০০/- ",
              plan2_span_1:
                "বই, ডায়েরি, অনুশীলন খাতা , আইডি কার্ড অন্তর্ভুক্ত",
              plan2_a_1: "এখনই যোগাযোগ করুন",

              plan3_h3_1: "গান / নাচ / ছবি আঁকা",
              plan3_p_1: "ভর্তি ফি :  &#2547; ১২০০/-",
              plan3_p_2: "মাসিক ফি :  &#2547; ৩০০/- ",
              plan3_span_1:
                "অঙ্কন বোর্ড, কার্তুজ পেপার, পেন্সিল,  ঘুঙ্গুর শিক্ষার্থী নিয়ে আসবে ",
              plan3_a_1: "এখনই যোগাযোগ করুন"
            },
            form: {
              form_h2_1: "আপনাদের মতামত ও পরামর্শ",
              form_name: "নাম",
              form_email: "ইমেল",
              form_find: "আপনি আমাদের কিভাবে খুঁজে পেলেন?",
              form_opinion: "আপনার প্রশ্ন / মতামত",
              form_news: "নিউজলেটার?",
              form_span_1: " হ্যাঁ ",
              btnSubmit: "প্রেরন করুন!"
            },
            footer: {
              footer_a_1: "আমাদের সম্পর্কে",
              footer_a_2: "যোগাযোগ করুন",
              footer_a_3: "নোটিশ বোর্ড",
              footer_a_4: "চিকৎসক প্যানেল",
              footer_p_1:
                "কপিরাইট &copy; ২০২২ , টি.পি.আর.এস  কর্তৃক  সর্ব  সত্ব  সংরক্ষিত । সৌজন্যে - জোনাস শিডম্যান ।"
            },
            notice: {
              notice_h2_1: "নোটিশ বোর্ড"
            }
          },
          common: {
            button: {
              save: "সেভ {{count}} পরিবর্তন",
              save_plural: "সেভ {{count}} পরিবর্তনগুলো"
            },
            menu: {
              feature: "আমাদের বৈশিষ্ট্য",
              gallery: "ছবি ঘর",
              location: "আমাদের ঠিকানা",
              admission: "ভর্তি তথ্য",
              phoneNumber:"০১৬১৮-০০৪২১৮"
            }
          }
        }
      }
    },
    function(err, t) {
      // init set content
      updateContent();
    }
  );

// just set some content and react to language changes
// could be optimized using vue-i18next, jquery-i18next, react-i18next, ...
function updateContent() {
  /*
  document.getElementById('title').innerHTML = i18next.t('title', { what: 'i18next' });
  document.getElementById('saveBtn').innerHTML = i18next.t('common:button.save', { count: Math.floor(Math.random()*2+1)  });
  
  document.getElementById('info').innerHTML = `detected user language: "${i18next.language}"  --> loaded languages: "${i18next.languages.join(', ')}"`;
  */
  /* ----  Menu Top ----*/
  document.getElementById("featureMenuItem").innerHTML = i18next.t(
    "common:menu.feature"
  );
  document.getElementById("galleryMenuItem").innerHTML = i18next.t(
    "common:menu.gallery"
  );
  document.getElementById("locationMenuItem").innerHTML = i18next.t(
    "common:menu.location"
  );
  document.getElementById("phoneNumber").innerHTML = i18next.t(
    "common:menu.phoneNumber"
  );
  /*
  document.getElementById("admissionInfoMenuItem").innerHTML = i18next.t(
    "common:menu.admission"
  );*/

  /* ----  hero-text-box ----*/
  document.getElementById("dialogue-header").innerHTML = i18next.t(
    "special:header.dialogue_header"
  );
  document.getElementById("school-name").innerHTML = i18next.t(
    "special:header.school_name"
  );
  document.getElementById("header-button-1").innerHTML = i18next.t(
    "special:header.button_1"
  );
  document.getElementById("header-button-2").innerHTML = i18next.t(
    "special:header.button_2"
  );

  /* ----  section-feature ----*/

  document.getElementById("feature_h2_1").innerHTML = i18next.t(
    "special:sectionFeature.feature_h2_1"
  );
  document.getElementById("feature_p_1").innerHTML = i18next.t(
    "special:sectionFeature.feature_p_1"
  );
  document.getElementById("feature_h3_1").innerHTML = i18next.t(
    "special:sectionFeature.feature_h3_1"
  );
  document.getElementById("feature_p_2").innerHTML = i18next.t(
    "special:sectionFeature.feature_p_2"
  );
  document.getElementById("feature_h3_2").innerHTML = i18next.t(
    "special:sectionFeature.feature_h3_2"
  );
  document.getElementById("feature_p_3").innerHTML = i18next.t(
    "special:sectionFeature.feature_p_3"
  );
  document.getElementById("feature_h3_3").innerHTML = i18next.t(
    "special:sectionFeature.feature_h3_3"
  );
  document.getElementById("feature_p_4").innerHTML = i18next.t(
    "special:sectionFeature.feature_p_4"
  );
  document.getElementById("feature_h3_4").innerHTML = i18next.t(
    "special:sectionFeature.feature_h3_4"
  );
  document.getElementById("feature_p_5").innerHTML = i18next.t(
    "special:sectionFeature.feature_p_5"
  );

  /* ---- Gallery ----  */

  document.getElementById("gallery_h2_1").innerHTML = i18next.t(
    "special:gallery.gallery_h2_1"
  );

  /* ---- Message ----*/

  document.getElementById("message_h2_1").innerHTML = i18next.t(
    "special:message.message_h2_1"
  );
  document.getElementById("message_figcaption_1").innerHTML = i18next.t(
    "special:message.message_figcaption_1"
  );
  document.getElementById("message_figcaption_2").innerHTML = i18next.t(
    "special:message.message_figcaption_2"
  );
  document.getElementById("message_figcaption_3").innerHTML = i18next.t(
    "special:message.message_figcaption_3"
  );
  document.getElementById("message_figcaption_4").innerHTML = i18next.t(
    "special:message.message_figcaption_4"
  );
  document.getElementById("message_figcaption_5").innerHTML = i18next.t(
    "special:message.message_figcaption_5"
  );
  document.getElementById("message_figcaption_6").innerHTML = i18next.t(
    "special:message.message_figcaption_6"
  );
  document.getElementById("message_figcaption_7").innerHTML = i18next.t(
    "special:message.message_figcaption_7"
  );
  
  document.getElementById("message_figcaption_8").innerHTML = i18next.t(
    "special:message.message_figcaption_8"
  );
  
  document.getElementById("message_figcaption_9").innerHTML = i18next.t(
    "special:message.message_figcaption_9"
  );
  document.getElementById("message_figcaption_10").innerHTML = i18next.t(
    "special:message.message_figcaption_10"
  );
  /*document.getElementById("message_p_1").innerHTML = i18next.t(
    "special:message.message_p_1"
  );
  document.getElementById("message_figcaption_2").innerHTML = i18next.t(
    "special:message.message_figcaption_2"
  );
  document.getElementById("message_p_2").innerHTML = i18next.t(
    "special:message.message_p_2"
  );*/

  /* ----  Location ----- */

  document.getElementById("location_h2_1").innerHTML = i18next.t(
    "special:location.location_h2_1"
  );
  document.getElementById("location_h3_1").innerHTML = i18next.t(
    "special:location.location_h3_1"
  );

  /* ----  Testimonial ----- */

  document.getElementById("testimonial_h2_1").innerHTML = i18next.t(
    "special:testimonial.testimonial_h2_1"
  );
  document.getElementById("testimonial_bq_1").innerHTML = i18next.t(
    "special:testimonial.testimonial_bq_1"
  );
  document.getElementById("testimonial_span_1").innerHTML = i18next.t(
    "special:testimonial.testimonial_span_1"
  );

  document.getElementById("testimonial_bq_2").innerHTML = i18next.t(
    "special:testimonial.testimonial_bq_2"
  );
  document.getElementById("testimonial_span_2").innerHTML = i18next.t(
    "special:testimonial.testimonial_span_2"
  );

  document.getElementById("testimonial_bq_3").innerHTML = i18next.t(
    "special:testimonial.testimonial_bq_3"
  );
  document.getElementById("testimonial_span_3").innerHTML = i18next.t(
    "special:testimonial.testimonial_span_3"
  );

  /* ----  Admission Info ----- */
/*
  document.getElementById("plan_h2_1").innerHTML = i18next.t(
    "special:plan.plan_h2_1"
  );

  document.getElementById("plan1_h3_1").innerHTML = i18next.t(
    "special:plan.plan1_h3_1"
  );
  document.getElementById("plan1_p_1").innerHTML = i18next.t(
    "special:plan.plan1_p_1"
  );
  document.getElementById("plan1_p_2").innerHTML = i18next.t(
    "special:plan.plan1_p_2"
  );
  document.getElementById("plan1_span_1").innerHTML = i18next.t(
    "special:plan.plan1_span_1"
  );
  document.getElementById("plan1_a_1").innerHTML = i18next.t(
    "special:plan.plan1_a_1"
  );

  document.getElementById("plan2_h3_1").innerHTML = i18next.t(
    "special:plan.plan2_h3_1"
  );
  document.getElementById("plan2_p_1").innerHTML = i18next.t(
    "special:plan.plan2_p_1"
  );
  document.getElementById("plan2_p_2").innerHTML = i18next.t(
    "special:plan.plan2_p_2"
  );
  document.getElementById("plan2_span_1").innerHTML = i18next.t(
    "special:plan.plan2_span_1"
  );
  document.getElementById("plan2_a_1").innerHTML = i18next.t(
    "special:plan.plan2_a_1"
  );

  document.getElementById("plan3_h3_1").innerHTML = i18next.t(
    "special:plan.plan3_h3_1"
  );
  document.getElementById("plan3_p_1").innerHTML = i18next.t(
    "special:plan.plan3_p_1"
  );
  document.getElementById("plan3_p_2").innerHTML = i18next.t(
    "special:plan.plan3_p_2"
  );
  document.getElementById("plan3_span_1").innerHTML = i18next.t(
    "special:plan.plan3_span_1"
  );
  document.getElementById("plan3_a_1").innerHTML = i18next.t(
    "special:plan.plan3_a_1"
  ); */

  /* ----  Form ----- */

  document.getElementById("form_h2_1").innerHTML = i18next.t(
    "special:form.form_h2_1"
  );

  document.getElementById("form_name").innerHTML = i18next.t(
    "special:form.form_name"
  );
  document.getElementById("form_email").innerHTML = i18next.t(
    "special:form.form_email"
  );
  document.getElementById("form_find").innerHTML = i18next.t(
    "special:form.form_find"
  );
  document.getElementById("form_opinion").innerHTML = i18next.t(
    "special:form.form_opinion"
  );
  document.getElementById("form_news").innerHTML = i18next.t(
    "special:form.form_news"
  );
  document.getElementById("form_span_1").innerHTML = i18next.t(
    "special:form.form_span_1"
  );
  document.getElementById("btnSubmit").value = i18next.t(
    "special:form.btnSubmit"
  );

  /* ----  Footer ----- */

  document.getElementById("footer_a_1").innerHTML = i18next.t(
    "special:footer.footer_a_1"
  );
  document.getElementById("header_a_1").innerHTML = i18next.t(
    "special:footer.footer_a_1"
  );
  
  document.getElementById("footer_a_2").innerHTML = i18next.t(
    "special:footer.footer_a_2"
  );
  //document.getElementById('footer_a_3').innerHTML = i18next.t('special:footer.footer_a_3');
  document.querySelectorAll(".footer_a_3").forEach(currentValue => {
    console.log("currentValue- " + currentValue);
    currentValue.innerHTML = i18next.t("special:footer.footer_a_3");
  });
  document.getElementById("footer_a_4").innerHTML = i18next.t(
    "special:footer.footer_a_4"
  );
  document.getElementById("footer_p_1").innerHTML = i18next.t(
    "special:footer.footer_p_1"
  );

  /* ---- Notice ----*/

  document.getElementById("notice_h2_1").innerHTML = i18next.t(
    "special:notice.notice_h2_1"
  );

  //console.log(`detected user language: "${i18next.language}"  --> loaded languages: "${i18next.languages.join(', ')}"`);
}

function changeLng(lng) {
  i18next.changeLanguage(lng);
}

i18next.on("languageChanged", () => {
  updateContent();
});
