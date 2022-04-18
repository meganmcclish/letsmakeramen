/*
Version: 1.0
Author: your name
Author URL: your site
License: (if other than below)
This is a FREE script and is dual licensed under the following:
http://www.opensource.org/licenses/mit-license.php | http://www.gnu.org/licenses/gpl.html
Aside from these comments, you may modify and distribute this file as you please. Have fun!
*/
$(document).ready(function() { // when the document has loaded the structure but not every image or media file
	let clickYes = true;
    function reset(){
		$('.left').stop().animate({left: '-1000px'}, 1000, 'swing');
		$('.right').stop().animate({left: '1560px'}, 1000, 'swing');
		$('.reset').animate({'opacity': '0', "top":"0px","right":"-650px"}, 1000,"swing");
        $("nav li").removeClass("activeDot");
        $("nav li").addClass("inactiveDot");
	};
	const pageOne = () => {
        $("#posOne").removeClass("inactiveDot");
		$("#posOne").addClass("activeDot");
		$('#actionBox').stop().animate({height: '700px', width: '1200px'}, 1000, 'swing', function(){
			$('#titleIntro').animate({'opacity': '1', "top":"0px","left":"0px"}, 1000,"swing");
			$('#ramenBowl').animate({'opacity': '1', "top":"20px","left":"560px"}, 1000,"swing");
			$('.next').on("click",function(){
				$('.next').off('click');
				reset();
				pageTwo();
			});
		});
	};
	const pageTwo = () => {
        $("#posTwo").removeClass("inactiveDot");
		$("#posTwo").addClass("activeDot");
		$('#actionBox').stop().animate({height: '700px', width: '1200px'}, 900, 'swing', function(){
			$('#instructionsTwo').animate({'opacity': '1', "top":"10px","left":"595px"}, 1000,"swing");
			$('#ginger').animate({'opacity': '1', "top":"350px","left":"0px"}, 1000,"swing");
			$('#ginger').on("click", function(){
				$('#ginger').off('click');
				$('#choppedGinger').animate({'opacity': '1', "top":"130px","left":"700px"}, 500,"swing");
			});
			$('#gingerTag').animate({'opacity': '1', "top":"510px","left":"210px"}, 1000,"swing");
			$('#sesame').animate({'opacity': '1', "top":"-20px","left":"20px"}, 1000,"swing");
			$('#sesameSauce').animate({'opacity': '0', "top":"130px","left":"635px"}, 3500,"swing");
			$('#sesame').on("click", function(){
				$('#sesame').off('click');
				$('#sesame').animate({'opacity': '1', "top":"-20px","left":"500px"}, 1000,"swing");
				$('#sesame').animate({'rotate': "45deg"}, 1500,"swing");
				$('#sesame').animate({'rotate': "0deg"}, 1000,"swing");
				$('#sesameSauce').animate({'opacity': '1', "top":"130px","left":"635px"}, 4500,"swing");
				$('#sesame').animate({'opacity': '1', "top":"-20px","left":"20px"}, 2000,"swing");
			});
			$('#garlic').animate({'opacity': '1', "top":"155px","left":"240px"}, 1000,"swing");
			$('#garlic').on("click", function(){
				$('#garlic').off('click');
				$('#choppedGarlic').animate({'opacity': '1', "top":"130px","left":"600px"}, 500,"swing");
			});
			$('#garlicTag').animate({'opacity': '1', "top":"205px","left":"360px"}, 1000,"swing");
			$('#stove').animate({'opacity': '1', "top":"-80px","left":"440px"}, 1000,"swing");
			$('.next').on("click",function(){
				$('.next').off('click');
				reset();
				pageThree();
			});
		});
	};
	const pageThree = () => {
        $("#posThree").removeClass("inactiveDot");
		$("#posThree").addClass("activeDot");
		$('#actionBox').stop().animate({height: '700px', width: '1200px'}, 900, 'swing', function(){
			$('#instructionsThree').animate({'opacity': '1', "top":"10px","left":"550px"}, 1000,"swing");
			$('#simmer').animate({'opacity': '1', "top":"560px","left":"600px"}, 1000,"swing");
			$('#soySauce').animate({'opacity': '1', "top":"0px","left":"30px"}, 1000,"swing");
			$('#soySauce_pan').animate({'opacity': '0', "top":"130px","left":"630px"}, 3000,"swing");
			$('#soySauce').on("click", function(){
				$('#soySauce').off('click');
				$('#soySauce').animate({'opacity': '1', "top":"-20px","left":"500px"}, 1000,"swing");
				$('#soySauce').animate({'rotate': "75deg"}, 1500,"swing");
				$('#soySauce').animate({'rotate': "0deg"}, 1000,"swing");
				$('#soySauce_pan').animate({'opacity': '1', "top":"130px","left":"630px"}, 3500,"swing");
				$('#soySauce').animate({'opacity': '1', "top":"0px","left":"30px"}, 3000,"swing");
			});
			$('#sake').animate({'opacity': '1', "top":"0px","left":"275px"}, 1000,"swing");
			$('#sakeSauce').animate({'opacity': '0', "top":"130px","left":"650px"}, 1500,"swing");
			$('#sake').on("click", function(){
				$('#sake').off('click');
				$('#sake').animate({'opacity': '1', "top":"-20px","left":"500px"}, 1000,"swing");
				$('#sake').animate({'rotate': "45deg"}, 1500,"swing");
				$('#sake').animate({'rotate': "0deg"}, 1000,"swing");
				$('#sakeSauce').animate({'opacity': '1', "top":"130px","left":"650px"}, 3500,"swing");
				$('#sake').animate({'opacity': '1', "top":"0px","left":"275px"}, 3000,"swing");
			});
			$('#mirin').animate({'opacity': '1', "top":"300px","left":"320px"}, 1000,"swing");
			$('#mirinSauce').animate({'opacity': '0', "top":"-100px","left":"465px"}, 1000,"swing");
			$('#mirin').on("click", function(){
				$('#mirin').off('click');
				$('#mirin').animate({'opacity': '1', "top":"-20px","left":"500px" }, 1000,"swing");
				$('#mirin').animate({'rotate': "45deg"}, 1500,"swing");
				$('#mirin').animate({'rotate': "0deg"}, 1000,"swing");
				$('#mirinSauce').animate({'opacity': '1', "top":"-100px","left":"465px"}, 3500,"swing");
				$('#mirin').animate({'opacity': '1', "top":"300px","left":"320px"}, 1000,"swing");
			});
			$('#dashi').animate({'opacity': '1', "top":"350px","left":"0px"}, 1000,"swing");
			$('#dashiSauce').animate({'opacity': '0', "top":"130px","left":"628px"}, 00,"swing");
			$('#dashi').on("click", function(){
				$('#dashi').off('click');
				$('#dashi').animate({'opacity': '1', "top":"-20px","left":"500px" }, 1000,"swing");
				$('#dashi').animate({'rotate': "45deg"}, 1500,"swing");
				$('#dashi').animate({'rotate': "0deg"}, 1000,"swing");
				$('#dashiSauce').animate({'opacity': '1', "top":"130px","left":"628px"}, 3500,"swing");
				$('#dashi').animate({'opacity': '1', "top":"350px","left":"0px"}, 3000,"swing");
			});

			$('#stoveSaute').animate({'opacity': '1', "top":"-80px","left":"440px"}, 1000,"swing");
			$('.next').on("click",function(){
				$('.next').off('click');
				reset();
				pageFour();
			});
		});
	};

	const pageFour = () => {
        $("#posFour").removeClass("inactiveDot");
		$("#posFour").addClass("activeDot");
		$('#actionBox').stop().animate({height: '700px', width: '1200px'}, 900, 'swing', function(){
			$('#instructionsFour').animate({'opacity': '1', "top":"10px","left":"0px"}, 1000,"swing");
			$('#spoon').animate({'opacity': '1', "top":"0px","left":"100px"}, 1000,"swing");
			$('#brothStirred').animate({'opacity': '0', "top":"27px","left":"566px"}, 3000,"swing");
			$('#spoon').on("click", function(){
				$('#spoon').off('click');
				$('#spoon').animate({'opacity': '1', "top":"-20px","left":"400px"}, 1000,"swing");
				$('#spoon').animate({'rotate': "80deg"}, 1500,"swing");
				$('#spoon').animate({'opacity': '1', "top":"-90px","left":"450px"}, 1000,"swing");
				$('#spoon').animate({'opacity': '1', "top":"-50px","left":"400px"}, 1000,"swing");
				$('#spoon').animate({'opacity': '1', "top":"-90px","left":"450px"}, 1000,"swing");
				$('#brothStirred').animate({'opacity': '1', "top":"27px","left":"566px", 'rotate': "720"}, 5000,"swing");
			});
			$('#stoveSimmer').animate({'opacity': '1', "top":"-80px","left":"440px"}, 1000,"swing");
			$('.next').on("click",function(){
				$('.next').off('click');
				reset();
				pageFive();
			});
		});
	};

	

	const pageFive = () => {
        $("#posFive").removeClass("inactiveDot");
		$("#posFive").addClass("activeDot");
		$('#actionBox').stop().animate({height: '700px', width: '1200px'}, 900, 'swing', function(){
			$('#instructionsFive').animate({'opacity': '1', "top":"10px","left":"710px"}, 1000,"swing");
			$('#noodles').animate({'opacity': '1', "top":"0px","left":"-31px"}, 1000,"swing");
			$('#waterBowl').animate({'opacity': '1', "top":"320px","left":"100px"}, 1000,"swing");
			$('#water').animate({'opacity': '0', "top":"90px","left":"566px"}, 3000,"swing");
			$('#waterNoodles').animate({'opacity': '0', "top":"106px","left":"584px"}, 4000,"swing");
			$('#bubbles').animate({'opacity': '0', "top":"130px","left":"630px"}, 1000,"swing");
			$('#waterBowl').on("click", function(){
				$('#waterBowl').off('click');
				$('#waterBowl').animate({'opacity': '1', "top":"0px","left":"600px"}, 2000,"swing");
				$('#water').animate({'opacity': '1', "top":"90px","left":"566px"}, 3000,"swing");
				$('#waterBowl').animate({'opacity': '1', "top":"320px","left":"100px"}, 2000,"swing");
			});
			$('#noodles').on("click", function(){
				$('#noodles').off('click');
				$('#noodles').animate({'opacity': '1', "top":"0px","left":"600px"}, 1500,"swing");
				$('#waterNoodles').animate({'opacity': '1', "top":"106px","left":"584px"}, 4000,"swing");
				$('#noodles').animate({'opacity': '0', "top":"0px","left":"600px"}, 1000,"swing");
				$('#bubbles').animate({'opacity': '1', 'height': "400px", 'width': "400px" }, 6000,"swing");
				$('#bubbles').animate({'opacity': '1', 'rotate': 120}, 8000,"swing");
			});
			$('#stoveTwo').animate({'opacity': '1', "top":"-80px","left":"440px"}, 1000,"swing");
			$('.next').on("click",function(){
				$('.next').off('click');
				reset();
				pageSix();
			});
		});
	};

	const pageSix = () => {
        $("#posSix").removeClass("inactiveDot");
		$("#posSix").addClass("activeDot");
		$('#actionBox').stop().animate({height: '700px', width: '1200px'}, 900, 'swing', function(){
			$('#instructionsSix').animate({'opacity': '1', "top":"10px","left":"600px"}, 1000,"swing");
			$('#noodleBowl').animate({'opacity': '1', "top":"0px","left":"-31px"}, 1000,"swing");
			$('#brothBowl').animate({'opacity': '1', "top":"320px","left":"100px"}, 1000,"swing");
			$('#broth').animate({'opacity': '0', "top":"112px","left":"621px"}, 3000,"swing");
			$('#cookedNoodles').animate({'opacity': '0', "top":"90px","left":"605px"}, 4000,"swing");
			$('#noodleBowl').on("click", function(){
				$('#noodleBowl').off('click');
				$('#noodleBowl').animate({'opacity': '1', "top":"0px","left":"600px"}, 2000,"swing");
				$('#cookedNoodles').animate({'opacity': '1', "top":"90px","left":"605x"}, 3000,"swing");
				$('#noodleBowl').animate({'opacity': '1', "top":"0px","left":"-31px"}, 2000,"swing");
			});
			$('#brothBowl').on("click", function(){
				$('#brothBowl').off('click');
				$('#brothBowl').animate({'opacity': '1', "top":"0px","left":"600px"}, 1500,"swing");
				$('#broth').animate({'opacity': '1', "top":"112px","left":"621px"}, 4000,"swing");
				$('#brothBowl').animate({'opacity': '1', "top":"320px","left":"100px"}, 2000,"swing");
			});
			$('#emptyBowl').animate({'opacity': '1', "top":"48px","left":"535px"}, 1000,"swing");
			$('.next').on("click",function(){
				$('.next').off('click');
				reset();
				pageSeven();
			});
		});
	};

	const pageSeven = () => {
        $("#posSeven").removeClass("inactiveDot");
		$("#posSeven").addClass("activeDot");
		$('#actionBox').stop().animate({height: '700px', width: '1200px'}, 900, 'swing', function(){
			$('#instructionsSeven').animate({'opacity': '1', "top":"10px","left":"600px"}, 1000,"swing");
			$('#finishedBowl').animate({'opacity': '1', "top":"65px","left":"535px"}, 1000,"swing");
			$('#noodles_in_bowl').animate({'opacity': '1', "top":"126px","left":"563px"}, 1000,"swing");
			$('#nori').animate({'opacity': '1', "top":"40px","left":"0px"}, 1000,"swing");
			$('#noriTag').animate({'opacity': '1', "top":"65px","left":"0px"}, 1000,"swing");
			$('#nori').on("click", function(){
				$('#nori').off('click');
				$('#nori').animate({'opacity': '1', "top":"104px","left":"728px"}, 1500,"swing");
			});	
			$('#lime').animate({'opacity': '1', "top":"40px","left":"350px"}, 1000,"swing");
			$('#limeTag').animate({'opacity': '1', "top":"65px","left":"335px"}, 1000,"swing");
			$('#lime').on("click", function(){
				$('#lime').off('click');
				$('#lime').animate({'opacity': '1', "top":"104px","left":"760px"}, 1500,"swing");
			});
			$('#egg').animate({'opacity': '1', "top":"200px","left":"300px"}, 1000,"swing");
			$('#eggTag').animate({'opacity': '1', "top":"270px","left":"340px"}, 1000,"swing");
			$('#egg').on("click", function(){
				$('#egg').off('click');
				$('#egg').animate({'opacity': '1', "top":"230px","left":"710px"}, 1500,"swing");
			});
			$('#mushrooms').animate({'opacity': '1', "top":"337px","left":"100px"}, 1000,"swing");
			$('#mushroomTag').animate({'opacity': '1', "top":"320px","left":"88px"}, 1000,"swing");
			$('#mushrooms').on("click", function(){
				$('#mushrooms').off('click');
				$('#mushrooms').animate({'opacity': '1', "top":"195px","left":"650px"}, 1500,"swing");
			});
			$('#greenOnion').animate({'opacity': '1', "top":"450px","left":"0px"}, 1000,"swing");
			$('#greenTag').animate({'opacity': '1', "top":"580px","left":"-28px"}, 1000,"swing");
			$('#greenOnion').on("click", function(){
				$('#greenOnion').off('click');
				$('#greenOnion').animate({'opacity': '1', "top":"250px","left":"575px"}, 1500,"swing");
			});
			$('#maki').animate({'opacity': '1', "top":"166px","left":"200px"}, 1000,"swing");
			$('#makiTag').animate({'opacity': '1', "top":"150px","left":"200px"}, 1000,"swing");
			$('#maki').on("click", function(){
				$('#maki').off('click');
				$('#maki').animate({'opacity': '1', "top":"250px","left":"575px"}, 1500,"swing");
			});	
			$('#sesameSeeds').animate({'opacity': '1', "top":"220px","left":"-30px"}, 1000,"swing");
			$('#sesameTag').animate({'opacity': '1', "top":"200px","left":"-4px"}, 1000,"swing");
			$('#sesameSeeds').on("click", function(){
				$('#sesameSeeds').off('click');
				$('#sesameSeeds').animate({'opacity': '1', "top":"281px","left":"735px"}, 1500,"swing");
			});	
			$('#cilantro').animate({'opacity': '1', "top":"381px","left":"408px"}, 1000,"swing");
			$('#cilantroTag').animate({'opacity': '1', "top":"386px","left":"462px"}, 1000,"swing");
			$('#cilantro').on("click", function(){
				$('#cilantro').off('click');
				$('#cilantro').animate({'opacity': '1', "top":"177px","left":"790px"}, 1500,"swing");
			});
			$('#meat').animate({'opacity': '1', "top":"400px","left":"226px"}, 1000,"swing");
			$('#meatTag').animate({'opacity': '1', "top":"600px","left":"260px"}, 1000,"swing");
			$('#meat').on("click", function(){
				$('#meat').off('click');
				$('#meat').animate({'opacity': '1', "top":"110px","left":"520px"}, 1500,"swing");
			});	
			$('.startOver').on("click",function(){
				$('.startOver').off('click');
				reset();
				pageOne();
			});
		});
	};
	pageOne();
    function pauseClick(){
        clickYes = true; 
    }
    function navClick(navItem,pageItem){
        $(navItem).on("click",function(){
            if(clickYes){
                $(".left, .right").off("click");
                reset();
                pageItem();
                clickYes = false;
                setTimeout(pauseClick, 1500);
            }
        });
    }
    navClick("#posOne",pageOne);
    navClick("#posTwo",pageTwo);
    navClick("#posThree",pageThree);
	navClick("#posFour",pageFour);
	navClick("#posFive",pageFive);
	navClick("#posSix",pageSix);
	navClick("#posSeven",pageSeven);
});