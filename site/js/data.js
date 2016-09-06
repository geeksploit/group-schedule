    time = {
      1:['08:40', '09:25', '09:30', '10:15'],
      2:['10:25', '11:10', '11:15', '12:00'],
      3:['12:30', '13:15', '13:20', '14:05'],
      4:['14:15', '15:00', '15:05', '15:50'],
      5:['16:10', '16:55', '17:00', '17:45']
    }
    
    lesson = {
      algo:{name:'теория алгоритмов', loc:'311'},
      arch:{name:'архитектура компьютерных систем', loc:'235-2'},
      comm:{name:'история связи*', loc:'309'},
      hist:{name:'история', loc:'304/309'},
      lang:{name:'иностранный язык', loc:'304'},
      math:{name:'элементы высшей математики', loc:'235-1'},
      phys:{name:'физическая культура', loc:'Мойка 61'},
      prog:{name:'основы программирования', loc:'311'},
      soci:{name:'социология*', loc:'209'},
      spec:{name:'введение в специальность*', loc:'209'},
      syst:{name:'операционные системы', loc:'316'},
      tec9:{name:'информационные технологии', loc:'309'},
      tec3:{name:'информационные технологии', loc:'303<br/>или 309?'}
    }
    
    teacher = {
      janch:{
        name: 'Янчук Татьяна Александровна',
        url: ''
      },
      krivo:{
        name: 'Кривоносова Наталья Викторовна',
        url: 'http://sutkt.ru/obuchenie/teachers/98-krivonocovanv'
      },
      kuzen:{
        name: 'Кузенкова',
        url: ''
      },
      lebed:{
        name: 'Лебедева Каринэ Виоленовна',
        url: 'http://www.sutkt.ru/obuchenie/teachers/102-lebedevakv'
      },
      lunev:{
        name: 'Лунёв Роман Сергеевич',
        url: 'http://www.sutkt.ru/obuchenie/teachers/191-lunevrs'
      },
      maske:{
        name: 'Маскевич Михаил Николаевич',
        url: 'http://www.sutkt.ru/obuchenie/teachers/106-maskevichmn'
      },
      revid:{
        name: 'Ревидович Николай Андреевич',
        url: 'http://www.sutkt.ru/obuchenie/teachers/114-revidovichna'
      },
      rojko:{
        name: 'Рожкова Алла Владимировна',
        url: 'http://www.sutkt.ru/obuchenie/teachers/199-rojkovaav'
      },
      sakar:{
        name: 'Ситтарова Надежда Ивановна',
        url: ''
      },
      sypul:{
        name: 'Сыпулина Татьяна Владимировна',
        url: 'http://sutkt.ru/obuchenie/teachers/334-sypulina-tatyana-vladimirovna'
      },
    };
    
    schedule = {
      mon:{
        2:{evenodd:{lesson:lesson.arch, teacher:teacher.maske}},
        3:{evenodd:{lesson:lesson.math, teacher:teacher.rojko}},
        4:{evenodd:{lesson:lesson.prog, teacher:teacher.lebed}},
        5:{evenodd:{lesson:lesson.soci, teacher:teacher.lunev}}
      },
      tue:{
        2:{evenodd:{lesson:lesson.math, teacher:teacher.rojko}},
        3:{evenodd:{lesson:lesson.prog, teacher:teacher.lebed}},
        4:{evenodd:{lesson:lesson.syst, teacher:teacher.janch}},
        5:{evenodd:{lesson:lesson.tec9, teacher:teacher.sakar}}
      },
      wed:{
        1:{even   :{lesson:lesson.comm, teacher:teacher.sypul}},
        2:{even   :{lesson:lesson.algo, teacher:teacher.lebed}},
        3:{even   :{lesson:lesson.algo, teacher:teacher.lebed}},
        4:{even   :{lesson:lesson.spec, teacher:teacher.krivo}}
      },
      thu:{
        2:{evenodd:{lesson:lesson.arch, teacher:teacher.maske}},
        3:{evenodd:{lesson:lesson.arch, teacher:teacher.maske}},
        4:{evenodd:{lesson:lesson.prog, teacher:teacher.lebed}},
        5:{evenodd:{lesson:lesson.tec3, teacher:teacher.sakar}}
      },
      fri:{
        2:{    odd:{lesson:lesson.math, teacher:teacher.rojko}},
        3:{    odd:{lesson:lesson.hist, teacher:teacher.lunev}},
        4:{    odd:{lesson:lesson.algo, teacher:teacher.lebed},
           even   :{lesson:lesson.phys, teacher:teacher.revid}},
        5:{    odd:{lesson:lesson.algo, teacher:teacher.lebed},
           even   :{lesson:lesson.phys, teacher:teacher.revid}}
      },
      sat:{
        2:{evenodd:{lesson:lesson.lang, teacher:teacher.kuzen}}
      }
    }