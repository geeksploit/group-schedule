$(document).ready(function(){
    var offset = parseInt(window.location.search.split('=')[1]);
    var d_now = new Date();
    if (isNaN(offset)) {
        $('#forward a').attr('href', '?day=1');
        $('#back a').attr('href', '?day=-1');
    } else {
        d_now.setDate(d_now.getDate() + offset);
        $('#forward a').attr('href', '?day=' + (offset + 1));
        $('#back a').attr('href', '?day=' + (offset - 1));
    }
    var d_1sept = new Date('September 1, 2016');
    var d_week = 7 * 24 * 60 * 60 * 1000;
    var d_elapsed = d_now - d_1sept;
    var d_parity = (Math.floor(d_elapsed / d_week) + 1) % 2;

    text_date = d_now.toLocaleDateString('ru-ru', {weekday:'long', day:'numeric', month:'long'})
    text_parity = d_parity ? 'нечётная' : 'чётная';
    text = text_date + ", " + text_parity + " неделя";
    $(".week_summary").html(text);
    
    tbody = $('#schedule tbody');
    weekday = d_now.toLocaleDateString('en-en', {weekday:'short'}).toLowerCase();
    jQuery.each(schedule[weekday], function(i, data){
      parity = d_parity ? 'odd' : 'even';
      jQuery.each(data, function(evenodd) {
        if (evenodd.indexOf(parity) >= 0) {
          col = [];
          col.push('<td>' + i + '</td>');
          col.push('<td><p>' + time[i][0] + '</p><p>' + time[i][2] + '</p></td>');
          col.push('<td><p>' + time[i][1] + '</p><p>' + time[i][3] + '</p></td>');
          col.push('<td>' + this.lesson.name + '</td>');
          col.push('<td>' + this.lesson.loc + '</td>');
          if (this.teacher.url) {
            col.push('<td><a target="_blank" href="' + this.teacher.url + '">' + this.teacher.name + '</a></td>');
          } else {
            col.push('<td>' + this.teacher.name + '</td>');
          }
          row = '<tr>' + col.join('') + '</tr>';
          tbody.append(row);
        };
      });
    });
    if (tbody.is(':empty')) {
      tbody.html('<tr><td colspan="6">занятий нет</td></tr>');
    };
    $('#body').fadeIn(150);
  });