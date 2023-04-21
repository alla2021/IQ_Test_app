<template>
  <section class="blockquote-block">
        <div class="blockquote-block__content">
            <img src="../../assets/images/quote-l.svg" alt="quote-left" class="blockquote-block__quote blockquote-block__quote-left">
            <blockquote class="blockquote-block__text" >
                Профессиональный IQ-тест позволяет не только определить коэффициент вашего интеллекта, но и выработать список рекомендаций для повышения этого показателя.
            </blockquote>
            <img src="../../assets/images/quote-r.svg" alt="quote-right" class="blockquote-block__quote blockquote-block__quote-right">
        </div>
  </section>
</template>

<script>
export default {
    name: "BlockquoteBlock"
}
</script>

<style scoped lang="scss">

.blockquote-block{
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 339px;
    background-image: url('../../assets/images/bg-blockquote-block.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    text-align: center;

  &__content {
    max-width: 248px;
    position: relative;
  }

  &__text{
    font-family: "Yeseva One",sans-serif;
    font-size: 18px;
    line-height: 23px;
    text-align: center;
    letter-spacing: 0.05em;
    color: #FFFFFF;
    margin: 0;
  }

   &__quote {
     width: 23px;
     height: 23px;
     position: absolute;

     &-left{
       top: -34px;
       left: -10px;
     }

     &-right {
       bottom: -30px;
       right: -5px;
     }
  }
}
</style>