$('.page-scroll').on('click', function(event){
   
    // ambil isi href
    var tujuan = $(this).attr('href');
    // tangkap element
    var elementTujuan = $(tujuan);

    // pindahkan scroll
    $('html, body').animate({
        scrollTop: elementTujuan.offset().top -50
    }, 1250, 'swings');

    event.preventDefault();
    

});