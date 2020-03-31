var calculator = new Vue({
	el: '#calculator',
	data: {
		diametrDel: '80',
		ugol: '21',
		modul: '3',
		stepen: '8',
		vidsopr:'2',
		vidzazor:'2',
		rate: '',
		calcPayment: '',
		ishVidsopr:'H',
		ishStepPlavn:'7',
		//диапазоны углов
		grug1:'20',
		grug2:'45',
		//границы делительного диаметра
		grdDel125:'125',
		grdDel400:'400',
		grdDel800:'800',
		grdDel1000:'1000',
        grdDel1600:'1600',
        grdDel2500:'2500',
        grdDel4000:'4000',
		//диапазон границ модулей
		granm3_5:'3.5',
		granm6_3:'6.3',
		granm10:'10',
		granm16:'16',
		granm25:'25',
        granm40:'40',
        granm50:'55'
	},
	computed: {
        Tsc:function(){//Вычисляемое свойство для Tsc
          var Fr;   //допуск на радиальное биение
          var Tsc_rezult;  // допсук на среднюю  постоянную хорду
          switch (this.stepen){
            case '4':  //для четвертой степени точности
              if(this.diametrDel<=this.grdDel125){
                if(this.modul<=this.granm3_5){Fr=10;}
                if((this.granm3_5<this.modul)&&(this.modul<this.granm6_3)){Fr=11;}
                if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Fr=13;}
              }
              if((this.grdDel125<this.diametrDel)&&(this.diametrDel<=this.grdDel400)){
                if(this.modul<=this.granm3_5){Fr=15;}
                if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Fr=16;}
                if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Fr=18;}
              }
              if((this.grdDel400<this.diametrDel)&&(this.diametrDel<=this.grdDel800)){
                if(this.modul<=this.granm3_5){Fr=18;}
                if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Fr=20;}
                if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Fr=22;}
              }
              if((this.grdDel800<this.diametrDel)&&(this.diametrDel<=this.grdDel1600)){
                if(this.modul<=this.granm3_5){Fr=0;}
                if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Fr=22;}
                if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Fr=25;}
              }
              if((this.grdDel1600<this.diametrDel)&&(this.diametrDel<=this.grdDel2500)){
                if(this.modul<=this.granm3_5){Fr=0;}
                if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Fr=0;}
                if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Fr=28;}
              }
              if((this.grdDel2500<this.diametrDel)&&(this.diametrDel<=this.grdDel4000)){
                if(this.modul<=this.granm3_5){Fr=0;}
                if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Fr=0;}
                if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Fr=0;}
              }
              break;
          }
          switch (this.stepen){//для пятой степени точности
            case '5':
              if(this.diametrDel<=this.grdDel125){
                if(this.modul<=this.granm3_5){Fr=16;}
                if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Fr=18;}
                if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Fr=20;}
                if((this.granm10<this.modul)&&(this.modul<=this.granm16)){Fr=22;}
              }
              if((this.grdDel125<this.diametrDel)&&(this.diametrDel<=this.grdDel400)){
                if(this.modul<=this.granm3_5){Fr=22;}
                if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Fr=25;}
                if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Fr=28;}
                if((this.granm10<this.modul)&&(this.modul<=this.granm16)){Fr=32;}
              }
              if((this.grdDel400<this.diametrDel)&&(this.diametrDel<=this.grdDel800)){
                if(this.modul<=this.granm3_5){Fr=28;}
                if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Fr=32;}
                if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Fr=36;}
                if((this.granm10<this.modul)&&(this.modul<=this.granm16)){Fr=40;}
              }
              if((this.grdDel800<this.diametrDel)&&(this.diametrDel<=this.grdDel1600)){
                if(this.modul<=this.granm3_5){Fr=0;}
                if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Fr=36;}
                if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Fr=40;}
                if((this.granm10<this.modul)&&(this.modul<=this.granm16)){Fr=45;}
              }
              if((this.grdDel1600<this.diametrDel)&&(this.diametrDel<=this.grdDel2500)){
                if(this.modul<=this.granm3_5){Fr=0;}
                if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Fr=0;}
                if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Fr=45;}
                if((this.granm10<this.modul)&&(this.modul<=this.granm16)){Fr=50;}
              }
              if((this.grdDel2500<this.diametrDel)&&(this.diametrDel<=this.grdDel4000)){
                if(this.modul<=this.granm3_5){Fr=0;}
                if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Fr=0;}
                if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Fr=0;}
                if((this.granm10<this.modul)&&(this.modul<=this.granm16)){Fr=56;}
              }
              break;
          }
           switch (this.stepen){//для шестой степени точности
            case '6':
              if(this.diametrDel<=this.grdDel125){
                if(this.modul<=this.granm3_5){Fr=25;}
                if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Fr=28;}
                if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Fr=32;}
                if((this.granm10<this.modul)&&(this.modul<=this.granm16)){Fr=36;}
              }
              if((this.grdDel125<this.diametrDel)&&(this.diametrDel<=this.grdDel400)){
                if(this.modul<=this.granm3_5){Fr=36;}
                if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Fr=40;}
                if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Fr=45;}
                if((this.granm10<this.modul)&&(this.modul<=this.granm16)){Fr=50;}
              }
              if((this.grdDel400<this.diametrDel)&&(this.diametrDel<=this.grdDel800)){
                if(this.modul<=this.granm3_5){Fr=45;}
                if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Fr=50;}
                if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Fr=56;}
                if((this.granm10<this.modul)&&(this.modul<=this.granm16)){Fr=63;}
              }
              if((this.grdDel800<this.diametrDel)&&(this.diametrDel<=this.grdDel1600)){
                if(this.modul<=this.granm3_5){Fr=0;}
                if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Fr=56;}
                if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Fr=63;}
                if((this.granm10<this.modul)&&(this.modul<=this.granm16)){Fr=71;}
              }
              if((this.grdDel1600<this.diametrDel)&&(this.diametrDel<=this.grdDel2500)){
                if(this.modul<=this.granm3_5){Fr=0;}
                if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Fr=0;}
                if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Fr=71;}
                if((this.granm10<this.modul)&&(this.modul<=this.granm16)){Fr=80;}
              }
              if((this.grdDel2500<this.diametrDel)&&(this.diametrDel<=this.grdDel4000)){
                if(this.modul<=this.granm3_5){Fr=0;}
                if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Fr=0;}
                if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Fr=0;}
                if((this.granm10<this.modul)&&(this.modul<=this.granm16)){Fr=90;}
              }
              break;
          }
          switch (this.stepen){//для седьмой степени точности
            case '7':
              if(this.diametrDel<=this.grdDel125){
                if(this.modul<=this.granm3_5){Fr=36;}
                if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Fr=40;}
                if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Fr=45;}
                if((this.granm10<this.modul)&&(this.modul<=this.granm16)){Fr=50;}
                if((this.granm16<this.modul)&&(this.modul<=this.granm25)){Fr=60;}
              }
              if((this.grdDel125<this.diametrDel)&&(this.diametrDel<=this.grdDel400)){
                if(this.modul<=this.granm3_5){Fr=50;}
                if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Fr=56;}
                if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Fr=63;}
                if((this.granm10<this.modul)&&(this.modul<=this.granm16)){Fr=71;}
                if((this.granm16<this.modul)&&(this.modul<=this.granm25)){Fr=80;}
              }
              if((this.grdDel400<this.diametrDel)&&(this.diametrDel<=this.grdDel800)){
                if(this.modul<=this.granm3_5){Fr=63;}
                if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Fr=71;}
                if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Fr=80;}
                if((this.granm10<this.modul)&&(this.modul<=this.granm16)){Fr=90;}
                if((this.granm16<this.modul)&&(this.modul<=this.granm25)){Fr=100;}
              }
              if((this.grdDel800<this.diametrDel)&&(this.diametrDel<=this.grdDel1600)){
                if(this.modul<=this.granm3_5){Fr=0;}
                if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Fr=80;}
                if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Fr=90;}
                if((this.granm10<this.modul)&&(this.modul<=this.granm16)){Fr=100;}
                if((this.granm16<this.modul)&&(this.modul<=this.granm25)){Fr=112;}
              }
              if((this.grdDel1600<this.diametrDel)&&(this.diametrDel<=this.grdDel2500)){
                if(this.modul<=this.granm3_5){Fr=0;}
                if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Fr=0;}
                if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Fr=100;}
                if((this.granm10<this.modul)&&(this.modul<=this.granm16)){Fr=112;}
                if((this.granm16<this.modul)&&(this.modul<=this.granm25)){Fr=125;}
              }
              if((this.grdDel2500<this.diametrDel)&&(this.diametrDel<=this.grdDel4000)){
                if(this.modul<=this.granm3_5){Fr=0;}
                if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Fr=0;}
                if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Fr=0;}
                if((this.granm10<this.modul)&&(this.modul<=this.granm16)){Fr=125;}
                if((this.granm16<this.modul)&&(this.modul<=this.granm25)){Fr=140;}
              }
              break;
          }
          switch (this.stepen){//для восьмой степени точности
            case '8':
              if(this.diametrDel<=this.grdDel125){
                if(this.modul<=this.granm3_5){Fr=45;}
                if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Fr=50;}
                if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Fr=56;}
                if((this.granm10<this.modul)&&(this.modul<=this.granm16)){Fr=63;}
                if((this.granm16<this.modul)&&(this.modul<=this.granm25)){Fr=75;}
                if((this.granm25<this.modul)&&(this.modul<=this.granm40)){Fr=0;}  
                if((this.granm40<this.modul)&&(this.modul<=this.granm55)){Fr=0;} 
              }
              if((this.grdDel125<this.diametrDel)&&(this.diametrDel<=this.grdDel400)){
                if(this.modul<=this.granm3_5){Fr=63;}
                if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Fr=71;}
                if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Fr=80;}
                if((this.granm10<this.modul)&&(this.modul<=this.granm16)){Fr=90;}
                if((this.granm16<this.modul)&&(this.modul<=this.granm25)){Fr=100;}
                if((this.granm25<this.modul)&&(this.modul<=this.granm40)){Fr=120;}   
                 if((this.granm40<this.modul)&&(this.modul<=this.granm55)){Fr=0;} 
              }
              if((this.grdDel400<this.diametrDel)&&(this.diametrDel<=this.grdDel800)){
                if(this.modul<=this.granm3_5){Fr=80;}
                if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Fr=90;}
                if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Fr=100;}
                if((this.granm10<this.modul)&&(this.modul<=this.granm16)){Fr=112;}
                if((this.granm16<this.modul)&&(this.modul<=this.granm25)){Fr=125;}
                if((this.granm25<this.modul)&&(this.modul<=this.granm40)){Fr=140;}   
                 if((this.granm40<this.modul)&&(this.modul<=this.granm55)){Fr=170;} 
              }
              if((this.grdDel800<this.diametrDel)&&(this.diametrDel<=this.grdDel1600)){
                if(this.modul<=this.granm3_5){Fr=0;}
                if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Fr=100;}
                if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Fr=112;}
                if((this.granm10<this.modul)&&(this.modul<=this.granm16)){Fr=125;}
                if((this.granm16<this.modul)&&(this.modul<=this.granm25)){Fr=140;}
                if((this.granm25<this.modul)&&(this.modul<=this.granm40)){Fr=160;}  
                 if((this.granm40<this.modul)&&(this.modul<=this.granm55)){Fr=190;} 
              }
              if((this.grdDel1600<this.diametrDel)&&(this.diametrDel<=this.grdDel2500)){
                if(this.modul<=this.granm3_5){Fr=0;}
                if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Fr=0;}
                if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Fr=125;}
                if((this.granm10<this.modul)&&(this.modul<=this.granm16)){Fr=140;}
                if((this.granm16<this.modul)&&(this.modul<=this.granm25)){Fr=160;}
                if((this.granm25<this.modul)&&(this.modul<=this.granm40)){Fr=190;}  
                 if((this.granm40<this.modul)&&(this.modul<=this.granm55)){Fr=220;} 
              }
              if((this.grdDel2500<this.diametrDel)&&(this.diametrDel<=this.grdDel4000)){
                if(this.modul<=this.granm3_5){Fr=0;}
                if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Fr=0;}
                if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Fr=0;}
                if((this.granm10<this.modul)&&(this.modul<=this.granm16)){Fr=160;}
                if((this.granm16<this.modul)&&(this.modul<=this.granm25)){Fr=180;}
                if((this.granm25<this.modul)&&(this.modul<=this.granm40)){Fr=224;}
                 if((this.granm40<this.modul)&&(this.modul<=this.granm55)){Fr=240;} 
              }
              break;
          }
          switch (this.stepen){//для девятой степени точности
            case '9':
               if(this.diametrDel<=this.grdDel125){
                if(this.modul<=this.granm3_5){Fr=56;}
                if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Fr=63;}
                if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Fr=71;}
                if((this.granm10<this.modul)&&(this.modul<=this.granm16)){Fr=80;}
                if((this.granm16<this.modul)&&(this.modul<=this.granm25)){Fr=95;}
                if((this.granm25<this.modul)&&(this.modul<=this.granm40)){Fr=0;} 
                if((this.granm40<this.modul)&&(this.modul<=this.granm55)){Fr=0;} 
              }
              if((this.grdDel125<this.diametrDel)&&(this.diametrDel<=this.grdDel400)){
                if(this.modul<=this.granm3_5){Fr=80;}
                if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Fr=90;}
                if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Fr=100;}
                if((this.granm10<this.modul)&&(this.modul<=this.granm16)){Fr=112;}
                if((this.granm16<this.modul)&&(this.modul<=this.granm25)){Fr=125;}
                if((this.granm25<this.modul)&&(this.modul<=this.granm40)){Fr=150;} 
                if((this.granm40<this.modul)&&(this.modul<=this.granm55)){Fr=0;} 
              }
              if((this.grdDel400<this.diametrDel)&&(this.diametrDel<=this.grdDel800)){
                if(this.modul<=this.granm3_5){Fr=100;}
                if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Fr=112;}
                if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Fr=125;}
                if((this.granm10<this.modul)&&(this.modul<=this.granm16)){Fr=140;}
                if((this.granm16<this.modul)&&(this.modul<=this.granm25)){Fr=160;}
                if((this.granm25<this.modul)&&(this.modul<=this.granm40)){Fr=180;} 
                if((this.granm40<this.modul)&&(this.modul<=this.granm55)){Fr=200;} 
              }
              if((this.grdDel800<this.diametrDel)&&(this.diametrDel<=this.grdDel1600)){
                if(this.modul<=this.granm3_5){Fr=0;}
                if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Fr=125;}
                if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Fr=140;}
                if((this.granm10<this.modul)&&(this.modul<=this.granm16)){Fr=160;}
                if((this.granm16<this.modul)&&(this.modul<=this.granm25)){Fr=180;}
                if((this.granm25<this.modul)&&(this.modul<=this.granm40)){Fr=200;} 
                if((this.granm40<this.modul)&&(this.modul<=this.granm55)){Fr=240;} 
              }
              if((this.grdDel1600<this.diametrDel)&&(this.diametrDel<=this.grdDel2500)){
                if(this.modul<=this.granm3_5){Fr=0;}
                if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Fr=0;}
                if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Fr=160;}
                if((this.granm10<this.modul)&&(this.modul<=this.granm16)){Fr=180;}
                if((this.granm16<this.modul)&&(this.modul<=this.granm25)){Fr=200;}
                if((this.granm25<this.modul)&&(this.modul<=this.granm40)){Fr=240;}
                if((this.granm40<this.modul)&&(this.modul<=this.granm55)){Fr=280;} 
              }
              if((this.grdDel2500<this.diametrDel)&&(this.diametrDel<=this.grdDel4000)){
                if(this.modul<=this.granm3_5){Fr=0;}
                if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Fr=0;}
                if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Fr=0;}
                if((this.granm10<this.modul)&&(this.modul<=this.granm16)){Fr=200;}
                if((this.granm16<this.modul)&&(this.modul<=this.granm25)){Fr=224;}
                if((this.granm25<this.modul)&&(this.modul<=this.granm40)){Fr=280;}
                if((this.granm40<this.modul)&&(this.modul<=this.granm55)){Fr=320;} 
              }
              break;
          }
          switch (this.stepen){//для десятой степени точности
            case '10':
              if(this.diametrDel<=this.grdDel125){
                if(this.modul<=this.granm3_5){Fr=71;}
                if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Fr=80;}
                if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Fr=90;}
                if((this.granm10<this.modul)&&(this.modul<=this.granm16)){Fr=100;}
                if((this.granm16<this.modul)&&(this.modul<=this.granm25)){Fr=120;}
                if((this.granm25<this.modul)&&(this.modul<=this.granm40)){Fr=0;} 
                if((this.granm40<this.modul)&&(this.modul<=this.granm55)){Fr=0;} 
              }
              if((this.grdDel125<this.diametrDel)&&(this.diametrDel<=this.grdDel400)){
                if(this.modul<=this.granm3_5){Fr=100;}
                if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Fr=112;}
                if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Fr=125;}
                if((this.granm10<this.modul)&&(this.modul<=this.granm16)){Fr=140;}
                if((this.granm16<this.modul)&&(this.modul<=this.granm25)){Fr=160;}
                if((this.granm25<this.modul)&&(this.modul<=this.granm40)){Fr=180;} 
                if((this.granm40<this.modul)&&(this.modul<=this.granm55)){Fr=0;} 
              }
              if((this.grdDel400<this.diametrDel)&&(this.diametrDel<=this.grdDel800)){
                if(this.modul<=this.granm3_5){Fr=125;}
                if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Fr=140;}
                if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Fr=160;}
                if((this.granm10<this.modul)&&(this.modul<=this.granm16)){Fr=180;}
                if((this.granm16<this.modul)&&(this.modul<=this.granm25)){Fr=200;}
                if((this.granm25<this.modul)&&(this.modul<=this.granm40)){Fr=224;} 
                if((this.granm40<this.modul)&&(this.modul<=this.granm55)){Fr=260;} 
              }
              if((this.grdDel800<this.diametrDel)&&(this.diametrDel<=this.grdDel1600)){
                if(this.modul<=this.granm3_5){Fr=0;}
                if((this.gran3_5<this.modul)&&(this.modul<=this.granm6_3)){Fr=160;}
                if((this.gran6_3<this.modul)&&(this.modul<=this.granm10)){Fr=180;}
                if((this.gran10<this.modul)&&(this.modul<=this.granm16)){Fr=200;}
                if((this.gran16<this.modul)&&(this.modul<=this.granm25)){Fr=224;}
                if((this.gran25<this.modul)&&(this.modul<=this.granm40)){Fr=260;} 
                if((this.gran40<this.modul)&&(this.modul<=this.granm55)){Fr=300;} 
              }
              if((this.grdDel1600<this.diametrDel)&&(this.diametrDel<=this.grdDel2500)){
                if(this.modul<=this.granm3_5){Fr=0;}
                if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Fr=0;}
                if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Fr=200;}
                if((this.granm10<this.modul)&&(this.modul<=this.granm16)){Fr=224;}
                if((this.granm16<this.modul)&&(this.modul<=this.granm25)){Fr=250;}
                if((this.granm25<this.modul)&&(this.modul<=this.granm40)){Fr=300;}
                if((this.granm40<this.modul)&&(this.modul<=this.granm55)){Fr=340;} 
              }
              if((this.grdDel2500<this.diametrDel)&&(this.diametrDel<=this.grdDel4000)){
                if(this.modul<=this.granm3_5){Fr=0;}
                if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Fr=0;}
                if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Fr=0;}
                if((this.granm10<this.modul)&&(this.modul<=this.granm16)){Fr=250;}
                if((this.granm16<this.modul)&&(this.modul<=this.granm25)){Fr=280;}
                if((this.granm25<this.modul)&&(this.modul<=this.granm40)){Fr=355;}
                if((this.granm40<this.modul)&&(this.modul<=this.granm55)){Fr=400;} 
              }
              break;
          }
          switch (this.stepen){//для одиннадцатой степени точности
            case '11':
              if(this.diametrDel<=this.grdDel125){
                if(this.modul<=this.granm3_5){Fr=90;}
                if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Fr=100;}
                if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Fr=112;}
                if((this.granm10<this.modul)&&(this.modul<=this.granm16)){Fr=120;}
                if((this.granm16<this.modul)&&(this.modul<=this.granm25)){Fr=150;}
                if((this.granm25<this.modul)&&(this.modul<=this.granm40)){Fr=0;} 
                if((this.granm40<this.modul)&&(this.modul<=this.granm55)){Fr=0;} 
              }
              if((this.grdDel125<this.diametrDel)&&(this.diametrDel<=this.grdDel400)){
                if(this.modul<=this.granm3_5){Fr=125;}
                if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Fr=140;}
                if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Fr=160;}
                if((this.granm10<this.modul)&&(this.modul<=this.granm16)){Fr=180;}
                if((this.granm16<this.modul)&&(this.modul<=this.granm25)){Fr=200;}
                if((this.granm25<this.modul)&&(this.modul<=this.granm40)){Fr=220;} 
                if((this.granm40<this.modul)&&(this.modul<=this.granm55)){Fr=0;} 
              }
              if((this.grdDel400<this.diametrDel)&&(this.diametrDel<=this.grdDel800)){
                if(this.modul<=this.granm3_5){Fr=160;}
                if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Fr=180;}
                if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Fr=200;}
                if((this.granm10<this.modul)&&(this.modul<=this.granm16)){Fr=224;}
                if((this.granm16<this.modul)&&(this.modul<=this.granm25)){Fr=250;}
                if((this.granm25<this.modul)&&(this.modul<=this.granm40)){Fr=280;} 
                if((this.granm40<this.modul)&&(this.modul<=this.granm55)){Fr=315;} 
              }
              if((this.grdDel800<this.diametrDel)&&(this.diametrDel<=this.grdDel1600)){
                if(this.modul<=this.granm3_5){Fr=0;}
                if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Fr=220;}
                if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Fr=224;}
                if((this.granm10<this.modul)&&(this.modul<=this.granm16)){Fr=250;}
                if((this.granm16<this.modul)&&(this.modul<=this.granm25)){Fr=280;}
                if((this.granm25<this.modul)&&(this.modul<=this.granm40)){Fr=315;} 
                if((this.granm40<this.modul)&&(this.modul<=this.granm55)){Fr=380;} 
              }
              if((this.grdDel1600<this.diametrDel)&&(this.diametrDel<=this.grdDel2500)){
                if(this.modul<=this.granm3_5){Fr=0;}
                if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Fr=0;}
                if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Fr=250;}
                if((this.granm10<this.modul)&&(this.modul<=this.granm16)){Fr=280;}
                if((this.granm16<this.modul)&&(this.modul<=this.granm25)){Fr=315;}
                if((this.granm25<this.modul)&&(this.modul<=this.granm40)){Fr=380;}
                if((this.granm40<this.modul)&&(this.modul<=this.granm55)){Fr=450;} 
              }
              if((this.grdDel2500<this.diametrDel)&&(this.diametrDel<=this.grdDel4000)){
                if(this.modul<=this.granm3_5){Fr=0;}
                if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Fr=0;}
                if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Fr=0;}
                if((this.granm10<this.modul)&&(this.modul<=this.granm16)){Fr=315;}
                if((this.granm16<this.modul)&&(this.modul<=this.granm25)){Fr=355;}
                if((this.granm25<this.modul)&&(this.modul<=this.granm40)){Fr=450;}
                if((this.granm40<this.modul)&&(this.modul<=this.granm55)){Fr=530;} 
              }
              break;
          }
          switch (this.stepen){//для двеннадцатой степени точности
            case '12':
              if(this.diametrDel<=this.grdDel125){
                if(this.modul<=this.granm3_5){Fr=112;}
                if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Fr=125;}
                if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Fr=140;}
                if((this.granm10<this.modul)&&(this.modul<=this.granm16)){Fr=150;}
                if((this.granm16<this.modul)&&(this.modul<=this.granm25)){Fr=180;}
                if((this.granm25<this.modul)&&(this.modul<=this.granm40)){Fr=0;} 
                if((this.granm40<this.modul)&&(this.modul<=this.granm55)){Fr=0;} 
              }
              if((this.grdDel125<this.diametrDel)&&(this.diametrDel<=this.grdDel400)){
                if(this.modul<=this.granm3_5){Fr=160;}
                if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Fr=180;}
                if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Fr=200;}
                if((this.granm10<this.modul)&&(this.modul<=this.granm16)){Fr=224;}
                if((this.granm16<this.modul)&&(this.modul<=this.granm25)){Fr=250;}
                if((this.granm25<this.modul)&&(this.modul<=this.granm40)){Fr=280;} 
                if((this.granm40<this.modul)&&(this.modul<=this.granm55)){Fr=0;} 
              }
              if((this.grdDel400<this.diametrDel)&&(this.diametrDel<=this.grdDel800)){
                if(this.modul<=this.granm3_5){Fr=200;}
                if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Fr=224;}
                if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Fr=250;}
                if((this.granm10<this.modul)&&(this.modul<=this.granm16)){Fr=280;}
                if((this.granm16<this.modul)&&(this.modul<=this.granm25)){Fr=315;}
                if((this.granm25<this.modul)&&(this.modul<=this.granm40)){Fr=360;} 
                if((this.granm40<this.modul)&&(this.modul<=this.granm55)){Fr=420;} 
              }
              if((this.grdDel800<this.diametrDel)&&(this.diametrDel<=this.grdDel1600)){
                if(this.modul<=this.granm3_5){Fr=0;}
                if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Fr=250;}
                if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Fr=280;}
                if((this.granm10<this.modul)&&(this.modul<=this.granm16)){Fr=315;}
                if((this.granm16<this.modul)&&(this.modul<=this.granm25)){Fr=360;}
                if((this.granm25<this.modul)&&(this.modul<=this.granm40)){Fr=420;} 
                if((this.granm40<this.modul)&&(this.modul<=this.granm55)){Fr=480;} 
              }
              if((this.grdDel1600<this.diametrDel)&&(this.diametrDel<=this.grdDel2500)){
                if(this.modul<=this.granm3_5){Fr=0;}
                if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Fr=0;}
                if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Fr=315;}
                if((this.granm10<this.modul)&&(this.modul<=this.granm16)){Fr=355;}
                if((this.granm16<this.modul)&&(this.modul<=this.granm25)){Fr=400;}
                if((this.granm25<this.modul)&&(this.modul<=this.granm40)){Fr=480;}
                if((this.granm40<this.modul)&&(this.modul<=this.granm55)){Fr=560;} 
              }
              if((this.grdDel2500<this.diametrDel)&&(this.diametrDel<=this.grdDel4000)){
                if(this.modul<=this.granm3_5){Fr=0;}
                if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Fr=0;}
                if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Fr=0;}
                if((this.granm10<this.modul)&&(this.modul<=this.granm16)){Fr=400;}
                if((this.granm16<this.modul)&&(this.modul<=this.granm25)){Fr=450;}
                if((this.granm25<this.modul)&&(this.modul<=this.granm40)){Fr=560;}
                if((this.granm40<this.modul)&&(this.modul<=this.granm55)){Fr=630;} 
              }
              break;
          }
          //------Завершение выбора Fr из таблиц-------//
          //----------Далее расчет Tsc-------------------//
          if(Fr<=8){
            if(this.vidzazor==5){Tsc_rezult=21;}
            if(this.vidzazor==4){Tsc_rezult=25;}
            if(this.vidzazor==3){Tsc_rezult=30;}
            if(this.vidzazor==2){Tsc_rezult=40;}
            if(this.vidzazor==1){Tsc_rezult=52;}
          }
          if((8<Fr)&&(Fr<=10)){
            if(this.vidzazor==5){Tsc_rezult=22;}
            if(this.vidzazor==4){Tsc_rezult=28;}
            if(this.vidzazor==3){Tsc_rezult=34;}
            if(this.vidzazor==2){Tsc_rezult=45;}
            if(this.vidzazor==1){Tsc_rezult=50;}
          }
          if((10<Fr)&&(Fr<=12)){
            if(this.vidzazor==5){Tsc_rezult=24;}
            if(this.vidzazor==4){Tsc_rezult=30;}
            if(this.vidzazor==3){Tsc_rezult=36;}
            if(this.vidzazor==2){Tsc_rezult=48;}
            if(this.vidzazor==1){Tsc_rezult=60;}
          }
          if((12<Fr)&&(Fr<=16)){
            if(this.vidzazor==5){Tsc_rezult=26;}
            if(this.vidzazor==4){Tsc_rezult=32;}
            if(this.vidzazor==3){Tsc_rezult=40;}
            if(this.vidzazor==2){Tsc_rezult=52;}
            if(this.vidzazor==1){Tsc_rezult=65;}
          }
          if((16<Fr)&&(Fr<=20)){
            if(this.vidzazor==5){Tsc_rezult=28;}
            if(this.vidzazor==4){Tsc_rezult=36;}
            if(this.vidzazor==3){Tsc_rezult=45;}
            if(this.vidzazor==2){Tsc_rezult=58;}
            if(this.vidzazor==1){Tsc_rezult=75;}
          }
          if((20<Fr)&&(Fr<=25)){
            if(this.vidzazor==5){Tsc_rezult=32;}
            if(this.vidzazor==4){Tsc_rezult=42;}
            if(this.vidzazor==3){Tsc_rezult=52;}
            if(this.vidzazor==2){Tsc_rezult=65;}
            if(this.vidzazor==1){Tsc_rezult=85;}
          }
          if((25<Fr)&&(Fr<=32)){
            if(this.vidzazor==5){Tsc_rezult=38;}
            if(this.vidzazor==4){Tsc_rezult=48;}
            if(this.vidzazor==3){Tsc_rezult=60;}
            if(this.vidzazor==2){Tsc_rezult=75;}
            if(this.vidzazor==1){Tsc_rezult=95;}
          }
          if((32<Fr)&&(Fr<=40)){
            if(this.vidzazor==5){Tsc_rezult=42;}
            if(this.vidzazor==4){Tsc_rezult=50;}
            if(this.vidzazor==3){Tsc_rezult=70;}
            if(this.vidzazor==2){Tsc_rezult=85;}
            if(this.vidzazor==1){Tsc_rezult=110;}
          }
          if((40<Fr)&&(Fr<=50)){
            if(this.vidzazor==5){Tsc_rezult=50;}
            if(this.vidzazor==4){Tsc_rezult=65;}
            if(this.vidzazor==3){Tsc_rezult=80;}
            if(this.vidzazor==2){Tsc_rezult=100;}
            if(this.vidzazor==1){Tsc_rezult=130;}
          }
          if((50<Fr)&&(Fr<=60)){
            if(this.vidzazor==5){Tsc_rezult=60;}
            if(this.vidzazor==4){Tsc_rezult=75;}
            if(this.vidzazor==3){Tsc_rezult=95;}
            if(this.vidzazor==2){Tsc_rezult=120;}
            if(this.vidzazor==1){Tsc_rezult=150;}
          }
          if((60<Fr)&&(Fr<=80)){
            if(this.vidzazor==5){Tsc_rezult=70;}
            if(this.vidzazor==4){Tsc_rezult=90;}
            if(this.vidzazor==3){Tsc_rezult=110;}
            if(this.vidzazor==2){Tsc_rezult=130;}
            if(this.vidzazor==1){Tsc_rezult=180;}
          }
          if((80<Fr)&&(Fr<=100)){
            if(this.vidzazor==5){Tsc_rezult=90;}
            if(this.vidzazor==4){Tsc_rezult=110;}
            if(this.vidzazor==3){Tsc_rezult=140;}
            if(this.vidzazor==2){Tsc_rezult=170;}
            if(this.vidzazor==1){Tsc_rezult=220;}
          }
          if((100<Fr)&&(Fr<=125)){
            if(this.vidzazor==5){Tsc_rezult=110;}
            if(this.vidzazor==4){Tsc_rezult=130;}
            if(this.vidzazor==3){Tsc_rezult=170;}
            if(this.vidzazor==2){Tsc_rezult=200;}
            if(this.vidzazor==1){Tsc_rezult=260;}
          }
          if((125<Fr)&&(Fr<=160)){
            if(this.vidzazor==5){Tsc_rezult=130;}
            if(this.vidzazor==4){Tsc_rezult=160;}
            if(this.vidzazor==3){Tsc_rezult=200;}
            if(this.vidzazor==2){Tsc_rezult=250;}
            if(this.vidzazor==1){Tsc_rezult=320;}
          }
          if((160<Fr)&&(Fr<=200)){
            if(this.vidzazor==5){Tsc_rezult=160;}
            if(this.vidzazor==4){Tsc_rezult=200;}
            if(this.vidzazor==3){Tsc_rezult=260;}
            if(this.vidzazor==2){Tsc_rezult=320;}
            if(this.vidzazor==1){Tsc_rezult=400;}
          }
          if((200<Fr)&&(Fr<=250)){
            if(this.vidzazor==5){Tsc_rezult=200;}
            if(this.vidzazor==4){Tsc_rezult=250;}
            if(this.vidzazor==3){Tsc_rezult=320;}
            if(this.vidzazor==2){Tsc_rezult=380;}
            if(this.vidzazor==1){Tsc_rezult=500;}
          }
          if((250<Fr)&&(Fr<=320)){
            if(this.vidzazor==5){Tsc_rezult=240;}
            if(this.vidzazor==4){Tsc_rezult=300;}
            if(this.vidzazor==3){Tsc_rezult=400;}
            if(this.vidzazor==2){Tsc_rezult=480;}
            if(this.vidzazor==1){Tsc_rezult=630;}
          }
          if((320<Fr)&&(Fr<=400)){
            if(this.vidzazor==5){Tsc_rezult=300;}
            if(this.vidzazor==4){Tsc_rezult=380;}
            if(this.vidzazor==3){Tsc_rezult=500;}
            if(this.vidzazor==2){Tsc_rezult=600;}
            if(this.vidzazor==1){Tsc_rezult=750;}
          }
          if((400<Fr)&&(Fr<=500)){
            if(this.vidzazor==5){Tsc_rezult=380;}
            if(this.vidzazor==4){Tsc_rezult=480;}
            if(this.vidzazor==3){Tsc_rezult=600;}
            if(this.vidzazor==2){Tsc_rezult=750;}
            if(this.vidzazor==1){Tsc_rezult=950;}
          }
          if((500<Fr)&&(Fr<=630)){
            if(this.vidzazor==5){Tsc_rezult=450;}
            if(this.vidzazor==4){Tsc_rezult=500;}
            if(this.vidzazor==3){Tsc_rezult=750;}
            if(this.vidzazor==2){Tsc_rezult=900;}
            if(this.vidzazor==1){Tsc_rezult=1180;}
          }
         return Tsc_rezult;
        },
		Escs:function(){
			var Escs_rezult;
			var Escs7H;
			var x=0;
			var Koeff='1';  //коэффициент дл яумножения Escs табл.4 стр.40
				//Начало определения Escs для 7H
				if(this.diametrDel<this.grdDel125){ //первый дипазон диаметра до 125 мм
					if(this.ugol<this.grug1){ // первый из трех диапазон углов до 20 град
						if(this.modul<this.granm3_5){Escs7H=20;}
						if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Escs7H=22;}
						if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Escs7H=25;}
						if((this.granm10<this.modul)&&(this.modul<=this.granm16)){Escs7H=28;}
						if((this.granm16<this.modul)&&(this.modul<=this.granm25)){Escs7H=0;}
					}
					if((this.grug1<this.ugol)&&(this.ugol<=this.grug2)){ // второй из трех диапазон углов от 20  до 45 град
						if(this.modul<this.granm3_5){Escs7H=20;}
						if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Escs7H=22;}
						if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Escs7H=25;}
						if((this.granm10<this.modul)&&(this.modul<=this.granm16)){Escs7H=28;}
						if((this.granm16<this.modul)&&(this.modul<=this.granm25)){Escs7H=0;}
					}
					if(this.grug2<this.ugol){ //тертий из трех диапазон углов больше 45 град
						if(this.modul<this.granm3_5){Escs7H=22;}
						if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Escs7H=25;}
						if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Escs7H=28;}
						if((this.granm10<this.modul)&&(this.modul<=this.granm16)){Escs7H=30;}
						if((this.granm16<this.modul)&&(this.modul<=this.granm25)){Escs7H=0;}
					}
				}else if((this.grdDel125<this.diametrDel)&&(this.diametrDel<=this.grdDel400)){
					//перебор для диамета    125<D<=400
					if(this.ugol<this.grug1){ // первый из трех диапазон углов до 20 град
						if(this.modul<this.granm3_5){Escs7H=28;}
						if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Escs7H=32;}
						if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Escs7H=36;}
						if((this.granm10<this.modul)&&(this.modul<=this.granm16)){Escs7H=36;}
						if((this.granm16<this.modul)&&(this.modul<=this.granm25)){Escs7H=40;}
					}
					if((this.grug1<this.ugol)&&(this.ugol<=this.grug2)){ // второй из трех диапазон углов от 20  до 45 град
						if(this.modul<this.granm3_5){Escs7H=32;}
						if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Escs7H=32;}
						if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Escs7H=36;}
						if((this.granm10<this.modul)&&(this.modul<=this.granm16)){Escs7H=38;}
						if((this.granm16<this.modul)&&(this.modul<=this.granm25)){Escs7H=40;}
					}
					if(this.grug2<this.ugol){ //тертий из трех диапазон углов больше 45 град
						if(this.modul<this.granm3_5){Escs7H=30;}
						if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Escs7H=30;}
						if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Escs7H=34;}
						if((this.granm10<this.modul)&&(this.modul<=this.granm16)){Escs7H=36;}
						if((this.granm16<this.modul)&&(this.modul<=this.granm25)){Escs7H=400;}
					}
				}else if((this.grdDel400<this.diametrDel)&&(this.diametrDel<=this.grdDel800)){
					//перебор для диамета    400<D<=800
					if(this.ugol<this.grug1){ // первый из трех диапазон углов до 20 град
						if(this.modul<this.granm3_5){Escs7H=36;}
						if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Escs7H=38;}
						if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Escs7H=40;}
						if((this.granm10<this.modul)&&(this.modul<=this.granm16)){Escs7H=48;}
						if((this.granm16<this.modul)&&(this.modul<=this.granm25)){Escs7H=50;}
					}
					if((this.grug1<this.ugol)&&(this.ugol<=this.grug2)){ // второй из трех диапазон углов от 20  до 45 град
						if(this.modul<this.granm3_5){Escs7H=50;}
						if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Escs7H=55;}
						if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Escs7H=55;}
						if((this.granm10<this.modul)&&(this.modul<=this.granm16)){Escs7H=60;}
						if((this.granm16<this.modul)&&(this.modul<=this.granm25)){Escs7H=65;}
					}
					if(this.grug2<this.ugol){ //тертий из трех диапазон углов больше 45 град
						if(this.modul<this.granm3_5){Escs7H=45;}
						if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Escs7H=45;}
						if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Escs7H=50;}
						if((this.granm10<this.modul)&&(this.modul<=this.granm16)){Escs7H=55;}
						if((this.granm16<this.modul)&&(this.modul<=this.granm25)){Escs7H=60;}
					}
				}else if((this.grdDel800<this.diametrDel)&&(this.diametrDel<=this.grdDel1000)){
					//перебор для диамета    800<D<=1000
					if(this.ugol<this.grug1){ // первый из трех диапазон углов до 20 град
						if(this.modul<this.granm3_5){Escs7H=0;}
						if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Escs7H=75;}
						if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Escs7H=80;}
						if((this.granm10<this.modul)&&(this.modul<=this.granm16)){Escs7H=80;}
						if((this.granm16<this.modul)&&(this.modul<=this.granm25)){Escs7H=80;}
					}
					if((this.grug1<this.ugol)&&(this.ugol<=this.grug2)){ // второй из трех диапазон углов от 20  до 45 град
						if(this.modul<this.granm3_5){Escs7H=0;}
						if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Escs7H=85;}
						if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Escs7H=90;}
						if((this.granm10<this.modul)&&(this.modul<=this.granm16)){Escs7H=100;}
						if((this.granm16<this.modul)&&(this.modul<=this.granm25)){Escs7H=100;}
					}
					if(this.grug2<this.ugol){ //тертий из трех диапазон углов больше 45 град
						if(this.modul<this.granm3_5){Escs7H=0;}
						if((this.granm3_5<this.modul)&&(this.modul<=this.granm6_3)){Escs7H=85;}
						if((this.granm6_3<this.modul)&&(this.modul<=this.granm10)){Escs7H=85;}
						if((this.granm10<this.modul)&&(this.modul<=this.granm16)){Escs7H=85;}
						if((this.granm16<this.modul)&&(this.modul<=this.granm25)){Escs7H=90;}
					}
				}//конец от if перебора делительного диаметра
                //---заканчивается определение Escs для 7 H -----//
				
				//Выбираем коэффициент для умножения под  тербуемое сопряжение//
				switch (this.vidsopr) {
					case '6':
						switch (this.stepen){
							case '4':
								Koeff='0.9';
							break;
							case '5':
								Koeff='0.9';
							break;
							case '6':
								Koeff='0.9';
							break;
							case '7':
								Koeff='1.0';
							break;
							default:
								Koeff='0';
						};
					    break;
					case '5':
						switch (this.stepen){
							case '4':
								Koeff='1.45';
							break;
							case '5':
								Koeff='1.45';
							break;
							case '6':
								Koeff='1.45';
							break;
							case '7':
								Koeff='1.6';
							break;
							default:
								Koeff='0';
						};
					  break;
					case '4':
						switch (this.stepen){
							case '4':
								Koeff='1.8';
							break;
							case '5':
								Koeff='1.8';
							break;
							case '6':
								Koeff='1.8';
							break;
							case '7':
								Koeff='2.0';
							break;
							case '8':
								Koeff='2.2';
							break;
							default:
								Koeff='0';
						};
					  break;
					case '3':
						switch (this.stepen){
							case '4':
								Koeff='2.4';
							break;
							case '5':
								Koeff='2.4';
							break;
							case '6':
								Koeff='2.4';
							break;
							case '7':
								Koeff='2.7';
							break;
							case '8':
								Koeff='3.0';
							break;
							case '9':
								Koeff='3.2';
							break;
							default:
								Koeff='0';
						};
						break;
					case '2':
						switch (this.stepen){
							case '4':
								Koeff='3.4';
							break;
							case '5':
								Koeff='3.4';
							break;
							case '6':
								Koeff='3.4';
							break;
							case '7':
								Koeff='3.8';
							break;
							case '8':
								Koeff='4.2';
							break;
							case '9':
								Koeff='4.6';
							break;
							case '10':
								Koeff='4.9';
							break;
							default:
								Koeff='0';
						};
						break;
					case '1':
						switch (this.stepen){
							case '4':
								Koeff='5.0';
							break;
							case '5':
								Koeff='5.0';
							break;
							case '6':
								Koeff='5.0';
							break;
							case '7':
								Koeff='5.5';
							break;
							case '8':
								Koeff='6.0';
							break;
							case '9':
								Koeff='6.6';
							break;
							case '10':
								Koeff='7.0';
							break;
							case '11':
								Koeff='7.8';
							break;
							case '12':
								Koeff='9.0';
							break;
							default:
								Koeff='0';
						};
						break;
					default:
					  alert( "Нет таких значений" );
				  }//конец главного Swith  от выбора коэффициента
                 //-----------------------------------------------------------------------//
            Escs_rezult=(Koeff*Escs7H);
             Escs_rezult=Escs_rezult.toFixed(0) || 0;
			//Escs_rezult=(Koeff*Escs7H) || 0;
             Escs_rezult=Number(Escs_rezult);
			return Escs_rezult;
		},
        
		calcPayment: function(e){
			var p = this.price - this.downPayment - this.tradeIn;
			var r = this.rate / 1200;
			var n = this.length;
			var i = Math.pow((1+r),n);
			var payment = ( p * r * i) / (i - 1) || 0;
			return currencyFormat(payment);
		},
		numFormat: function(e){
			e.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
		}
	}
	
});


//https://blog.tompawlak.org/number-currency-formatting-javascript
function currencyFormat (num) {
    return "CF" + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}
