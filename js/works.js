
        var reflection = [
            {
                title:"Work Immersion", 
                photo: "<img class='mx-auto d-block mt-4' style='border: 1px solid grey; width: 100%;' src='../images/immersion.png' alt='stem png'>",
                author: "By:<u> Kurt Timajo </u>",
                body: "One of the salient features of the Department of Education’s (DepEd) K-12 Program is the Senior High School Work Immersion Program for Grade 12 students. According to the DepEd’s curriculum guide on Work Immersion, it is a program where students will have to undergo work immersion in an industry that relates to their postsecondary goal.<br><br> In this program, students are given opportunities to gain relevant and practical industrial skills under the guidance of industry experts and workers. For instance, a student is planning to take engineering program in college, he/she will be deployed to a company that is focused on engineering. With this, the student will be able to have necessary backgrounds before going to college. Economically, according to an article of The Asia Foundation, work immersion for students is one way to address the youth unemployment which hampers economic development. <br><br>\
                        Work immersion might be one of the most memorable parts of our senior high school journey as students because it is only in senior high school where we experience the workplace before going to college. However, due to the pandemic which has taken away our opportunity to experience the real world of work, new challenges come our way to have work immersion in this setup. As we all know, going out of the house during this time is very risky, we cannot be allowed to go out just to report to work. And in this home-based learning setup, though have the opportunity to learn the essentials in the workplace, we still missed the opportunity to apply what we have learned especially those about human relations. For those who aspire to become engineer in the future, including me, it is a bit sad since I really want to experience being an engineer in a workplace. <br><br>\
                        Although I encountered those above-mentioned challenges, I take my learnings in Work Immersion as stored knowledge for the future. I learned about how to deal with the co-workers in the workplace. Another is managing conflicts, time management, punctuality, and integrity. I will use these learnings for me to become a better person in the future with my chosen profession. There may be no immersion today, but I believe I would have one in college, soon. And there I will put into action all the learnings I have learned in this subject. From human relations, to conflict management, to self-efficiency, and self-improvement. With all of these, I know a better version of myself is ahead of me waiting to be revealed."
            },
            {
                title:"Value of Work", 
                photo: "<img class='mx-auto d-block mt-4' style='border: 1px solid grey; width: 100%;' src='../images/work.jpg' alt='work-value.jpg'>",
                author: "By:<u> Kurt Timajo </u>",
                body: "Work does not only give us money for a living, but it develops our sense of responsibility, character, relationships with others, and commitment to our work.<br><br>\
                        In the world of work, we always feel the need to finish tasks daily and this is where we get more feeling of responsibility. Also, through work, we can be able to reflect on our strengths and weaknesses. This gives us the chance to assess our character and values that we believe in life, thus, improving our strengths and altering our weaknesses with good behaviors.<br><br> \
                        When we work, we will always have interactions with our co-employees. And it gives us the oppotunity to work together, and at the same time, we are already building strong and good relationships founded by understanding and empathy. Furthermore, working can be considered as service to others since we deal with clients and customers. Through working hard, we are able to provide our clients the things that they need by our initiative. By this, our commitment to serving others is continually increasing day by day as we serve our clients.<br><br>\
                          Moreover, the value of work cannot only be applied in the workplace, but also outside. We can show our responsibility, commitment, and character to our friends, families, and neighbors. And this sums up the value of work that we can apply in our lives."
            
            },
            {
                title:"Ethical Practices in the Workplace", 
                photo: "<img class='mx-auto d-block mt-4' style='border: 1px solid grey; width: 100%;' src='../images/ibm.png' alt='ethical.jpg'>",
                author: "By:<u> Kurt Timajo </u>",
                body: "In today’s modern world where technology is rapidly advancing, ethical practices are still very essential and are among the things that should not be neglected by many companies. With the emerging technologies such as Artificial Intelligence (AI), ethics is at risk of being disregarded but it was not impossible for International Business Machines (IBM) Corporation to still operate ethically. <br><br>\
                Last year, on the month of February 2020, this company commonly known as IBM was awarded for the second time in a row as one of the “World’s Most Ethical Companies”. IBM has received this recognition for driving positive change, doing the right thing, and operating with integrity daily.<br><br>\
                This large business technology company has been operating firmly with their Principles of Trust and Transparency. And this is the reason why they got the opportunity to keep their employees and clients. IBM’s Trust and Transparency states that “the purpose of AI is to augment human intelligence”. It doesn’t allow AI to replace human intelligence, pointing out that people and technology go together at work. Its second principle says that “data and insights belong to their creator”, holding responsibility for every data which are kept solely to the owners. Lastly, IBM is committed to implementing new technologies in a transparent and explainable way. Just with these three simple principles, IBM earned the trust of their clients. In addition to the outcome of this best ethical practice, 95 percent of the Fortune 500 companies has been relying on IBM to take charge of and handle their data. With this, IBM has become more and more successful in attracting clients and customers around the globe, not only due to their high technology services, but with their commitment to trust and transparency.<br><br>\
                As a large and famous technology company, IBM does not only focus on trust and transparency, but also in promoting equality. Both in their laboratories and workrooms, IBM has adopted policies which promotes inclusion and treat people with dignity and respect. They have affirmed their commitment to genetics privacy and LGBTQ equality saying that this legacy will continue throughout the years. With this, thousands of people were hired and will get hired as their employees regardless of race, gender, sexual orientation, and origin.<br><br>\
                IBM does not stop at the moment they received the recognition but they become more motivated to implement the ethical practices they have been doing for more than a century. Through this strong commitment to technology, data privacy, and equality, IBM will surely be able to keep their image as a global ethical company."
            } 
        ]
    
    var titles = [
        reflection[0].title,
        reflection[1].title,
        reflection[2].title
    ]
    for (i = 0; i < titles.length; i++){
        document.getElementById("options-box").innerHTML +=
        "<li class='list-option'> <a class='text-center reflection-option' id='title-btn-"+i+"'>" + "&#9679;  " + titles[i] + "</a></li>";
    }
    

    console.log(document.getElementById("options-box").innerHTML);
    console.log(document.getElementById("title-btn-0").innerHTML);
    console.log(document.getElementById("title-btn-1").innerHTML);
    
    
    var button1 = document.getElementById("title-btn-0");
    var button2 = document.getElementById("title-btn-1");
    var button3 = document.getElementById("title-btn-2");
    var display = document.getElementById("articlebody");

    button1.addEventListener("click",workImmersion);
    button2.addEventListener("click", valueOfWork);
    button3.addEventListener("click", ethicalPractices);

    function workImmersion() {
        display.innerHTML = 
        "<h1 class='text-center reflection-title' ><b>" + reflection[0].title + "</b></h1>" + reflection[0].photo + "<p class='text-center by-name  mt-3' style='font-size: 20px;'>"+ reflection[0].author + "</p>" + "<p class='text-justify ref-content'>"+ reflection[0].body + "</p>";               
        document.getElementsByClassName("reflection-option")[0].classList.add("option-active");
        document.getElementsByClassName("reflection-option")[1].classList.remove("option-active");
        document.getElementsByClassName("reflection-option")[2].classList.remove("option-active");
    }
    
    function valueOfWork() {
        display.innerHTML = "<h1 class='text-center reflection-title'><b>" + reflection[1].title + "</b></h1>" + reflection[1].photo + "<p class='text-center by-name mt-3' style='font-size: 20px;'>"+ reflection[1].author + "</p>" + "<p class='text-justify ref-content'>"+ reflection[1].body + "</p>";
        document.getElementsByClassName("reflection-option")[1].classList.add("option-active");
        document.getElementsByClassName("reflection-option")[0].classList.remove("option-active");
        document.getElementsByClassName("reflection-option")[2].classList.remove("option-active");
    }

    function ethicalPractices() {
        display.innerHTML = "<h1 class='text-center reflection-title'><b>" + reflection[2].title + "</b></h1>" + reflection[2].photo + "<p class='text-center by-name mt-3' style='font-size: 20px;'>"+ reflection[2].author + "</p>" + "<p class='text-justify ref-content'>"+ reflection[2].body + "</p>";         
        document.getElementsByClassName("reflection-option")[2].classList.add("option-active");
        document.getElementsByClassName("reflection-option")[0].classList.remove("option-active");
        document.getElementsByClassName("reflection-option")[1].classList.remove("option-active");
        }

        workImmersion();