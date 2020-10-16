<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>This assignment is my submission for the frontend assessment at MatchWornShirt. The aim of the assignment was to build an interface that would provide an overview into american college football events.
    </p>

    <p>I have used Vue.js and Typescript to build my interface. Despite being familiar with Vue, there was still some overhead with the release of Vue 3; I regularly ran into type inference issues for my props when attempting to
      bind them to my custom interfaces. Nevertheless it is still much better to use TS with Vue 3 than 2.
    </p>

    <p>This interface is far from optimized, with severe loading times and a high "time till interactivity". The API endpoints (and accepted parametersposed some serious limitations for relatively basic things, for example fetching the image sources or a single team from the team list. Despite this,
      I believe this application showcases my understanding of fundamental Javascript, HTML & Basic CSS principles, and application structuring overall. I used only vanilla CSS since there are currently no stable releases of major CSS component frameworks for Vue 3 and also as a personal challenge.
      Implementing pagination with something like Buefy or Vuetify would be no problem if this weren't the case.
    </p>

    <p>Things I thought I did well were:
      <ul>
        <li>The dynamic seasonal stats for teams</li>
        <li>The iteration of the StatComparison component considering how the TeamStat interface is modeled after the API's JSON</li>
        <li>The home page team cards, albeit no pagination</li>
      </ul>
    </p>

    <p>There are limitations to this app which given the time and professional setting I would happily address such as:
      <ul>
        <li>Not load an entire GameDetails page for games scheduled in the future since this breaks the StatComparison components and causes the page to not load.</li>
        <li>Add a Conference page to further filter teams and improve browsing experience.</li>
        <li>Add custom search filters for teams.</li>
        <li>Finetune the CSS across all pages.</li>
      </ul>
    </p>
  </div>
</template>
<style lang="scss" scoped>
.about {
  display: grid;
  margin: 0 auto;
  text-align: justify;
  width: 90%;
}
</style>
