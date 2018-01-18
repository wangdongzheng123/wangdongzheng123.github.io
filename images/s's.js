/**
 * Created by Administrator on 2017/12/21.
 */
/**
 * Created by wcs on 2016/9/25.
 */

//����ȫ���ķ���
$(function(){
    $('#dowebok').fullpage({
        //����ÿһ��Ļ����ɫ
        sectionsColor:['#0da5d6', '#2AB561', '#DE8910', '#16BA9D', '#0DA5D6'],
        //loopTop:true,
        // ����ĳһ��֮�����
        afterLoad:function(link,index){
            // index ��ǰsection�ı��
            // current��Ӹ�˭ ˭��������
            $('.section').removeClass('current');
            // �ö��� �ӳ�ִ��100ms
            setTimeout(function(){
                $('.section').eq(index-1).addClass('current');
            },100);
        }
    });
});