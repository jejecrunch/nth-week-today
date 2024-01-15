<template>
  <header>
    <h3 id="date">{{ nowTime }}</h3>
  </header>
  <article class="wrapper">
    <div id="l1"><h2>오늘은 올해의<p><span id="week">{{ weeks }}</span>주차</p></h2></div>
    {{ "\n" }}
    <div id="l2"><p id="secondLine">1월 1일로부터 <span id="fewDayPassed">{{ past_day }}</span>일 지남</p></div>
    <div id="l3"><p id="secondLine">12월 31일까지 <span id="fewDayLeft">{{ future_day }}</span>일 남음</p></div>
  </article>
  <footer>
    <a href="https://github.com/jejecrunch" target="_blank">jejecrunch</a> all rights reserved. Copyright 2024.
  </footer>
</template>
 
<script>
export default {
  
  data() {
    return {
      nowTime: "",
      weeks: "",
      past_day: "",
      future_day: "",
    };
  },
  created() {
    const now = new Date();
    const [year, month, date] = [now.getFullYear(), now.getMonth()+1, now.getDate()]
    const [hour, minute, second] = [now.getHours(), now.getMinutes(), now.getSeconds()]

    this.timestamp = `${year}년 ${month}월 ${date}일 ${hour < 9 ? "0"+hour:hour}:${minute < 9 ? "0"+minute:minute}:${second < 9 ? "0"+second:second}`;

    this.setDate();
    const oneJan = new Date(now.getFullYear(),0,1);
    const numberOfDays = Math.floor((now - oneJan) / (24 * 60 * 60 * 1000));
    const result = Math.ceil(( now.getDay() + 1 + numberOfDays) / 7);
    this.weeks = result

    this.past_day = Math.abs(Math.ceil((now.getTime()-oneJan.getTime())/(1000 * 3600 * 24)));
    this.future_day = 365 - this.past_day

    setInterval(this.nowTimes.bind(this), 1000)
  },
  methods: {
      getDayToKor(n) {
        const weekList = new Array("일", "월", "화", "수", "목", "금", "토");
        return weekList[n];
      },
      setDate(){
        const now = new Date();
        const year = now.getFullYear()
        const month = now.getMonth() + 1
        let date = now.getDate()
        const day = this.getDayToKor(now.getDay());
        let hh = now.getHours()
        let mm = now.getMinutes()
        let ss = now.getSeconds() < 10 ? "0"+now.getSeconds():now.getSeconds()
      return {
             'year' : year
             , 'month' : month
             , 'date' : date
             , 'day' : day
             , 'hh' : hh
             , 'mm' : mm
             , 'ss' : ss
      }
      },
      nowTimes(){
          this.nowTime = this.setDate().year + "년 " + this.setDate().month + "월 " + this.setDate().date + "일 " + this.setDate().day + "요일 "+ this.setDate().hh + "시 " + this.setDate().mm + "분 " + this.setDate().ss + "초";
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
    margin: 0 1.8em;
    margin-top: 1em;
}
article {
    padding: 2em;
    border: 0.4em solid rgba(255,255,255,5)
}
footer {
  margin-top: 1em;
  text-align: center;
}
footer a {
  color: #eee;
  font-weight: 700;
}
.wrapper {
    max-width: 20em;
    margin: 2em auto 0 auto;
    line-height : 1;
    box-sizing: border-box;
}
#l1 {
    text-align: center;
    margin-bottom: 5em;
}
#l2, #l3 {
    font-size: 0.8em;
}
h2 {
    font-size: 2em;
}
h3 {
  margin: 40px 0 0;
}
#secondLine {
    text-align: right;
    font-size: 1.5em;
}
#week {
    text-align: center;
    font-size: 2.5em;
    color: white;
    font-weight: bold;
    line-height: 1;
}
#fewDayPassed, #fewDayLeft {
    text-align: center;
    font-size: 1.2em;
    color: white;
    font-weight: bold;
    line-height: 1;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
