<?php
$id = $component['id'] ?: hws_generate_id();
?>

<div id="<?= $id ?>" class="hws-quiz hws-block--padded">
  <div class="hws-container--large">
    <div class="hws-quiz__questions" v-if="!submitted">
      <h2>Please answer the following questions</h2>
      <!-- q1 -->
      <div class="hws-quiz__form-group">
        <label for="q1">What is your goal? <span>*</span></label>
        <label v-for="option in q1_opts">
          <input type="radio" v-model="q1_answer" :value="option" /> {{ option }}
        </label>
      </div>
      <!-- q2 -->
      <div class="hws-quiz__form-group">
        <label for="q2">What type of setting are you looking for? <span>*</span></label>
        <label v-for="option in q2_opts">
          <input type="radio" v-model="q2_answer" :value="option" /> {{ option }}
        </label>
      </div>
      <!-- q3 -->
      <div class="hws-quiz__form-group">
        <label for="q3">How much time are you willing to dedicate toward your goal? <span>*</span></label>
        <label v-for="option in q3_opts">
          <input type="radio" v-model="q3_answer" :value="option" /> {{ option }}
        </label>
      </div>
      <!-- q4 -->
      <div class="hws-quiz__form-group">
        <label for="q4">What is your biggest obstacle for getting started? <span>*</span></label>
        <label v-for="option in q4_opts">
          <input type="radio" v-model="q4_answer" :value="option" /> {{ option }}
        </label>
      </div>
      <!-- q5 -->
      <div class="hws-quiz__form-group">
        <label for="q5">What's your time frame for accomplishing your goal? <span>*</span></label>
        <label v-for="option in q5_opts">
          <input type="radio" v-model="q5_answer" :value="option" /> {{ option }}
        </label>
      </div>
      <!-- button container --> 
      <div class="hws-quiz__button-container">
        <a href="#" @click.prevent="submit" class="hws-button hws-button--black" :disabled="disabled">Submit</a>
      </div>
    </div>
    <div class="hws-quiz__results" v-if="submitted">
      <h2>We Think You Might Like These Lion Programs</h2>
      <div class="hws-quiz__results__button-container">
        <a href="#" @click.prevent="reset" class="hws-button hws-button--black">Reset</a>
      </div>
      <div class="hws-quiz__results__flex" :data-count="programs_to_show.length">
        <div v-for="program in programs_to_show" class="hws-quiz__results__flex__single">
          <div class="hws-quiz__results__flex__single__image" :style="{ backgroundImage: 'url(' + program.img + ')' }"></div>
          <h3>{{ program.title }}</h3>
          <p class="hws-quiz__results__flex__single__description">
            {{ program.description }}
          </p>
          <div class="hws-quiz__results__flex__single__button-container">
            <a class="hws-button hws-button--black" :href="program.link" target="_blank">Explore</a>
          </div>
        </div>
      </div>
  </div>
</div>