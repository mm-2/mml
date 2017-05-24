$(document).ready(function () {
    //背景音乐点击事件
    
    var x = document.getElementById("bg-music"); 
    $(".p1 img").click(function(){
       
        x.pause();
    })
    var t, page = 1;
    page1_move();

    function page1_move() {
        console.log(page);
        clearTimeout(t);
        //还原page2的最初状态
        $(".page2").css("display","none");
        $(".page2").children().children().css("opacity",0).each(function(index){
            $(".page2").children().children().eq(index).removeClass().addClass("page2_img"+(index+1))
        });
        t = setTimeout(page2_show, 3000);
    }

    //page2显示
    function page2_show() {
        clearTimeout(t);
        page++;
        $(".page1").animate({top: "-100%"}, 500);
        $(".page2").css("display", "block").animate({top: 0}, 500);
        t = setTimeout(page2_move, 500)
    }

    //page2开始动画
    function page2_move() {
        console.log(page);
        clearTimeout(t);
        //还原page1的最初状态
        $(".page1").css("display","none");
        //还原page3的最初状态
        $(".page3").css("display","none");
        $(".page3").children().children().css("opacity",0).each(function(index){
            $(".page3").children().children().eq(index).removeClass().addClass("page3_img"+(index+1))
        });
        //page2依次进行动画
        $(".page2_img1").addClass("page2_running_right").css("opacity", 1);
        t = setTimeout(page2_img2_move,700);
        function page2_img2_move() {
            clearTimeout(t);
            $(".page2_img2").addClass("page2_running_right").css("opacity", 1);
            t = setTimeout(page2_img3_move,700)
        }
        function page2_img3_move() {
            clearTimeout(t);
            $(".page2_img3").addClass("page2_running_right").css("opacity", 1);
            t = setTimeout(page2_img4_move,700)
        }
        function page2_img4_move() {
            clearTimeout(t);
            $(".page2_img4").addClass("page2_running_right").css("opacity", 1);
            t = setTimeout(page2_img5_move,2000)
        }
        function page2_img5_move() {
            clearTimeout(t);
            //前4张图片滑出
            $(".page2_content>div:lt(4)").addClass("page2_running_left").css("opacity", 0);
            $(".page2_img5").addClass("page2_running_right").css("opacity", 1);
            t = setTimeout(page2_img6_move,700)
        }
        function page2_img6_move() {
            clearTimeout(t);
            $(".page2_img6").addClass("page2_running_right").css("opacity", 1);
            t = setTimeout(page2_img7_move,700)
        }
        function page2_img7_move() {
            clearTimeout(t);
            $(".page2_img7").addClass("page2_running_right").css("opacity", 1);
            t = setTimeout(page2_img8_move,700)
        }
        function page2_img8_move() {
            clearTimeout(t);
            $(".page2_img8").addClass("page2_running_right").css("opacity", 1);
            t = setTimeout(page3_show,2000)
        }
    }

    //page3显示
    function page3_show() {
        clearTimeout(t);
        page++;
        $(".page2").animate({top: "-100%"}, 500);
        $(".page3").css("display","block").animate({top: 0}, 500);
        t = setTimeout(page3_move, 500)
    }

    //page3开始动画
    function page3_move() {
        console.log(page);
        clearTimeout(t);
        //还原page2的最初状态
        $(".page2").css("display","none");
        $(".page2").children().children().css("opacity",0).each(function(index){
            $(".page2").children().children().eq(index).removeClass().addClass("page2_img"+(index+1))
        });
        //还原page4的最初状态
        $(".page4").css("display","none");
        $(".page4").children().children(":lt(5)").css("opacity",0).each(function(index){
            $(".page4").children().children().eq(index).removeClass().addClass("page4_img"+(index+1))
        });
        //page3依次进行动画
        $(".page3_img1").addClass("page3_running_right").css("opacity", 1);
        t = setTimeout(page3_img2_move,700);
        function page3_img2_move() {
            clearTimeout(t);
            $(".page3_img2").addClass("page3_running_right").css("opacity", 1);
            t = setTimeout(page3_img3_move,700)
        }
        function page3_img3_move() {
            clearTimeout(t);
            $(".page3_img3").addClass("page3_running_right").css("opacity", 1);
            t = setTimeout(page3_img4_move,700)
        }
        function page3_img4_move() {
            clearTimeout(t);
            $(".page3_img4").addClass("page3_running_bottom").css("opacity", 1);
            t = setTimeout(page3_img5_move,700)
        }
        function page3_img5_move() {
            clearTimeout(t);
            $(".page3_img2").animate({opacity: 0}, 700);
            $(".page3_img3").animate({opacity: 0}, 700);
            $(".page3_img5").addClass("page3_running_bottom").css("opacity", 1);
            t = setTimeout(page4_show, 2000)
        }
    }

    //page4显示
    function page4_show() {
        clearTimeout(t);
        page++;
        $(".page3").animate({top: "-100%"}, 500);
        $(".page4").css("display","block").animate({top: 0}, 500);
        t = setTimeout(page4_move, 500);
    }

    //page4开始动画
    function page4_move() {
        console.log(page);
        clearTimeout(t);
        //还原page3的最初状态
        $(".page3").css("display","none");
        $(".page3").children().children().css("opacity",0).each(function(index){
            $(".page3").children().children().eq(index).removeClass().addClass("page3_img"+(index+1))
        });
        //还原page5的最初状态
        $(".page5").css("display","none");
        $(".page5").children().children().css("opacity",0).each(function(index){
            $(".page5").children().children().eq(index).removeClass().addClass("page5_img"+(index+1))
        });
        //page4依次进行动画
        $(".page4_img1").addClass("page4_running_scale").css("opacity", 1);
        t = setTimeout(page4_img2_move,700);
        function page4_img2_move() {
            clearTimeout(t);
            $(".page4_img2").addClass("page4_running_scale").css("opacity", 1);
            t = setTimeout(page4_img3_move,700);
        }
        function page4_img3_move() {
            clearTimeout(t);
            $(".page4_img3").addClass("page4_running_scale").css("opacity", 1);
            t = setTimeout(page4_img4_move,700);
        }
        function page4_img4_move() {
            clearTimeout(t);
            $(".page4_img4").addClass("page4_running_scale").css("opacity", 1);
            t = setTimeout(page4_img5_move,700);
        }
        function page4_img5_move() {
            clearTimeout(t);
            $(".page4_img5").addClass("page4_running_fly").css("opacity", 1);
            t = setTimeout(page4_img5_move_1,1000);
        }
        function page4_img5_move_1() {
            clearTimeout(t);
            $(".page4_img5").addClass("page4_running_fly_1");
            t = setTimeout(page5_show,2000)
        }
    }

    //page5显示
    function page5_show() {
        clearTimeout(t);
        page++;
        $(".page4").animate({top: "-100%"}, 500);
        $(".page5").css("display","block").animate({top: 0}, 500);
        t = setTimeout(page5_move, 500)
    }

    //page5开始动画
    function page5_move() {
        console.log(page);
        clearTimeout(t);
        //还原page4的最初状态
        $(".page4").css("display","none");
        $(".page4").children().children(":lt(5)").css("opacity",0).each(function(index){
            $(".page4").children().children().eq(index).removeClass().addClass("page4_img"+(index+1))
        });
        //还原page6的最初状态
        $(".page6").css("display","none");
        $(".page6").children().children(":gt(0)").css("opacity",0).each(function(index){
            $(".page6").children().children(":gt(0)").eq(index).removeClass().addClass("page6_img"+(index+1))
        });
        $(".page6").children().children().first().css("opacity",1).removeClass().addClass("page6_img"+0);
        //page5依次进行动画
        $(".page5_img1").addClass("page5_running_bottom").css("opacity",1);
        t = setTimeout(page5_img2_move,700);
        function page5_img2_move() {
            clearTimeout(t);
            $(".page5_img2").addClass("page5_running_right").css("opacity", 1);
            t = setTimeout(page5_img3_move,700);
        }
        function page5_img3_move() {
            clearTimeout(t);
            $(".page5_img3").addClass("page5_running_right").css("opacity", 1);
            t = setTimeout(page6_show,2000)
        }
    }

    //page6显示
    function page6_show() {
        clearTimeout(t);
        page++;
        $(".page5").animate({top: "-100%"}, 500);
        $(".page6").css("display","block").animate({top: 0}, 500);
        t = setTimeout(page6_move, 500)
    }

    //page6开始动画
    function page6_move() {
        console.log(page);
        clearTimeout(t);
        //还原page5的最初状态
        $(".page5").css("display","none");
        $(".page5").children().children().css("opacity",0).each(function(index){
            $(".page5").children().children().eq(index).removeClass().addClass("page5_img"+(index+1))
        });
        //还原page7的最初状态
        $(".page7").css("display","none");
        $(".page7").children().children().css("opacity",0).each(function(index){
            $(".page7").children().children().eq(index).removeClass().addClass("page7_img"+(index+1))
        });
        //page6依次进行动画
        $(".page6_img1").addClass("page6_img1_running_scale").css("opacity",1);
        t = setTimeout(page6_img2_move,700);
        function page6_img2_move() {
            clearTimeout(t);
            $(".page6_img2").addClass("page6_img1_running_scale").css("opacity",1);
            t = setTimeout(page6_img0_move,700);
        }
        function page6_img0_move() {
            clearTimeout(t);
            $(".page6_img0").addClass("page6_img0_running_scale");
            t = setTimeout(page6_img3_move,1800);
        }
        function page6_img3_move() {
            clearTimeout(t);
            $(".page6_img3").addClass("page6_img3_running_scale");
            $(".page6_img0").css("opacity",0);
            t = setTimeout(page7_show,1000)
        }
    }

    //page7显示
    function page7_show() {
        clearTimeout(t);
        page++;
        $(".page6").animate({top: "-100%"}, 500);
        $(".page7").css("display","block").animate({top: 0}, 500);
        t = setTimeout(page7_move, 500)
    }

    //page7开始动画
    function page7_move() {
        console.log(page);
        clearTimeout(t);
        //还原page6的最初状态
        $(".page6").css("display","none");
        $(".page6").children().children(":gt(0)").css("opacity",0).each(function(index){
            $(".page6").children().children(":gt(0)").eq(index).removeClass().addClass("page6_img"+(index+1))
        });
        $(".page6").children().children().first().css("opacity",1).removeClass().addClass("page6_img"+0);
        //还原page8的最初状态
        $(".page8").css("display","none");
        $(".page8").children().children().css("opacity",0).each(function(index){
            $(".page8").children().children().eq(index).removeClass().addClass("page8_img"+(index+1))
        });
        //page7依次进行动画
        $(".page7_img1").addClass("page7_img_running_bottom").css("opacity",1);
        t = setTimeout(page7_img2_move,700);
        function page7_img2_move() {
            clearTimeout(t);
            $(".page7_img2").addClass("page7_img2_running_scale");
            t = setTimeout(page7_img3_move,300)
        }
        function page7_img3_move() {
            clearTimeout(t);
            $(".page7_img3").addClass("page7_img_running_scale");
            t = setTimeout(page7_img4_move,2500)
        }
        function page7_img4_move() {
            clearTimeout(t);
            $(".page7_img4").addClass("page7_img_running_scale");
            t = setTimeout(page7_img5_move,300)
        }
        function page7_img5_move() {
            clearTimeout(t);
            $(".page7_img5").addClass("page7_img_running_scale");
            t = setTimeout(page7_img6_move,2500)
        }
        function page7_img6_move() {
            clearTimeout(t);
            $(".page7_img1").addClass("page7_img_running_top").css("opacity",0);
            $(".page7_img6").addClass("page7_img_running_bottom").css("opacity",1);
            t = setTimeout(page7_img7_move,700)
        }
        function page7_img7_move() {
            clearTimeout(t);
            $(".page7_img7").addClass("page7_img7_running_scale");
            t = setTimeout(page7_img8_move,300)
        }
        function page7_img8_move() {
            clearTimeout(t);
            $(".page7_img8").addClass("page7_img_running_scale");
            t = setTimeout(page7_img9_move,2500)
        }
        function page7_img9_move() {
            clearTimeout(t);
            $(".page7_img6").addClass("page7_img_running_top").css("opacity",0);
            $(".page7_img9").addClass("page7_img_running_bottom").css("opacity",1);
            t = setTimeout(page7_img10_move,700)
        }
        function page7_img10_move() {
            clearTimeout(t);
            $(".page7_img10").addClass("page7_img_running_scale");
            t = setTimeout(page7_img11_move,300)
        }
        function page7_img11_move() {
            clearTimeout(t);
            $(".page7_img11").addClass("page7_img11_running_scale");
            t = setTimeout(page8_show,2500)
        }
    }

    //page8显示
    function page8_show() {
        clearTimeout(t);
        page++;
        $(".page7").animate({top: "-100%"}, 500);
        $(".page8").css("display","block").animate({top: 0}, 500);
        t = setTimeout(page8_move, 500)
    }

    //page8开始动画
    function page8_move() {
        console.log(page);
        clearTimeout(t);
        //还原page7的最初状态
        $(".page7").css("display","none");
        $(".page7").children().children().css("opacity",0).each(function(index){
            $(".page7").children().children().eq(index).removeClass().addClass("page7_img"+(index+1))
        });
        //page7依次进行动画
        $(".page8_img1").addClass("page8_img_running_scale").css("opacity",1);
        t = setTimeout(page8_img2_move,700);
        function page8_img2_move() {
            clearTimeout(t);
            $(".page8_img2").addClass("page8_img_running_scale").css("opacity",1);
            t = setTimeout(page8_img3_move,300)
        }
        function page8_img3_move() {
            clearTimeout(t);
            $(".page8_img3").addClass("page8_img_running_bottom").css("opacity",1);
            t = setTimeout(page8_img4_move,300)
        }
        function page8_img4_move() {
            clearTimeout(t);
            $(".page8_img4").addClass("page8_img_running_bottom").css("opacity",1);
            t = setTimeout(page8_img5_move,300)
        }
        function page8_img5_move() {
            clearTimeout(t);
            $(".page8_img5").addClass("page8_img5_running_tada").css("opacity",1);
            t = setTimeout(page8_img6_move,300)
        }
        function page8_img6_move() {
            clearTimeout(t);
            $(".page8_img6").addClass("page8_img6_running_bottom").css("opacity",1);
            console.log("播放完毕")
        }
    }

    //将页面动画函数加入数组
    var a = [page1_move,page2_move,page3_move,page4_move,
        page5_move,page6_move,page7_move,page8_move];

    //设置手指开始事件
    document.addEventListener("touchstart",function (e) {
        e.preventDefault(); //阻止默认手指开始事件
        console.log("手指开始事件！");
        // startX = e.changedTouches[0].clientX;
        startY = e.changedTouches[0].clientY; //开始纵坐标
    });

    //设置手指结束事件
    document.addEventListener("touchend",function (e) {
        e.preventDefault(); //阻止默认手指开始事件
        console.log("手指结束事件！");
        $page = $(e.target).parents(".page"); //当前面页page
        // EndX = e.changedTouches[0].clientX;
        EndY = e.changedTouches[0].clientY; //结束纵坐标
        y = startY - EndY; //纵坐标差
        //判断当前页面是否在进行切换
        if($page.is(":animated") == false){
            //切换下一页
            if(page < 8 && y > 0){
                clearTimeout(t);
                page++;
                var n = $page.next().attr("class")[9]/1 ; //获取下一页page的class中page$的$
                console.log("下一页");
                $page.animate({top: "-100%"}, 500);
                $page.next().css("display","block").animate({top: 0}, 500);
                t = setTimeout(function () {
                    a[n-1](); //执行下一页的动画函数
                },500) ;
            }
            //切换上一页
            if(page > 1 && y < 0){
                clearTimeout(t);
                page--;
                var m = $page.prev().attr("class")[9]/1 ; //获取下一页page的class中page$的$
                console.log("上一页");
                $page.animate({top: "100%"}, 500);
                $page.prev().css("display","block").animate({top: 0}, 500);
                t = setTimeout(function () {
                    a[m-1](); //执行下一页的动画函数
                },500) ;
            }
        }
    })
});
