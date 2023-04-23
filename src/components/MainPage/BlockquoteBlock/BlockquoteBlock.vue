<template>
  <section class="blockquote-block">
        <div class="blockquote-block__content">
            <img src="../../../assets/images/quote-l.svg" alt="quote-left" class="blockquote-block__quote blockquote-block__quote-left">
            <blockquote class="blockquote-block__text" >
                Профессиональный IQ-тест позволяет не только определить коэффициент вашего интеллекта, но и выработать список рекомендаций для повышения этого показателя.
            </blockquote>
            <img src="../../../assets/images/quote-r.svg" alt="quote-right" class="blockquote-block__quote blockquote-block__quote-right">
        </div>
  </section>
</template>

<script>
export default {
    name: "BlockquoteBlock"
}
</script>

<style scoped lang="scss">
  @import "@/components/MainPage/BlockquoteBlock/blockquote-block.scss";
</style>