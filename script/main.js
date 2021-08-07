$(function(){
    //For Smooth scrolling
    var scroll = new SmoothScroll('a[href*="#"]',{
        speed: 800,
    });
    // AOS for activating scroll animation
    AOS.init();

    //For refreshing the page when clicked on the name
    var pageUrl = window.location.href;
    $('div#logo h1, div#navbar li:nth-child(1)').on('click', function(e){
        e.preventDefault();
        history.replaceState('', null, pageUrl);
        location.reload();
    });

    // For the navbar responsiveness
    $('div.burger-animation').on('click', function(){
        $('div#menu-button').toggleClass('hamburger');
        $('div#navbar').toggleClass("navbar-activate");
    });


    //For course list activate animation
    var $allCourses = $('div#course-box div');
    $('div#course-list li').on('click', function(){
        var clickedList = this.id;
        switch (clickedList){
            case "course-all":
                $('li.active-course').removeAttr("class");
                $(this).addClass("active-course");
                if($('svg.list-active-one').css("display") != "inline-block"){
                    $('svg.list-active-two, svg.list-active-three').fadeOut(200);
                    $('svg.list-active-one').fadeIn(200);
                }
                //For course list functionality
                $allCourses.fadeIn(800);
                break;
            case "course-recent":    
                $('li.active-course').removeAttr("class");
                $(this).addClass("active-course");
                if($('svg.list-active-two').css("display") != "inline-block"){
                    $('svg.list-active-one, svg.list-active-three').fadeOut(200);
                    $('svg.list-active-two').fadeIn(200);
                }    
                //For course list functionality 
                $allCourses.hide();
                $allCourses.eq(1).fadeIn(800);           
                $allCourses.eq(3).fadeIn(800);           
                $allCourses.eq(4).fadeIn(800);           
                $allCourses.eq(6).fadeIn(800);           
                break;
            case "course-recommended":
                $('li.active-course').removeAttr("class");
                $(this).addClass("active-course");
                if($('svg.list-active-three').css("display") != "inline-block"){
                    $('svg.list-active-one, svg.list-active-two').fadeOut(200);
                    $('svg.list-active-three').fadeIn(200);
                }    
                //For course list functionality
                $allCourses.hide();
                $allCourses.eq(0).fadeIn(800);           
                $allCourses.eq(1).fadeIn(800);           
                $allCourses.eq(5).fadeIn(800);           
                $allCourses.eq(7).fadeIn(800); 
                break;  
        }
    });
    //For Course modal window
    var $modalContainer = $('div#modal-container');
    $allCourses.on('click', function(){
        var courseId = $(this).attr("id");
        var $modalBox = $('div#modal-box');
        var $modalVideo = $('video#course-video');
        // For Video source src
        var videoElement = '<video id="course-video" controls>' + '<source id="video-source" src="images/courses-video/course';
        var videoSource = '-one-';
        var videoSourceEnd = 'video.mp4" type="video/mp4">' + '</video>';

        switch(courseId){
            case "course-one":
                $modalVideo.hide().remove();
                $modalBox.hide().append(videoElement + videoSource + videoSourceEnd).fadeIn(400);
                break;
                
            case "course-two":
                videoSource = '-two-';
                $modalVideo.hide().remove();
                $modalBox.hide().append(videoElement + videoSource + videoSourceEnd).fadeIn(400);
                break;                
            case "course-three":
                videoSource = '-three-';
                $modalVideo.hide().remove();
                $modalBox.hide().append(videoElement + videoSource + videoSourceEnd).fadeIn(400);
                break;                
            case "course-four":
                videoSource = '-four-';
                $modalVideo.hide().remove();
                $modalBox.hide().append(videoElement + videoSource + videoSourceEnd).fadeIn(400);
                break;                
            case "course-five":
                videoSource = '-five-';
                $modalVideo.hide().remove();
                $modalBox.hide().append(videoElement + videoSource + videoSourceEnd).fadeIn(400);
                break;                
            case "course-six":
                videoSource = '-six-';
                $modalVideo.hide().remove();
                $modalBox.hide().append(videoElement + videoSource + videoSourceEnd).fadeIn(400);
                break;                
            case "course-seven":
                videoSource = '-seven-';
                $modalVideo.hide().remove();
                $modalBox.hide().append(videoElement + videoSource + videoSourceEnd).fadeIn(400);
                break;                
            case "course-eight":
                videoSource = '-eight-';
                $modalVideo.hide().remove();
                $modalBox.hide().append(videoElement + videoSource + videoSourceEnd).fadeIn(400);
                break;                
        }    
        //For modal window open
        $modalContainer.addClass("modal-show");
        document.getElementById('course-video').play();
        //For stopping scroll while modal open
        $('body').addClass("modal-open");
    });
    $('div#modal-close-button').on('click', function(){
        //For modal window close
        $modalContainer.removeClass("modal-show");
        document.getElementById('course-video').pause();
        //For turning scroll on while modal close
        $('body').removeClass("modal-open");
    });

    // For Function on teachers right button
    $('div#teachers-right-button svg').on('click', function(){
        var $teacherId = $('div#teachers-section div:eq(0)').attr('id');
        var $teacherBoxOne = $('div#teachers-section div:eq(0)');
        var $teacherBoxTwo = $('div#teachers-section div:eq(1)');
        switch($teacherId){
            case "teacher-one":
                $teacherBoxOne.stop().hide();
                $teacherBoxTwo.stop().hide();
                //Start of animation from teacher one to teacher two details change
                $teacherBoxOne.find("img").removeAttr("src").attr("src", "images/teachers/teacher-two.jpg");
                $teacherBoxOne.find("h2").html("Mr. Ishimoto Hiroshi");
                $teacherBoxOne.find("h3").html("Mathmetics");
                $teacherBoxOne.removeAttr("id").attr("id","teacher-two");
                //end of animation from teacher one to teacher two details change
                
                //Start of animation from teacher two to teacher three details change
                $teacherBoxTwo.find('img').removeAttr("src").attr("src", "images/teachers/teacher-three.jpg");
                $teacherBoxTwo.find("h2").html("Ms. Robertson");
                $teacherBoxTwo.find("h3").html("Finance");
                $teacherBoxTwo.removeAttr("id").attr("id","teacher-three");
                //end of animation from teacher two to teacher three details change
                $teacherBoxOne.stop().hide().fadeIn(400);
                $teacherBoxTwo.stop().hide().fadeIn(400);
                //For screen width under 1000 teacher will not be available
                if(window.innerWidth <= 1000){
                    $teacherBoxTwo.hide();
                }
                break;
            case "teacher-two":
                $teacherBoxOne.stop().hide();
                $teacherBoxTwo.stop().hide();
                //Start of animation from teacher two to teacher three details change
                $teacherBoxOne.find("img").removeAttr("src").attr("src", "images/teachers/teacher-three.jpg");
                $teacherBoxOne.find("h2").html("Ms. Robertson");
                $teacherBoxOne.find("h3").html("Finance");
                $teacherBoxOne.removeAttr("id").attr("id","teacher-three");
                //end of animation from teacher two to teacher three details change
                
                //Start of animation from teacher three to teacher four details change
                $teacherBoxTwo.find('img').removeAttr("src").attr("src", "images/teachers/teacher-four.jpg");
                $teacherBoxTwo.find("h2").html("Ms. Petra William");
                $teacherBoxTwo.find("h3").html("Mathmetics");
                $teacherBoxTwo.removeAttr("id").attr("id","teacher-four");
                //end of animation from teacher three to teacher four details change
                $teacherBoxOne.stop().hide().fadeIn(400);
                $teacherBoxTwo.stop().hide().fadeIn(400);
                //For screen width under 1000 teacher will not be available
                if(window.innerWidth <= 1000){
                    $teacherBoxTwo.hide();
                }
                break;
            case "teacher-three":
                $teacherBoxOne.stop().hide();
                $teacherBoxTwo.stop().hide();
                //Start of animation from teacher three to teacher four details change
                $teacherBoxOne.find("img").removeAttr("src").attr("src", "images/teachers/teacher-four.jpg");
                $teacherBoxOne.find("h2").html("Ms. Petra William");
                $teacherBoxOne.find("h3").html("Mathmetics");
                $teacherBoxOne.removeAttr("id").attr("id","teacher-four");
                //end of animation from teacher three to teacher four details chang
                
                //Start of animation from teacher four to teacher five details change
                $teacherBoxTwo.find('img').removeAttr("src").attr("src", "images/teachers/teacher-five.jpg");
                $teacherBoxTwo.find("h2").html("Mr. Yazid Abid");
                $teacherBoxTwo.find("h3").html("Biology");
                $teacherBoxTwo.removeAttr("id").attr("id","teacher-five");
                //end of of animation from teacher four to teacher five details change
                $teacherBoxOne.stop().hide().fadeIn(400);
                $teacherBoxTwo.stop().hide().fadeIn(400);
                //For screen width under 1000 teacher will not be available
                if(window.innerWidth <= 1000){
                    $teacherBoxTwo.hide();
                }
                break;
            case "teacher-four":
                $teacherBoxOne.stop().hide();
                $teacherBoxTwo.stop().hide();
                //Start of of animation from teacher four to teacher five details change
                $teacherBoxOne.find("img").removeAttr("src").attr("src", "images/teachers/teacher-five.jpg");
                $teacherBoxOne.find("h2").html("Mr. Yazid Abid");
                $teacherBoxOne.find("h3").html("Biology");
                $teacherBoxOne.removeAttr("id").attr("id","teacher-five");
                //end of of animation from teacher four to teacher five details change
                
                //Start of animation from teacher five to teacher one details change
                $teacherBoxTwo.find('img').removeAttr("src").attr("src", "images/teachers/teacher-one.jpg");
                $teacherBoxTwo.find("h2").html("Ms. Matsumura Yuko");
                $teacherBoxTwo.find("h3").html("Technology");
                $teacherBoxTwo.removeAttr("id").attr("id","teacher-one");
                //end of animation from teacher five to teacher one details change
                $teacherBoxOne.stop().hide().fadeIn(400);
                $teacherBoxTwo.stop().hide().fadeIn(400);
                //For screen width under 1000 teacher will not be available
                if(window.innerWidth <= 1000){
                    $teacherBoxTwo.hide();
                }
                break;
            case "teacher-five":
                $teacherBoxOne.stop().hide();
                $teacherBoxTwo.stop().hide();
                //Start animation from teacher five to teacher one details change
                $teacherBoxOne.find("img").removeAttr("src").attr("src", "images/teachers/teacher-one.jpg");
                $teacherBoxOne.find("h2").html("Ms. Matsumura Yuko");
                $teacherBoxOne.find("h3").html("Technology");
                $teacherBoxOne.removeAttr("id").attr("id","teacher-one");
                //end of animation from teacher five to teacher one details change
                
                //Start of animation from teacher one to teacher two details change
                $teacherBoxTwo.find('img').removeAttr("src").attr("src", "images/teachers/teacher-two.jpg");
                $teacherBoxTwo.find("h2").html("Mr. Ishimoto Hiroshi");
                $teacherBoxTwo.find("h3").html("Mathmetics");
                $teacherBoxTwo.removeAttr("id").attr("id","teacher-two");
                //end of the teacher two details change
                $teacherBoxOne.stop().hide().fadeIn(400);
                $teacherBoxTwo.stop().hide().fadeIn(400);
                //For screen width under 1000 teacher will not be available
                if(window.innerWidth <= 1000){
                    $teacherBoxTwo.hide();
                }
                break;        
        }
    });

    // For function on teachers left button
    $('div#teachers-left-button svg').on('click', function(){
        var $teacherId = $('div#teachers-section div:eq(0)').attr('id');
        var $teacherBoxOne = $('div#teachers-section div:eq(0)');
        var $teacherBoxTwo = $('div#teachers-section div:eq(1)');
        switch($teacherId){
            case "teacher-one":
                $teacherBoxOne.stop().hide();
                $teacherBoxTwo.stop().hide();
                //Start of animation from teacher one to teacher five details change
                $teacherBoxOne.find("img").removeAttr("src").attr("src", "images/teachers/teacher-five.jpg");
                $teacherBoxOne.find("h2").html("Mr. Yazid Abid");
                $teacherBoxOne.find("h3").html("Biology");
                $teacherBoxOne.removeAttr("id").attr("id","teacher-five");
                //end of animation from teacher one to teacher five details change
                
                //Start of animation from teacher two to teacher one details change
                $teacherBoxTwo.find('img').removeAttr("src").attr("src", "images/teachers/teacher-one.jpg");
                $teacherBoxTwo.find("h2").html("Ms. Matsumura Yuko");
                $teacherBoxTwo.find("h3").html("Technology");
                $teacherBoxTwo.removeAttr("id").attr("id","teacher-one");
                //end of animation from teacher two to teacher one details change
                $teacherBoxOne.stop().hide().fadeIn(400);
                $teacherBoxTwo.stop().hide().fadeIn(400);
                //For screen width under 1000 teacher will not be available
                if(window.innerWidth <= 1000){
                    $teacherBoxTwo.hide();
                }                
                break;
            case "teacher-five":
                $teacherBoxOne.stop().hide();
                $teacherBoxTwo.stop().hide();
                //Start of animation from teacher five to teacher four details change
                $teacherBoxOne.find("img").removeAttr("src").attr("src", "images/teachers/teacher-four.jpg");
                $teacherBoxOne.find("h2").html("Ms. Petra William");
                $teacherBoxOne.find("h3").html("Mathmetics");
                $teacherBoxOne.removeAttr("id").attr("id","teacher-four");
                //end of animation from teacher two to teacher one details change
                
                //Start of animation from teacher one to teacher five details change
                $teacherBoxTwo.find('img').removeAttr("src").attr("src", "images/teachers/teacher-five.jpg");
                $teacherBoxTwo.find("h2").html("Mr. Yazid Abid");
                $teacherBoxTwo.find("h3").html("Biology");
                $teacherBoxTwo.removeAttr("id").attr("id","teacher-five");
                //end of animation from teacher one to teacher five details change
                $teacherBoxOne.stop().hide().fadeIn(400);
                $teacherBoxTwo.stop().hide().fadeIn(400);
                //For screen width under 1000 teacher will not be available
                if(window.innerWidth <= 1000){
                    $teacherBoxTwo.hide();
                }
                break;
            case "teacher-four":
                $teacherBoxOne.stop().hide();
                $teacherBoxTwo.stop().hide();
                //Start of animation from teacher four to teacher three details change
                $teacherBoxOne.find("img").removeAttr("src").attr("src", "images/teachers/teacher-three.jpg");
                $teacherBoxOne.find("h2").html("Ms. Robertson");
                $teacherBoxOne.find("h3").html("Finance");
                $teacherBoxOne.removeAttr("id").attr("id","teacher-three");
                //end of animation from teacher four to teacher three details change
                
                //Start of animation from teacher five to teacher four details change
                $teacherBoxTwo.find('img').removeAttr("src").attr("src", "images/teachers/teacher-four.jpg");
                $teacherBoxTwo.find("h2").html("Ms. Petra William");
                $teacherBoxTwo.find("h3").html("Mathmetics");
                $teacherBoxTwo.removeAttr("id").attr("id","teacher-four");
                //end of animation from teacher five to teacher four details change
                $teacherBoxOne.stop().hide().fadeIn(400);
                $teacherBoxTwo.stop().hide().fadeIn(400);
                //For screen width under 1000 teacher will not be available
                if(window.innerWidth <= 1000){
                    $teacherBoxTwo.hide();
                }
                break;
            case "teacher-three":
                $teacherBoxOne.stop().hide();
                $teacherBoxTwo.stop().hide();
                //Start of animation from teacher three to teacher two details change
                $teacherBoxOne.find("img").removeAttr("src").attr("src", "images/teachers/teacher-two.jpg");
                $teacherBoxOne.find("h2").html("Mr. Ishimoto Hiroshi ");
                $teacherBoxOne.find("h3").html("BiolMathmeticsogy");
                $teacherBoxOne.removeAttr("id").attr("id","teacher-two");
                //end of animation from teacher three to teacher two details change
                
                //Start of animation from teacher four to teacher three details change
                $teacherBoxTwo.find('img').removeAttr("src").attr("src", "images/teachers/teacher-three.jpg");
                $teacherBoxTwo.find("h2").html("Ms. Robertson");
                $teacherBoxTwo.find("h3").html("Finance");
                $teacherBoxTwo.removeAttr("id").attr("id","teacher-three");
                //end of animation from teacher four to teacher three details change
                $teacherBoxOne.stop().hide().fadeIn(400);
                $teacherBoxTwo.stop().hide().fadeIn(400);
                //For screen width under 1000 teacher will not be available
                if(window.innerWidth <= 1000){
                    $teacherBoxTwo.hide();
                }                
                break;
            case "teacher-two":
                $teacherBoxOne.stop().hide();
                $teacherBoxTwo.stop().hide();
                //Start of animation from teacher two to teacher one details change
                $teacherBoxOne.find("img").removeAttr("src").attr("src", "images/teachers/teacher-one.jpg");
                $teacherBoxOne.find("h2").html("Ms. Matsumura Yuko");
                $teacherBoxOne.find("h3").html("Technology");
                $teacherBoxOne.removeAttr("id").attr("id","teacher-one");
                //end of animation from teacher two to teacher one details change
                
                //Start of animation from teacher three to teacher two details change
                $teacherBoxTwo.find('img').removeAttr("src").attr("src", "images/teachers/teacher-two.jpg");
                $teacherBoxTwo.find("h2").html("Mr. Ishimoto Hiroshi");
                $teacherBoxTwo.find("h3").html("Mathmetics");
                $teacherBoxTwo.removeAttr("id").attr("id","teacher-two");
                //end of the teacher two details change
                $teacherBoxOne.stop().hide().fadeIn(400);
                $teacherBoxTwo.stop().hide().fadeIn(400);
                //For screen width under 1000 teacher will not be available
                if(window.innerWidth <= 1000){
                    $teacherBoxTwo.hide();
                }                
                break;        
        }
    });

    // For function on reviews right button
    var $reviewBox = $('div#review-box');
    var $reviewPersonName = $('div#review-message h3');
    var $reviewPersonImage = $('div#review-person img');
    var $reviewPersonMessage = $('div#review-message p');
    $('div#review-right-button svg').on('click',function(){
        var $reviewId = $reviewPersonName.attr("id");
        switch($reviewId){
            case "review-one":
                $reviewBox.stop().hide();
                $reviewPersonImage.removeAttr("src").attr("src", "images/reviews/person-two.png");
                $reviewPersonName.html("Mr. David Scheinzer");
                $reviewPersonMessage.html("This is a great website to learn Math. Their courses are really good. Also, it's really beginner-friendly. Someone new to the theories can easily learn math and other subjects. They discuss the main topics in a short discussion which is rally helpful.");
                $reviewBox.stop().hide().fadeIn(400);
                $reviewPersonName.removeAttr("id").attr("id", "review-two");
                break;
            case "review-two":
                $reviewBox.stop().hide();
                $reviewPersonImage.removeAttr("src").attr("src", "images/reviews/person-unknown.png");
                $reviewPersonName.html("Mr. Turkey Basap");
                $reviewPersonMessage.html("It was really hard for me to learn things on my own as we are all home due to the lockdown. When I was struggling in doing some maths, I found Edumats. It really helped me solve my answers.");
                $reviewBox.stop().hide().fadeIn(400);
                $reviewPersonName.removeAttr("id").attr("id", "review-three");
                break;
            case "review-three":
                $reviewBox.stop().hide();
                $reviewPersonImage.removeAttr("src").attr("src", "images/reviews/person-unknown.png");
                $reviewPersonName.html("Mr. Adnan Cehm");
                $reviewPersonMessage.html("They have great Math courses as well as Chemistry courses. I watched all of their chemistry courses and it's really great. They describe difficult equation in a way that everyone understnads.");
                $reviewBox.stop().hide().fadeIn(400);
                $reviewPersonName.removeAttr("id").attr("id", "review-four");
                break;
            case "review-four":
                $reviewBox.stop().hide();
                $reviewPersonImage.removeAttr("src").attr("src", "images/reviews/person-unknown.png");
                $reviewPersonName.html("Ms. Alice Chen");
                $reviewPersonMessage.html("This website is mainly focused on Maths but it's really awesome that they also cover subjects like Finance, Biology, Technology & Chemistry.");
                $reviewBox.stop().hide().fadeIn(400);
                $reviewPersonName.removeAttr("id").attr("id", "review-five");
                break;
            case "review-five":
                $reviewBox.stop().hide();
                $reviewPersonImage.removeAttr("src").attr("src", "images/reviews/person-unknown.png");
                $reviewPersonName.html("Mr. Arif Guass");
                $reviewPersonMessage.html("I am a teacher. All of my students asking me to do online classes but I told them to watch courses from Edumats and they all really understood the courses really well.");
                $reviewBox.stop().hide().fadeIn(400);
                $reviewPersonName.removeAttr("id").attr("id", "review-six");
                break;
            case "review-six":
                $reviewBox.stop().hide();
                $reviewPersonImage.removeAttr("src").attr("src", "images/reviews/person-unknown.png");
                $reviewPersonName.html("Ms. Luci Rahman");
                $reviewPersonMessage.html("This is great educational website. Also website the interface is really unique. We are looking forward to get more courses here.");
                $reviewBox.stop().hide().fadeIn(400);
                $reviewPersonName.removeAttr("id").attr("id", "review-seven");
                break;
            case "review-seven":
                $reviewBox.stop().hide();
                $reviewPersonImage.removeAttr("src").attr("src", "images/reviews/person-unknown.png");
                $reviewPersonName.html("Mr. Tamim Codart");
                $reviewPersonMessage.html("Edumats is a great website for beginners to learn and grow. It helped me a lot with their courses. They cover all most all of the Math questions related to college.");
                $reviewBox.stop().hide().fadeIn(400);
                $reviewPersonName.removeAttr("id").attr("id", "review-eight");
                break;   
            case "review-eight":
                $reviewBox.stop().hide();
                $reviewPersonImage.removeAttr("src").attr("src", "images/reviews/person-one.png");
                $reviewPersonName.html("Mr. Alex Jonathan");
                $reviewPersonMessage.html("All of the courses were really helpful. I was having trouble understanding a lot of math questions that were supposed to be in the exam. But I didn't have a home tutor. So, I was searching online for those answers and suddenly I stumed upon on Edumats. I watched the courses and was able to find my answers.");
                $reviewBox.stop().hide().fadeIn(400);
                $reviewPersonName.removeAttr("id").attr("id", "review-one");
                break;    
        }
    });

    // For function on reviews left button
    $('div#review-left-button svg').on('click',function(){
        var $reviewId = $reviewPersonName.attr("id");
        switch($reviewId){
            case "review-one":
                $reviewBox.stop().hide();
                $reviewPersonImage.removeAttr("src").attr("src", "images/reviews/person-unknown.png");
                $reviewPersonName.html("Mr. Tamim Codart");
                $reviewPersonMessage.html("Edumats is a great website for beginners to learn and grow. It helped me a lot with their courses. They cover all most all of the Math questions related to college.");
                $reviewBox.stop().hide().fadeIn(400);
                $reviewPersonName.removeAttr("id").attr("id", "review-eight");
                break;
            case "review-eight":
                $reviewBox.stop().hide();
                $reviewPersonImage.removeAttr("src").attr("src", "images/reviews/person-unknown.png");
                $reviewPersonName.html("Ms. Luci Rahman");
                $reviewPersonMessage.html("This is great educational website. Also website the interface is really unique. We are looking forward to get more courses here.");
                $reviewBox.stop().hide().fadeIn(400);
                $reviewPersonName.removeAttr("id").attr("id", "review-seven");
                break;
            case "review-seven":
                $reviewBox.stop().hide();
                $reviewPersonImage.removeAttr("src").attr("src", "images/reviews/person-unknown.png");
                $reviewPersonName.html("Mr. Arif Guass");
                $reviewPersonMessage.html("I am a teacher. All of my students asking me to do online classes but I told them to watch courses from Edumats and they all really understood the courses really well.");
                $reviewBox.stop().hide().fadeIn(400);
                $reviewPersonName.removeAttr("id").attr("id", "review-six");
                break;
            case "review-six":
                $reviewBox.stop().hide();
                $reviewPersonImage.removeAttr("src").attr("src", "images/reviews/person-unknown.png");
                $reviewPersonName.html("Ms. Alice Chen");
                $reviewPersonMessage.html("This website is mainly focused on Maths but it's really awesome that they also cover subjects like Finance, Biology, Technology & Chemistry.");
                $reviewBox.stop().hide().fadeIn(400);
                $reviewPersonName.removeAttr("id").attr("id", "review-five");
                break;
            case "review-five":
                $reviewBox.stop().hide();
                $reviewPersonImage.removeAttr("src").attr("src", "images/reviews/person-unknown.png");
                $reviewPersonName.html("Mr. Adnan Cehm");
                $reviewPersonMessage.html("They have great Math courses as well as Chemistry courses. I watched all of their chemistry courses and it's really great. They describe difficult equation in a way that everyone understnads.");
                $reviewBox.stop().hide().fadeIn(400);
                $reviewPersonName.removeAttr("id").attr("id", "review-four");
                break;
            case "review-four":
                $reviewBox.stop().hide();
                $reviewPersonImage.removeAttr("src").attr("src", "images/reviews/person-unknown.png");
                $reviewPersonName.html("Mr. Turkey Basap");
                $reviewPersonMessage.html("It was really hard for me to learn things on my own as we are all home due to the lockdown. When I was struggling in doing some maths, I found Edumats. It really helped me solve my answers.");
                $reviewBox.stop().hide().fadeIn(400);
                $reviewPersonName.removeAttr("id").attr("id", "review-three");
                break;
            case "review-three":
                $reviewBox.stop().hide();
                $reviewPersonImage.removeAttr("src").attr("src", "images/reviews/person-two.png");
                $reviewPersonName.html("Mr. David Scheinzer");
                $reviewPersonMessage.html("This is a great website to learn Math. Their courses are really good. Also, it's really beginner-friendly. Someone new to the theories can easily learn math and other subjects. They discuss the main topics in a short discussion which is rally helpful.");
                $reviewBox.stop().hide().fadeIn(400);
                $reviewPersonName.removeAttr("id").attr("id", "review-two");
                break;   
            case "review-two":
                $reviewBox.stop().hide();
                $reviewPersonImage.removeAttr("src").attr("src", "images/reviews/person-one.png");
                $reviewPersonName.html("Mr. Alex Jonathan");
                $reviewPersonMessage.html("All of the courses were really helpful. I was having trouble understanding a lot of math questions that were supposed to be in the exam. But I didn't have a home tutor. So, I was searching online for those answers and suddenly I stumed upon on Edumats. I watched the courses and was able to find my answers.");
                $reviewBox.stop().hide().fadeIn(400);
                $reviewPersonName.removeAttr("id").attr("id", "review-one");
                break;    
        }
    });
    
    //For not submitting the form
    $('input#form-submit').on('click submit', function(e){
        e.preventDefault();
    });

    //This is for the scroll to the top button
    $(window).on("scroll", function(){
        var $windowScrolled = $(window).scrollTop();
        var $teachersHeight = $("div#teachers").offset().top;
        var $scrollTopButton = $("div#scroll-top-button");
        if( $windowScrolled >= $teachersHeight){
            $scrollTopButton.stop().show();
        } else{
            $scrollTopButton.stop().hide();
        }
    });
    //This is the end of the script
});