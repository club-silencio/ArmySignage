// Function to get local storage parameters?


var version = 1.9,
 clickTimer = null, //future triple click implementation for when touch is active.
     slides = [
    {
      id: 1,
      title: 'Welcome',
      language: 'english',
      format: 'welcome',
      heading: 'WELCOME TO',
      copy: 'St. Louis',
      url: 'goarmy.com',
      duration: '6000', //ms
      image: 'none',
      enabled: false
    },
    {
      title: 'Welcome-SPANISH',
      language: 'spanish',
      format: 'welcome',
      heading: 'Bienvenidos a',
      copy: 'St. Louis',
      url: 'goarmy.com',
      duration: '6000', //ms
      image: 'none',
      enabled: true
    },
    {
      title: 'Multicultural_DiverseTraining',
      language: 'english',
      format: 'standard',
      heading: 'Diverse <br/><span>Training.</span>',
      copy: 'Training and technology give U.S. Army Soldiers an unmatched skillset. <br />Learn more at <b>goarmy.com</b>.',
      duration: '6000', //ms
      image: 'img/diverse-training.jpg',
      enabled: false
    },
    {
      title: 'Multicultural_PrevailLeadership',
      language: 'english',
      format: 'standard',
      heading: 'Prev<span class="kerning-closer">a</span>il Through <br/><span>Leadership.</span>',
      copy: 'Set the example for others through comprehensive career training. <br />Learn more at <b>goarmy.com</b>.',
      duration: '6000', //ms
      image: 'img/leadership.jpg',
      enabled: false
    },
    {
      title: 'Multicultural_TrainedTech',
      language: 'english',
      format: 'standard',
      heading: 'Trained for <br/><span>Tech.</span>',
      copy: 'Training in real world skills = versatile career opportunities. <br />Learn more at <b>goarmy.com</b>.',
      duration: '6000', //ms
      image: 'img/trained-for-tech.jpg',
      enabled: false
    },
    {
      title: 'CollegeLeadership_ReadytoLead',
      language: 'english',
      format: 'standard',
      heading: 'Ready to <br/><span>Lead.</span>',
      copy: 'Character. Teamwork. Adaptability. In the U.S. Army, we lead by example. <br />Learn more at <b>goarmy.com</b>.',
      duration: '6000', //ms
      image: 'img/ready-to-lead.jpg',
      enabled: false
    },
    {
      title: 'Aviation_Rules',
      language: 'english',
      format: 'disclaimer',
      heading: 'Avia<span class="kerning-closer">t</span>ion <br/><span>Requirements</span>',
      rules: [
        'Must be at least <span>14 years of age</span>',
        'Maximum Participants: <span>2 per unit</span>',
        'Maximum combined weight: <span>500 Lbs/226.8 KG</span>',
        'Minimum height: <span>48 in/1.22 M',
        'Participants must not be intoxicated',
        'Participants must not have a serious medical history or existing medical condition <br/><span class="subscript">(Heart conditions, seizures, motion sickness, etc.)</span>',
        'Obey event staff at all times',
        'Staff may refuse entry to any participant'
      ],
      duration: '6000', //ms
      image: 'img/ready-to-lead.jpg',
      enabled: false
    },
    {
      title: 'Participation_Rules',
      language: 'english',
      format: 'disclaimer',
      heading: 'P<span class="kerning-closer">a</span>rticip<span class="kerning-closer">a</span><span class="kerning-closer">t</span>ion <br/><span>Rules</span>',
      rules: [
        'Must be at least 14 years of age',
        'Must have Go Army Experience wristband',
        'Participants may not be intoxicated',
        'Shoes and shirt required',
        'Must obey event staff at all times',
        'No smoking or drinking of alcoholic beverages'
      ],
      duration: '6000', //ms
      image: 'img/ready-to-lead.jpg',
      enabled: false
    },
    {
      title: 'ROTC_FindYourFuture',
      language: 'english',
      format: 'standard',
      heading: 'Find Your <br/><span>Future.</span>',
      copy: 'U.S. Army ROTC provides over 3,000 scholarships a year&mdash;and one could be yours. <br />Learn more at <b>goarmy.com</b>.',
      duration: '6000', //ms
      image: 'img/find-your-future.jpg',
      enabled: false
    },
    {
      title: 'ROTC_OpportunityAwaits',
      language: 'english',
      format: 'standard',
      heading: 'Opportunity <br/><span>Awaits.</span>',
      copy: 'U.S. Army ROTC is available at more than 1,100 colleges and universities. Plus, nearly 1,200 ROTC candidates get to travel abroad each year. <br />Learn more at <b>goarmy.com</b>.',
      duration: '6000', //ms
      image: 'img/opportunity-awaits.jpg',
      enabled: false
    },
    {
      title: 'Strong_Stage_Directions',
      language: 'english',
      format: 'challenge',
      heading: 'Test your <span>skills.</span>',
      copy: 'Complete the circut of challenges as fast as you can.',
      duration: '6000', //ms
      image: 'img/opportunity-awaits.jpg',
      enabled: false
    },
    {
      title: 'STEM_AdvanceAchieve',
      language: 'english',
      format: 'standard',
      heading: 'Ad<span class="kerning-closer">v</span><span class="kerning-closer">a</span>nce <br/><span>and A<span class="kerning-closer">c</span>hieve.</span>',
      copy: 'The U.S. Army is moving our nation forward through advances in STEM. <br />Learn more at <b>goarmy.com</b>.',
      duration: '6000', //ms
      image: 'img/advance-and-achieve.jpg',
      enabled: false
    },
    {
      title: 'ROTC_MajorLeadership',
      language: 'english',
      format: 'standard',
      heading: 'Major in <br/><span>Leadership.</span>',
      copy: 'Your U.S. Army officer training and education can help lead our nation forward. <br />Learn more at <b>goarmy.com</b>.',
      duration: '6000', //ms
      image: 'img/major-in-leadership.jpg',
      enabled: false
    },
    {
      title: 'Aviation_SucceedOverAll',
      language: 'english',
      format: 'standard',
      heading: 'Succeed <br/><span>Over All.</span>',
      copy: 'Rigorous training means we can succeed wherever, whenever. <br />Learn more at <b>goarmy.com</b>.',
      duration: '6000', //ms
      image: 'img/succeed-over-all.jpg',
      enabled: false
    },
    {
      title: 'Partnership_YouthSuccess',
      language: 'english',
      format: 'standard',
      subformat: 'promo',
      heading: 'Over 600 Companies <br/>are Willing to <br/><span>Guarantee you <br/>a job interview</span>',
      copy: 'Enlist in the Army\'s Partnership for Youth Success (PaYS) Program NOW! <br /><br />Log into <span>armypays.com</span> for more information and a complete list of Army PaYS partners.',
      duration: '6000', //ms
      image: 'img/pays1.jpg',
      promoLogo: 'img/pays.png',
      enabled: false
    },
    {
      title: 'March2Success_List',
      language: 'english',
      format: 'disclaimer',
      subformat: 'highlights',
      heading: 'Need Help Preparing <br/><span>for SAT or ACT Tests?</span>',
      subheading: '<span>March2Success</span> can help when:',
      rules: [
        'Taking the ACT/SAT test',
        'Taking state-mandated assessment examinations',
        'Taking college entrance examinations',
        'Taking a trade school entrance test',
        'Applying for a job',
        'Taking a military entrance test',
        'Applying for college',
        'Taking STEM (science, technology, engineering and math) courses',
        'Taking nursing exams',
        'Taking pre-engineering-courses'
      ],
      footer: 'Learn more at <span>march2success.com</span>',
      duration: '6000', //ms
      enabled: false
    },
    {
      title: 'March2Sucess',
      language: 'english',
      format: 'standard',
      subformat: 'promo',
      heading: 'Need Help Preparing <br/><span>For SAT or ACT Tests?</span>',
      copy: '<span>March2Success</span> is an online, self-paced course provided by the U.S. Army, designed to improve student performance on standardized tests, enhancing skills in English and STEM (science, technology, engineering and math), provided without cost or obligation by the U.S. Army.',
      duration: '6000', //ms
      image: 'img/pays2.jpg',
      footer: 'Learn more at <span>march2success.com</span>',
      promoLogo: 'img/pays.png',
      enabled: false
    },
    {
      title: 'Aviation_TakeOffArmy',
      language: 'english',
      format: 'standard',
      heading: 'T<span class="kerning-closer">a</span>ke Off <br/><span>in the Army.</span>',
      copy: 'Top-tier aviation technology. Top-tier leadership. <br />Learn more at <b>goarmy.com</b>.',
      duration: '6000', //ms
      image: 'img/take-off.jpg',
      enabled: false
    }
    ,
    {
      title: 'Take_theLeap',
      language: 'english',
      format: 'standard',
      heading: 'T<span class="kerning-closer">a</span>ke <br/><span>the Leap.</span>',
      copy: 'Being first on this jump is nothing when you\'ve logged 49 before. <br />Learn more at <b>goarmy.com</b>.',
      duration: '6000', //ms
      image: 'img/take-the-leap.jpg',
      enabled: false
    },
    {
      title: 'Set_theStandard',
      language: 'english',
      format: 'standard',
      heading: 'Set the <br/><span>Standard.</span>',
      copy: 'When you become better, the world does, too. <br />Learn more at <b>goarmy.com</b>.',
      duration: '6000', //ms
      image: 'img/set-the-standard.jpg',
      enabled: false
    },
    {
      title: 'Learn_forLife',
      language: 'english',
      format: 'standard',
      heading: 'Learn <br/><span>for Life.</span>',
      copy: 'And get the skills you need for a lifetime of achievment. <br />Learn more at <b>goarmy.com</b>.',
      duration: '6000', //ms
      image: 'img/learn-for-life.jpg',
      enabled: false
    },
    {
      title: 'More_thanaJob',
      language: 'english',
      format: 'standard',
      heading: 'Find More <br/><span>Than a Job.</span>',
      copy: 'Find your purpose. Your future is waiting. <br />Learn more at <b>goarmy.com</b>.',
      duration: '6000', //ms
      image: 'img/more-than-a-job.jpg',
      enabled: false
    },
    {
      title: 'Prepare_fortheFuture',
      language: 'english',
      format: 'standard',
      heading: 'Prepare <br/><span>for the Future.</span>',
      copy: 'Receive U.S. Army benefits, vocational training and pay compensation. <br />Learn more at <b>goarmy.com</b>.',
      duration: '6000', //ms
      image: 'img/prepare-for-the-future.jpg',
      enabled: false
    },
    {
      title: 'Create_Innovation',
      language: 'english',
      format: 'standard',
      heading: 'Create <br/><span>Innovation.</span>',
      copy: 'Your skills can help keep our Soldiers on the cutting edge. <br />Learn more at <b>goarmy.com</b>.',
      duration: '6000', //ms
      image: 'img/create-innovation.jpg',
      enabled: false
    },
    {
      title: 'Set_theStandard-SPANISH',
      language: 'spanish',
      format: 'standard',
      heading: 'Establece <br/><span>el nivel.</span>',
      copy: 'Cuando te superas, el mundo tambien lo hace. Conoce más en <b>goarmy.com/familias</b>.',
      duration: '6000', //ms
      image: 'img/set-the-standard.jpg',
      enabled: false
    },
    {
      title: 'Learn_forLife-SPANISH',
      language: 'spanish',
      format: 'standard',
      heading: 'Aprende de <br/><span>por vida.</span>',
      copy: 'Y obtén las habilidades que necesitas para una vida exitosa. Conoce más en <b>goarmy.com/familias</b>.',
      duration: '6000', //ms
      image: 'img/learn-for-life.jpg',
      enabled: false
    },
    {
      title: 'Create_Innovation-SPANISH',
      language: 'spanish',
      format: 'standard',
      heading: 'Crea <br/><span>innovación.</span>',
      copy: 'Tus habilidades pueden ayudar a que nuestros Soldados estén siempre en la vanguardia tecnológica. Conoce más en <b>goarmy.com/familias</b>.',
      duration: '6000', //ms
      image: 'img/create-innovation.jpg',
      enabled: false
    },
    {
      title: 'STEM_AdvanceAchieve-SPANISH',
      language: 'spanish',
      format: 'standard',
      heading: 'Progresa <br/><span>y TRIUNFA.</span>',
      copy: 'El U.S. Army está avanzando a nuestra nación a través de los alcances en STEM. Conoce más en <b>goarmy.com/familias</b>.',
      duration: '6000', //ms
      image: 'img/advance-and-achieve.jpg',
      enabled: false
    },
    {
      title: 'More_thanaJob-SPANISH',
      language: 'spanish',
      format: 'standard',
      heading: 'Descubre más <br/><span>que un trabajo.</span>',
      copy: 'Descubre tu propósito. Tu futuro te espera. Conoce más en <b>goarmy.com/familias</b>.',
      duration: '6000', //ms
      image: 'img/more-than-a-job.jpg',
      enabled: false
    },
    {
      id: 30,
      title: 'DewTour1',
      language: 'english',
      format: 'dew',
      subformat: 'animated',
      heading: 'No <br /><span>Limits</span>',
      copy: 'The U.S. Army can take you <br/>beyond your comfort zone&#8212;<br/>find out how at goarmy.com',
      duration: '6000', //ms
      image: 'img/more-than-a-job.jpg', //CHANGED FROM img-dew/bg-dew1.png BC FILE NOT FOUND
      enabled: false
    },
    {
      id: 31,
      title: 'Astronaut1',
      language: 'english',
      format: 'astro',
      subformat: 'astroVid1',
      heading: '<span>Overcome<br/>any obstacle.</span><br/>Anywhere.',
      copy: '<strong id="c1"> The U.S. Army Astronaut program</strong> <br /> <strong id="c2">prepares you for any eventuality</strong><br /><strong id="c3">in the world &#8212; and beyond.</strong>',
      duration: '35000', //ms
      cta: 'Find out more at <span>goarmy.com</span>',
      video: 'videos/US_Army_Astronauts_edited.mp4',
      top_image1: 'img/scrolling/moon_edited.jpg',
      top_image2: 'img/scrolling/bw_astronaut_edited.jpg',
      enabled: false
    },
    {
      id: 32,
      title: 'Astronaut2',
      language: 'english',
      format: 'astro',
      subformat: 'astroVid2',
      heading: '<span>Expand Your</span><br/>Horizons.',
      copy: '<strong id="c1"> A U.S. Army astronaut career</strong> <br /> <strong id="c2">can take you further than</strong><br /><strong id="c3">you ever thought possible. </strong>',
      duration: '13000', //ms
      cta: 'Find out more at <span>goarmy.com</span>',
      video: 'videos/2US_Army_Astronauts_edited.mp4',
      top_image1: 'img/scrolling/moon_edited.jpg',
      top_image2: 'img/scrolling/bw_astronaut_edited.jpg',
      enabled: false
    },
    {
      id: 33,
      title: 'IES_respect',
      language: 'english',
      format: 'astro',
      subformat: 'IES',
      heading: '<span>Make your<br/>hard work</span><br/>Count.',
      copy: '<strong id="c1"> In the U.S. Army, you can earn more</strong> <br /> <strong id="c2">than just a salary while making</strong><br /><strong id="c3">a difference around the world.</strong>',
      duration: '9000', //ms
      cta: 'Find out more at <span>goarmy.com</span>',
      video: 'videos/IES_eng_respect.mp4',
      top_image1: 'img/scrolling/ies1_screenshot.jpg',
      enabled: false
    },
    {
      id: 34,
      title: 'IES_loyality',
      language: 'english',
      format: 'astro',
      subformat: 'IES',
      heading: '<span>Make your<br/>hard work</span><br/>Count.',
      copy: '<strong id="c1"> In the U.S. Army, you can earn more</strong> <br /> <strong id="c2">than just a salary while making</strong><br /><strong id="c3">a difference around the world.</strong>',
      duration: '9000', //ms
      cta: 'Find out more at <span>goarmy.com</span>',
      video: 'videos/IES_eng_loyality.mp4',
      top_image1: 'img/scrolling/ies2_screenshot.jpg',
      enabled: false
    },
    {
      id: 35,
      title: 'IES_respect-SPANISH',
      language: 'spanish',
      format: 'astro',
      subformat: 'IES',
      heading: '<span>Haz que tu</span> <br />trabajo <br />cuente',
      copy: '<strong id="c1"> En el U.S. Army te puedes ganar</strong> <br /> <strong id="c2">más que un sueldo mientras haces</strong><br /><strong id="c3">la diferencia alrededor del mundo. </strong>',
      cta: 'Conoce más en <span>goarmy.com</span>',
      duration: '9000', //ms
      video: 'videos/IES_spa_respect.mp4',
      top_image1: 'img/scrolling/ies3_screenshot.jpg',
      enabled: false
    },
    {
      id: 36,
      title: 'IES_loyality-SPANISH',
      language: 'spanish',
      format: 'astro',
      subformat: 'IES',
      heading: '<span>Haz que tu</span> <br />trabajo <br />cuente',
      copy: '<strong id="c1"> En el U.S. Army te puedes ganar</strong> <br /> <strong id="c2">más que un sueldo mientras haces</strong><br /><strong id="c3">la diferencia alrededor del mundo. </strong>',
      cta: 'Conoce más en <span>goarmy.com</span>',
      duration: '9000', //ms
      video: 'videos/IES_spa_loyality.mp4',
      top_image1: 'img/scrolling/ies3_screenshot.jpg',
      enabled: true
    },
    {
      id: 37,
      title: 'IES_honor-SPANISH',
      language: 'spanish',
      format: 'astro',
      subformat: 'IES',
      heading: '<span>Haz que tu</span> <br />trabajo <br />cuente',
      copy: '<strong id="c1"> En el U.S. Army te puedes ganar</strong> <br /> <strong id="c2">más que un sueldo mientras haces</strong><br /><strong id="c3">la diferencia alrededor del mundo. </strong>',
      cta: 'Conoce más en <span>goarmy.com</span>',
      duration: '9000', //ms
      video: 'videos/IES_spa_honor.mp4',
      top_image1: 'img/scrolling/ies3_screenshot.jpg',
      enabled: false
    }

  ];

$(document).ready(function() {
  console.log('version: ' + version);

  var storageArray = window.localStorage.getArray('slides');

  // Check if array exists
  if (storageArray.length > 0) {
    if (compareArrays(slides, storageArray)) {
      slides = storageArray;
      console.log('local array overwritten');
    } else {
      // mismatched data
      window.localStorage.deleteArray('slides');
      slides.forEach(function(e){
        window.localStorage.pushArrayItem('slides', e); // loop through and put each item in the array
      });
      alert('Slides updated. Please double check the config/settings');
    }
  } else {
    slides.forEach(function(e){
      window.localStorage.pushArrayItem('slides', e); // loop through and put each item in the array
    });
  }




  generateConfig();

  var owl = $('.owl-carousel');

  owl.on('initialized.owl.carousel', function(e) {


  });

  owl.owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    dots: false,
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 10000,
    margin: 0,
    stagePadding: 0
  }).on('changed.owl.carousel', function(property) {
    // Reset all tweened properties for standard templates
    console.log("owl slide id is " + slideID);
    TweenMax.set('.standardFormat h2', {clearProps: 'all', delay: 0});
    TweenMax.set('.standardFormat p', {clearProps: 'all', delay: 0});

    // Reset all tweened properties for dew templates
    TweenMax.set('.dewFormat .geometry-animated', {clearProps: 'top, left, right, bottom, scale, marginTop, marginBottom'});
    TweenMax.set('.dewFormat .y5', {clearProps: 'top, left, right, bottom, scale, marginTop, marginBottom'});
    TweenMax.set('.dewFormat p', {clearProps: 'opacity'});
    TweenMax.set('.dewFormat img', {clearProps: 'opacity'});
    TweenMax.set('.dewFormat video.dew-bg', {clearProps: 'opacity'});
    TweenMax.set('.dewFormat .dew-headline-container h2', {clearProps: 'all'});
    TweenMax.set('.dewFormat .dew-goarmy-container img', {clearProps: 'all'});
    TweenMax.set('.dewFormat .dew-slideshow-container', {clearProps: 'opacity'});
    var dewVid = $('video.dew-bg');
    dewVid.trigger('pause');


    /* Reset all tweened properties for astro templates */
    /* The top images for astronaut 1 & 2, which are adding via the slide object, are only resetting after the slide runs completely */
    TweenMax.set('.astroFormat .astro-shapes-container', {clearProps: 'all'});
    TweenMax.set('.astroFormat .cta_text', {clearProps: 'all'});
    TweenMax.set('.astroFormat img.astro_top_image img.scrolling_img1 img.scrolling_img2', {clearProps: 'all'});
    TweenMax.set('.astroFormat p', {clearProps: 'all'});
    TweenMax.set('.astroFormat img', {clearProps: 'all'});
    TweenMax.set('.astroFormat video.astrobkgd', {clearProps: 'all'});
    TweenMax.set('.astroFormat .astro-top-image img', {clearProps: 'all'});
    TweenMax.set('.astroFormat .scrolling_img1', {clearProps: 'all, x, y, left, right'});
    TweenMax.set('.astroFormat .scrolling_img2', {clearProps: 'all'});

    TweenMax.set('.astroFormat .astro-text-container h2', {clearProps: 'all'});
    TweenMax.set('.astroFormat .astro-slideshow-container', {clearProps: 'all'});
    var astroVid = $('video.astrobkgd');
    astroVid.trigger('pause');




    var current = property.item.index;


    var src = '.' + ($(property.target).find('.owl-item').eq(current).find('div').attr('class').split(' ').pop()), // get slide ID
     format = src.substr(src.indexOf("-") + 1); // get the format of the slide



    if (format == 'standard') {
      // standard animation handler
      headerTarget = $(src + ' h2');
      pTarget = $(src + ' p');
      TweenMax.to(headerTarget, 1.2,{css:{marginLeft: 0}, ease:Quad.easeOut, delay: .1}); // animate heading
      TweenMax.to(pTarget, 1.2,{autoAlpha: 1, delay: 1.3}); // animate copy
    } else if (format == 'dew') {
      console.log('dewvid prefix: ' + slides[(i - 1)]);
      animateDew(i - 1, slideID); // trigger new animation
      owl.trigger('stop.owl.autoplay');
      console.log('dewvid time: ' + dewVid.currentTime);
      // dewVid.trigger('load');
      setTimeout(function () {
        owl.trigger('play.owl.autoplay',[10000, 10000]);
      }, 25000); // add 4 seconds to dew slides, gross
    } else if (format == 'astro') {
      console.log('astro prefix: ' + slides[(i - 1)]);
      animateAstro(i - 1, slideID); // trigger new animation
      owl.trigger('stop.owl.autoplay');
      //astroVid.trigger('load');
      
      if (slideID == 31) { //Astronaut 1 
        setTimeout(function () {
        owl.trigger('play.owl.autoplay',[10000, 10000]);
        }, 35000); }
      else if (slideID == 32) { //Astronaut 2
        setTimeout(function () {
        owl.trigger('play.owl.autoplay',[10000, 10000]);
        }, 13000); }
      else if (slideID >= 33) { //All IES
        setTimeout(function () {
        owl.trigger('play.owl.autoplay',[10000, 10000]);
        }, 9000); }
        
    } else if (format != 'dew' || format != 'astro') {
      dewVid.currentTime = 0;
      dewVid.trigger('load');
      astroVid.currentTime = 0;
      astroVid.trigger('load');
    }
      
  });

function findID (slide) {
  console.log("slide ID is" + slide.id);
  return slide.id;
}
var slideID = 0;

  for (var i = 0; i < (slides.length); i++) {

    // WELCOME
    if (slides[i].format == 'welcome' && slides[i].enabled) {
      var welcomeTemplate = $('#welcome-template').clone(),
          tempClass = (i + 1) + '-welcome';

      $('.owl-carousel').owlCarousel('add', welcomeTemplate).owlCarousel('update'); // initalize welcome format
      welcomeTemplate.removeAttr('id');
      welcomeTemplate.addClass(tempClass); // change Class
      populateWelcome(i, slides[i]);
      slideID = findID(slides[i]);

    // DISCLAIMER
    } else if (slides[i].format == 'disclaimer' && slides[i].enabled) {
      var disclaimerTemplate = $('#disclaimer-template').clone(),
          tempClass = (i + 1) + '-disclaimer';

      $('.owl-carousel').owlCarousel('add', disclaimerTemplate).owlCarousel('update'); // initialize disclaimer format
      disclaimerTemplate.removeAttr('id');
      if(slides[i].subformat) {
        if(slides[i].subformat == 'highlights') {
          disclaimerTemplate.addClass('highlights-disclaimer');
        }
      }
      disclaimerTemplate.addClass(tempClass); // change Class
      populateDisclaimer(i, slides[i]);
      slideID = findID(slides[i]);


    // CHALLENGE
    } else if (slides[i].format == 'challenge' && slides[i].enabled) {
      var challengeTemplate = $('#challenge-template').clone(),
          tempClass = (i + 1) + '-challenge';

      $('.owl-carousel').owlCarousel('add', challengeTemplate).owlCarousel('update'); // initialize standard format
      challengeTemplate.removeAttr('id');
      challengeTemplate.addClass(tempClass); // change Class
      populateChallenge(i, slides[i]);
      slideID = findID(slides[i]);


    // STANDARD
    } else if (slides[i].format == 'standard' && slides[i].enabled) {
      var standardTemplate = $('#standard-template').clone(),
          tempClass = (i + 1) + '-standard';

      $('.owl-carousel').owlCarousel('add', standardTemplate).owlCarousel('update'); // initialize standard format
      standardTemplate.removeAttr('id');
      if(slides[i].subformat != undefined) {
        if(slides[i].subformat == 'promo') {
          standardTemplate.addClass('promo-standard');
        }
      }
      standardTemplate.addClass(tempClass); // change Class
      populateStandard(i, slides[i]);
      slideID = findID(slides[i]);


    // DEW TOUR STANDARD
     // DEW TOUR STANDARD
    } else if (slides[i].format == 'dew' && slides[i].enabled) {
      var dewTemplate = $('#dew-animated-template').clone(),
          tempClass = (i + 1) + '-dew';

      $('.owl-carousel').owlCarousel('add', dewTemplate).owlCarousel('update'); // initialize standard format
      dewTemplate.removeAttr('id');
      if(slides[i].subformat != undefined) {
        if(slides[i].subformat == 'animated') {
          dewTemplate.addClass('dew-animated');
        }
      }
      console.log('dew it');
      dewTemplate.addClass(tempClass); // change Class
      populateDew(i, slides[i]); // populate dew slide
      slideID = findID(slides[i]);

    }
      //Astronauts
     else if (slides[i].format == 'astro' && slides[i].enabled) {
      
      var astroTemplate = $('#astro-animated-template').clone(),
          tempClass = (i + 1) + '-astro';

      $('.owl-carousel').owlCarousel('add', astroTemplate).owlCarousel('update'); 
      astroTemplate.removeAttr('id');
      if(slides[i].subformat != undefined) {
        if(slides[i].subformat == 'animated') {
          astroTemplate.addClass('astro-animated');
        }
      }
      console.log('lift off');
      astroTemplate.addClass(tempClass); // change Class
      populateAstro(i, slides[i]); // populate astro slide
      slideID = findID(slides[i]);

    }
  }
});

$('#saveButton').click(function() {
  window.localStorage.deleteArray('slides');

  slides[0].copy = $('.location-input').val();
  slides[1].copy = $('.location-input').val();

  slides.forEach(function(e){
    window.localStorage.pushArrayItem('slides', e); // loop through and put each item in the array
  });
  window.top.location.reload(true);
});

$('#regenerateButton').click(function() {
  regenerateArray();
});

//Enable Single
$(document).on('click', '.buttonEnable', function() {
  var id = $(this).attr('id');

  slides.forEach(function(e) {
    console.log(e);
    if (e.title == id) {
      e.enabled = true;
      console.log(e.title)
    }
  });

  $(this).html('<i class="icon-remove-circle"></i><span>Disable</span>');
  $(this).removeClass('buttonEnable button-aqua').addClass('buttonDisable button-red');
});

//Enable All Visible Slides
$(document).on('click', '#enableAll', function() {
  slides.forEach(function(e) {
    var slideParent = $('#' + e.title).parent();
    if ($(slideParent).is(':visible')) {
      console.log(slideParent);
      e.enabled = true;

      $('#' + e.title).html('<i class="icon-remove-circle"></i><span>Disable</span>');
      $('#' + e.title).removeClass('buttonEnable button-aqua').addClass('buttonDisable button-red');
    }
  });
});

//Disable Single
$(document).on('click', '.buttonDisable', function() {
  var id = $(this).attr('id');

  slides.forEach(function(e) {
    console.log(e);
    if (e.title == id) {
      e.enabled = false;
      console.log(e.title)
    }
  });

  $(this).html('<i class="icon-ok-sign"></i><span>Enable</span>');
  $(this).removeClass('buttonDisable button-red').addClass('buttonEnable button-aqua');
});

//Disable All Visible Slides
$(document).on('click', '#disableAll', function() {
  slides.forEach(function(e) {
    var slideParent = $('#' + e.title).parent();
    if ($(slideParent).is(':visible')) {
      console.log(slideParent);
      e.enabled = false;

      $('#' + e.title).html('<i class="icon-ok-sign"></i><span>Enable</span>');
      $('#' + e.title).removeClass('buttonDisable button-red').addClass('buttonEnable button-aqua');
    }
  });
});

function getDate() {
  var d = new Date();

  var month = d.getMonth() + 1,
        day = d.getDate();

  var output = (month < 10 ? '0' : '') + month + '/' +
               (day < 10 ? '0' : '') + day + '/' +
               d.getFullYear();

  return output;
}

function populateStandard(index, slide) {
  $('.' + (index + 1) + '-standard h2').html(slide.heading);
  $('.' + (index + 1) + '-standard p').html(slide.copy);
  $('.' + (index + 1) + '-standard .portfolio-image img').attr('src', slide.image);
  if (slide.subformat) {
    if (slide.subformat == 'promo') {
      $('.' + (index + 1) + '-standard .secondary-image-wrapper').html('<img src="' + slide.promoLogo + '" class="secondary-image">');
      if (slide.footer) {
        $('.' + (index + 1) + '-standard h3.standard-footer').html(slide.footer);
      }
    }
  }
}

function populateWelcome(index, slide) {
  var welcomeIndex = index + 1 + "-welcome";
  var welcomeClass = '.' + welcomeIndex;
  console.log(welcomeClass);

  $(welcomeClass + ' .welcome-header').html(slide.heading);
  $(welcomeClass + ' .event-name').html(slide.copy);
  $('.date').html(getDate()); // update the date field with today's date
  $(welcomeClass + ' .go-army').html(slide.url);
}

function populateDisclaimer(index, slide) {
  var rules = slide.rules;

  $('.' + (index + 1) + '-disclaimer h2').html(slide.heading);

  for (var n = 0; n < (rules.length); n++) { // make an element for each rule
    $('.' + (index + 1) + '-disclaimer ul').append('<li>' + rules[n] + '</li>');
  }

  $('.' + (index + 1) + '-disclaimer p').html(slide.copy);

  if (slide.subformat) {
    if (slide.subformat == 'highlights') {
      $('.' + (index + 1) + '-disclaimer h3.disclaimer-subheading').html(slide.subheading);
      $('.' + (index + 1) + '-disclaimer h3.disclaimer-footer').html(slide.footer);
    }
  }
}

function populateChallenge(index, slide) {
  var rules = slide.rules;

  $('.' + (index + 1) + '-challenge h2').html(slide.heading);

  $('.' + (index + 1) + '-challenge p.subtitle').html(slide.copy);
}

function populateDew(index, slide) {
  $('.' + (index + 1) + '-dew h2').html(slide.heading);
  $('.' + (index + 1) + '-dew p').html(slide.copy); 
}


function populateAstro(index, slide) {

  $('.' + (index + 1) + '-astro h2').html(slide.heading);
  $('.' + (index + 1) + '-astro p').html(slide.copy);
  $('.' + (index + 1) + '-astro h6').html(slide.cta);
  $('.' + (index + 1) + '-astro video.astrobkgd').append('<source src="' + slide.video + '"/>');
  $('.' + (index + 1) + '-astro .scrolling_img1 img').attr('src', slide.top_image1);
  $('.' + (index + 1) + '-astro .scrolling_img2 img').attr('src', slide.top_image2);

  console.log('<source src="' + slide.video + '"/>');
  console.log('.' + (index + 1) + '-astro video.astrobkgd');
  $('.' + (index + 1) + '-astro video.astrobkgd').load();
  //animateAstro(index, slides[(index)]);
  // $('.' + (index + 1) + ' video').play();


  // future dynamimc video implementation?

  // $('.' + (index + 1) + '-dew .dew-bg img').attr('src', slide.image);
  // if (slide.subformat) {
  //   if (slide.subformat == 'promo') {
  //     $('.' + (index + 1) + '-dew .secondary-image-wrapper').html('<img src="' + slide.promoLogo + '" class="secondary-image">');
  //     if (slide.footer) {
  //       $('.' + (index + 1) + '-dew h3.standard-footer').html(slide.footer);
  //     }
  //   }
  // }
}

function generateConfig() {
  console.log(slides.length);

  for (var n = 0; n < (slides.length); n++) {

    var slideRowTemplate = $('#slideRowTemplate').clone(),
      tempID = 'slide-' + (n + 1);

    if (slides[n].format == 'welcome') {
      $('.location-input').val(slides[n].copy);
    }

    //Seperates the English and Spanish slides into different tables
    if (slides[n].language == 'english') {
      $('tbody#configTable').append(slideRowTemplate); // add the slide template
    } else if (slides[n].language == 'spanish') {
      $('tbody#configTable-SPANISH').append(slideRowTemplate); // add the slide template
    };
    
    slideRowTemplate.attr('id', tempID); // change ID
    populateConfigRow(n, slides[n]);
  }
}

function populateConfigRow(index, slide) {
  $('#slide-' + (index + 1) + ' td.slideNumber').html(index + 1); // slide number
  $('#slide-' + (index + 1) + ' td.slideName').html(slide.title);
  $('#slide-' + (index + 1) + ' td.slideFormat').html(slide.format);

  if (slide.enabled) {
    $('#slide-' + (index + 1) + ' td.slideStatus').html('Enabled');
    $('#slide-' + (index + 1) + ' td.toggleSlide').html('<a href="#" id="' + slide.title + '" class="button button-rounded button-reveal button-mini button-red button-light tright buttonDisable"><i class="icon-remove-circle"></i><span>Disable</span></a>');
  } else {
    $('#slide-' + (index + 1) + ' td.slideStatus').html('Disabled');
    $('#slide-' + (index + 1) + ' td.toggleSlide').html('<a href="#" id="' + slide.title + '" class="button button-rounded button-reveal button-mini button-aqua button-light tright buttonEnable"><i class="icon-ok-sign"></i><span>Enable</span></a>');
  }
}

function animateDew(index, slideID) {
  var d = 0, // base delay
      duration = 6; // easy duration setting just in case it changes.
      prefix = '.' + (slideID) + '-dew', //JUSTIN - ask about +1:
      //prefix = '.' + (index + 1) + '-dew', ????????????
      shakeTargets = $(prefix + ' .geometry-animated');
  
  // var black1 = $('#slide-' + (index + 1) + ' #b1');
  console.log("dew prefix is " + prefix);

  TweenMax.to($(prefix + ' .b1'), .4, {top: -75, delay: d + 1}); // animate large black polygon
  TweenMax.to($(prefix + ' .w2'), .6, {top: -56, delay: d + .5}); // animate large white polygon
  TweenMax.to($(prefix + ' .y1'), .6, {left: -4,top: 25, delay: d+.2});
  TweenMax.to($(prefix + ' .y2'), .6, {right: -8,top: 305, delay: d + .2});
  TweenMax.to($(prefix + ' .y3'), .6, {left: -8, delay: d + .5}); // animate large white polygon
  TweenMax.to($(prefix + ' .y4'), .6, {right: -8, delay: d + 1.7}); // animate large white polygon

  console.log($(prefix + ' video.dew-bg').get(0));  
  TweenMax.to($(prefix + ' video.dew-bg'), .1, {autoAlpha: 1, delay: d + .65});

  $(prefix + ' video.dew-bg').get(0).play();
  TweenMax.to($(prefix + ' .y5'), 1, {left: 1200, bottom: 650, delay: d + .4}); // animate large yellow flying polygon

  TweenMax.to($(prefix + ' img.dew-thumb-1'), .9, {autoAlpha: 1, delay: d + 3.1}); // fade in geometric image
  TweenMax.to($(prefix + ' img.dew-thumb-2'), .9, {autoAlpha: 1, delay: d + 3.6}); // fade in geometric image
  TweenMax.to($(prefix + ' img.dew-thumb-3'), .9, {autoAlpha: 1, delay: d + 4.0}); // fade in geometric image

  // Tween headline & subheadline
  TweenMax.to($(prefix + ' .dew-headline-container h2'), .6, {marginTop: 0, delay: d + 1.35});
  TweenMax.to($(prefix + ' .dew-text-container p'), .4, {autoAlpha: 1, delay: d + 2.2});

  // Tween goarmy.com cta & social icons
  TweenMax.set($(prefix + ' .social-icons'), {scale: .01});
  TweenMax.to($(prefix + ' .dew-goarmy-container img'), .6, {marginTop: 0, delay: d + 2.1});
  TweenMax.to($(prefix + ' .social-icons'), .4, {scale: 1, delay: d + 2.35});
  TweenMax.to($(prefix + ' .social-icons'), .5, {autoAlpha: 1, delay: d + 2.35});

  // shake it up
  for (var i = shakeTargets.length - 1; i >= 0; i--) {
    TweenMax.fromTo(shakeTargets[i], 2.5, {x:-1}, {x:1, clearProps:"x", repeat:-1, ease:RoughEase.ease.config({strength:10, points:18, template:Linear.easeNone, randomize:true})});
    TweenMax.fromTo(shakeTargets[i], 2.5, {y:-1}, {y:1, clearProps:"x", repeat:-1, ease:RoughEase.ease.config({strength:10, points:18, template:Linear.easeNone, randomize:true})});
  }
}

function animateAstro(index, slideID) {
    var d = 0, // base delay
      duration = 6; // easy duration setting just in case it changes.
      prefix = '.' + (slideID) + '-astro',   //Current fix: Add +1 for Astronaut2, expand your horizons. Remove +1 for Astronaut 1, overcome obstacles
      console.log("slide id is " + slideID);
    //On load



    //Moving video and yellow bars on load for SPA videos
    if (slideID >= 34) {
      TweenMax.set($(prefix + ' .yellow_border1'), {height: 32, top: 33});
      TweenMax.set($(prefix + ' .yellow_border2'), {height: 32, top: -749});
      TweenMax.set($(prefix + ' .astro_video_box'), {top:890});
      TweenMax.set($(prefix + ' .astrobkgd'), {height:688});
      TweenMax.set($(prefix + ' .yellow-bar'), {top:-750});
    }

    if (slideID == 34) {
      TweenMax.set($(prefix + ' .yellow_border2'), {height: 35});
    }

    $(prefix + ' .b1')
    TweenMax.to($(prefix + ' .astro_tab_container'), .1, {opacity: 1});
    TweenMax.to($(prefix + ' .astro_video_box'), .1, {opacity: 1});
    TweenMax.to($(prefix + ' .astro-text-container'), .1, {opacity: 1});
    TweenMax.set($(prefix + ' .scrolling_img1'), {clearProps: 'all'});
    TweenMax.set($(prefix + ' .scrolling_img2'), {clearProps: 'all'});
    console.log("astro prefix is "+ prefix);
    

    //Adjusting for different scrolling images
    if (slideID < 33) { //Astronauts
        TweenMax.to($(prefix + ' .scrolling_img1'), .8, {opacity: 1, ease: Power1.easeIn});
        TweenMax.to($(prefix + ' .scrolling_img1'), 22, {x:-1200, ease: Power0.easeInOut, delay: 0.5});
        TweenMax.to($(prefix + ' .scrolling_img1'), 1, {opacity:0, delay:21});
        TweenMax.to($(prefix + ' .scrolling_img2'), 1, {opacity: 1, delay: 21});
        TweenMax.to($(prefix + ' .scrolling_img2'), 23, {x: -300, ease: Power0.easeInOut, delay: 21});
    }

    else if (slideID == 33) { //IES ENG Respect
        TweenMax.set($(prefix + ' .scrolling_img1'), {x: -50});
        TweenMax.to($(prefix + ' .scrolling_img1'), 1, {opacity: 1, ease: Power1.easeIn});
        TweenMax.to($(prefix + ' .scrolling_img1'), 18.5, {x: -400, ease: Power0.easeInOut});
    }

    else if (slideID == 34) { //IES ENG Loyality
        //TweenMax.set($(prefix + ' .scrolling_img1'), {x: -400});
        TweenMax.to($(prefix + ' .scrolling_img1'), 1, {opacity: 1, ease: Power1.easeIn});
        TweenMax.to($(prefix + ' .scrolling_img1'), 18.5, {x: -400, ease: Power0.easeInOut});
    }

    else if (slideID > 34) { //IES SPA all
        TweenMax.set($(prefix + ' .scrolling_img1'), {x: -200});
        TweenMax.to($(prefix + ' .scrolling_img1'), 1, {opacity: 1, ease: Power1.easeIn});
        TweenMax.to($(prefix + ' .scrolling_img1'), 18.5, {x: 0, ease: Power0.easeInOut});
    }

    //tab
    TweenMax.from($(prefix + ' .astro_tab'), 0.3, {top:-900, delay: 0.8});
    TweenMax.from($(prefix + ' .astro-headline-container h2'), 0.4, {y:800, delay: 0.8});
    TweenMax.staggerFrom([c1,c2,c3],0.4, {opacity: 0, delay: 1.2},0.3);

    //Video box yellow bars
    TweenMax.from($(prefix + ' .yellow_border2'), 0.6, {x:-2000, ease: Power2.easeOut, delay:0.8});
    TweenMax.from($(prefix + ' .yellow_border1'), 0.6, {x:-2000, ease: Power2.easeOut, delay:1.2});
    TweenMax.fromTo(y1, 3.8, {x:-3500, ease: Power3.easeIn, delay:0.8}, {x:3200, ease: Power2.easeOut, delay:2.1});
    TweenMax.fromTo(y3, 3.8, {x:-3500, ease: Power2.easeIn, delay:1.1}, {x:3200, ease: Power3.easeOut, delay:2.2});
    TweenMax.fromTo(y2, 3.8, {x:-3500, ease: Power2.easeIn, delay:1.2}, {x:3200, ease: Power2.easeOut, delay:2.3});


    TweenMax.to($(prefix + ' video.astrobkgd'), 0.2, {opacity: 1, delay: 2.8});
    $(prefix + ' video.astrobkgd').get(0).play();

    TweenMax.to($(prefix + ' .cta_text'), 1, {bottom:8, ease: Power0.easeInOut, delay:3.0});
    TweenMax.from(astro_social, 1, {scale: 0, opacity: 0, ease: Elastic.easeOut.config(0.75,0.75), delay:4.0});


}

function regenerateArray() {
  // var tempDebugArray = window.localStorage.getArray('slides');
  // window.localStorage.deleteArray('slides');
  window.localStorage.clear();

  var tempDebugArray = window.localStorage.getArray('slides');
  console.log(tempDebugArray.length);

  // slides.forEach(function(e) {
  //   window.localStorage.pushArrayItem('slides', e); // loop through and put each item in the array
  //   console.log(window.localStorage.getArray('slides'));
  // });
  // alert('Array regenerated.');
  window.top.location.reload(true);
}

function compareArrays(codedArray, storageArray) {
  similar = true;

  for (var x = 0; x < (storageArray.length); x++) {
    if (codedArray[x].title != storageArray[x].title) {
      similar = false;
    }
  }

  return similar;
}

function initializeMiniSlides(index, slide, slideNum, duration) {

  var $slides =  $('.' + (index + 1) + '-dew .' + slideNum + '-slide'), // could probably be shortened
      currentSlide = 0;

  TweenMax.delayedCall(duration, nextSlide);

  function nextSlide() {         
    TweenMax.to($slides.eq(currentSlide), 1, {autoAlpha: 0});
    
    if (currentSlide < $slides.length - 1) {
      currentSlide++;
    }

    else {
      currentSlide = 0;
    }

    TweenMax.fromTo($slides.eq(currentSlide), 1, {autoAlpha: 0}, {autoAlpha: 1});
    TweenMax.delayedCall(duration, nextSlide);
  }
  
  
};

//Show and hide different languages of slides in the config screen
$('.languageButton').click(function() {
  var l = $(this).attr('id');

  $('.languageButton').removeClass('active');
  $(this).addClass('active');

  if(l == 'showSpanish') {
    $('#configTable').hide("slow");
    $('#configTable-SPANISH').show("slow");
  } else if(l == 'showEnglish') {
    $('#configTable').show("slow");
    $('#configTable-SPANISH').hide("slow");
  } else if (l == "showAll") {
    $('#configTable').show("slow");
    $('#configTable-SPANISH').show("slow");
  }
});

//Local Storage Extensions
Storage.prototype.getArray = function(arrayName) {
  var thisArray = [];
  var fetchArrayObject = this.getItem(arrayName);
  if (typeof fetchArrayObject !== 'undefined') {
    if (fetchArrayObject !== null) { thisArray = JSON.parse(fetchArrayObject); }
  }
  return thisArray;
}

Storage.prototype.pushArrayItem = function(arrayName,arrayItem) {
  var existingArray = this.getArray(arrayName);
  existingArray.push(arrayItem);
  this.setItem(arrayName,JSON.stringify(existingArray));
}

Storage.prototype.popArrayItem = function(arrayName) {
  var arrayItem = {};
  var existingArray = this.getArray(arrayName);
  if (existingArray.length > 0) {
      arrayItem = existingArray.pop();
      this.setItem(arrayName,JSON.stringify(existingArray));
  }
  return arrayItem;
}

Storage.prototype.shiftArrayItem = function(arrayName) {
  var arrayItem = {};
  var existingArray = this.getArray(arrayName);
  if (existingArray.length > 0) {
      arrayItem = existingArray.shift();
      this.setItem(arrayName,JSON.stringify(existingArray));
  }
  return arrayItem;
}

Storage.prototype.unshiftArrayItem = function(arrayName,arrayItem) {
  var existingArray = this.getArray(arrayName);
  existingArray.unshift(arrayItem);
  this.setItem(arrayName,JSON.stringify(existingArray));
}

Storage.prototype.deleteArray = function(arrayName) {
  this.removeItem(arrayName);
}

// Expanding local storage to deal with objects
Storage.prototype.setObj = function(key, obj) {
  return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
  return JSON.parse(this.getItem(key))
}