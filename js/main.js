$(window).ready(function () {
  // Function to get local storage parameters?
  var version = 2.3,
    clickTimer = null, //future triple click implementation for when touch is active.
    slideTimeout,
    secondaryTimeout,
    tertiaryTimeout,
    standardTimeout = 10000, //timeout for Owl Slider
    dynamicVideos = {},
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
        enabled: true
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
        enabled: false
    },
      {
        title: 'Welcome',
        language: 'english',
        format: 'welcome',
        subformat: 'messaging',
        heading: 'WELCOME TO',
        copy: 'To participate,<br>text <span>KT44</span> to<br>GoArmy (462769)',
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
        title: 'Participation_Rules',
        language: 'english',
        format: 'disclaimer',
        heading: 'P<span class="kerning-closer">a</span>rticip<span class="kerning-closer">a</span><span class="kerning-closer">t</span>ion <br/><span>Rules.</span>',
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
        copy: 'U.S. Army ROTC provides over $330K in scholarships at 274 schools around the country&mdash;and one could be yours. <br />Learn more at <b>goarmy.com/rotc</b>.',
        duration: '6000', //ms
        image: 'img/find-your-future.jpg',
        enabled: false
    },
      {
        title: 'ROTC_OpportunityAwaits',
        language: 'english',
        format: 'standard',
        heading: 'Opportunity <br/><span>Awaits.</span>',
        copy: 'U.S. Army ROTC is available at more than 1,100 colleges and universities. Plus, nearly 1,200 ROTC candidates get to travel abroad each year. <br />Learn more at <b>goarmy.com/rotc</b>.',
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
        copy: 'Your U.S. Army officer training and education can help lead our nation forward. <br />Learn more at <b>goarmy.com/rotc</b>.',
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
        heading: 'Over 600 Companies <br/>are Willing to <br/><span>Guarantee you <br/>a job interview.</span>',
        copy: 'Enlist in the Army\'s Partnership for Youth Success (PaYS) Program NOW! <br /><br />Log into <span>armypays.com</span> for more information and a complete list of Army PaYS partners.',
        duration: '6000', //ms
        image: 'img/pays1.jpg',
        //promoLogo: 'img/pays.png',
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
        footer: 'Learn more at <span>march2success.com</span>.',
        duration: '6000', //ms
        enabled: false
    },
      {
        title: 'March2Success',
        language: 'english',
        format: 'standard',
        subformat: 'promo',
        heading: 'Need Help Preparing <br/><span>For SAT or ACT Tests?</span>',
        copy: '<span>March2Success</span> is an online, self-paced course provided by the U.S. Army, designed to improve student performance on standardized tests, enhancing skills in English and STEM (science, technology, engineering and math), provided without cost or obligation by the U.S. Army.',
        duration: '6000', //ms
        image: 'img/pays2.jpg',
        footer: 'Learn more at <span>march2success.com</span>.',
        //promoLogo: 'img/pays.png',
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
    },
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
        copy: 'And get the skills you need for a lifetime of achievement. <br />Learn more at <b>goarmy.com</b>.',
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
        unique_hook: 'astro1',
        title: 'Astronaut1',
        language: 'english',
        format: 'astro',
        subformat: 'astroVid1',
        heading: 'Overcome<br/>any obstacle. <br/><span>Anywhere.</span>',
        copy: '<strong id="c1"> The U.S. Army Astronaut program</strong> <br /> <strong id="c2">prepares you for any eventuality</strong><br /><strong id="c3">in the world &#8212; and beyond.</strong>',
        duration: '35000', //ms
        cta: 'Find out more at <span>goarmy.com</span>.',
        video: 'videos/overcome.mp4',
        top_image1: 'img/scrolling/moon_edited.jpg',
        top_image2: 'img/scrolling/bw_astronaut_edited.jpg',
        enabled: false
    },
      {
        unique_hook: 'astro2',
        title: 'Astronaut2',
        language: 'english',
        format: 'astro',
        subformat: 'astroVid2',
        heading: 'Expand Your <br/><span>Horizons.</span>',
        copy: '<strong id="c1"> A U.S. Army astronaut career</strong> <br /> <strong id="c2">can take you further than</strong><br /><strong id="c3">you ever thought possible. </strong>',
        duration: '13000', //ms
        cta: 'Find out more at <span>goarmy.com</span>.',
        video: 'videos/expand.mp4',
        top_image1: 'img/scrolling/moon_edited.jpg',
        top_image2: 'img/scrolling/bw_astronaut_edited.jpg',
        enabled: false
    },
      {
        unique_hook: 'iesEN',
        title: 'IES_respect',
        language: 'english',
        format: 'astro',
        subformat: 'IES',
        heading: 'Make your<br/>hard work <br/><span>count.</span>',
        copy: '<strong id="c1"> In the U.S. Army, you can earn more</strong> <br /> <strong id="c2">than just a salary while making</strong><br /><strong id="c3">a difference around the world.</strong>',
        duration: '9000', //ms
        cta: 'Find out more at <span>goarmy.com</span>.',
        video: 'videos/respect-en.mp4',
        top_image1: 'img/scrolling/ies1_screenshot.jpg',
        enabled: false
    },
      {
        unique_hook: 'iesEN2',
        title: 'IES_loyalty',
        language: 'english',
        format: 'astro',
        subformat: 'IES',
        heading: 'Make your<br/>hard work<br/><span>count.</span>',
        copy: '<strong id="c1"> In the U.S. Army, you can earn more</strong> <br /> <strong id="c2">than just a salary while making</strong><br /><strong id="c3">a difference around the world.</strong>',
        duration: '9000', //ms
        cta: 'Find out more at <span>goarmy.com</span>.',
        video: 'videos/loyalty-en.mp4',
        top_image1: 'img/scrolling/ies2_screenshot.jpg',
        enabled: false
    },
      {
        unique_hook: 'iesES',
        title: 'IES_loyalty-SPANISH',
        language: 'spanish',
        format: 'astro',
        subformat: 'IES',
        heading: 'Haz que tu <br />trabajo <br /><span>cuente.</span>',
        copy: '<strong id="c1"> En el U.S. Army te puedes ganar</strong> <br /> <strong id="c2">más que un sueldo mientras haces</strong><br /><strong id="c3">la diferencia alrededor del mundo. </strong>',
        cta: 'Conoce m&aacute;s en <span>goarmy.com</span>.',
        duration: '9000', //ms
        video: 'videos/loyalty-es.mp4',
        top_image1: 'img/scrolling/ies3_screenshot.jpg',
        enabled: false
    },
      {
        unique_hook: 'drone',
        title: 'Drone',
        language: 'english',
        format: 'astro',
        subformat: 'astroVid1',
        heading: 'SOAR TO <br/>NEW HEIGHTS <br/><span>IN THE U.S. ARMY.</span>',
        copy: '',
        duration: '35000', //ms
        cta: 'Find out more at <span>goarmy.com</span>.',
        video: 'videos/drone.mp4',
        top_image1: 'img/scrolling/drone2.jpg',
        top_image2: 'img/scrolling/uav.jpg',
        enabled: false
    },
      {
        unique_hook: 'robotics',
        title: 'Robotics',
        language: 'english',
        format: 'robot',
        subformat: 'robo1',
        heading: 'A LIGHT IN<br/><span>THE DARK.</span>',
        copy: '<p>The U.S. Army will move mountains to complete a mission – but with the latest tech, that\'s not always necessary. Experience what it\'s like to complete a real mission, just like an actual Soldier. To help you achieve success, you\'ll be equipped with an advanced robot, capable of giving you eyes and ears in any environment, even darkness. </p>',
        duration: '35000', //ms
        cta: 'Learn more at<br/><span>goarmy.com</span>.',
        scrollingImage: 'img/scrolling/robot-1.jpg',
        image: 'img/bg-mission.jpg',
        enabled: false
    },
//    {
//      unique_hook: 'mission',
//      title: 'Mission 1',
//      language: 'english',
//      format: 'mission',
//      heading: 'Mission 1:',
//      heading2: 'Retrieve',
//      subheading: '<span>MISSION 1: Target Retrieval</span>',
//      copy: '<p>Locate and retrieve the target to complete your mission.</p><p class="difficulty">(Easy: fewer obstacles, more about navigating accurately)</p>',
//      duration: '35000', //ms
//      cta: 'Learn more at<br/><span>goarmy.com</span>.',
//      scrollingImage: 'img/scrolling/robot-2.jpg',
//      image: 'img/bg-mission.jpg',
//      enabled: true
//    },
      {
        unique_hook: 'mission1',
        title: 'Mission 1',
        language: 'english',
        format: 'mission',
        heading: 'Mission 1:',
        heading2: 'Navigate',
        subheading: '<span>OBJECTIVE: Overcome Obstacles</span>',
        copy: '<p>Complete the course successfully within the allotted time.</p><p class="difficulty">Difficulty: Beginner</p>',
        duration: '35000', //ms
        cta: 'Learn more at<br/><span>goarmy.com</span>.',
        scrollingImage: 'img/scrolling/robot-2.jpg',
        image: 'img/bg-mission.jpg',
        enabled: false
    },
      {
        unique_hook: 'mission2',
        title: 'Mission 2',
        language: 'english',
        format: 'mission',
        heading: 'Mission 2:',
        heading2: 'Retrieve',
        subheading: '<span>OBJECTIVE: Target Retrieval</span>',
        copy: '<p>Locate and retrieve the hidden target within the allotted time.</p><p class="difficulty">Difficulty: Intermediate</p>',
        duration: '35000', //ms
        cta: 'Learn more at<br/><span>goarmy.com</span>.',
        scrollingImage: 'img/scrolling/robot-2.jpg',
        image: 'img/bg-mission.jpg',
        enabled: false
    },
      {
        unique_hook: 'mission3',
        title: 'Mission 3',
        language: 'english',
        format: 'mission',
        heading: 'Mission 3:',
        heading2: 'Observe',
        subheading: '<span>OBJECTIVE: Target Recon</span>',
        copy: '<p>Count the number of targets hidden throughout the course.</p><p class="difficulty">Difficulty: Intermediate</p>',
        duration: '35000', //ms
        cta: 'Learn more at<br/><span>goarmy.com</span>.',
        scrollingImage: 'img/scrolling/robot-2.jpg',
        image: 'img/bg-mission.jpg',
        enabled: false
    },
      {
        unique_hook: 'mission4',
        title: 'Mission 4',
        language: 'english',
        format: 'mission',
        heading: 'Mission 4:',
        heading2: 'Relay',
        subheading: '<span>OBJECTIVE: Course Recon</span>',
        copy: '<p>Report your findings back to your teammate so they can draw a reconnaissance map.</p><p class="difficulty">Difficulty: Advanced</p>',
        duration: '35000', //ms
        cta: 'Learn more at<br/><span>goarmy.com</span>.',
        scrollingImage: 'img/scrolling/robot-2.jpg',
        image: 'img/bg-mission.jpg',
        enabled: false
    },
      {
        unique_hook: 'fearless',
        title: 'Fearless',
        language: 'english',
        format: 'aab',
        subformat: 'aab',
        heading: 'U.S. ARMY ALL-AMERICAN BOWL <span>01-06-2018</span>',
        duration: '35000', //ms
        cta: 'Find out more at <span>goarmy.com</span>.',
        video: 'videos/fearless.mp4',
        enabled: false
    },
      {
        unique_hook: 'limitless',
        title: 'Limitless',
        language: 'english',
        format: 'aab',
        subformat: 'aab',
        heading: 'U.S. ARMY ALL-AMERICAN BOWL <span>01-06-2018</span>',
        duration: '35000', //ms
        cta: 'Find out more at <span>goarmy.com</span>.',
        video: 'videos/limitless.mp4',
        enabled: false
    },
      {
        unique_hook: 'doubtless',
        title: 'Doubtless',
        language: 'english',
        format: 'aab',
        subformat: 'aab',
        heading: 'U.S. ARMY ALL-AMERICAN BOWL <span>01-06-2018</span>',
        duration: '35000', //ms
        cta: 'Find out more at <span>goarmy.com</span>.',
        video: 'videos/doubtless.mp4',
        enabled: false
    },
      {
        unique_hook: 'relentless',
        title: 'Relentless',
        language: 'english',
        format: 'aab',
        subformat: 'aab',
        heading: 'U.S. ARMY ALL-AMERICAN BOWL <span>01-06-2018</span>',
        duration: '35000', //ms
        cta: 'Find out more at <span>goarmy.com</span>.',
        video: 'videos/relentless.mp4',
        enabled: false
    },
      {
        unique_hook: 'vue-attract',
        title: 'Soldier VUE Attractor',
        language: 'english',
        format: 'trivia',
        video: 'videos/vue-attract.mp4',
        enabled: false
    },
      {
        unique_hook: 'trivia1',
        title: 'Trivia - Insignia',
        language: 'english',
        format: 'trivia',
        video: 'videos/trivia/1.mp4',
        enabled: false
    },
      {
        unique_hook: 'trivia2',
        title: 'Trivia - Presidents',
        language: 'english',
        format: 'trivia',
        video: 'videos/trivia/2.mp4',
        enabled: false
    },
      {
        unique_hook: 'trivia4',
        title: 'Trivia - Washington',
        language: 'english',
        format: 'trivia',
        video: 'videos/trivia/4.mp4',
        enabled: false
    },
      {
        unique_hook: 'trivia5',
        title: 'Trivia - Mess Uniform',
        language: 'english',
        format: 'trivia',
        video: 'videos/trivia/5.mp4',
        enabled: false
    },
      {
        unique_hook: 'trivia7',
        title: 'Trivia - Camouflage',
        language: 'english',
        format: 'trivia',
        video: 'videos/trivia/7.mp4',
        enabled: false
    },
      {
        unique_hook: 'trivia8',
        title: 'Trivia - US Army',
        language: 'english',
        format: 'trivia',
        video: 'videos/trivia/8.mp4',
        enabled: false
    },
      {
        unique_hook: 'trivia9',
        title: 'Trivia - Women',
        language: 'english',
        format: 'trivia',
        video: 'videos/trivia/9.mp4',
        enabled: false
    },
      {
        unique_hook: 'trivia10',
        title: 'Trivia - Army History',
        language: 'english',
        format: 'trivia',
        video: 'videos/trivia/10.mp4',
        enabled: false
    },
      {
        unique_hook: 'trivia11',
        title: 'Trivia - Unification',
        language: 'english',
        format: 'trivia',
        video: 'videos/trivia/11.mp4',
        enabled: false
    },
      {
        unique_hook: 'trivia12',
        title: 'Trivia - OCP',
        language: 'english',
        format: 'trivia',
        video: 'videos/trivia/12.mp4',
        enabled: false
    },
      {
        unique_hook: 'trivia13',
        title: 'Trivia - Skills',
        language: 'english',
        format: 'trivia',
        video: 'videos/trivia/13.mp4',
        enabled: false
    },
      {
        unique_hook: 'trivia14',
        title: 'Trivia - Branch',
        language: 'english',
        format: 'trivia',
        video: 'videos/trivia/14.mp4',
        enabled: false
    },
      {
        unique_hook: 'knights',
        title: 'VR - Golden Knights',
        language: 'english',
        format: 'vr',
        duration: 36, // seconds
        lockup: 'img/lockup/knights.png',
        video: 'videos/vr/knights.mp4',
        top_image: 'img/scrolling/gk-top.png',
        bottom_image: 'img/scrolling/gk-bottom.png',
        enabled: true
    },
      {
        unique_hook: 'divider',
        title: 'VR - Divider',
        language: 'english',
        format: 'divider',
        enabled: true
    },
      {
        unique_hook: 'racing',
        title: 'VR - NHRA',
        language: 'english',
        format: 'vr',
        duration: 39, // seconds
        lockup: 'img/lockup/nhra.png',
        video: 'videos/vr/racing.mp4',
        top_image: 'img/scrolling/nhra-top.png',
        bottom_image: 'img/scrolling/nhra-bottom.png',
        enabled: true
    }
  ];

  function getDate() {
    var d = new Date(),
      month = d.getMonth() + 1,
      day = d.getDate(),
      output = (month < 10 ? '0' : '') + month + '/' + (day < 10 ? '0' : '') + day + '/' + d.getFullYear();

    return output;
  }

  function populateStandard(index, slide) {
    $('.' + (index + 1) + '-standard h2').html(slide.heading);
    $('.' + (index + 1) + '-standard p').html(slide.copy);
    $('.' + (index + 1) + '-standard .portfolio-image img').attr('src', slide.image);
    if (slide.subformat) {
      if (slide.subformat == 'promo') {
        //      if(slide.promoLogo) {
        //        $('.' + (index + 1) + '-standard .secondary-image-wrapper').html('<img src="' + slide.promoLogo + '" class="secondary-image">'); 
        //      }
        if (slide.footer) {
          $('.' + (index + 1) + '-standard h3.standard-footer').html(slide.footer);
        }
      }
    }
  }

  function populateWelcome(index, slide) {
    var welcomeIndex = (index + 1) + "-welcome",
      welcomeClass = '.' + welcomeIndex;

    if (slide.subformat && slide.subformat == "messaging") {
      $(welcomeClass + ' .copy').html(slide.copy);
      $(welcomeClass + ' .welcome-header').addClass('hidden');
      $(welcomeClass + ' .date').addClass('hidden');
    } else if (!slide.subformat || slide.subformat == "") {
      $(welcomeClass + ' .welcome-header').html(slide.heading);
      $(welcomeClass + ' .event-name').html(slide.copy);
      $('.date').html(getDate()); // update the date field with today's date
      $(welcomeClass + ' .go-army').html(slide.url);
    }
  }

  function populateDisclaimer(index, slide) {
    var rules = slide.rules,
      n = 0;

    $('.' + (index + 1) + '-disclaimer h2').html(slide.heading);

    for (n = 0; n < (rules.length); n++) { // make an element for each rule
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

  function populateAstro(index, slide, hook) {
    var tempVideo = '<source src="' + slide.video + '"/>',
      targetElement = $('.' + (index + 1) + '-astro video.astrobkgd');

    $('.' + (index + 1) + '-astro h2').html(slide.heading);
    $('.' + (index + 1) + '-astro p.primary-copy').html(slide.copy);

    if (slide.copy2) {
      $('.' + (index + 1) + '-astro p.secondary-copy').html(slide.copy2);
    }

    $('.' + (index + 1) + '-astro h6').html(slide.cta);
    targetElement.html(tempVideo);

    videojs(targetElement[0], {
      'controls': false,
      'autoplay': false,
      'loop': true,
      'width': '100%',
      'height': 628
    }, function () {
      dynamicVideos[hook] = this;
      console.log(dynamicVideos[hook]);
    });

    $('.' + (index + 1) + '-astro .scrolling_img1 img').attr('src', slide.top_image1);
    $('.' + (index + 1) + '-astro .scrolling_img2 img').attr('src', slide.top_image2);
    $('.' + (index + 1) + '-astro video.astrobkgd').load();
  }

  function populateVR(index, slide, hook) {
    console.log('populating VR');
    var tempVideo = '<source src="' + slide.video + '"/>',
      targetElement = $('.' + (index + 1) + '-vr video.vrbkgd');

    console.log(targetElement);
    targetElement.html(tempVideo);

    videojs(targetElement[0], {
      'controls': false,
      'autoplay': false,
      'loop': true,
      'width': '100%',
      'height': 628
    }, function () {
      console.log('vr player initialized');
      dynamicVideos[hook] = this;
      console.log('dynamic hook: ' + hook);
    });

    // Populate images
    $('.' + (index + 1) + '-vr .vr-intro-frame .vr-lockup img').attr('src', slide.lockup);
    $('.' + (index + 1) + '-vr .vr-intro-frame .vr_top_image .scrolling_img img').attr('src', slide.top_image);
    $('.' + (index + 1) + '-vr .vr-intro-frame .vr_bottom_image .scrolling_img img').attr('src', slide.bottom_image);
    $('.' + (index + 1) + '-vr video.vrbkgd').load();
  }

  function populateAAB(index, slide, hook) {
    var tempVideo = '<source src="' + slide.video + '"/>',
      targetElement = $('.' + (index + 1) + '-aab video.aabbkgd');

    //$('.' + (index + 1) + '-aab h2').html(slide.heading);

    if (slide.copy) {
      $('.' + (index + 1) + '-aab p.primary-copy').html(slide.copy);
    }

    if (slide.copy2) {
      $('.' + (index + 1) + '-aab p.secondary-copy').html(slide.copy2);
    }

    $('.' + (index + 1) + '-aab h6').html(slide.cta);
    console.log(targetElement);
    targetElement.html(tempVideo);

    videojs(targetElement[0], {
      'controls': false,
      'autoplay': false,
      'loop': true,
      'width': '100%',
      'height': 628
    }, function () {
      console.log('AAB player initialized');
      dynamicVideos[hook] = this;
      console.log(dynamicVideos[hook]);
    });

    $('.' + (index + 1) + '-aab video.aabbkgd').load();
  }

  function populateRobot(index, slide) {
    console.log('populateRobot');
    $('.' + (index + 1) + '-robot h2').html(slide.heading);
    $('.' + (index + 1) + '-robot p').html(slide.copy);
    $('.' + (index + 1) + '-robot .portfolio-image img').attr('src', slide.image);
    $('.' + (index + 1) + '-robot .scrolling-image img').attr('src', slide.scrollingImage);
  }

  function populateMission(index, slide) {
    console.log('populateMission');
    $('.' + (index + 1) + '-mission div.heading1').html(slide.heading);
    $('.' + (index + 1) + '-mission div.heading2').html(slide.heading2);
    $('.' + (index + 1) + '-mission h2').html(slide.subheading);
    $('.' + (index + 1) + '-mission p').html(slide.copy);
    $('.' + (index + 1) + '-mission .portfolio-image img').attr('src', slide.image);
    $('.' + (index + 1) + '-mission .scrolling-image img').attr('src', slide.scrollingImage);
  }

  function populateTrivia(index, slide, hook) {

    var tempVideo = '<source src="' + slide.video + '"/>',
      targetElement = $('.' + (index + 1) + '-trivia video.triviaVid');

    console.log(targetElement);
    targetElement.html(tempVideo);

    videojs(targetElement[0], {
      'controls': false,
      'autoplay': false,
      'loop': false,
      'width': '100%',
      'height': 1920
    }, function () {
      console.log('Trivia player initialized:' + hook);
      dynamicVideos[hook] = this;
    });

    $('.' + (index + 1) + '-trivia video.trivia').load();
  }
  
  function populateDivider(index, slide, hook) {

  }

  function generateConfig() {
    var n;

    for (n = 0; n < (slides.length); n++) {

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
      }

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

  function animateAstro(index, slideID, hook) {
    var d = 0, // base delay
      duration = 6, // easy duration setting just in case it changes.
      prefix = '.' + (index + 1) + '-astro'; //Current fix: Add +1 for Astronaut2, expand your horizons. Remove +1 for Astronaut 1, overcome obstacles

    //On load
    TweenMax.set($(prefix + ' .astrobkgd'), {
      autoAlpha: 0
    });
    TweenMax.set($(prefix + ' .social-icons'), {
      scale: 0.001
    });

    $(prefix + ' .b1');
    TweenMax.to($(prefix + ' .astro_tab_container'), .1, {
      autoAlpha: 1
    });
    TweenMax.to($(prefix + ' .astro_video_box'), .1, {
      autoAlpha: 1
    });
    TweenMax.to($(prefix + ' .astro-text-container'), .3, {
      autoAlpha: 1,
      delay: 1.4
    });
    TweenMax.to($(prefix + ' .astro-text-container p'), .3, {
      autoAlpha: 1,
      delay: 1.4
    });
    TweenMax.set($(prefix + ' .scrolling_img1'), {
      clearProps: 'all'
    });
    TweenMax.set($(prefix + ' .scrolling_img2'), {
      clearProps: 'all'
    });
    console.log('.' + hook);


    //Adjusting for different scrolling images
    if ((hook == 'astro1') || (hook == 'astro2')) {
      //Astronauts
      TweenMax.to($(prefix + ' .scrolling_img1'), .8, {
        opacity: 1,
        ease: Power1.easeIn
      });
      TweenMax.to($(prefix + ' .scrolling_img1'), 22, {
        x: -1200,
        ease: Power0.easeInOut,
        delay: 0.5
      });
      TweenMax.to($(prefix + ' .scrolling_img1'), 1, {
        opacity: 0,
        delay: 21
      });
      TweenMax.to($(prefix + ' .scrolling_img2'), 1, {
        opacity: 1,
        delay: 21
      });
      TweenMax.to($(prefix + ' .scrolling_img2'), 23, {
        x: -300,
        ease: Power0.easeInOut,
        delay: 21
      });

      TweenMax.to($('.' + hook + ' .astrobkgd'), 0.2, {
        autoAlpha: 1,
        delay: 2.8
      });
    } else if ((hook == 'band') || (hook == 'band2')) {
      // BAND
      TweenMax.to($(prefix + ' .scrolling_img1'), .8, {
        opacity: 1,
        ease: Power1.easeIn
      });
      TweenMax.to($(prefix + ' .scrolling_img1'), 41, {
        x: -900,
        ease: Power0.easeInOut,
        delay: 0.5
      });
      TweenMax.to($(prefix + ' .scrolling_img1'), 1, {
        opacity: 0,
        delay: 41
      });

      // Set slide specific CSS
      //$(prefix + ' div.astro_tab').css('height','630px'); //shame
      //        $(prefix + ' .astro-text-container').css('top','10px'); //shame
      //        $(prefix + ' p').css('top','-30px'); //shame
      //        $(prefix + ' h2').css('top','30px'); //shame

      TweenMax.to($('.astroFormat.' + hook + ' .astrobkgd'), 0.2, {
        autoAlpha: 1,
        delay: 2.8
      });

    } else if (hook == 'nhra') {
      // NHRA
      TweenMax.to($(prefix + ' .scrolling_img1'), .8, {
        opacity: 1,
        ease: Power1.easeIn
      });
      TweenMax.to($(prefix + ' .scrolling_img1'), 22, {
        x: -1200,
        ease: Power0.easeInOut,
        delay: 0.5
      });
      TweenMax.to($(prefix + ' .scrolling_img1'), 1, {
        opacity: 0,
        delay: 12
      });
      TweenMax.to($(prefix + ' .scrolling_img2'), 1, {
        opacity: 1,
        delay: 12
      });
      TweenMax.to($(prefix + ' .scrolling_img2'), 23, {
        x: -300,
        ease: Power0.easeInOut,
        delay: 12
      });
      $(prefix + ' div.astro_tab').css('height', '720px'); //shame
      //$(prefix + ' div.yellow_border1').css('top','50px'); //shame

      TweenMax.to($('.astroFormat.' + hook + ' .astrobkgd'), 0.2, {
        autoAlpha: 1,
        delay: 2.8
      });
    } else if (hook == 'iesEN') { //IES ENG Respect
      TweenMax.set($(prefix + ' .scrolling_img1'), {
        x: -50
      });
      TweenMax.to($(prefix + ' .scrolling_img1'), 1, {
        opacity: 1,
        ease: Power1.easeIn
      });
      TweenMax.to($(prefix + ' .scrolling_img1'), 18.5, {
        x: -400,
        ease: Power0.easeInOut
      });

      TweenMax.to($('.astroFormat.' + hook + ' .astrobkgd'), 0.2, {
        autoAlpha: 1,
        delay: 2.8
      });
    } else if (hook == 'iesES') { //IES SPA Loyalty
      TweenMax.set($(prefix + ' .scrolling_img1'), {
        x: -200
      });
      TweenMax.to($(prefix + ' .scrolling_img1'), 1, {
        opacity: 1,
        ease: Power1.easeIn
      });
      TweenMax.to($(prefix + ' .scrolling_img1'), 18.5, {
        x: 0,
        ease: Power0.easeInOut
      });

      TweenMax.to($('.astroFormat.' + hook + ' .astrobkgd'), 0.2, {
        autoAlpha: 1,
        delay: 2.8
      });
    } else if (hook == 'iesEN2') { //IES EN Loyalty
      TweenMax.set($(prefix + ' .scrolling_img1'), {
        x: -200
      });
      TweenMax.to($(prefix + ' .scrolling_img1'), 1, {
        opacity: 1,
        ease: Power1.easeIn
      });
      TweenMax.to($(prefix + ' .scrolling_img1'), 18.5, {
        x: 0,
        ease: Power0.easeInOut
      });

      TweenMax.to($('.astroFormat.' + hook + ' .astrobkgd'), 0.2, {
        autoAlpha: 1,
        delay: 2.8
      });
    } else if (hook == 'drone') {

      // DRONE
      TweenMax.to($(prefix + ' .scrolling_img1'), .8, {
        opacity: 1,
        ease: Power1.easeIn
      });
      TweenMax.to($(prefix + ' .scrolling_img1'), 23, {
        x: -1200,
        ease: Power0.easeInOut,
        delay: 0.5
      });
      TweenMax.to($(prefix + ' .scrolling_img1'), 1, {
        opacity: 0,
        delay: 12
      });
      TweenMax.to($(prefix + ' .scrolling_img2'), 1, {
        opacity: 1,
        delay: 12
      });
      TweenMax.to($(prefix + ' .scrolling_img2'), 23, {
        x: -300,
        ease: Power0.easeInOut,
        delay: 12
      });

      TweenMax.to($('.astroFormat.' + hook + ' .astrobkgd'), 0.2, {
        autoAlpha: 1,
        delay: 2.8
      });
    }

    // Animate Black Background Tab
    TweenMax.to($(prefix + ' .astro-text-container'), 0.3, {
      y: 600,
      delay: 0.8
    });
    //    TweenMax.from($(prefix + ' .astro-headline-container h2'), 0.4, {y: 800, delay: 0.8});
    if (hook == 'nhra') {
      TweenMax.staggerFrom([c1, c2, c3], 0.4, {
        opacity: 0,
        delay: 1.2
      }, 0.3);
    }

    // Animate Borders
    TweenMax.from($(prefix + ' .yellow_border2'), 0.6, {
      x: -2000,
      ease: Power2.easeOut,
      delay: 0.8
    });
    TweenMax.from($(prefix + ' .yellow_border1'), 0.6, {
      x: -2000,
      ease: Power2.easeOut,
      delay: 1.2
    });
    // Large Yellow Bars
    TweenMax.fromTo($(prefix + ' .yellow-bar-container .yellow-bar-1'), 3.8, {
      x: -3500,
      ease: Power3.easeIn,
      delay: 0.8
    }, {
      x: 3200,
      ease: Power2.easeOut,
      delay: 2.1
    });
    TweenMax.fromTo($(prefix + ' .yellow-bar-container .yellow-bar-2'), 3.8, {
      x: -3500,
      ease: Power2.easeIn,
      delay: 1.1
    }, {
      x: 3200,
      ease: Power3.easeOut,
      delay: 2.2
    });
    TweenMax.fromTo($(prefix + ' .yellow-bar-container .yellow-bar-3'), 3.8, {
      x: -3500,
      ease: Power2.easeIn,
      delay: 1.2
    }, {
      x: 3200,
      ease: Power2.easeOut,
      delay: 2.3
    });

    var currentVid = dynamicVideos[hook];

    currentVid.play();

    TweenMax.to($(prefix + ' .cta_text'), 1, {
      bottom: 8,
      ease: Power0.easeInOut,
      delay: 3.2
    });
    TweenMax.to($(prefix + ' .social-icons'), 1, {
      scale: 1,
      opacity: 1,
      ease: Elastic.easeOut.config(0.75, 0.75),
      delay: 4.0
    });
  }

  function animateVR(index, slideID, hook, videoLength) {
    console.log(videoLength);
    var d = 0, // base delay
      duration = 6, // easy duration setting just in case it changes.
      scrollTime = 10000,
      prefix = '.' + (index + 1) + '-vr';

    //On load
    TweenMax.set($(prefix + ' .vrbkgd'), {
      autoAlpha: 0
    });
    TweenMax.set($(prefix + ' .social-icons'), {
      scale: 0.001
    });

    TweenMax.to($(prefix + ' .vr_tab_container'), .1, {
      autoAlpha: 1
    });
    TweenMax.to($(prefix + ' .vr_video_box'), .1, {
      autoAlpha: 1
    });
    TweenMax.to($(prefix + ' .vr-text-container'), .3, {
      autoAlpha: 1,
      delay: 1.4
    });
    TweenMax.to($(prefix + ' .vr-text-container p'), .3, {
      autoAlpha: 1,
      delay: 1.4
    });
    TweenMax.set($(prefix + ' .vr-intro-frame .scrolling_img'), {
      clearProps: 'all'
    });
    TweenMax.set($(prefix + ' .vr-intro-frame .scrolling_img img'), {
      clearProps: 'all'
    });
    TweenMax.set($(prefix + ' .vr_top_image'), {
      clearProps: 'all'
    });
    TweenMax.set($(prefix + ' .vr_bottom_image'), {
      clearProps: 'all'
    });
    
    TweenMax.set($(prefix + ' .vr-intro-frame'), {
      clearProps: 'all'
    });
    
    TweenMax.set($(prefix + ' .vr-main-frame'), {
      clearProps: 'all'
    });
    
    TweenMax.set($(prefix + ' .vr-buffer-frame'), {
      clearProps: 'all'
    });

    // Fade in video container
    TweenMax.to($('.' + hook + ' .vrbkgd'), 0.2, {
      autoAlpha: 1,
      delay: 2.8
    });

    
    TweenMax.to($(prefix + ' .vr-intro-frame'), .1, {
      opacity: 1,
      ease: Power1.easeIn
    });
    // Scrolling Images
    TweenMax.to($(prefix + ' .vr-intro-frame .vr_top_image .scrolling_img'), .8, {
      opacity: 1,
      ease: Power1.easeIn
    });
    TweenMax.to($(prefix + ' .vr-intro-frame .vr_top_image .scrolling_img'), (scrollTime/1000), {
      x: 587,
      ease: Power0.easeInOut,
      delay: 0.5
    });

    TweenMax.to($(prefix + ' .vr-intro-frame .vr_bottom_image .scrolling_img'), .8, {
      opacity: 1,
      ease: Power1.easeIn
    });
    TweenMax.to($(prefix + ' .vr-intro-frame .vr_bottom_image .scrolling_img'), (scrollTime/1000), {
      x: -587,
      ease: Power0.easeInOut,
      delay: 0.5
    });

    if (hook == 'racing') {

    } else if (hook == 'knights') {

    }

    // Animate Borders
    TweenMax.from($(prefix + ' .vr-intro-frame .yellow_border1'), 0.6, {
      x: -2000,
      ease: Power2.easeOut,
      delay: 1.2
    });
    
    TweenMax.from($(prefix + ' .vr-intro-frame .yellow_border2'), 0.6, {
      x: -2000,
      ease: Power2.easeOut,
      delay: 0.8
    });

    var currentVid = dynamicVideos[hook];

    currentVid.play();

    TweenMax.to($(prefix + ' .cta_text'), 1, {
      bottom: 8,
      ease: Power0.easeInOut,
      delay: 3.2
    });
    TweenMax.to($(prefix + ' .social-icons'), 1, {
      scale: 1,
      opacity: 1,
      ease: Elastic.easeOut.config(0.75, 0.75),
      delay: 4.0
    });
    
    owl.trigger('stop.owl.autoplay');
    
    clearTimeout(slideTimeout);
    clearTimeout(secondaryTimeout);
    clearTimeout(tertiaryTimeout);
    
    slideTimeout = setTimeout(function () {
      secondaryTimeout = setTimeout(function () {
        TweenMax.to($(prefix + ' .vr-main-frame'), .5, {
          autoAlpha: 0
        });
        
        TweenMax.to($(prefix + ' .vr-buffer-frame'), .5, {
          autoAlpha: 1,
          delay: .2
        });
        
        owl.trigger('play.owl.autoplay', [standardTimeout, standardTimeout]);
        console.log('secondary timeout');
      }, ((videoLength * 1000) - (standardTimeout + 700))); //convert to MS, subtract owl's timeout
//        }, (videoLength * 1000)); //convert to MS, subtract owl's DEV
      TweenMax.to($(prefix + ' .vr-intro-frame'), .5, {
        autoAlpha: 0
      });
      
      TweenMax.to($(prefix + ' .vr-main-frame'), .5, {
        autoAlpha: 1,
        delay: .3
      });
      
      // Animate Borders
      TweenMax.from($(prefix + ' .vr-main-frame .yellow_border1'), 0.6, {
        x: -2000,
        ease: Power2.easeOut,
        delay: .6
      });

      TweenMax.from($(prefix + ' .vr-main-frame .yellow_border2'), 0.6, {
        x: -2000,
        ease: Power2.easeOut,
        delay: 0.2
      });
      
      setTimeout(function() {
        currentVid.play();
      }, 500);
      
    }, scrollTime); //convert to MS

//    owl.trigger('stop.owl.autoplay');
//    clearTimeout(slideTimeout);
//    slideTimeout = setTimeout(function () {
//      owl.trigger('play.owl.autoplay', [standardTimeout, standardTimeout]);
//    }, ((videoLength * 1000) - standardTimeout)); //convert to MS
  }
  
  function animateDivider(index, slideID, hook) {

    TweenMax.to($('.dividerFormat .disc'), 100, {
      rotation: 360,
      ease:Linear.easeNone,
      repeat: -1
    });
    
    TweenMax.fromTo($('.dividerFormat .army-logo'), 1.1, {
      opacity: 0
    }, {
      opacity: 1,
      ease: Power2.easeOut,
      delay: 1
    });
    
    TweenMax.fromTo($('.dividerFormat .copy-container'), .4, {
      scale: .01
    }, {
      scale: 1,
      ease: Power2.easeOut,
      delay: 1.6
    });
    
    TweenMax.fromTo($('.dividerFormat .copy'), 1.1, {
      opacity: 0
    }, {
      opacity: 1,
      ease: Power2.easeOut,
      delay: 1.8
    });
  }

  function animateAAB(index, slideID, hook) {
    var d = 0, // base delay
      duration = 6, // easy duration setting just in case it changes.
      prefix = '.' + (index + 1) + '-aab',
      currentVid = dynamicVideos[hook];

    //Setup on load
    TweenMax.set($(prefix + ' .aabbkgd'), {
      autoAlpha: 0
    });

    TweenMax.to($('.aabFormat.' + hook + ' .aabbkgd'), 0.2, {
      autoAlpha: 1
    });

    TweenMax.to($(prefix + ' .aab-army-logo'), .2, {
      left: 70,
      ease: Power0.easeOut,
      delay: 0.5
    });
    TweenMax.staggerTo($(prefix + ' .aab-headline-container div'), .2, {
      css: {
        paddingTop: '0'
      },
      ease: Quad.easeOut,
      delay: 0.7
    }, .2);

    setTimeout(function () {
      currentVid.play();
    }, 800);

    TweenMax.to($(prefix + ' .cta_text'), .2, {
      bottom: 8,
      ease: Power0.easeInOut,
      delay: 0.5
    });

    TweenMax.to($(prefix + ' .aab-logo img'), .5, {
      css: {
        paddingTop: '0'
      },
      ease: Quad.easeOut,
      delay: 2
    });

    TweenMax.to($(prefix + ' .footer-main .divider'), 0.5, {
      css: {
        webkitClipPath: 'inset(0% 0%)',
        clipPath: 'inset(0% 0%)'
      },
      ease: Quad.easeOut,
      delay: 2.2
    });
    TweenMax.to($(prefix + ' .footer-main .main-left p'), .5, {
      css: {
        paddingLeft: '0'
      },
      ease: Quad.easeOut,
      delay: 2.2
    });
    TweenMax.to($(prefix + ' .footer-main .main-right p'), .5, {
      css: {
        marginLeft: '0'
      },
      ease: Quad.easeOut,
      delay: 2.4
    });
    TweenMax.to($(prefix + ' .footer-social div.aab-hashtag'), .6, {
      css: {
        paddingTop: '0'
      },
      ease: Quad.easeOut,
      delay: 2.7
    });
    TweenMax.to($(prefix + ' .footer-social .social-icons'), .4, {
      css: {
        paddingTop: '0'
      },
      ease: Quad.easeOut,
      delay: 2.78
    });
  }

  function animateTrivia(index, slideID, hook) {

    var currentVid = dynamicVideos[hook],
      prefix = '.' + (index + 1) + '-trivia';

    //On load
    //  TweenMax.set($(prefix + ' .triviaVid'), {
    //    autoAlpha: 0
    //  });

    TweenMax.to($('.triviaFormat.' + hook + ' .triviaVid'), 0.2, {
      autoAlpha: 1,
      delay: .5
    });

    currentVid.play();
  }

  // Define Functions
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

    //DEV
    //  similar = false;

    return similar;
  }

  function initializeMiniSlides(index, slide, slideNum, duration) {

    var $slides = $('.' + (index + 1) + '-dew .' + slideNum + '-slide'), // could probably be shortened
      currentSlide = 0;

    TweenMax.delayedCall(duration, nextSlide);

    function nextSlide() {
      TweenMax.to($slides.eq(currentSlide), 1, {
        autoAlpha: 0
      });

      if (currentSlide < $slides.length - 1) {
        currentSlide++;
      } else {
        currentSlide = 0;
      }

      TweenMax.fromTo($slides.eq(currentSlide), 1, {
        autoAlpha: 0
      }, {
        autoAlpha: 1
      });
      TweenMax.delayedCall(duration, nextSlide);
    }


  }



  // ---DEV---
  console.log('version: ' + version);
  // --/DEV--

  var storageArray = window.localStorage.getArray('slides');

  // Check if array exists
  if (storageArray.length > 0) {
    if (compareArrays(slides, storageArray)) {
      slides = storageArray;
      console.log('local array overwritten');
    } else {
      // mismatched data
      window.localStorage.deleteArray('slides');
      slides.forEach(function (e) {
        window.localStorage.pushArrayItem('slides', e); // loop through and put each item in the array
      });
      //DEV (when off)
      alert('Slides updated. Please double check the config/settings');
    }
  } else {
    slides.forEach(function (e) {
      window.localStorage.pushArrayItem('slides', e); // loop through and put each item in the array
    });
  }

  generateConfig();

  var owl = $('.owl-carousel');

  owl.owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    dots: false,
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: standardTimeout,
    margin: 0,
    stagePadding: 0
  }).on('changed.owl.carousel', function (property) {
    // Kill active tweens, maybe overkill, also mucking with tweens...
    //TweenMax.killAll(false, true, false);
    // Reset all tweened properties for standard templates
    TweenMax.set('.standardFormat h2', {
      clearProps: 'all',
      delay: 0
    });
    TweenMax.set('.standardFormat p', {
      clearProps: 'all',
      delay: 0
    });

    // Reset all tweened properties for robot templates
    TweenMax.set('.robotFormat h2', {
      clearProps: 'all',
      delay: 1
    });
    TweenMax.set('.robotFormat p', {
      clearProps: 'all',
      delay: 1
    });
    TweenMax.killTweensOf('.robotFormat .scrolling-image img');
    TweenMax.set('.robotFormat .scrolling-image img', {
      clearProps: 'all',
      delay: 1
    });

    // Reset all tweened properties for mission templates
    TweenMax.set('.missionFormat h2', {
      clearProps: 'all',
      delay: 1
    });
    TweenMax.set('.missionFormat p', {
      clearProps: 'all',
      delay: 1
    });
    TweenMax.killTweensOf('.missionFormat .scrolling-image img');
    TweenMax.set('.missionFormat .scrolling-image img', {
      clearProps: 'all',
      delay: 1
    });

    // Reset tweened properties for Trivia
    TweenMax.set('.trivia div', {
      clearProps: 'all',
      delay: 0
    });

    /* Reset all tweened properties for astro templates */
    /* Killing tweens before clearing props works! */
    TweenMax.set('.astroFormat .astro-shapes-container', {
      clearProps: 'all'
    });
    TweenMax.set('.astroFormat .cta_text', {
      clearProps: 'all'
    });
    TweenMax.set('.astroFormat img.astro_top_image img', {
      clearProps: 'all'
    });
    TweenMax.set('.astroFormat p', {
      clearProps: 'all'
    });
    TweenMax.set('.astroFormat img', {
      clearProps: 'all'
    });
    TweenMax.set('.astroFormat video.astrobkgd', {
      autoAlpha: 0
    });
    TweenMax.set('.astroFormat .astro-top-image img', {
      clearProps: 'all, x, y'
    });
    TweenMax.killTweensOf('.astroFormat .astro_top_image .scrolling_img1');
    TweenMax.set('.astroFormat .astro_top_image .scrolling_img1', {
      clearProps: 'all, x, y'
    });
    TweenMax.killTweensOf('.astroFormat .astro_top_image .scrolling_img2');
    TweenMax.set('.astroFormat .astro_top_image .scrolling_img2', {
      clearProps: 'all, x, y'
    });
    TweenMax.set('.astroFormat .astro-text-container', {
      clearProps: 'all'
    });
    TweenMax.set('.astroFormat .astro-text-container h2', {
      clearProps: 'all'
    });
    TweenMax.set('.astroFormat .astro-slideshow-container', {
      clearProps: 'all'
    });

    // Reset all tweened properties for AAB templates
    TweenMax.set('.aabFormat *', {
      clearProps: 'all'
    });
    
    // Reset divider
    TweenMax.set('.dividerFormat *', {
      clearProps: 'all'
    });

    //todo, figure out how to target this better
    $.each(dynamicVideos, function (index, value) {
      console.log(index);
      value.pause();
      value.currentTime(0);
      //value.load();
    });

    console.log(dynamicVideos);

    var current = property.item.index;

    var src = '.' + ($(property.target).find('.owl-item').eq(current).find('div').attr('class').split(' ').pop()), // get slide ID
      format = src.substr(src.indexOf("-") + 1), // get the format of the slide
      slideIndex = src.substr(src.indexOf(".") + 1, src.indexOf('-') - 1); // get index

    if (format == 'standard') {
      // standard animation handler
      headerTarget = $(src + ' h2');
      pTarget = $(src + ' p');
      TweenMax.to(headerTarget, 1.2, {
        css: {
          marginLeft: 0
        },
        ease: Quad.easeOut,
        delay: .1
      }); // animate heading
      TweenMax.to(pTarget, 1.2, {
        autoAlpha: 1,
        delay: 1.3
      }); // animate copy
    } else if (format == 'astro') {
      var hook = slides[slideIndex - 1].unique_hook;
      animateAstro(slideIndex - 1, slideID, hook); // trigger new animation
      owl.trigger('stop.owl.autoplay');

      // NEED TO REFACTOR
      if (hook == 'astro1') { // Astronaut 1
        clearTimeout(slideTimeout);
        slideTimeout = setTimeout(function () {
          owl.trigger('play.owl.autoplay', [standardTimeout, standardTimeout]);
        }, 35000);
      } else if (hook == 'astro2') { // Astronaut 2
        clearTimeout(slideTimeout);
        slideTimeout = setTimeout(function () {
          owl.trigger('play.owl.autoplay', [standardTimeout, standardTimeout]);
        }, 13000);
      } else if ((hook == 'iesEN') || (hook == 'iesES') || (hook == 'iesEN2')) { // All IES
        clearTimeout(slideTimeout);
        slideTimeout = setTimeout(function () {
          owl.trigger('play.owl.autoplay', [standardTimeout, standardTimeout]);
        }, 9000);
      } else if (hook == 'drone') { // DRONE
        clearTimeout(slideTimeout);
        slideTimeout = setTimeout(function () {
          owl.trigger('play.owl.autoplay', [standardTimeout, standardTimeout]);
        }, 26300);
      }
    } else if (format == 'robot') {
      // Pause autoplay
      owl.trigger('stop.owl.autoplay');

      // robotics animation handler
      headerTarget = $(src + ' h2');
      pTarget = $(src + ' p');
      scrollingTarget = $(src + ' .scrolling-image img');
      TweenMax.to(headerTarget, 1.2, {
        css: {
          marginLeft: 0
        },
        ease: Quad.easeOut,
        delay: .1
      }); // animate heading
      TweenMax.to(pTarget, 1.2, {
        autoAlpha: 1,
        delay: 1
      }); // animate copy
      TweenMax.to(scrollingTarget, 17, {
        css: {
          marginLeft: -200
        }
      }); // animate scrolling image 

      clearTimeout(slideTimeout);
      slideTimeout = setTimeout(function () {
        owl.trigger('play.owl.autoplay', [standardTimeout, standardTimeout]);
      }, 7000);

    } else if (format == 'mission') {
      // mission animation handler
      headerTarget = $(src + ' h2');
      pTarget = $(src + ' p');
      scrollingTarget = $(src + ' .scrolling-image img');
      TweenMax.to(headerTarget, 1.2, {
        css: {
          marginLeft: 0
        },
        ease: Quad.easeOut,
        delay: .1
      }); // animate heading
      TweenMax.to(pTarget, 1.2, {
        autoAlpha: 1,
        delay: 1
      }); // animate copy
      TweenMax.to(scrollingTarget, 15, {
        css: {
          marginLeft: -200
        }
      }); // animate scrolling image
    } else if (format == 'aab') {
      var hook = slides[slideIndex - 1].unique_hook;
      animateAAB(slideIndex - 1, slideID, hook); // trigger new animation
      owl.trigger('stop.owl.autoplay');
      slideTimeout = setTimeout(function () {
        owl.trigger('play.owl.autoplay', [standardTimeout, standardTimeout]);
      }, 13000);
    } else if (format == 'trivia') {
      var hook = slides[slideIndex - 1].unique_hook,
        currentVid = dynamicVideos[hook],
        videoLength = currentVid.duration() * 1000, //convert to milliseconds
        restartDelay = (videoLength - 10000);

      animateTrivia(slideIndex - 1, slideID, hook); // trigger new animation

      // Check if the video is longer than the usual timeout, with wiggle room
      if (videoLength > (standardTimeout + 1000)) {
        //Stop autoplay
        owl.trigger('stop.owl.autoplay');
        //Restart autoplay
        console.log(videoLength);
        clearTimeout(slideTimeout);
        slideTimeout = setTimeout(function () {
          owl.trigger('play.owl.autoplay', [standardTimeout, standardTimeout]);
        }, restartDelay);
      }
    } else if (format == 'vr') {
      var hook = slides[slideIndex - 1].unique_hook,
        videoLength = slides[slideIndex - 1].duration;
      animateVR(slideIndex - 1, slideID, hook, videoLength); // trigger new animation
    } else if (format == 'divider') {
      animateDivider();
    }

  });

  var slideID = 0;

  for (var i = 0; i < (slides.length); i++) {

    if (slides[i].format == 'welcome' && slides[i].enabled) {
      // WELCOME

      var welcomeTemplate = $('#welcome-template').clone(),
        tempClass = (i + 1) + '-welcome';

      $('.owl-carousel').owlCarousel('add', welcomeTemplate).owlCarousel('update'); // initalize welcome format
      welcomeTemplate.removeAttr('id');
      welcomeTemplate.addClass(tempClass); // change Class
      populateWelcome(i, slides[i]);

    } else if (slides[i].format == 'disclaimer' && slides[i].enabled) {
      // DISCLAIMER

      var disclaimerTemplate = $('#disclaimer-template').clone(),
        tempClass = (i + 1) + '-disclaimer';

      $('.owl-carousel').owlCarousel('add', disclaimerTemplate).owlCarousel('update'); // initialize disclaimer format
      disclaimerTemplate.removeAttr('id');
      if (slides[i].subformat) {
        if (slides[i].subformat == 'highlights') {
          disclaimerTemplate.addClass('highlights-disclaimer');
        }
      }
      disclaimerTemplate.addClass(tempClass); // change Class
      populateDisclaimer(i, slides[i]);

    } else if (slides[i].format == 'challenge' && slides[i].enabled) {
      // CHALLENGE

      var challengeTemplate = $('#challenge-template').clone(),
        tempClass = (i + 1) + '-challenge';

      $('.owl-carousel').owlCarousel('add', challengeTemplate).owlCarousel('update'); // initialize standard format
      challengeTemplate.removeAttr('id');
      challengeTemplate.addClass(tempClass); // change Class
      populateChallenge(i, slides[i]);

    } else if (slides[i].format == 'standard' && slides[i].enabled) {
      // STANDARD

      var standardTemplate = $('#standard-template').clone(),
        tempClass = (i + 1) + '-standard';

      $('.owl-carousel').owlCarousel('add', standardTemplate).owlCarousel('update'); // initialize standard format
      standardTemplate.removeAttr('id');
      if (slides[i].subformat != undefined) {
        if (slides[i].subformat == 'promo') {
          standardTemplate.addClass('promo-standard');
        }
      }
      standardTemplate.addClass(tempClass); // change Class
      populateStandard(i, slides[i]);

    } else if (slides[i].format == 'astro' && slides[i].enabled) {
      // ASTRO (also IES)
      // Every Astro template slide must have a 'unique_hook' property!

      var astroTemplate = $('#astro-animated-template').clone(),
        tempClass = (i + 1) + '-astro',
        hookClass = slides[i].unique_hook;

      $('.owl-carousel').owlCarousel('add', astroTemplate).owlCarousel('update'); //init
      astroTemplate.removeAttr('id');
      if (slides[i].subformat != undefined) {
        if (slides[i].subformat == 'animated') {
          astroTemplate.addClass('astro-animated');
        }
      }
      console.log('lift off');
      if (hookClass != null) {
        astroTemplate.addClass(hookClass); // change Class
      }
      astroTemplate.addClass(tempClass); // change Class
      populateAstro(i, slides[i], hookClass); // populate astro slide

    } else if (slides[i].format == 'vr' && slides[i].enabled) {
      // Every vr template slide must have a 'unique_hook' property!

      var vrTemplate = $('#vr-animated-template').clone(),
        tempClass = (i + 1) + '-vr',
        hookClass = slides[i].unique_hook;

      $('.owl-carousel').owlCarousel('add', vrTemplate).owlCarousel('update'); //init
      vrTemplate.removeAttr('id');
      if (slides[i].subformat != undefined) {
        if (slides[i].subformat == 'animated') {
          vrTemplate.addClass('vr-animated');
        }
      }
      console.log('vr boi');
      if (hookClass != null) {
        vrTemplate.addClass(hookClass); // change Class
      }
      vrTemplate.addClass(tempClass); // change Class
      populateVR(i, slides[i], hookClass); // populate vr slide

    } else if (slides[i].format == 'aab' && slides[i].enabled) {
      // AAB FORMAT

      var aabTemplate = $('#aab-animated-template').clone(),
        tempClass = (i + 1) + '-aab',
        hookClass = slides[i].unique_hook;

      $('.owl-carousel').owlCarousel('add', aabTemplate).owlCarousel('update'); //init
      aabTemplate.removeAttr('id');
      if (hookClass != null) {
        aabTemplate.addClass(hookClass); // change Class
      }
      aabTemplate.addClass(tempClass); // change Class
      populateAAB(i, slides[i], hookClass); // populate astro slide

    } else if (slides[i].format == 'mission' && slides[i].enabled) {
      // ROBOT

      var missionTemplate = $('#mission-template').clone(),
        tempClass = (i + 1) + '-mission';

      $('.owl-carousel').owlCarousel('add', missionTemplate).owlCarousel('update'); // initialize robot format
      missionTemplate.removeAttr('id');
      missionTemplate.addClass(tempClass); // change Class
      populateMission(i, slides[i]);

    } else if (slides[i].format == 'robot' && slides[i].enabled) {
      // ROBOT

      var robotTemplate = $('#robot-template').clone(),
        tempClass = (i + 1) + '-robot';

      $('.owl-carousel').owlCarousel('add', robotTemplate).owlCarousel('update'); // initialize robot format
      robotTemplate.removeAttr('id');
      if (slides[i].subformat != undefined) {
        if (slides[i].subformat == 'promo') {
          robotTemplate.addClass('promo-standard');
        }
      }
      robotTemplate.addClass(tempClass); // change Class
      populateRobot(i, slides[i]);

    } else if (slides[i].format == 'trivia' && slides[i].enabled) {
      // TRIVIA

      var triviaTemplate = $('#trivia-template').clone(),
        tempClass = (i + 1) + '-trivia';
      hookClass = slides[i].unique_hook; //this is obv crucial

      $('.owl-carousel').owlCarousel('add', triviaTemplate).owlCarousel('update'); // initialize trivia format
      triviaTemplate.removeAttr('id');
      triviaTemplate.addClass(tempClass); // change Class
      populateTrivia(i, slides[i], hookClass);
      
    } else if (slides[i].format == 'divider' && slides[i].enabled) {
      
      var dividerTemplate = $('#divider-template').clone(),
        tempClass = (i + 1) + '-divider';
      hookClass = slides[i].unique_hook; //this is obv crucial

      $('.owl-carousel').owlCarousel('add', dividerTemplate).owlCarousel('update'); // initialize divider format
      dividerTemplate.removeAttr('id');
      dividerTemplate.addClass(tempClass); // change Class
      
    }

  }

  $('#saveButton').click(function () {
    window.localStorage.deleteArray('slides');

    slides[0].copy = $('.location-input').val();
    slides[1].copy = $('.location-input').val();

    slides.forEach(function (e) {
      window.localStorage.pushArrayItem('slides', e); // loop through and put each item in the array
    });
    window.top.location.reload(true);
  });

  $('#regenerateButton').click(function () {
    regenerateArray();
  });

  //Enable Single
  $(document).on('click', '.buttonEnable', function () {
    event.preventDefault();

    var id = $(this).attr('id');

    slides.forEach(function (e) {
      if (e.title == id) {
        e.enabled = true;
      }
    });

    $(this).html('<i class="icon-remove-circle"></i><span>Disable</span>');
    $(this).removeClass('buttonEnable button-aqua').addClass('buttonDisable button-red');
  });

  //Enable All Visible Slides
  $(document).on('click', '#enableAll', function () {
    slides.forEach(function (e) {
      var slideParent = $('#' + e.title).parent();
      if ($(slideParent).is(':visible')) {
        e.enabled = true;

        $('#' + e.title).html('<i class="icon-remove-circle"></i><span>Disable</span>');
        $('#' + e.title).removeClass('buttonEnable button-aqua').addClass('buttonDisable button-red');
      }
    });
  });

  //Disable Single
  $(document).on('click', '.buttonDisable', function () {
    event.preventDefault();
    var id = $(this).attr('id');

    slides.forEach(function (e) {
      if (e.title == id) {
        e.enabled = false;
      }
    });

    $(this).html('<i class="icon-ok-sign"></i><span>Enable</span>');
    $(this).removeClass('buttonDisable button-red').addClass('buttonEnable button-aqua');
  });

  //Disable All Visible Slides
  $(document).on('click', '#disableAll', function () {
    slides.forEach(function (e) {
      var slideParent = $('#' + e.title).parent();
      if ($(slideParent).is(':visible')) {
        e.enabled = false;

        $('#' + e.title).html('<i class="icon-ok-sign"></i><span>Enable</span>');
        $('#' + e.title).removeClass('buttonDisable button-red').addClass('buttonEnable button-aqua');
      }
    });
  });

  //Show and hide different languages of slides in the config screen
  $('.languageButton').click(function () {
    var l = $(this).attr('id');

    $('.languageButton').removeClass('active');
    $(this).addClass('active');

    if (l == 'showSpanish') {
      $('#configTable').hide("slow");
      $('#configTable-SPANISH').show("slow");
    } else if (l == 'showEnglish') {
      $('#configTable').show("slow");
      $('#configTable-SPANISH').hide("slow");
    } else if (l == "showAll") {
      $('#configTable').show("slow");
      $('#configTable-SPANISH').show("slow");
    }
  });

  $('#hiddenButton').featherlight('#configWrapper');

});

//Local Storage Extensions
Storage.prototype.getArray = function (arrayName) {
  var thisArray = [];
  var fetchArrayObject = this.getItem(arrayName);
  if (typeof fetchArrayObject !== 'undefined') {
    if (fetchArrayObject !== null) {
      thisArray = JSON.parse(fetchArrayObject);
    }
  }
  return thisArray;
}

Storage.prototype.pushArrayItem = function (arrayName, arrayItem) {
  var existingArray = this.getArray(arrayName);
  existingArray.push(arrayItem);
  this.setItem(arrayName, JSON.stringify(existingArray));
}

Storage.prototype.popArrayItem = function (arrayName) {
  var arrayItem = {};
  var existingArray = this.getArray(arrayName);
  if (existingArray.length > 0) {
    arrayItem = existingArray.pop();
    this.setItem(arrayName, JSON.stringify(existingArray));
  }
  return arrayItem;
}

Storage.prototype.shiftArrayItem = function (arrayName) {
  var arrayItem = {};
  var existingArray = this.getArray(arrayName);
  if (existingArray.length > 0) {
    arrayItem = existingArray.shift();
    this.setItem(arrayName, JSON.stringify(existingArray));
  }
  return arrayItem;
}

Storage.prototype.unshiftArrayItem = function (arrayName, arrayItem) {
  var existingArray = this.getArray(arrayName);
  existingArray.unshift(arrayItem);
  this.setItem(arrayName, JSON.stringify(existingArray));
}

Storage.prototype.deleteArray = function (arrayName) {
  this.removeItem(arrayName);
}

// Expanding local storage to deal with objects
Storage.prototype.setObj = function (key, obj) {
  return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function (key) {
  return JSON.parse(this.getItem(key))
}