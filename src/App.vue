 <template>
     <v-app>
         <v-navigation-drawer app temporary v-model="drawer">
             <v-img :aspect-ratio="16/9" src="https://www.afisha.uz/ui/materials/2017/11/0273350.jpg">
                 <v-row align="end" class="lightbox white--text pa-2 fill-height">
                     <v-col>
                         <div class="body-1">Elmakon</div>
                     </v-col>
                 </v-row>
             </v-img>
             <v-divider></v-divider>
             <v-list
                     dense
                     nav

             >
                 <v-list-item
                         v-for="link in links"
                         :key="link.title"
                         :to="link.login"
                 >
                     <v-list-item-icon >
                         <v-icon>{{ link.img }}</v-icon>
                     </v-list-item-icon>

                     <v-list-item-content>
                         <v-list-item-title>{{ link.title }}</v-list-item-title>
                     </v-list-item-content>
                 </v-list-item>
             </v-list>

         </v-navigation-drawer>

         <v-app-bar app class="primary"  dark >
             <v-app-bar-nav-icon @click="drawer=!drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
             <router-link tag="v-btn" class="button" to="/">Elmakon</router-link>
             <v-icon>mdi-right</v-icon>
             <v-spacer></v-spacer>
             <span class="title" >
          <v-btn  v-for="link of links"  right class="hidden-sm-and-down primary"
                  :key="link.title" elevation="0" :to="link.login"
          > {{link.title}} <v-icon right>{{link.icon}}</v-icon> </v-btn></span>
         </v-app-bar>
         <v-content>
             <v-container fluid>
                 <router-view></router-view>
             </v-container>
         </v-content>

         <v-footer
                 color="primary lighten-1"
                 padless

         >
             <v-row
                     justify="center"
                     no-gutters
                     max-height="600px"
                     py-6
             >

                 <v-col
                         class="primary  py-10 text-center white--text"
                         cols="12"
                 >

                 <v-btn class="btnF" icon href="https://www.instagram.com/elmakonuz/"  target="_blank"><v-img class="fasebook" src="https://cdn.icon-icons.com/icons2/1211/PNG/128/1491580635-yumminkysocialmedia26_83102.png"></v-img></v-btn>
                  <v-btn class="btnI" icon href="https://www.facebook.com/elmakon/" target="_blank"><v-img  class="instagram" src="https://cdn.icon-icons.com/icons2/642/PNG/512/facebook_icon-icons.com_59205.png"></v-img></v-btn>
                  <v-btn  class="btnT" icon href="https://web.telegram.im/#/im?p=@elmakon" target="_blank"><v-img  class="telegram" src="https://cdn.icon-icons.com/icons2/923/PNG/512/telegram_icon-icons.com_72055.png"></v-img></v-btn>

                     <br><br><br>
                     Телефон поддeржки
                     <br>
                     <h4>+998 71 203-1-203</h4>
                     <v-divider></v-divider>

                   <span class="mb-10"> {{ new Date().getFullYear() }} — <strong class="button1">Elmakon</strong></span>
                 </v-col>
             </v-row>
         </v-footer>
     </v-app>
</template>

<script>
export default {
data(){
return{
    drawer:false,
       links:[
           {title:"Филиалы", icon:'mdi-shopping',login:'/filials'},
          {title:'Русский язык',icon:'mdi-russian',login:'/russian'},
          {title:" O'zbek tili ", icon:'',login:'/'},

      ],
    icons: [
        {icon:'mdi-telegram',src:''},
        {icon:'mdi-lock',src:''}
    ],
  }
}
}
</script>

 <style>
     .title a{
         text-decoration: none;
     }
     .button{
         cursor: pointer;
         font-size: 25px;
         margin-left: 50px;
     }.button1{
         font-size: 20px;
     }
     .fasebook {
         width:50px;
         height: 50px;
         margin-right: 50px;

     } .instagram {
         width:50px;
         height: 50px;

     }.telegram {
         width:50px;
         height: 50px;
      margin-left:50px;
     }
     .btnF {margin-right: 30px;}
     .btnI {}
     .btnT{margin-left:30px;}
 </style>
