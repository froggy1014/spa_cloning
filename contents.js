$('.content_button_shape').click(function(){
    $(this).addClass('btn_active');
    $(this).siblings().removeClass('btn_active');
    if ($(this).hasClass('chobo'))
    {
        $('#chobo').addClass('active')
        $('#chobo').siblings().removeClass('active').addClass('hide')
    }else if($(this).hasClass('data')){
        $('#data').addClass('active')
        $('#data').siblings().removeClass('active').addClass('hide')
    }else{
        $('#dev').addClass('active')
        $('#dev').siblings().removeClass('active').addClass('hide')
    }

})