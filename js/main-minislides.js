// Function to get local storage parameters?

var version = 1.9,
 clickTimer = null, //future triple click implementation for when touch is active.
     slides = [
    {
      title: 'Welcome',
      language: 'english',
      format: 'welcome',
      heading: 'WELCOME TO',
      copy: 'Dew Tour',
      url: 'goarmy.com',
      duration: '6000', //ms
      image: 'none',
      enabled: true
    },
    {
      title: 'Welcome-SPANISH',
      language: 'spanish',
      format: 'welcome',
      heading: 'Bienvenido a',
      copy: 'St. Louis',
      url: 'goarmy.com/familias',
      duration: '6000', //ms
      image: 'none',
      enabled: false
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
      title: 'DewTour1',
      language: 'english',
      format: 'dew',
      subformat: 'animated',
      heading: 'No <br /><span>Limits</span>',
      copy: 'The U.S. Army can take you <br/>beyond your comfort zone&#8212;<br/>find out how at goarmy.com',
      duration: '6000', //ms
      image: 'img-dew/bg-dew1.png',
      enabled: true
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

    // var current = property.item.index,
    //         src = '.' + ($(property.target).find('.owl-item').eq(current).find('div').attr('class').split(' ').pop()), // get slide ID
    //      format = src.substr(src.indexOf("-") + 1); // get the format of the slide

    // if (format == 'dew') {
    //   console.log(slides[(i - 1)]);
    //   animateDew(i - 1, slides[(i - 1)]); // trigger new animation
    // }
  });

  owl.owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    dots: false,
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 8000,
    margin: 0,
    stagePadding: 0
  }).on('changed.owl.carousel', function(property) {
    // Reset all tweened properties for standard templates
    TweenMax.set('.standardFormat h2', {clearProps: 'all', delay: 0});
    TweenMax.set('.standardFormat p', {clearProps: 'all', delay: 0});

    // Reset all tweened properties for dew templates
    TweenMax.set('.dewFormat .geometry-animated', {clearProps: 'top, left, right, bottom, scale, marginTop, marginBottom'});
    TweenMax.set('.dewFormat .y5', {clearProps: 'top, left, right, bottom, scale, marginTop, marginBottom'});
    TweenMax.set('.dewFormat p', {clearProps: 'opacity'});
    TweenMax.set('.dewFormat .dew-headline-container h2', {clearProps: 'all'});
    TweenMax.set('.dewFormat .dew-goarmy-container img', {clearProps: 'all'});
    TweenMax.set('.dewFormat .dew-slideshow-container', {clearProps: 'opacity'});
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
      console.log(slides[(i - 1)]);
      animateDew(i - 1, slides[(i - 1)]); // trigger new animation
      owl.trigger('stop.owl.autoplay');
      setTimeout(function () {
        owl.trigger('play.owl.autoplay',[8000, 8000]);
      }, 4000); // add 4 seconds to dew slides, gross
    }
  });

  for (var i = 0; i < (slides.length); i++) {

    // WELCOME
    if (slides[i].format == 'welcome' && slides[i].enabled) {
      var welcomeTemplate = $('#welcome-template').clone(),
          tempClass = (i + 1) + '-welcome';

      $('.owl-carousel').owlCarousel('add', welcomeTemplate).owlCarousel('update'); // initalize welcome format
      welcomeTemplate.removeAttr('id');
      welcomeTemplate.addClass(tempClass); // change Class
      populateWelcome(i, slides[i]);

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

    // CHALLENGE
    } else if (slides[i].format == 'challenge' && slides[i].enabled) {
      var challengeTemplate = $('#challenge-template').clone(),
          tempClass = (i + 1) + '-challenge';

      $('.owl-carousel').owlCarousel('add', challengeTemplate).owlCarousel('update'); // initialize standard format
      challengeTemplate.removeAttr('id');
      challengeTemplate.addClass(tempClass); // change Class
      populateChallenge(i, slides[i]);

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
  console.log(slide.copy);
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

function animateDew(index, slide) {

  var d = 0, // base delay
      duration = 6; // easy duration setting just in case it changes.
      prefix = '.' + (index + 1) + '-dew',
      shakeTargets = $(prefix + ' .geometry-animated');

  //index, slide, set, duration
  initializeMiniSlides(index, slide, 1, duration);
  setTimeout(function() {
    initializeMiniSlides(index, slide, 2, duration);
  }, 800);
  setTimeout(function() {
    initializeMiniSlides(index, slide, 3, duration);
  }, 1200);
  
  // var black1 = $('#slide-' + (index + 1) + ' #b1');
  // eventually target per slide, not globally

  TweenMax.to($(prefix + ' .b1'), .4, {top: -75, delay: d + 1}); // animate large black polygon
  TweenMax.to($(prefix + ' .w2'), .6, {top: -56, delay: d + .5}); // animate large white polygon
  TweenMax.to($(prefix + ' .y1'), .6, {left: -4,top: 25, delay: d+.2});
  TweenMax.to($(prefix + ' .y2'), .6, {right: -8,top: 305, delay: d + .2});
  TweenMax.to($(prefix + ' .y3'), .6, {left: -8, delay: d + .5}); // animate large white polygon
  TweenMax.to($(prefix + ' .y4'), .6, {right: -8, delay: d + 1.7}); // animate large white polygon

  console.log($(prefix + ' video.dew-bg').get(0));
  TweenMax.to($(prefix + ' video.dew-bg'), .1, {autoAlpha: 1, delay: d + .6});
  $(prefix + ' video.dew-bg').get(0).play();
  TweenMax.to($(prefix + ' .y5'), 1, {left: 1200, bottom: 400, delay: d + .4}); // animate large yellow flying polygon

  TweenMax.to($(prefix + ' .mini-slideshow-1'), .9, {autoAlpha: 1, delay: d + 2.2}); // fade in geometric image
  TweenMax.to($(prefix + ' .mini-slideshow-2'), .9, {autoAlpha: 1, delay: d + 2.4}); // fade in geometric image
  TweenMax.to($(prefix + ' .mini-slideshow-3'), .9, {autoAlpha: 1, delay: d + 2.6}); // fade in geometric image

  // Tween headline & subheadline
  TweenMax.to($(prefix + ' .dew-headline-container h2'), .6, {marginTop: 0, delay: d + 2.1});
  TweenMax.to($(prefix + ' .dew-text-container p'), .4, {autoAlpha: 1, delay: d + 2.95});

  // Tween goarmy.com cta & social icons
  TweenMax.set($(prefix + ' .social-icons'), {scale: .01});
  TweenMax.to($(prefix + ' .dew-goarmy-container img'), .6, {marginTop: 0, delay: d + 2.1});
  TweenMax.to($(prefix + ' .social-icons'), .4, {scale: 1, delay: d + 2.95});
  TweenMax.to($(prefix + ' .social-icons'), .5, {autoAlpha: 1, delay: d + 2.95});

  // shake it up
  for (var i = shakeTargets.length - 1; i >= 0; i--) {
    TweenMax.fromTo(shakeTargets[i], 2.5, {x:-1}, {x:1, clearProps:"x", repeat:-1, ease:RoughEase.ease.config({strength:10, points:18, template:Linear.easeNone, randomize:true})});
    TweenMax.fromTo(shakeTargets[i], 2.5, {y:-1}, {y:1, clearProps:"x", repeat:-1, ease:RoughEase.ease.config({strength:10, points:18, template:Linear.easeNone, randomize:true})});
  }
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