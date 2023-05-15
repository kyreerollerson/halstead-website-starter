

  var vm = new Vue({
    el: '.hws-quiz',
    computed: {
      points: function() {
        // private personal training
        var private_personal_training = 0;
        if (this.q2_answer == 'Private' && this.q4_answer != 'Money') {
          if (this.q1_answer == 'Tone Up')
            private_personal_training++;
          if (this.q1_answer == 'Lose Weight')
            private_personal_training++;
          if (this.q1_answer == 'Lose Weight')
            private_personal_training++;
          if (this.q1_answer == 'Gain Muscle/Gain Weight')
            private_personal_training++;
          if (this.q1_answer == 'Aesthetics')
            private_personal_training++;
          if (this.q1_answer == 'Performance')
            private_personal_training++;
          if (this.q3_answer == '1 Hour Per Month')
            private_personal_training--;
          if (this.q3_answer == '2 Hours Per Week')
            private_personal_training++;
          if (this.q3_answer == '3 Hours Per Week or More')
            private_personal_training++;
          if (this.q4_answer == 'Location')
            private_personal_training--;
          if (this.q5_answer == '3 Months')
            private_personal_training--;
        }
        // online personal training
        var online_personal_training = 0;
        if (this.q2_answer == 'Online') {
          if (this.q1_answer == 'Tone')
            online_personal_training++;
          if (this.q1_answer == 'Lose Weight')
            online_personal_training++;
          if (this.q1_answer == 'Lose Weight')
            online_personal_training++;
          if (this.q4_answer == 'Location' || this.q4_answer == 'Schedule')
            online_personal_training++;
          if (this.q5_answer == 'Location' || this.q4_answer == 'Schedule')
            online_personal_training++;
        }
        // weight loss program
        var weight_loss_program = 0;
        if (this.q1_answer == 'Tone')
          weight_loss_program++;
        if (this.q1_answer == 'Lose Weight')
          weight_loss_program++;
        if (this.q1_answer == 'Lose Weight')
          weight_loss_program++;
        if (this.q4_answer == 'Money')
          weight_loss_program--;
        if (this.q5_answer == '3 Months' || this.q5_answer == '6 Months')
          weight_loss_program++;
        // body back
        var body_back = 0;
        if (this.q1_answer == 'Aesthetics')
          body_back++;
        // nutrition
        var nutrition = 0;
        if (this.q1_answer == 'Lose Weight')
          nutrition++;
        if (this.q4_answer == 'Money' || this.q4_answer == 'Schedule')
          nutrition++;
        var metanoia = 0;
        if (this.q4_answer == 'Motivation')
          metanoia++;
        if (this.q4_answer == 'Money')
          metanoia--;
        // lonvevity
        var longevity = 0;
        if (this.q4_answer == 'Money')
          longevity++;
        if (this.q4_answer == 'Schedule')
          longevity++;
        // bot
        var bot = 0;
        if (this.q4_answer == 'Aches & Pains')
          bot++;
        if (this.q3_answer == '2 Hours Per Week' || this.q3_answer == '3 Hours Per Week or More')
          bot++;
        if (this.q4_answer == 'Schedule')
          bot--;
        return {
          private_personal_training: private_personal_training,
          online_personal_training: online_personal_training,
          weight_loss_program: weight_loss_program,
          body_back: body_back,
          metanoia: metanoia,
          longevity: longevity,
          bot: bot,
          nutrition: nutrition
        }
      },
      programs_to_show: function() {
        var to_show = [];
        var a = this;
        Object.keys(a.points).forEach(function(key)  {
          console.log(a)
          var program = a.points[key];
          if (program > 0) 
            to_show.push(a.programs[key]);
        });
        if (to_show.length == 0) {
          to_show = [
            a.programs.private_personal_training,
            a.programs.weight_loss_program,
            a.programs.nutrition
          ];
        }
        return to_show;
      },
      disabled: function() {
        return this.q1_answer == '' || this.q2_answer == '' || this.q3_answer == '' || this.q4_answer == '' || this.q5_answer == '';
      }
    },
    data: function () {
      return {
        submitted: false,
        q1_opts: [
          'Tone Up',
          'Lose Weight',
          'Gain Muscle/Gain Weight',
          'Aesthetics',
          'Performance'
        ],
        q2_opts: [
          'Private',
          'Online'
        ],
        q3_opts: [
          '1 Hour Per Month',
          '1 Hour Per Week',
          '2 Hours Per Week',
          '3 Hours Per Week or More'
        ],
        q4_opts: [
          'Money',
          'Location',
          'Schedule',
          'Motivation',
          'Aches & Pains'
        ],
        q5_opts: [
          '3 Months',
          '6 Months',
          'Long Term (12+ Months)'
        ],
        q1_answer: '',
        q2_answer: '',
        q3_answer: '',
        q4_answer: '',
        q5_answer: '',
        programs: {
          private_personal_training: {
            img: `${wp_vars.template_uri}/images/programs/ppt.jpg`,
            title: 'Private Personal Training',
            description: "Guided, professional training programs tailored to you and your goals, right here in our Edmond, OK gym. Just you and the trainer.",
            link: `${wp_vars.site_url}/programs/private-personal-training/`
          },
          online_personal_training: {
            img: `${wp_vars.template_uri}/images/programs/opt.jpg`,
            title: 'Online Personal Training',
            description: "Can't make it to our gym? Don't var that stop you. Our Online Personal Training accommodates your schedule and your workout resources.",
            link: `${wp_vars.site_url}/programs/online-personal-training/`
          },
          weight_loss_program: {
            img: `${wp_vars.template_uri}/images/programs/wlp.jpg`,
            title: 'Weight-Loss Program',
            description: "For results-driven weight-loss, look no further. Our Weight-Loss Program, offered in 3- or 6-month spans, gets you where you want to be.",
            link: `${wp_vars.site_url}/programs/weight-loss-program/`
          },
          body_back: {
            img: `${wp_vars.template_uri}/images/programs/bb.jpg`,
            title: 'Body Back',
            description: "Our Body Back program comprises several services that help sculpt your body, remove blemishes and fat, and give you back your confidence.",
            link: `${wp_vars.site_url}/programs/body-back/`
          },
          metanoia: {
            img: `${wp_vars.template_uri}/images/programs/mtn.jpg`,
            title: 'Metanoia',
            description: "Metanoia will help you overcome mental barriers, and emerge with a new sense of clarity and self-awareness. You'll spend an hour each week for three weeks with Charlie. It's a tough journey, but a worthwhile one.",
            link: `${wp_vars.site_url}/programs/metanoia/`
          },
          longevity: {
            img: `${wp_vars.template_uri}/images/programs/lg.jpg`,
            title: 'Longevity',
            description: "We all want to live as comfortably and as healthy as possible, and our Longevity Program helps you to do that. Learn techniques and fitness regiments that will allow you to age gracefully and minimize future health problems.",
            link: `${wp_vars.site_url}/programs/longevity/`
          },
          bot: {
            img: `${wp_vars.template_uri}/images/programs/bot.jpg`,
            title: 'Body Optimization',
            description: "Mitigate or clear-up existing aches and pains and prevent new ones with our Body Optimization. It's the sort of body maintenance that will pay dividends for years.",
            link: `${wp_vars.site_url}/programs/body-optimization/`
          },
          nutrition: {
            img: `${wp_vars.template_uri}/images/programs/ntn.jpg`,
            title: 'Nutrition Coaching',
            description: "Our Nutrition Coaching works with you and your palate to find foods you enjoy, then sets you up for a new mindset around food and eating.",
            link: `${wp_vars.site_url}/programs/nutrition/`
          },
        }
      }
    },
    methods: {
      submit: function() {
        this.submitted = true;
      },
      reset: function() {
        this.submitted = false;
        this.q1_answer = this.q2_answer = this.q3_answer = this.q4_answer = this.q5_answer = '';
      }
    }
  })
