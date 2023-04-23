<template>
    <HeaderApp />
    <main >
        <section v-if="!isLoading && !showResult" class="task">
            <RangeProgress :progress="currentQuestionIndex + 1" :maxProgress="questions.length" />
            <div class="task__wrapper">
                <h3 class="task__title">{{ questions[currentQuestionIndex].question }}</h3>
                <div v-if="questions[currentQuestionIndex].img"  class="task__image-wrapper">
                    <img class="task__image" :src="require(`@/assets/images/test-img/${questions[currentQuestionIndex].imgSrc}`)" :alt="questions[currentQuestionIndex].imgSrc">
                </div>
                    <div class="task__options-wrapper">
                        <ul v-if="questions[currentQuestionIndex].type === 'text-task'" class="task__text-task">
                            <li v-for="(answer, index) in answers" :key="index" class="task__item" :class="{ 'active': selectedAnswer === answer.value }" @click="selectedAnswer = answer.value">
                                <input type="radio" :id="'value-' + index" :value="answer.value" v-model="selectedAnswer" />
                                <label :for="'value-' + index" class="radio-label"></label>
                                <label :for="'value-' + index">{{ answer.label }}</label>
                            </li>
                        </ul>
                        <ul v-if="questions[currentQuestionIndex].type === 'pick-image'" class="task__pick-image">
                            <li v-for="(answer, index) in answers" :key="index" :class="{ 'active': selectedAnswer === answer.value }" class="task__pick-number" :style="{ width: '44px', height: '41px' }">
                                <input type="radio" :id="'value-' + index" :value="answer.value" v-model="selectedAnswer" style="display: none;" />
                                <label :for="'value-' + index" class="radio-label"></label>
                                <label :for="'value-' + index" class="answer-label">{{ answer.label }}</label>
                            </li>
                        </ul>
                        <ul v-if="questions[currentQuestionIndex].type === 'pick-color'" class="task__color-picker">
                            <li v-for="(answer, index) in answers" :key="index" :class="{ 'active': selectedAnswer === answer.value }" class="task__color-box" :style="{ backgroundColor: answer.value, width: '75px', height: '75px' }">
                                <label :for="'value-' + index" class="radio-label">
                                    <input type="radio" :id="'value-' + index" :value="answer.value" v-model="selectedAnswer" />
                                </label>
                                <label :for="'value-' + index" class="answer-label"></label>
                            </li>
                        </ul>
                    </div>
                </div>
            <button class="next-button" @click="nextQuestion" :disabled="isButtonDisabled">Далее</button>
        </section>
        <div v-if="isLoading">
            <LoaderPage />
        </div>
        <div v-if="showResult && !isLoading">
            <TestResult :results="results" />
        </div>
    </main>
    <div v-if="showResult && !isLoading">
        <FooterTestPage/>
    </div>
</template>

<script>
import questionsData from "@/data/questionsData.js";
import HeaderApp from "@/components/HeaderApp/HeaderApp.vue";
import LoaderPage from "@/components/TestPage/LoaderPage/LoaderPage.vue";
import TestResult from "@/components/TestPage/TestResult/TestResult.vue";
import RangeProgress from "@/components/TestPage/RangeProgress/RangeProgress.vue";
import FooterTestPage from "@/components/TestPage/FooterTestPage.vue";

export default {
    data() {
        return {
            currentQuestionIndex: 0,
            selectedAnswer: null,
            results:[],
            questions: questionsData,
            isLoading:false,
            showResult:false,
            fetchedData: [],
        };
    },
    components: {
        FooterTestPage,
        TestResult,
        LoaderPage,
        HeaderApp,
        RangeProgress,
    },
    computed: {
        question() {
            return this.questions[this.currentQuestionIndex].text;
        },
        answers() {
            return this.questions[this.currentQuestionIndex].answers;
        },
        isButtonDisabled() {
            return !this.selectedAnswer;
        },
        allQuestionsAnswered() {
            return this.questions.every(question => question.userAnswer);
        },
    },
    methods: {
        nextQuestion() {
            this.saveSelectedAnswer();
            this.goToNextQuestion();
            this.checkAllQuestionsAnswered();
        },
        saveSelectedAnswer() {
            const selectedAnswerObj = {
                id: this.questions[this.currentQuestionIndex].id,
                value: this.selectedAnswer,
            };
            if (this.questions[this.currentQuestionIndex]) {
                this.questions[this.currentQuestionIndex].userAnswer = this.selectedAnswer;
                this.results.push(selectedAnswerObj);
                this.selectedAnswer = null;
            }
        },
        goToNextQuestion() {
            if (this.currentQuestionIndex < this.questions.length - 1) {
                this.currentQuestionIndex++;
            }
        },
        checkAllQuestionsAnswered() {
            if (this.allQuestionsAnswered && this.currentQuestionIndex === this.questions.length - 1) {
                this.isLoading = true;
                setTimeout(() => {
                    this.isLoading = false;
                    this.showResult = true;
                }, 5000);
            }
        },
    },
};
</script>

<style scoped lang="scss">
    @import "@/pages/TestPage/test-page.scss";
</style>