 /*���߹�ע��ͥҽ��js*/    
/*��ע��ҽ��*/
    function attion(docid){
        var attion = 'attion';
        attionajax(docid,attion);
    }
/*ȡ����ע��ҽ��*/
    function cancelattion(docid){
        var attion = 'cancelattion';
        attionajax(docid,attion);
    }


 function attionajax(docid,attion) {
     //����ѡ��ֵ����ajax�ж��û��Ը÷�����û�й����ʸ��Ա������Ӧ��ҳ��
     var posturl = "/index.php?r=familyDoctor/attention";
     var postdata = {"attionajax":attion,"docid":docid};



     $.post(posturl,postdata,function(data){
         if (data.code == -1) {
             window.location.href = data.msg;
         } else if(data.code==10000){
              if(attion=='attion'){
                  showattionMessage("��ע�ɹ�",250,0,"http://static.img.xywy.com/3g_community/images/gz-success-icon.png");
                  //alert('��ע�ɹ�');
                  $(".attionclass").html("<a class='hk-remove' href='javascript:void(0);' onclick='cancelattion("+docid+");'>�ѹ�ע</a>");
              }
             if(attion=='cancelattion'){
                 showattionMessage("ȡ���ɹ�",250,0,"http://static.img.xywy.com/3g_community/images/gz-success-icon.png");
                 //alert('��ȡ����ע');
                 $(".attionclass").html("<a class='hk-add' href='javascript:void(0);'  onclick='attion("+docid+")'>+��ע</a>");
             }
         }else{
             //alert('�ύʧ��');
             showattionMessage("�ύʧ��",250,0,"http://static.img.xywy.com/3g_community/images/gz-error-icon.png");
         }
     }, "json").error(function() {
         if(attion=='attion'){
             showattionMessage("��עʧ��",250,0,"");
         }
         if(attion=='cancelattion'){
             showattionMessage("ȡ��ʧ��",250,0,"");
         }
         }
     );
     return false;
 }

 function  showattionMessage(a,b,c,d) {

     /*a�������е�����*/
     /*d�������е�ͼƬ+
      success��http://static.img.xywy.com/3g_community/images/gz-success-icon.png
      error ��http://static.img.xywy.com/3g_community/images/gz-error-icon.png*/
     if(!arguments[1]){
         b = 250;
     }
     if(!arguments[2]){
         c = 0;
     }
     var html = '<section id="showMessage" style="  width: 100%;position: fixed;top: '+b+'px;left: '+c+'px;z-index:100;"><div style="display:-webkit-box;-webkit-box-orient: horizontal;-webkit-box-pack: center;display: -moz-box;-moz-box-orient: horizontal;-moz-box-pack: center;display: -o-box;-o-box-orient: horizontal;-o-box-pack: center;display: -ms-box;-ms-box-orient: horizontal;-ms-box-pack: center;display: box;box-orient: horizontal;box-pack: center;"><div class="showH"  style="background: rgba( 0 , 0 , 0 ,.8);  color: #fff;  padding: 0 10px;  height: 75px;  line-height: 30px;  border-radius: 5px;  box-shadow: 0 1px 0 1px rgba(0,0,0,.2);  text-align: center;  font-size: 14px;">';
     if(!!d){
         html += '<img style="width:30px;height:30px;margin:0 auto;display:block;padding-top:10px;" src="'+d+'"/>';
     };
     html += a+'</div></div></section>';
     //alert(html);
     $('body').append(html);
     if(!d){
         $('.showH').height(30);
     }
     $('#showMessage').show();
     setTimeout(function(){
         $('#showMessage').hide();
         $('#showMessage').remove();
     },2000);
 };