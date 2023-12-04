$(function(){
    $('html').removeClass('no-js');    
});

// Intro & folder
$(function(){
    $("#playButton").click(function(e){
        $(".folder").addClass("play");
        $(".intro_visual").hide();
    });

    $(".img_close_button").click(function(){
        $(".folder").removeClass("play");
        $(".intro_visual").show();
    })
})

// MenuBar Click
$(function(){
    $(".p-1 > a").click(function(){
        $(".folder_page:first-child").addClass("active");
        $(".folder_page:first-child").siblings().removeClass("active");
        $(".plus_button").show();
        $(".minus_button").hide();
    });

    $(".p-2 > a").click(function(){
        $(".folder_page:nth-child(2)").addClass("active");
        $(".folder_page:nth-child(2)").siblings().removeClass("active");
        $(".plus_button").show();
        $(".minus_button").hide();
    });

    $(".p-3 > a").click(function(){
        $(".folder_page:nth-child(3)").addClass("active");
        $(".folder_page:nth-child(3)").siblings().removeClass("active");
        $(".plus_button").show();
        $(".minus_button").hide();
    });

    $(".p-4 > a").click(function(){
        $(".folder_page:nth-child(5)").addClass("active");
        $(".folder_page:nth-child(5)").siblings().removeClass("active");
        $(".plus_button").show();
        $(".minus_button").hide();
    });

    $(".p-5 > a").click(function(){
        $(".folder_page:last-child").addClass("active");
        $(".folder_page:last-child").siblings().removeClass("active");
        $(".plus_button").show();
        $(".minus_button").hide();
    });
});

// Info & Skills
$(function(){
    $(".p-2 > a").click(function(){
        $(".my_skills > ul > li:nth-child(1) > .graph > .graph_in").animate({
            width: "90%"
        }, 1000)
        $(".my_skills > ul > li:nth-child(2) > .graph > .graph_in").animate({
            width: "96%"
        }, 1000)
        $(".my_skills > ul > li:nth-child(3) > .graph > .graph_in").animate({
            width: "85%"
        }, 1000)
        $(".my_skills > ul > li:nth-child(4) > .graph > .graph_in").animate({
            width: "73%"
        }, 1000)
        $(".my_skills > ul > li:nth-child(5) > .graph > .graph_in").animate({
            width: "62%"
        }, 1000)
        $(".my_skills > ul > li:nth-child(6) > .graph > .graph_in").animate({
            width: "55%"
        }, 1000)
        $(".my_skills > ul > li:nth-child(7) > .graph > .graph_in").animate({
            width: "51%"
        }, 1000)
    });

    $(".p-1 > a, .p-3 > a, .p-4 > a, .p-1 > 5 ").click(function(){
        $(".my_skills > ul > li > .graph > .graph_in").animate({
            width: "0%"
        })
    })
});

// Web 메인페이지 버튼
$(function(){
    $(".portfolio_button").click(function(){
        $(".folder_page:nth-child(3)").removeClass("active");
        $(".folder_page:nth-child(4)").addClass("active");
        $(".wpage:nth-child(1)").addClass("active");
        $(".wpage:nth-child(2), .wpage:nth-child(3)").removeClass("active");
    });

    $(".coffeemama_button").click(function(){
        $(".folder_page:nth-child(3)").removeClass("active");
        $(".folder_page:nth-child(4)").addClass("active");
        $(".wpage:nth-child(2)").addClass("active");
        $(".wpage:nth-child(1), .wpage:nth-child(3)").removeClass("active");
    });

    $(".logitechg_button").click(function(){
        $(".folder_page:nth-child(3)").removeClass("active");
        $(".folder_page:nth-child(4)").addClass("active");
        $(".wpage:nth-child(3)").addClass("active");
        $(".wpage:nth-child(1), .wpage:nth-child(2)").removeClass("active");
    });
});

// toolbar_left
$(function(){
    $(".wpage > .viewer_toolbar > .toolbar_left > .back > a").click(function(){
        $(".folder_page:nth-child(3)").siblings().removeClass("active");
        $(".folder_page:nth-child(3)").addClass("active");
    });
});

// toolbar_right
$(function(){
    // #view_page_1
    // 이전 작업
    $("#view_page_1 > .viewer_toolbar > .toolbar_right > .previous > a").click(function(){
        $(".wpage:nth-child(3)").addClass("active");
        $(".wpage:nth-child(1), .wpage:nth-child(2)").removeClass("active");
        $("#web_list").stop().slideUp();
    });

    // 다음 작업
    $("#view_page_1 > .viewer_toolbar > .toolbar_right > .next > a").click(function(){
        $(".wpage:nth-child(2)").addClass("active");
        $(".wpage:nth-child(1), .wpage:nth-child(3)").removeClass("active");
        $("#web_list").stop().slideUp();
    });

    // #view_page_2
    // 이전 작업
    $("#view_page_2 > .viewer_toolbar > .toolbar_right > .previous > a").click(function(){
        $(".wpage:nth-child(1)").addClass("active");
        $(".wpage:nth-child(2), .wpage:nth-child(3)").removeClass("active");
        $("#web_list").stop().slideUp();
    });

    // 다음 작업
    $("#view_page_2 > .viewer_toolbar > .toolbar_right > .next > a").click(function(){
        $(".wpage:nth-child(3)").addClass("active");
        $(".wpage:nth-child(1), .wpage:nth-child(2)").removeClass("active");
        $("#web_list").stop().slideUp();
    });

    // #view_page_3
    // 이전 작업
    $("#view_page_3 > .viewer_toolbar > .toolbar_right > .previous > a").click(function(){
        $(".wpage:nth-child(2)").addClass("active");
        $(".wpage:nth-child(1), .wpage:nth-child(3)").removeClass("active");
        $("#web_list").stop().slideUp();
    });

    // 다음 작업
    $("#view_page_3 > .viewer_toolbar > .toolbar_right > .next > a").click(function(){
        $(".wpage:nth-child(1)").addClass("active");
        $(".wpage:nth-child(2), .wpage:nth-child(3)").removeClass("active");
        $("#web_list").stop().slideUp();
    });
});

// web_list
$(function(){
    $(".weblist > a").click(function(){
        // 클릭 시 나타나도록
        if($("#web_list").css("display") === "none"){
            $("#web_list").stop().slideDown().show();
            
        } else {
            // 이미 나타나 있다면 안보이도록
            $("#web_list").stop().slideUp();
        }
    });
});

// web_lsit 링크 이동
$(function(){
    // .portfolio
    $("#web_list > ul > li:first-child > a").click(function(){
        $(".wpage:nth-child(1)").addClass("active");
        $(".wpage:nth-child(2), .wpage:nth-child(3)").removeClass("active");
        $("#web_list").stop().slideUp();
    });

    // .coffeemama
    $("#web_list > ul > li:nth-child(2) > a").click(function(){
        $(".wpage:nth-child(2)").addClass("active");
        $(".wpage:nth-child(1), .wpage:nth-child(3)").removeClass("active");
        $("#web_list").stop().slideUp();
    });

    // .logitechg
    $("#web_list > ul > li:last-child > a").click(function(){
        $(".wpage:nth-child(3)").addClass("active");
        $(".wpage:nth-child(1), .wpage:nth-child(2)").removeClass("active");
        $("#web_list").stop().slideUp();
    });
});

// --------------------------------------------------------------------------

// Edit 메인페이지 버튼
$(function(){
    $(".apilko_button").click(function(){
        $(".folder_page:nth-child(5)").removeClass("active");
        $(".folder_page:nth-child(6)").addClass("active");
        $(".epage:nth-child(1)").addClass("active");
        $(".epage:nth-child(1)").siblings().removeClass("active");
    });

    $(".welstory_button").click(function(){
        $(".folder_page:nth-child(5)").removeClass("active");
        $(".folder_page:nth-child(6)").addClass("active");
        $(".epage:nth-child(2)").addClass("active");
        $(".epage:nth-child(2)").siblings().removeClass("active");
    });

    $(".moaelgaa_button").click(function(){
        $(".folder_page:nth-child(5)").removeClass("active");
        $(".folder_page:nth-child(6)").addClass("active");
        $(".epage:nth-child(3)").addClass("active");
        $(".epage:nth-child(3)").siblings().removeClass("active");
    });

    $(".huton_button").click(function(){
        $(".folder_page:nth-child(5)").removeClass("active");
        $(".folder_page:nth-child(6)").addClass("active");
        $(".epage:nth-child(4)").addClass("active");
        $(".epage:nth-child(4)").siblings().removeClass("active");
    });

    $(".leaders_button").click(function(){
        $(".folder_page:nth-child(5)").removeClass("active");
        $(".folder_page:nth-child(6)").addClass("active");
        $(".epage:nth-child(5)").addClass("active");
        $(".epage:nth-child(5)").siblings().removeClass("active");
    });

});

// Edit 세부페이지 toolbar
// toolbar_left
$(function(){
    $(".epage > .viewer_toolbar > .toolbar_left > .back > a").click(function(){
        $(".folder_page:nth-child(5)").siblings().removeClass("active");
        $(".folder_page:nth-child(5)").addClass("active");
    });
});

// toolbar_right
$(function(){
    // #view_apilko
    // 이전 작업
    $("#view_apilko > .viewer_toolbar > .toolbar_right > .previous > a").click(function(){
        $(".epage:nth-child(5)").addClass("active");
        $(".epage:nth-child(5)").siblings().removeClass("active");
        $("#edit_list").stop().slideUp();
    });

    // 다음 작업
    $("#view_apilko > .viewer_toolbar > .toolbar_right > .next > a").click(function(){
        $(".epage:nth-child(2)").addClass("active");
        $(".epage:nth-child(2)").siblings().removeClass("active");
        $("#edit_list").stop().slideUp();
    });

    // #view_welstory
    // 이전 작업
    $("#view_welstory > .viewer_toolbar > .toolbar_right > .previous > a").click(function(){
        $(".epage:nth-child(1)").addClass("active");
        $(".epage:nth-child(1)").siblings().removeClass("active");
        $("#edit_list").stop().slideUp();
    });

    // 다음 작업
    $("#view_welstory > .viewer_toolbar > .toolbar_right > .next > a").click(function(){
        $(".epage:nth-child(3)").addClass("active");
        $(".epage:nth-child(3)").siblings().removeClass("active");
        $("#edit_list").stop().slideUp();
    });

    // #view_moaelgaa
    // 이전 작업
    $("#view_moaelgaa > .viewer_toolbar > .toolbar_right > .previous > a").click(function(){
        $(".epage:nth-child(2)").addClass("active");
        $(".epage:nth-child(2)").siblings().removeClass("active");
        $("#edit_list").stop().slideUp();
    });

    // 다음 작업
    $("#view_moaelgaa > .viewer_toolbar > .toolbar_right > .next > a").click(function(){
        $(".epage:nth-child(4)").addClass("active");
        $(".epage:nth-child(4)").siblings().removeClass("active");
        $("#edit_list").stop().slideUp();
    });

    // #view_huton
    // 이전 작업
    $("#view_huton > .viewer_toolbar > .toolbar_right > .previous > a").click(function(){
        $(".epage:nth-child(3)").addClass("active");
        $(".epage:nth-child(3)").siblings().removeClass("active");
        $("#edit_list").stop().slideUp();
    });

    // 다음 작업
    $("#view_huton > .viewer_toolbar > .toolbar_right > .next > a").click(function(){
        $(".epage:nth-child(5)").addClass("active");
        $(".epage:nth-child(5)").siblings().removeClass("active");
        $("#edit_list").stop().slideUp();
    });

    // #view_leaders
    // 이전 작업
    $("#view_leaders > .viewer_toolbar > .toolbar_right > .previous > a").click(function(){
        $(".epage:nth-child(4)").addClass("active");
        $(".epage:nth-child(4)").siblings().removeClass("active");
        $("#edit_list").stop().slideUp();
    });

    // 다음 작업
    $("#view_leaders > .viewer_toolbar > .toolbar_right > .next > a").click(function(){
        $(".epage:nth-child(1)").addClass("active");
        $(".epage:nth-child(1)").siblings().removeClass("active");
        $("#edit_list").stop().slideUp();
    });
});

// edit_list
$(function(){
    $(".editlist > a").click(function(){
        // 클릭 시 나타나도록
        if($("#edit_list").css("display") === "none"){
            $("#edit_list").stop().slideDown().show();
            
        } else {
            // 이미 나타나 있다면 안보이도록
            $("#edit_list").stop().slideUp();
        }
    });
});

// edit_lsit 링크 이동
$(function(){
    // .apilko
    $("#edit_list > ul > li:first-child > a").click(function(){
        $(".epage:nth-child(1)").addClass("active");
        $(".epage:nth-child(1)").siblings().removeClass("active");
        $("#edit_list").stop().slideUp();
    });

    // .welstory
    $("#edit_list > ul > li:nth-child(2) > a").click(function(){
        $(".epage:nth-child(2)").addClass("active");
        $(".epage:nth-child(2)").siblings().removeClass("active");
        $("#edit_list").stop().slideUp();
    });

    // .moaelgaa
    $("#edit_list > ul > li:nth-child(3) > a").click(function(){
        $(".epage:nth-child(3)").addClass("active");
        $(".epage:nth-child(3)").siblings().removeClass("active");
        $("#edit_list").stop().slideUp();
    });

    // .huton
    $("#edit_list > ul > li:nth-child(4) > a").click(function(){
        $(".epage:nth-child(4)").addClass("active");
        $(".epage:nth-child(4)").siblings().removeClass("active");
        $("#edit_list").stop().slideUp();
    });

    // .leaders
    $("#edit_list > ul > li:last-child > a").click(function(){
        $(".epage:nth-child(5)").addClass("active");
        $(".epage:nth-child(5)").siblings().removeClass("active");
        $("#edit_list").stop().slideUp();
    });
});

// .gallery button
$(function(){
    $(".epage > .plus_button").click(function(){
        if($(".plus_button").css("display") === "block"){
            $(".plus_button").hide();
            $(".minus_button").show();
        } else {
            $(".plus_button").show();
            $(".minus_button").hide();
        }
    })

    $(".epage > .minus_button").click(function(){
        if($(".minus_button").css("display") === "block"){
            $(".plus_button").show();
            $(".minus_button").hide();
        } else {
            $(".plus_button").show();
            $(".minus_button").hide();
        }
    })

    // toolbar를 클릭하여도 plus_button으로 바뀌도록
    $(".epage > .viewer_toolbar > .toolbar_left > li > a").click(function(){
        $(".plus_button").show();
        $(".minus_button").hide();
    })
    $(".epage > .viewer_toolbar > .toolbar_right > li > a").click(function(){
        $(".plus_button").show();
        $(".minus_button").hide();
    })
    $("#edit_list > ul > li > a").click(function(){
        $(".plus_button").show();
        $(".minus_button").hide();
    })
});

// .plus_button에 마우스를 올렸을 때와 떼었을 때
$(function(){
    $(".plus_button").mouseover(function(){
        $(".epage > .gallery > .gallery_wrap > img:nth-child(2)").stop().animate({
            rotate: "5deg"
        });
        $(".epage > .gallery > .gallery_wrap > img:first-child").stop().animate({
            rotate: "-5deg"
        });
    });

    $(".plus_button").mouseleave(function(){
        $(".epage > .gallery > .gallery_wrap > img:nth-child(2)").stop().animate({
            rotate: "0deg"
        });
        $(".epage > .gallery > .gallery_wrap > img:first-child").stop().animate({
            rotate: "0deg"
        });
    });
});

// .plus_button 클릭 했을 때
$(function(){
    $(".plus_button").click(function(){
        $(".epage > .gallery > .gallery_wrap > img").css("transform", "rotate(0deg)")
        $(".epage > .gallery > .gallery_wrap").css("overflow", "hidden");
        $(".epage > .gallery > .gallery_wrap").css("width", "1395px");
        $(".epage > .gallery > .gallery_wrap").css("height", "315px");

        $(".epage > .gallery > .gallery_wrap").animate({
            top: "50px",
            left: "-570px"
        });

        $(".epage > .gallery > .gallery_wrap > img").animate({
            width: "455px",
            height: "315px"
        });

        $(".epage > .gallery > .gallery_wrap > img:nth-child(1)").animate({
            left: "940px"
        });
        $(".epage > .gallery > .gallery_wrap > img:nth-child(2)").animate({
            left: "470px"
        });
        $(".epage > .gallery > .gallery_wrap > img:nth-child(3)").animate({
            left: "0"
        });
    })
})

// .minus_button을 클릭했을 때
$(function(){
    $(".minus_button").click(function(){
        $(".epage > .gallery > .gallery_wrap > img:nth-child(1)").css("transform", "rotate(-3deg)")
        $(".epage > .gallery > .gallery_wrap > img:nth-child(2)").css("transform", "rotate(3deg)")
        $(".epage > .gallery > .gallery_wrap > img:nth-child(3)").css("transform", "rotate(0deg)")
        $(".epage > .gallery > .gallery_wrap").css("overflow", "");
        $(".epage > .gallery > .gallery_wrap").css("width", "310%");
        $(".epage > .gallery > .gallery_wrap").css("height", "100%");
        $(".epage > .gallery > .gallery_wrap > img").css("width", "650px");
        $(".epage > .gallery > .gallery_wrap > img").css("height", "450px");
        $(".epage > .gallery > .gallery_wrap > img").css("left", "0")
    
        
        $(".epage > .gallery > .gallery_wrap").stop().animate({
            top: "0",
            left: "0"
        });
    })
})

// toolbar를 클릭해도 이미지가 닫혀야함
$(function(){
    $(".epage > .viewer_toolbar > .toolbar_left > .back > a").click(function(){
        $(".epage > .gallery > .gallery_wrap > img:nth-child(1)").css("transform", "rotate(-3deg)")
        $(".epage > .gallery > .gallery_wrap > img:nth-child(2)").css("transform", "rotate(3deg)")
        $(".epage > .gallery > .gallery_wrap > img:nth-child(3)").css("transform", "rotate(0deg)")
        $(".epage > .gallery > .gallery_wrap").css("overflow", "");
        $(".epage > .gallery > .gallery_wrap").css("width", "310%");
        $(".epage > .gallery > .gallery_wrap").css("height", "100%");
        $(".epage > .gallery > .gallery_wrap > img").css("width", "650px");
        $(".epage > .gallery > .gallery_wrap > img").css("height", "450px");
        $(".epage > .gallery > .gallery_wrap > img").css("left", "0")
    
        
        $(".epage > .gallery > .gallery_wrap").stop().animate({
            top: "0",
            left: "0"
        });
    })

    $(".epage > .viewer_toolbar > .toolbar_right > .previous > a").click(function(){
        $(".epage > .gallery > .gallery_wrap > img:nth-child(1)").css("transform", "rotate(-3deg)")
        $(".epage > .gallery > .gallery_wrap > img:nth-child(2)").css("transform", "rotate(3deg)")
        $(".epage > .gallery > .gallery_wrap > img:nth-child(3)").css("transform", "rotate(0deg)")
        $(".epage > .gallery > .gallery_wrap").css("overflow", "");
        $(".epage > .gallery > .gallery_wrap").css("width", "310%");
        $(".epage > .gallery > .gallery_wrap").css("height", "100%");
        $(".epage > .gallery > .gallery_wrap > img").css("width", "650px");
        $(".epage > .gallery > .gallery_wrap > img").css("height", "450px");
        $(".epage > .gallery > .gallery_wrap > img").css("left", "0")
    
        
        $(".epage > .gallery > .gallery_wrap").stop().animate({
            top: "0",
            left: "0"
        });
    })
    
    $(".epage > .viewer_toolbar > .toolbar_right > .next > a").click(function(){
        $(".epage > .gallery > .gallery_wrap > img:nth-child(1)").css("transform", "rotate(-3deg)")
        $(".epage > .gallery > .gallery_wrap > img:nth-child(2)").css("transform", "rotate(3deg)")
        $(".epage > .gallery > .gallery_wrap > img:nth-child(3)").css("transform", "rotate(0deg)")
        $(".epage > .gallery > .gallery_wrap").css("overflow", "");
        $(".epage > .gallery > .gallery_wrap").css("width", "310%");
        $(".epage > .gallery > .gallery_wrap").css("height", "100%");
        $(".epage > .gallery > .gallery_wrap > img").css("width", "650px");
        $(".epage > .gallery > .gallery_wrap > img").css("height", "450px");
        $(".epage > .gallery > .gallery_wrap > img").css("left", "0")
    
        
        $(".epage > .gallery > .gallery_wrap").stop().animate({
            top: "0",
            left: "0"
        });
    })

    $("#edit_list > ul > li > a").click(function(){
        $(".epage > .gallery > .gallery_wrap > img:nth-child(1)").css("transform", "rotate(-3deg)")
        $(".epage > .gallery > .gallery_wrap > img:nth-child(2)").css("transform", "rotate(3deg)")
        $(".epage > .gallery > .gallery_wrap > img:nth-child(3)").css("transform", "rotate(0deg)")
        $(".epage > .gallery > .gallery_wrap").css("overflow", "");
        $(".epage > .gallery > .gallery_wrap").css("width", "310%");
        $(".epage > .gallery > .gallery_wrap").css("height", "100%");
        $(".epage > .gallery > .gallery_wrap > img").css("width", "650px");
        $(".epage > .gallery > .gallery_wrap > img").css("height", "450px");
        $(".epage > .gallery > .gallery_wrap > img").css("left", "0")
    
        
        $(".epage > .gallery > .gallery_wrap").stop().animate({
            top: "0",
            left: "0"
        });
    })
})

// menu_bar를 클릭해도 이미지가 닫혀야함
$(function(){
    $(".folder_page > .menu_bar > ul > li > a").click(function(){
        $(".epage > .gallery > .gallery_wrap > img:nth-child(1)").css("transform", "rotate(-3deg)")
        $(".epage > .gallery > .gallery_wrap > img:nth-child(2)").css("transform", "rotate(3deg)")
        $(".epage > .gallery > .gallery_wrap > img:nth-child(3)").css("transform", "rotate(0deg)")
        $(".epage > .gallery > .gallery_wrap").css("overflow", "");
        $(".epage > .gallery > .gallery_wrap").css("width", "310%");
        $(".epage > .gallery > .gallery_wrap").css("height", "100%");
        $(".epage > .gallery > .gallery_wrap > img").css("width", "650px");
        $(".epage > .gallery > .gallery_wrap > img").css("height", "450px");
        $(".epage > .gallery > .gallery_wrap > img").css("left", "0")
    
        
        $(".epage > .gallery > .gallery_wrap").stop().animate({
            top: "0",
            left: "0"
        });
    })
})