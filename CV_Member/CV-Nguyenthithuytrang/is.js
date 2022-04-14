$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    $(function () {
        $(document).scroll(function () {
          var $nav = $(".navbar-fixed-top");
          $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
      });
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 1,
                nav: false
            },
            1000:{
                items: 2,
                nav: false
            }
        }
    });


$(document).ready(function(){
    function checkName(){
        let name = $('#txtName').val();
        let nameRegex = /^[a-zA-Z\s]+$/;
        if(nameRegex.test(name)){
            return true
        }
        return false
    }
    $("#btnSubmit").click(function(e){
        e.preventDefault();
        if(checkName()){
            $("#statusOfName").text('')
        }else{
            $("#statusOfName").text('Name is required.')
            $("#statusOfName").css({'color':'red'});
        }
    })
})
$(document).ready(function(){
    function checkEmail(){
        let email = $('#txtEmail').val();
        let emailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(emailRegex.test(email)){
            return true
        }
        return false
    }
    $("#btnSubmit").click(function(e){
        e.preventDefault();
        if(checkEmail()){
            $("#statusOfEmail").text('')
        }else{
            $("#statusOfEmail").text('Email is Required.')
            $("#statusOfEmail").css('color','red')
        }
    })
    // $('#btnSubmit').click(function() { 
    //     $(".error").hide();
    //     var hasError = false;
    //     let emailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    //     let email = $("#txtEmail").val();
    //     if(email == ''){
    //         $("#txtEmail").after('<span class="error">Email is Required</span>');
    //         hasError = true;}
    //     else if(!emailRegex.test(email))  {
    //         $("#txtEmail").after('<span class="error">Entered value does not match email format</span>');
    //         hasError = true;}
    //         if(hasError == true) { return false; }
 
    //     })
})
$(document).ready(function(){

    function checkSubject(){
        let Subject = $('#txtSubject').val();
        let SubjectRegex = /^[a-zA-Z0-9]+$/;
        if(SubjectRegex.test(Subject)){
            return true
        }
        return false
    }

    $("#btnSubmit").click(function(e){
        e.preventDefault();
        if(checkSubject()){
            $("#statusOfSubject").text('')
        }else{
            $("#statusOfSubject").text('Subject is required.')
            $("#statusOfSubject").css('color','red')
        }
    })
})
$(document).ready(function(){

    function checkComment(){
        let Comment = $('#comment').val();
        let CommentRegex = /^[a-zA-Z0-9]+$/;
        if(CommentRegex.test(Comment)){
            return true
        }
        return false
    }

    $("#btnSubmit").click(function(e){
        e.preventDefault();
        if(checkComment()){
            $("#statusOfComment").text('')
        }else{
            $("#statusOfComment").text('Comment is required.')
            $("#statusOfComment").css('color','red')
        }
    })
})
})