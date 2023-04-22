<template>
    <HeaderApp />
    <main>
        <section v-if="!isLoading && !showResult" class="task">
            <RangeProgress :progress="currentQuestionIndex + 1" :maxProgress="questions.length" />
            <div>
                <h3 class="task__title">{{ questions[currentQuestionIndex].question }}</h3>
                <ul>
                    <li v-for="(answer, index) in answers" :key="index" class="task__option">
                        <input type="radio" :id="'value-' + index" :value="answer.value" v-model="selectedAnswer"  />
                        <label :for="'value-' + index">{{ answer.label }}</label>
                    </li>
                </ul>
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
</template>

<script>
import questionsData from "@/data/questionsData.js";
import HeaderApp from "@/components/HeaderApp.vue";
import LoaderPage from "@/components/TestPage/LoaderPage.vue";
import TestResult from "@/components/TestPage/TestResult.vue";
import RangeProgress from "@/components/TestPage/RangeProgress.vue";

export default {
    data() {
        return {
            currentQuestionIndex: 0,
            selectedAnswer: null,
            results:[],
            questions: questionsData,
            isLoading:false,
            showResult:false,
        };
    },
    components: {
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
        }
    },
};
</script>

<style lang="scss">
.task{
    height: calc(100vh - 46px);
    font-family: "PT Serif",sans-serif;
    letter-spacing: 0.05em;
    font-weight: 400;
    background-image: url('../assets/images/rain_bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position:center;
    color: white;

    &__title{
        font-size: 20px;
        line-height: 27px;
        margin: 36px auto;
    }

    &__option{
        font-size: 18px;
        padding: 15px 0;
    }
}
.next-button {
    font-family: "Merriweather",sans-serif;
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    border-radius: 20px;
    border: 0.0625rem solid #FFC700;
    cursor: pointer;
    padding: 12px 17px 11px;
    width: 189px;
    height: 41px;
    background-color: #FFC700;
    color: #0D0C11;
    margin: 0 auto;

    &:disabled {
        color: #8E8E8E;
        background-color: #DADADA;
        border-color: #8E8E8E;
        box-shadow: inset 0px 4px 10px rgba(0, 0, 0, 0.25);
    }
}
</style>