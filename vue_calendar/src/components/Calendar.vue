<template>
    <div>
        <div>风影的日历组件</div>
        <div>{{today}}</div>
        <div class="c-main">
        <div>
            <div class="pn">&lt; </div> 
            <div class="nowmonth">当前月份: {{currentMonth}}</div>
            <div class="pn"  @click="pickNext(currentYear,currentMonth)">&gt;</div> 
        </div>
        <ul>
            <li v-for = "w in weekdate" :key="w" >
                
                {{w}}
            </li>
        </ul>
        <div class="date-div">
            <a href="javascript:" v-for="d in days">{{d}}</a>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Calendar',
        data(){
            return{
                weekdate:['日','一','二','三','四','五','六'],
                today:"",//不属于日历主功能
                currentYear:0,
                currentMonth:0,
                currentWeek:0,
                currentDay:0,
                 
                days:[],
                daynum :42

                //initdatestr:""
                

            }
           


        },
        computed:{//计算属性
          
        },
        create(){
            
            
        },
        mounted() {//挂载后执行
            console.log("挂载完成")
            this.updatenow();
            
           // this.init()
            
            this.getCalendar(null)
            
           
        },
        watch:{//脏值检测
            
        },
        methods:{
            init:function(){
                //初始化日期
                let now = new Date();
                this.currentYear = now.getFullYear();
                this.currentMonth = now.getMonth()+2;
                 

            },
            getCalendar:function(cur){
                
                let date;
                

                if (cur) {
                    date = new Date(cur);
                } else {
                    let now=new Date();//当前的日期
                    //var d = new Date(this.getDateStr(now.getFullYear() , now.getMonth()+1 , 1));
                    //var d = new Date("2018-03-01")
                    //d.setDate(42);
                   
                    //date = new Date(this.getDateStr(d.getFullYear(),d.getMonth() + 1,1));
                    date = new Date(this.getDateStr(now.getFullYear(),now.getMonth() + 1,1));
                    //返回的是2018-03-01
                }
                this.currentDay = date.getDate();
                this.currentYear = date.getFullYear();
                this.currentMonth = date.getMonth() + 1;

                this.currentWeek = date.getDay(); // 1...6,0
                if (this.currentWeek == 0) {
                    this.currentWeek = 7;
                }
                let str = this.getDateStr(this.currentYear , this.currentMonth, this.currentDay);
                this.days.length = 0;//填充日期前清空数组
                
                 
                //初始化本周
                for (var i = this.currentWeek;  i >= 1; i--) {
                    
                    let thisweekdate = new Date(str)
                    thisweekdate.setDate(thisweekdate.getDate() - i);
                  
                   
                    if(this.currentWeek<7){
                        this.days.push(thisweekdate.getDate()); 
                    }


                }
                //其他周
                

                if(this.currentWeek<7){
                    for (var i = 0; i <= 42 - this.currentWeek-1; i++) {
                        console.log(this.currentWeek)
                        var d = new Date(str);
                        
                        d.setDate(d.getDate() + i);
                        
                        this.days.push(d.getDate());
                    }
                }
                else{
                   for (var i = 0; i <= 42+7 - this.currentWeek-1; i++) {
                        console.log(this.currentWeek)
                        var d = new Date(str);
                        
                        d.setDate(d.getDate() + i);
                        
                       this.days.push(d.getDate());
                    } 
                }

            },
            updatenow:function(){
                let self = this

                setInterval(function(){
                     
                    let tmpdate = new Date()
                    self.today = tmpdate
                },1000)
            },
            pickNext:function(year,month){
                 var d = new Date(this.getDateStr(year , month , 1));
                d.setDate(42);
                this.getCalendar(this.getDateStr(d.getFullYear(),d.getMonth() + 1,1));
            },
            getDateStr:function(year,month,day){
                
                month<10 ?month="0"+month :month
                if(day){
                    day<10 ?day="0"+day :day
                }
                
                let datestr = day?year+"-"+month+"-"+day:year+"-"+month+"-"+"01"
                 
                return datestr

            }
        }
        
        
    }
</script>

<style scoped>
*{margin:0 auto; padding: 0}
.c-main{width: 215px;height:150px;margin:0 auto}
.c-main ul{width:100%;height:30px;float:left; list-style:none;border-bottom: 1px #d1d1d1 solid}
.c-main ul li{float:left;width:30px}
.c-main .date-div{width: 100%;height: 200px;border-bottom: solid #d1d1d1  1px}
.date-div a{width:30px;height:25px;display: block; color: #000; text-decoration: none;float: left}
.nowmonth{float:left; width: 185px; text-align: center}
.pn{float: left;cursor: pointer}
.pn:hover{text-decoration: underline}
.fbtn{width: 45px; height: 20px;  display:inline-block }
</style>
